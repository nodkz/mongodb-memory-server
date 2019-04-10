import fs from 'fs';
import os from 'os';
import path from 'path';
import LockFile from 'lockfile';
import mkdirp from 'mkdirp';
import findCacheDir from 'find-cache-dir';
import { execSync } from 'child_process';
import dedent from 'dedent';
import { promisify } from 'util';
import MongoBinaryDownload from './MongoBinaryDownload';
import { DebugFn } from '../types';
import resolveConfig from './resolve-config';

// TODO: return back `latest` version when it will be fixed in MongoDB distro (for now use 4.0.3 😂)
// More details in https://github.com/nodkz/mongodb-memory-server/issues/131
// export const LATEST_VERSION = 'latest';
export const LATEST_VERSION: string = '4.0.3';

export interface MongoBinaryCache {
  [version: string]: string;
}

export interface MongoBinaryOpts {
  version?: string;
  downloadDir?: string;
  platform?: string;
  arch?: string;
  debug?: boolean | Function;
}

export default class MongoBinary {
  static cache: MongoBinaryCache = {};
  static debug: DebugFn;

  static async getSystemPath(systemBinary: string): Promise<string> {
    let binaryPath = '';

    try {
      await promisify(fs.access)(systemBinary);

      this.debug(`MongoBinary: found sytem binary path at ${systemBinary}`);
      binaryPath = systemBinary;
    } catch (err) {
      this.debug(`MongoBinary: can't find system binary at ${systemBinary}. ${err.message}`);
    }

    return binaryPath;
  }

  static async getCachePath(version: string): Promise<string> {
    return this.cache[version];
  }

  static async getDownloadPath(options: any): Promise<string> {
    const { downloadDir, platform, arch, version } = options;
    // create downloadDir if not exists
    await new Promise((resolve, reject) => {
      mkdirp(downloadDir, (err: any) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const lockfile = path.resolve(downloadDir, `${version}.lock`);
    // wait lock
    await new Promise((resolve, reject) => {
      LockFile.lock(
        lockfile,
        {
          wait: 120000,
          pollPeriod: 100,
          stale: 110000,
          retries: 3,
          retryWait: 100,
        },
        (err: any) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });

    // again check cache, maybe other instance resolve it
    if (!this.cache[version]) {
      const downloader = new MongoBinaryDownload({
        downloadDir,
        platform,
        arch,
        version,
      });
      downloader.debug = this.debug;
      this.cache[version] = await downloader.getMongodPath();
    }
    // remove lock
    LockFile.unlock(lockfile, (err: any) => {
      this.debug(
        err
          ? `MongoBinary: Error when removing download lock ${err}`
          : `MongoBinary: Download lock removed`
      );
    });
    return this.cache[version];
  }

  static async getPath(opts: MongoBinaryOpts = {}): Promise<string> {
    const legacyDLDir = path.resolve(os.homedir(), '.mongodb-binaries');
    const envDebug = resolveConfig('DEBUG');
    const defaultOptions = {
      downloadDir:
        resolveConfig('DOWNLOAD_DIR') ||
        (fs.existsSync(legacyDLDir)
          ? legacyDLDir
          : path.resolve(
              findCacheDir({
                name: 'mongodb-memory-server',
                // if we're in postinstall script, npm will set the cwd too deep
                cwd: new RegExp(`node_modules${path.sep}mongodb-memory-server$`).test(process.cwd())
                  ? path.resolve(process.cwd(), '..', '..')
                  : process.cwd(),
              }) || '',
              'mongodb-binaries'
            )),
      platform: resolveConfig('PLATFORM') || os.platform(),
      arch: resolveConfig('ARCH') || os.arch(),
      version: resolveConfig('VERSION') || LATEST_VERSION,
      systemBinary: resolveConfig('SYSTEM_BINARY'),
      debug:
        typeof envDebug === 'string'
          ? ['1', 'on', 'yes', 'true'].indexOf(envDebug.toLowerCase()) !== -1
          : false,
    };

    if (opts.debug) {
      if (typeof opts.debug === 'function' && opts.debug.apply && opts.debug.call) {
        this.debug = opts.debug as DebugFn;
      } else {
        this.debug = console.log.bind(null);
      }
    } else {
      this.debug = (msg: string) => {}; // eslint-disable-line
    }

    const options = { ...defaultOptions, ...opts };
    this.debug(`MongoBinary options: ${JSON.stringify(options)}`);

    const { version, systemBinary } = options;

    let binaryPath = '';

    if (systemBinary) {
      binaryPath = await this.getSystemPath(systemBinary);
      if (binaryPath) {
        if (~binaryPath.indexOf(' ')) {
          binaryPath = `"${binaryPath}"`;
        }

        const binaryVersion = execSync(`${binaryPath} --version`)
          .toString()
          .split('\n')[0]
          .split(' ')[2];

        if (version !== LATEST_VERSION && version !== binaryVersion) {
          // we will log the version number of the system binary and the version requested so the user can see the difference
          this.debug(dedent`
            MongoMemoryServer: Possible version conflict
              SystemBinary version: ${binaryVersion}
              Requested version:    ${version}

              Using SystemBinary!
          `);
        }
      }
    }

    if (!binaryPath) {
      binaryPath = await this.getCachePath(version);
    }

    if (!binaryPath) {
      binaryPath = await this.getDownloadPath(options);
    }

    this.debug(`MongoBinary: Mongod binary path: ${binaryPath}`);
    return binaryPath;
  }

  static hasValidBinPath(files: string[]): boolean {
    if (files.length === 1) {
      return true;
    } else if (files.length > 1) {
      return false;
    }
    return false;
  }
}
