// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");

const linuxTraceroute = async (res, targetURL) => {
  console.log("linuxTraceroute Called: ", targetURL);
  const tracer = new trace();
  try {
    const result = await new Promise((resolve, reject) => {
      let destPID = null;
      let ipAddress = null;
      const hops = [];

      tracer
        .on("pid", (pid) => {
          console.log(`pid: ${pid}`);
          destPID = pid;
        })
        .on("destination", (destination) => {
          console.log(`destination: ${destination}`);
          ipAddress = destination;
        })
        .on("hop", (hop) => {
          console.log(`hop: ${JSON.stringify(hop)}`);
          hops.push(hop);
        })
        .on("close", (code) => {
          console.log(`close: code ${code}`);
          resolve({ destPID, ipAddress, hops, traceType: "traceroute" });
        })
        .on("error", (error) => {
          reject(error);
        });
      tracer.trace(targetURL);
    });
    console.log("traceroute: ", result);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Traceroute Error:\n", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = linuxTraceroute;
