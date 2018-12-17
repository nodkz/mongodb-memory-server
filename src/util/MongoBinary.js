/* @flow */

import fs from 'fs';
import os from 'os';
import path from 'path';
import LockFile from 'lockfile';
import mkdirp from 'mkdirp';
import findCacheDir from 'find-cache-dir';
import { execSync } from 'child_process';
import dedent from 'dedent';
import MongoBinaryDownload from './MongoBinaryDownload';

export type MongoBinaryCache = {
  [version: string]: string,
};

export type MongoBinaryOpts = {
  version?: string,
  downloadDir?: string,
  platform?: string,
  arch?: string,
  debug?: boolean | Function,
};

export default class MongoBinary {
  static cache: MongoBinaryCache = {};

  static async getPath(opts?: MongoBinaryOpts = {}): Promise<string> {
    const legacyDLDir = path.resolve(os.homedir(), '.mongodb-binaries');
    const defaultOptions = {
      downloadDir:
        process.env?.MONGOMS_DOWNLOAD_DIR ||
        (fs.existsSync(legacyDLDir)
          ? legacyDLDir
          : path.resolve(
              findCacheDir({
                name: 'mongodb-memory-server',
                // if we're in postinstall script, npm will set the cwd too deep
                cwd: new RegExp(`node_modules${path.sep}mongodb-memory-server$`).test(process.cwd())
                  ? path.resolve(process.cwd(), '..', '..')
                  : process.cwd(),
              }),
              'mongodb-binaries'
            )),
      platform: process.env?.MONGOMS_PLATFORM || os.platform(),
      arch: process.env?.MONGOMS_ARCH || os.arch(),
      version: process.env?.MONGOMS_VERSION || 'latest',
      systemBinary: process.env?.MONGOMS_SYSTEM_BINARY,
      debug:
        typeof process.env.MONGOMS_DEBUG === 'string'
          ? ['1', 'on', 'yes', 'true'].indexOf(process.env.MONGOMS_DEBUG.toLowerCase()) !== -1
          : false,
    };

    let debug;
    if (opts.debug) {
      if (opts.debug.call && typeof opts.debug === 'function' && opts.debug.apply) {
        debug = opts.debug;
      } else {
        debug = console.log.bind(null);
      }
    } else {
      debug = (msg: string) => {}; // eslint-disable-line
    }

    const options = { ...defaultOptions, ...opts };
    debug(`MongoBinary options: ${JSON.stringify(options)}`);

    const { downloadDir, platform, arch, version, systemBinary } = options;

    if (systemBinary) {
      try {
        await fs.access(systemBinary);

        debug(`MongoBinary: found sytem binary path at ${systemBinary}`);
        this.cache[version] = systemBinary;
      } catch (err) {
        debug(`MongoBinary: can't find system binary at ${systemBinary}`);
      }
    }

    if (this.cache[version]) {
      debug(`MongoBinary: found cached binary path for ${version}`);
    } else {
      // create downloadDir if not exists
      await new Promise((resolve, reject) => {
        mkdirp(downloadDir, err => {
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
          err => {
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

        downloader.debug = debug;
        this.cache[version] = await downloader.getMongodPath();
      }

      // remove lock
      LockFile.unlock(lockfile, err => {
        debug(
          err
            ? `MongoBinary: Error when removing download lock ${err}`
            : `MongoBinary: Download lock removed`
        );
      });
    }

    if (version !== 'latest' && systemBinary) {
      console.log(dedent`
        MongoMemoryServer: Possible version conflict
          SystemBinary version: ${
            execSync('mongod --version')
              .toString()
              .split('\n')[0]
              .split(' ')[2]
          }
          Requested version:    ${version}

          Using SystemBinary!
      `);
    }

    debug(`MongoBinary: Mongod binary path: ${this.cache[version]}`);
    return this.cache[version];
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
