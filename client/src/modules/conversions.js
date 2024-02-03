/**
 * Convert number from bytes to:
 * - kilobytes: number
 * - megabytes: number
 * - gigabytes: number
 * - terabyte: number
 * @param {number} inBytes
 * @returns object containing three conversion types: number
 */
export const byteConversion = (bytes) => {
  const kilo = bytes / 1024;
  const mega = kilo / 1024;
  const giga = mega / 1024;
  const tera = giga / 1024;
  return {
    kilobytes: kilo,
    megabytes: mega,
    gigabytes: giga,
    terabyte: tera,
  };
};
