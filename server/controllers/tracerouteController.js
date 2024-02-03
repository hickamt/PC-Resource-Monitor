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
    
  } catch (error) {
    console.error(
      "Unable to traceroute for the given destination\n",
      destination
    );
  }
};
