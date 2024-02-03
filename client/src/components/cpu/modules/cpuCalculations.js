/**
 * Calculate the cpu usage of each core
 * @param {context provided object} systemInformation.cpuUsage
 * @returns cpu usage of all cores as a percentage of total cpu available resources
 */
export const totalCoreUsage = (cpuUsage) => {
  let total = 0;
  let inUse = 0;
  let usagePercent = 0;

  cpuUsage.map((cpu) => {
    inUse = cpu.times.irq + cpu.times.nice + cpu.times.sys + cpu.times.user;
    total = cpu.times.irq + cpu.times.nice + cpu.times.sys + cpu.times.user + cpu.times.idle;
    usagePercent += inUse / total;
  });

  return (usagePercent) * 100;
};
