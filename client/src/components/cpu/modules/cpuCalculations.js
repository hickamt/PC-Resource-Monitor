/**
 * Calculate the cpu usage of each core
 * @param {context provided object} systemInformation.cpuUsage
 * @returns cpu usage of all cores as a percentage of total cpu available resources
 */
export const totalCoreUsage = (cpuUsage) => {
  let totalUsage = 0;

  cpuUsage.map((cpu) => {
    totalUsage += cpu.usage;
  });

  return totalUsage;
};
