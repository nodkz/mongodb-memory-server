import { readFile, readdir } from 'fs';
import { platform } from 'os';

import { exec } from 'child_process';
import { promisify, isNullOrUndefined } from 'util';
import { join } from 'path';
import resolveConfig from '../resolve-config';

/** Collection of Regexes for "lsb_release -a" parsing */
const LSBRegex = {
  name: /^distributor id:\s*(.*)$/im,
  codename: /^codename:\s*(.*)$/im,
  release: /^release:\s*(.*)$/im,
};

/** Collection of Regexes for "/etc/os-release" parsing */
const OSRegex = {
  name: /^id\s*=\s*"?(.*)"?$/im,
  /** uses VERSION_CODENAME */
  codename: /^version_codename\s*=\s*(.*)$/im,
  release: /^version_id\s*=\s*"?(.*)"?$/im,
};

export interface OtherOS {
  os: 'aix' | 'android' | 'darwin' | 'freebsd' | 'openbsd' | 'sunos' | 'win32' | 'cygwin' | string;
}

export interface LinuxOS extends OtherOS {
  os: 'linux';
  dist: string;
  release: string;
  codename?: string;
}

export type AnyOS = OtherOS | LinuxOS;

/**
 * Check if the OS is a LinuxOS Typeguard
 * @param os The OS object to check for
 */
export function isLinuxOS(os: AnyOS): os is LinuxOS {
  return os.os === 'linux';
}

/** Get an OS object */
export default async function getOS(): Promise<AnyOS> {
  /** Node builtin function for first determinations */
  const osName = platform();

  // Linux is a special case.
  if (osName === 'linux') return await getLinuxInfomation();

  return { os: osName };
}

/** Function to outsource Linux Infomation Parsing */
async function getLinuxInfomation(): Promise<LinuxOS> {
  // Structure of this function:
  // 1. try lsb_release
  // (if not 1) 2. try /etc/os-release
  // (if not 2) 3. try read dir /etc and filter any file "-release" and try to parse the first file found

  // Force "lsb_release" to be used
  if (!isNullOrUndefined(resolveConfig('FORCE_LSB_RELEASE'))) {
    return (await tryLSBRelease()) as LinuxOS;
  }
  // Force /etc/os-release to be used
  if (!isNullOrUndefined(resolveConfig('FORCE_OS_RELEASE'))) {
    return (await tryOSRelease()) as LinuxOS;
  }
  // Force the first /etc/*-release file to be used
  if (!isNullOrUndefined(resolveConfig('FORCE_RELEASE'))) {
    return (await tryFirstReleaseFile()) as LinuxOS;
  }

  // Try everything
  // Note: these values are stored, because this code should not use "inline value assignment"

  const lsbOut = await tryLSBRelease();
  if (!isNullOrUndefined(lsbOut)) {
    return lsbOut;
  }

  const osOut = await tryOSRelease();
  if (!isNullOrUndefined(osOut)) {
    return osOut;
  }

  const releaseOut = await tryFirstReleaseFile();
  if (!isNullOrUndefined(releaseOut)) {
    return releaseOut;
  }

  // if none has worked, return unkown
  return {
    os: 'linux',
    dist: 'unkown',
    release: '',
  };
}

/**
 * Try the "lsb_release" command, and if it works, parse it
 */
async function tryLSBRelease(): Promise<LinuxOS | undefined> {
  if (!isNullOrUndefined(resolveConfig('SKIP_LSB_RELEASE'))) {
    return;
  }

  try {
    const lsb = await promisify(exec)('lsb_release -a'); // exec this for safety, because "/etc/lsb-release" could be changed to another file

    return parseLSB(lsb.stdout);
  } catch (err) {
    // check if "FORCE_LSB_RELEASE" is unset, when yes - just return to start the next try
    if (isNullOrUndefined(resolveConfig('FORCE_LSB_RELEASE'))) {
      return;
    }

    // otherwise throw the error
    throw err;
  }
}

/**
 * Try to read the /etc/os-release file, and if it works, parse it
 */
async function tryOSRelease(): Promise<LinuxOS | undefined> {
  if (!isNullOrUndefined(resolveConfig('SKIP_OS_RELEASE'))) {
    return;
  }

  try {
    const os = await promisify(readFile)('/etc/os-release');

    return parseOS(os.toString());
  } catch (err) {
    // check if the error is an "ENOENT" OR "SKIP_OS_RELEASE" is set
    // AND "FORCE_OS_RELEASE" is unset
    // and just return
    if (
      (err?.code === 'ENOENT' || !isNullOrUndefined(resolveConfig('SKIP_OS_RELEASE'))) &&
      isNullOrUndefined(resolveConfig('FORCE_OS_RELEASE'))
    ) {
      return;
    }

    // otherwise throw the error
    throw err;
  }
}

/**
 * Try to read any /etc/*-release file, take the first, and if it works, parse it
 */
async function tryFirstReleaseFile(): Promise<LinuxOS | undefined> {
  if (!isNullOrUndefined(resolveConfig('SKIP_RELEASE'))) {
    return;
  }

  try {
    const file = (await promisify(readdir)('/etc')).filter(
      (v) =>
        // match if file ends with "-release"
        v.match(/.*-release$/im) &&
        // check if the file does NOT contain "lsb"
        !v.match(/lsb/im)
    )[0];
    console.log('file?', file);
    if (isNullOrUndefined(file) || file.length <= 0) {
      throw new Error('No release file found!');
    }
    const os = await promisify(readFile)(join('/etc/', file));
    // const os = await promisify(exec)('cat /etc/' + file);

    // return parseOS(os.stdout);
    return parseOS(os.toString());
  } catch (err) {
    // check if the error is an "ENOENT" OR "SKIP_RELEASE" is set
    // AND "FORCE_RELEASE" is unset
    // and just return
    if (
      (err?.code === 'ENOENT' || !isNullOrUndefined(resolveConfig('SKIP_RELEASE'))) &&
      isNullOrUndefined(resolveConfig('FORCE_RELEASE'))
    ) {
      return;
    }

    // otherwise throw the error
    throw err;
  }
}

/** Function to outsource "lsb_release -a" parsing */
function parseLSB(input: string): LinuxOS {
  return {
    os: 'linux',
    dist: input.match(LSBRegex.name)?.[1] ?? 'unkown',
    codename: input.match(LSBRegex.codename)?.[1],
    release: input.match(LSBRegex.release)?.[1] ?? '',
  };
}

/** Function to outsource "/etc/os-release" parsing */
function parseOS(input: string): LinuxOS {
  return {
    os: 'linux',
    dist: input.match(OSRegex.name)?.[1] ?? 'unkown',
    codename: input.match(OSRegex.codename)?.[1],
    release: input.match(OSRegex.release)?.[1] ?? '',
  };
}
