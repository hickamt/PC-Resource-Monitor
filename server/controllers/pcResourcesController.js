/**
 * This code will return an object containing CPU usage, total memory, free memory, network interfaces, and disk usage. Note that the disk usage is obtained from the root directory (C: on Windows, / on other platforms).
 * Please note that the os.cpus() function returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
 * The os.totalmem() and os.freemem() functions return the total and free memory of the system in bytes, respectively.
 * The os.networkInterfaces() function returns the network addresses of the network interfaces.
 * The diskusage.check(path) function returns a promise that resolves with an object containing the total and free disk space in bytes.
 */

const os = require("os");
const diskusage = require("diskusage");
const systemInformation = require("systeminformation");

/**
 * GET request for pc monitoring resources such as:
 * CPU, GPU, Disk Space, Free Disk Space, etc . . .
 * @returns this pc's resources back to the websocket call from the server.js
 */
const getResources = async () => {
  console.log("Get Resources Controller was Called")
  let graphicsData = null;
  try {
    const cpuUsage = os.cpus();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const networkInterfaces = os.networkInterfaces();

    const path = os.platform() === "win32" ? "c:" : "/";
    const diskUsage = await diskusage.check(path);

    // GPU Information (may not work on all pc's)
    try {
      graphicsData = await systemInformation.graphics();
    } catch (error) {
      console.error(
        `Your pc does not meet the requirements for GPU system information. 
         Error: ${error}`
      );
    }

    if (graphicsData !== null) {
      return {
        cpuUsage,
        totalMemory,
        freeMemory,
        networkInterfaces,
        diskUsage,
        graphicsData,
      };
    } else {
      return {
        cpuUsage,
        totalMemory,
        freeMemory,
        networkInterfaces,
        diskUsage,
      };
    }
  } catch (error) {
    console.error("Unable to get system resources", error);
    return null;
  }
};

module.exports = {
  getResources,
};
