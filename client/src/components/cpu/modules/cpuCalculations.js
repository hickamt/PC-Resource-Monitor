/**
 * Calculate the cpu usage of each core 
 * @param {context provided object} systemInformation.cpuUsage
 * @returns cpu usage of all cores as a percentage of total cpu available resources
 */
export const totalCoreUsage = ({ cpuUsage }) => {
  let idle = 0;
  let usage = 0;

  cpuUsage.map((cpu) => {
    idle += cpu.times.idle;
    usage += cpu.times.irq + cpu.times.nice + cpu.times.sys + cpu.times.user;
  });

  return (usage / (idle + usage)) * 100;
};
