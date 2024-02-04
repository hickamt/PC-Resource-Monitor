// Source: https://www.npmjs.com/package/nodejs-traceroute
const os = require("os");
const wslTraceroute = require("./wsl_linux/wslPlatform");
const win32Traceroute = require("./win32/win32Platform");
const linuxTraceroute = require("./linux/linuxPlatform");

/**
 * Uses a string input (i.e. "google.com") to initiate
 * a traceroute
 * @param {object: {body: {data: string}}} req
 * @returns the information gathered from traceroute
 */
const traceroute = async (req, res) => {
  const { destination, traceType } = req.body.data;

  console.log("Platform using 'os': ", os.platform());

  try {
    switch (traceType) {
      case "traceroute":
        return linuxTraceroute(res, destination, platform);
      case "tracertWSL":
        return wslTraceroute(res, destination);
      case "tracertWin32":
        return win32Traceroute(res, destination);
      default:
        return res
          .status(400)
          .json({ message: `Unknown platform ${platform}` });
    }
  } catch (error) {
    console.error(
      "Unable to traceroute for the given destination\n",
      destination
    );
    res.status(400).json({ message: "Unable to handle traceroute" });
  }
};

module.exports = {
  traceroute,
};
