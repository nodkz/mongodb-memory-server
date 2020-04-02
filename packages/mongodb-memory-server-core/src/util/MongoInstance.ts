import { ChildProcess } from 'child_process';
import { default as spawnChild } from 'cross-spawn';
import path from 'path';
import MongoBinary from './MongoBinary';
import { MongoBinaryOpts } from './MongoBinary';
import {
  StorageEngineT,
  SpawnOptions,
  DebugFn,
  ErrorVoidCallback,
  EmptyVoidCallback,
} from '../types';
import debug from 'debug';

const log = debug('MongoMS:MongoInstance');

export interface MongodOps {
  // instance options
  instance: {
    port?: number;
    ip?: string; // for binding to all IP addresses set it to `::,0.0.0.0`, by default '127.0.0.1'
    storageEngine?: StorageEngineT;
    dbPath?: string;
    replSet?: string;
    args?: string[];
    auth?: boolean;
  };

  // mongo binary options
  binary?: MongoBinaryOpts;

  // child process spawn options
  spawn?: SpawnOptions;
}

/**
 * MongoDB Instance Handler Class
 */
export default class MongoInstance {
  static childProcessList: ChildProcess[] = [];
  opts: MongodOps;
  debug: DebugFn;

  childProcess: ChildProcess | null;
  killerProcess: ChildProcess | null;
  waitForPrimaryResolveFns: Function[];
  isInstancePrimary: boolean = false;
  isInstanceReady: boolean = false;
  instanceReady: EmptyVoidCallback = () => {};
  instanceFailed: ErrorVoidCallback = () => {};

  constructor(opts: MongodOps) {
    this.opts = opts;
    this.childProcess = null;
    this.killerProcess = null;
    this.waitForPrimaryResolveFns = [];

    if (!this.opts.instance) this.opts.instance = {};
    if (!this.opts.binary) this.opts.binary = {};

    if (debug.enabled('MongoMS:MongoInstance')) {
      // add instance's port to debug output
      const port = this.opts.instance?.port;
      this.debug = (msg: string): void => {
        log(`Mongo[${port}]: ${msg}`);
      };
    } else {
      this.debug = () => {};
    }
  }

  /**
   * Create an new instance an call method "run"
   * @param opts Options passed to the new instance
   */
  static async run(opts: MongodOps): Promise<MongoInstance> {
    const instance = new this(opts);
    return instance.run();
  }

  /**
   * Create an array of arguments for the mongod instance
   */
  prepareCommandArgs(): string[] {
    const { ip, port, storageEngine, dbPath, replSet, auth, args } = this.opts.instance;

    const result: string[] = [];
    result.push('--bind_ip', ip || '127.0.0.1');
    if (port) result.push('--port', port.toString());
    if (storageEngine) result.push('--storageEngine', storageEngine);
    if (dbPath) result.push('--dbpath', dbPath);
    if (!auth) result.push('--noauth');
    else if (auth) result.push('--auth');
    if (replSet) result.push('--replSet', replSet);

    return result.concat(args ?? []);
  }

  /**
   * Create the mongod process
   */
  async run(): Promise<this> {
    const launch = new Promise((resolve, reject) => {
      this.instanceReady = () => {
        this.isInstanceReady = true;
        this.debug('MongodbInstance: is ready!');
        resolve({ ...this.childProcess });
      };
      this.instanceFailed = (err: any) => {
        this.debug(`MongodbInstance: is failed: ${err.toString()}`);
        if (this.killerProcess) this.killerProcess.kill();
        reject(err);
      };
    });

    const mongoBin = await MongoBinary.getPath(this.opts.binary);
    this.childProcess = this._launchMongod(mongoBin);
    this.killerProcess = this._launchKiller(process.pid, this.childProcess.pid);

    await launch;
    return this;
  }

  async kill(): Promise<MongoInstance> {
    this.debug('Called MongoInstance.kill():');
    if (this.childProcess && !this.childProcess.killed) {
      await new Promise((resolve) => {
        if (this.childProcess) {
          this.childProcess.once(`exit`, () => {
            this.debug(' - childProcess: got exit signal. Ok!');
            resolve();
          });
          this.childProcess.kill();
          this.debug(' - childProcess: send kill cmd...');
        }
      });
    } else {
      this.debug(' - childProcess: nothing to kill, skipping.');
    }
    if (this.killerProcess && !this.killerProcess.killed) {
      await new Promise((resolve) => {
        if (this.killerProcess) {
          this.killerProcess.once(`exit`, () => {
            this.debug(' - killerProcess: got exit signal. Ok!');
            resolve();
          });
          this.killerProcess.kill();
          this.debug(' - killerProcess: send kill cmd...');
        }
      });
    } else {
      this.debug(' - killerProcess: nothing to kill, skipping.');
    }
    return this;
  }

  /**
   * Get the PID of the mongod instance
   */
  getPid(): number | undefined {
    return this.childProcess?.pid;
  }

  /**
   * Wait until the Primary mongod is running
   */
  async waitPrimaryReady(): Promise<boolean> {
    if (this.isInstancePrimary) {
      return true;
    }
    return new Promise((resolve) => {
      this.waitForPrimaryResolveFns.push(resolve);
    });
  }

  /**
   * Actually launch mongod
   * @param mongoBin The binary to run
   */
  _launchMongod(mongoBin: string): ChildProcess {
    const spawnOpts = this.opts.spawn ?? {};
    if (!spawnOpts.stdio) spawnOpts.stdio = 'pipe';

    const childProcess = spawnChild(mongoBin, this.prepareCommandArgs(), spawnOpts);
    if (childProcess.stderr) {
      childProcess.stderr.on('data', this.stderrHandler.bind(this));
    }
    if (childProcess.stdout) {
      childProcess.stdout.on('data', this.stdoutHandler.bind(this));
    }
    childProcess.on('close', this.closeHandler.bind(this));
    childProcess.on('error', this.errorHandler.bind(this));

    return childProcess;
  }

  /**
   * Spawn an child to kill the parent and the mongod instance if both are Dead
   * @param parentPid Parent to kill
   * @param childPid Mongod process to kill
   */
  _launchKiller(parentPid: number, childPid: number): ChildProcess {
    this.debug(`Called MongoInstance._launchKiller(parent: ${parentPid}, child: ${childPid}):`);
    // spawn process which kills itself and mongo process if current process is dead
    const killer = spawnChild(
      process.argv[0],
      [
        path.resolve(__dirname, '../../scripts/mongo_killer.js'),
        parentPid.toString(),
        childPid.toString(),
      ],
      { stdio: 'pipe' }
    );

    ['exit', 'message', 'disconnect', 'error'].forEach((type) => {
      killer.on(type, (...args) => {
        this.debug(`[MongoKiller]: ${type} - ${JSON.stringify(args)}`);
      });
    });

    return killer;
  }

  errorHandler(err: string): void {
    this.instanceFailed(err);
  }

  /**
   * Write the CLOSE event to the debug function
   * @param code The Exit code
   */
  closeHandler(code: number): void {
    this.debug(`CLOSE: ${code}`);
  }

  /**
   * Write STDERR to debug function
   * @param message The STDERR line to write
   */
  stderrHandler(message: string | Buffer): void {
    this.debug(`STDERR: ${message.toString()}`);
  }

  /**
   * Write STDOUT to debug function AND instanceReady/instanceFailed if inputs match
   * @param message The STDOUT line to write/parse
   */
  stdoutHandler(message: string | Buffer): void {
    const line: string = message.toString();
    this.debug(`STDOUT: ${line}`);

    if (/waiting for connections/i.test(line)) {
      this.instanceReady();
    } else if (/addr already in use/i.test(line)) {
      this.instanceFailed(`Port ${this.opts.instance.port} already in use`);
    } else if (/mongod instance already running/i.test(line)) {
      this.instanceFailed('Mongod already running');
    } else if (/permission denied/i.test(line)) {
      this.instanceFailed('Mongod permission denied');
    } else if (/Data directory .*? not found/i.test(line)) {
      this.instanceFailed('Data directory not found');
    } else if (/CURL_OPENSSL_3.*not found/i.test(line)) {
      this.instanceFailed(
        'libcurl3 is not available on your system. Mongod requires it and cannot be started without it.\n' +
          'You should manually install libcurl3 or try to use an newer version of MongoDB\n'
      );
    } else if (/shutting down with code/i.test(line)) {
      // if mongod started succesfully then no error on shutdown!
      if (!this.isInstanceReady) {
        this.instanceFailed('Mongod shutting down');
      }
    } else if (/\*\*\*aborting after/i.test(line)) {
      this.instanceFailed('Mongod internal error');
    } else if (/transition to primary complete; database writes are now permitted/i.test(line)) {
      this.isInstancePrimary = true;
      this.debug('Calling all waitForPrimary resolve functions');
      this.waitForPrimaryResolveFns.forEach((resolveFn) => resolveFn(true));
    }
  }
}
