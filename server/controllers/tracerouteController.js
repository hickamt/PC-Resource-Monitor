// Source: https://www.npmjs.com/package/nodejs-traceroute
const trace = require("nodejs-traceroute");

/**
 * Uses a string input (i.e. "google.com") to initiate
 * a traceroute
 * @param {object: {body: {data: string}}} req
 * @returns the information gathered from traceroute
 */
const traceroute = async (req, res) => {
  const destination = req.body.data;

  try {
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

    console.log(result); // logs the result of the traceroute
    return res.status(200).json(result);
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
