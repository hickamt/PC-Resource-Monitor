// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");

const linuxTraceroute = async (res, destination) => {
  const tracer = new trace();
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
        resolve({ destPID, ipAddress, hops });
      })
      .on("error", (error) => {
        reject(error);
      });

    tracer.trace(destination);
  });
  return res.status(200).json(result);
};

module.exports = linuxTraceroute;
