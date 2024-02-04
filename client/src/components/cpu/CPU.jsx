// Sub Components
import CPUCores from "./subComponents/CPUCores";

// Local Component Styles
import "./styles/styles.css";

/**
 * Creates to display all cpu cores and their resource usage information
 * - core #
 * - system, usage by the kernel process
 * - user, usage by user less system kernel processes
 * - nice, processes that are lower priority
 * - idle, idle time for each core
 * - irq, system interrupt processes
 * @param {number} key
 * @param {object: {sys: number, user: number, nice: number, idle: number, irq: number}} systemInformation passed down from dashboard
 * @returns the cpu cores information
 */
function CPU({ cpu }) {
  const cpuUsageComponents = cpu.cpuUsage.map((cpu, index) => {
    return (
      <CPUCores
        core={cpu.core}
        usage={cpu.usage}
        system={cpu.system}
        user={cpu.user}
        nice={cpu.nice}
        idle={cpu.idle}
        irq={cpu.irq}
        key={index}
      />
    );
  });

  return cpuUsageComponents;
}

export default CPU;
