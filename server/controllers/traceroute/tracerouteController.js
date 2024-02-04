// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");
const os = require("os");
const { exec } = require('child_process');

/**
 * Uses a string input (i.e. "google.com") to initiate
 * a traceroute
 * @param {object: {body: {data: string}}} req
 * @returns the information gathered from traceroute
 */
const traceroute = async (req, res) => {
  const destination = req.body.data;

  console.log("Platform using 'os': ", os.platform());

  try {
    if (os.platform() === "linux") {
      const tracer = new trace();
      const result = await new Promise((resolve, reject) => {
        const hops = [];

        tracer
          .on("pid", (pid) => {
            console.log(`pid: ${pid}`);
          })
          .on("destination", (destination) => {
            console.log(`destination: ${destination}`);
          })
          .on("hop", (hop) => {
            console.log(`hop: ${JSON.stringify(hop)}`);
            hops.push(hop);
          })
          .on("close", (code) => {
            console.log(`close: code ${code}`);
            resolve(hops);
          })
          .on("error", (error) => {
            reject(error);
          });

        tracer.trace(destination);
      });
      return res.status(200).json(result);
    } else if (os.platform() === "win32" || os.platform() === "win64") {
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
