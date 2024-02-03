/* eslint-disable react/prop-types */
/**
 * @TODO
 * Show the CPU Information as a header
 * Show the total process time for all cores next to header
 * Show each cores usage next to CORE #: totalCoreUsage = (total - idle) / total * 100
 */

/**
 * Expects systemInformation.properties as params
 * Creates a single cpu core resource element mapped from CPU component
 * @param {number} core
 * @param {number} system
 * @param {number} user
 * @param {number} nice
 * @param {number} idle
 * @param {number} irq
 * @returns a single CPU resource information component with all
 * values in percentage of use.
 */
function CPUCore({ core, system, user, nice, idle, irq }) {
  const total = system + user + nice + idle + irq;

  if (!total || total <= 0) {
    return (
      <div className="cpu-core-item">
        <h4>CORE #: (undefined)</h4>
        <p>Sys: 0%</p>
        <p>User: 0%</p>
        <p>Nice: 0%</p>
        <p>Idle: 0%</p>
        <p>IRQ: 0%</p>
      </div>
    );
  }

  const coreTotal = ((total - idle) / total) * 100;
  const systemPct = (system / total) * 100;
  const userPct = (user / total) * 100;
  const nicePct = (nice / total) * 100;
  const idlePct = (idle / total) * 100;
  const irqPct = (irq / total) * 100;

  return (
    <div className="cpu-core-item">
      <h4>
        CORE {core}: ({coreTotal.toFixed(2)}%)
      </h4>
      <p>Sys: {systemPct.toFixed(2)}%</p>
      <p>User: {userPct.toFixed(2)}%</p>
      <p>Nice: {nicePct.toFixed(2)}%</p>
      <p>Idle: {idlePct.toFixed(2)}%</p>
      <p>IRQ: {irqPct.toFixed(2)}%</p>
    </div>
  );
}

export default CPUCore;
