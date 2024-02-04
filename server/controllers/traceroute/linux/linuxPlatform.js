// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");

const linuxTraceroute = async (res, destination, platform) => {
  const tracer = new trace();
  const result = await new Promise((resolve, reject) => {
    const pids = [];
    const destinations = [];
    const hops = [];

    tracer
      .on("pid", (pid) => {
        console.log(`pid: ${pid}`);
        pids.push(pid)
      })
      .on("destination", (destination) => {
        console.log(`destination: ${destination}`);
        destinations.push(destination)
      })
      .on("hop", (hop) => {
        console.log(`hop: ${JSON.stringify(hop)}`);
        hops.push(hop);
      })
      .on("close", (code) => {
        console.log(`close: code ${code}`);
        resolve(pids, destinations, hops, platform);
      })
      .on("error", (error) => {
        reject(error);
      });

    tracer.trace(destination);
  });
  console.log("Server TraceRoute: ", result)
  return res.status(200).json(result);
};

module.exports = linuxTraceroute;
