import * as tmp from 'tmp';
import * as dbUtil from '../db_util';
import { LATEST_VERSION } from '../MongoBinary';
import MongodbInstance from '../MongoInstance';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
tmp.setGracefulCleanup();

let tmpDir: tmp.DirResult;
beforeEach(() => {
  tmpDir = tmp.dirSync({ prefix: 'mongo-mem-', unsafeCleanup: true });
});

afterEach(() => {
  tmpDir.removeCallback();
});

describe('MongodbInstance', () => {
  it('should prepare command args', () => {
    const inst = new MongodbInstance({
      instance: {
        port: 27333,
        dbPath: tmpDir.name,
        storageEngine: 'ephemeralForTest',
      },
    });
    expect(inst.prepareCommandArgs()).toEqual([
      '--port',
      '27333',
      '--dbpath',
      tmpDir.name,
      '--storageEngine',
      'ephemeralForTest',
      '--noauth',
    ]);
  });

  it('should allow specifying replSet', () => {
    const inst = new MongodbInstance({
      instance: {
        port: 27555,
        dbPath: tmpDir.name,
        replSet: 'testset',
      },
    });
    expect(inst.prepareCommandArgs()).toEqual([
      '--port',
      '27555',
      '--dbpath',
      tmpDir.name,
      '--noauth',
      '--replSet',
      'testset',
    ]);
  });

  it('should be able to enable auth', () => {
    const inst = new MongodbInstance({
      instance: {
        port: 27555,
        dbPath: tmpDir.name,
        auth: true,
      },
    });
    expect(inst.prepareCommandArgs()).toEqual([
      '--port',
      '27555',
      '--dbpath',
      tmpDir.name,
      '--auth',
    ]);
  });

  it('should be able to pass arbitrary args', () => {
    const args = ['--notablescan', '--nounixsocket'];
    const inst = new MongodbInstance({
      instance: {
        port: 27555,
        dbPath: tmpDir.name,
        args,
      },
    });
    expect(inst.prepareCommandArgs()).toEqual(
      ['--port', '27555', '--dbpath', tmpDir.name, '--noauth'].concat(args)
    );
  });

  it('should throw an error if no port is provided', () => {
    const inst = new MongodbInstance({
      instance: {
        dbPath: tmpDir.name,
      },
    });
    try {
      inst.prepareCommandArgs();
      fail('Expected prepareCommandArgs to throw');
    } catch (err) {
      expect(err.message).toEqual('"instanceOpts.port" is required to be set!');
    }
  });

  it('should throw an error if no dbpath is provided', () => {
    const inst = new MongodbInstance({
      instance: {
        port: 27555,
      },
    });
    try {
      inst.prepareCommandArgs();
      fail('Expected prepareCommandArgs to throw');
    } catch (err) {
      expect(err.message).toEqual('"instanceOpts.dbPath" is required to be set!');
    }
  });

  it('should start instance on port 27333', async () => {
    const mongod = await MongodbInstance.run({
      instance: { port: 27333, dbPath: tmpDir.name },
      binary: { version: LATEST_VERSION },
    });

    expect(mongod.getPid()).toBeGreaterThan(0);

    await mongod.kill();
  });

  it('should throw error if port is busy', async () => {
    const mongod = await MongodbInstance.run({
      instance: { port: 27444, dbPath: tmpDir.name },
      binary: { version: LATEST_VERSION },
    });

    await expect(
      MongodbInstance.run({
        instance: { port: 27444, dbPath: tmpDir.name },
        binary: { version: LATEST_VERSION },
      })
    ).rejects.toEqual('Port 27444 already in use');

    await mongod.kill();
  });

  it('should wait until childprocess and killerprocess are killed', async () => {
    const mongod: MongodbInstance = await MongodbInstance.run({
      instance: { port: 27445, dbPath: tmpDir.name },
      binary: { version: LATEST_VERSION },
    });
    const pid: any = mongod.getPid();
    const killerPid: any = mongod.killerProcess?.pid;
    expect(pid).toBeGreaterThan(0);
    expect(killerPid).toBeGreaterThan(0);

    function isPidRunning(p: number): boolean {
      try {
        process.kill(p, 0);
        return true;
      } catch (e) {
        return e.code === 'EPERM';
      }
    }

    expect(isPidRunning(pid)).toBeTruthy();
    expect(isPidRunning(killerPid)).toBeTruthy();
    await mongod.kill();
    expect(isPidRunning(pid)).toBeFalsy();
    expect(isPidRunning(killerPid)).toBeFalsy();
  });

  it('should work with mongodb 4.0.3', async () => {
    const mongod = await MongodbInstance.run({
      instance: { port: 27445, dbPath: tmpDir.name },
      binary: { version: '4.0.3' },
    });
    const pid: any = mongod.getPid();
    expect(pid).toBeGreaterThan(0);
    await mongod.kill();
  });

  it('"kill" should not call "killProcess" if no childProcesses are not running', async () => {
    const mongod = new MongodbInstance({});
    jest.spyOn(dbUtil, 'killProcess');
    await mongod.kill();

    expect(dbUtil.killProcess).not.toBeCalled();
  });

  it('"_launchMongod" should throw an error if "childProcess.pid" is undefined', () => {
    const mongod = new MongodbInstance({ instance: { port: 0, dbPath: '' } }); // dummy values - they shouldnt matter

    try {
      mongod._launchMongod('thisShouldNotExist');
      fail('Expected "_launchMongod" to throw');
    } catch (err) {
      expect(err.message).toEqual('Spawned Mongo Instance PID is undefined');
    }
  });
});
