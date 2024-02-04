// Source: https://www.npmjs.com/package/nodejs-traceroute
const os = require("os");
const wslTraceroute = require("./wsl_linux/wslPlatform");
const win32Traceroute = require("./win32/win32Platform");
const linuxTraceroute = require("./linux/linuxPlatform");

/**
 * Perform 'traceroute' for linux, or 'tracert' for WSL Linux users
 * and 'tracert' for win32 users. Commands for WSL and Win32 users are
 * different and require a specific traceType.
 * @param {object: {body.data: {targetURL: string, traceType: string}}} req
 * @returns the information gathered from traceroute or tracert
 */
const traceroute = async (req, res) => {
  const { targetURL, traceType } = req.body.data;

  console.log("Platform using 'os': ", os.platform());

  try {
    switch (traceType) {
      case "traceroute":
        return linuxTraceroute(res, targetURL, platform);
      case "tracertWSL":
        return wslTraceroute(res, targetURL);
      case "tracertWin32":
        return win32Traceroute(res, targetURL);
      default:
        return res
          .status(400)
          .json({ message: `Unknown platform ${platform}` });
    }
  } catch (error) {
    console.error(`Unable to handle ${traceType} for:\n`, targetURL);
    res
      .status(400)
      .json({ message: `Unable to handle ${traceType} for ${targetURL}` });
  }
};

module.exports = {
  traceroute,
};
