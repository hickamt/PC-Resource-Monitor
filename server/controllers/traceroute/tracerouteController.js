// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");
const os = require("os");
const { exec } = require("child_process");
const linuxTraceroute = require("./linux/linuxPlatform");

/**
 * Uses a string input (i.e. "google.com") to initiate
 * a traceroute
 * @param {object: {body: {data: string}}} req
 * @returns the information gathered from traceroute
 */
const traceroute = async (req, res) => {
  const platform = os.platform();
  const destination = req.body.data;

  console.log("Platform using 'os': ", os.platform());

  try {
    switch (platform) {
      case "linux":
        return linuxTraceroute(res, destination);
      case "win32":
        return win32Traceroute(res, destination);
      default:
        return res
          .status(400)
          .json({ message: `Unknown platform ${platform}` });
    }

    if (os.platform() === "win32" || os.platform() === "win64") {
      exec(`tracert ${destination}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).json({ message: "Error executing tracert" });
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        return res
          .status(200)
          .json({ message: "Tracert executed successfully", data: stdout });
      });
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
