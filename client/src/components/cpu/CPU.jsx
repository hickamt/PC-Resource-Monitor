// Sub Components
import CPUCores from "./subComponents/CPUCores";

// Local Component Styles
import "./styles/styles.css"

/**
 * Creates to display all cpu cores and their resource usage information 
 * - core #
 * - system, usage by the kernel process
 * - user, usage by user less system kernel processes
 * - nice, processes that are lower priority
 * - idle, idle time for each core
 * - irq, system interrupt processes
 * @param {number} key
 * @param {object: {times: {sys: number, user: number, nice: number, idle: number, irq: number}}} systemInformation passed down from dashboard
 * @returns the cpu cores information
 */
function CPU({ systemInformation }) {
  console.log("PC Resources:\n", systemInformation);
  const cpuUsageComponents = systemInformation.cpuUsage.map((cpu, index) => {
    return (
      <CPUCores
        core={index + 1}
        system={cpu.times.sys}
        user={cpu.times.user}
        nice={cpu.times.nice}
        idle={cpu.times.idle}
        irq={cpu.times.irq}
        key={index}
      />
    );
  });

  return cpuUsageComponents;
}

export default CPU;
