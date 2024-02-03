/**
 * @TODO
 * Show the CPU Information as a header
 * Show the total process time for all cores next to header
 * Show each cores usage next to CORE #: totalCoreUsage = (total - idle) / total * 100
 */

/**
 * Expects systemInformation.properties as params
 * Creates a single cpu core instance mapped from CPU component 
 * @param {context objects} param0 
 * @returns a single CPU resource information component
 */

// eslint-disable-next-line react/prop-types
function CPUCore({ core, system, user, nice, idle, irq }) {
  const total = system + user + nice + idle + irq;

  const coreTotal = ((total - idle) / total) * 100;
  const systemPct = (system / total) * 100;
  const userPct = (user / total) * 100;
  const nicePct = (nice / total) * 100;
  const idlePct = (idle / total) * 100;
  const irqPct = (irq / total) * 100;

  return (
    <div className={`grid-item-${core}`}>
      <h3>CORE {core}: {coreTotal.toFixed(2)}%</h3>
      <p>System: {systemPct.toFixed(2)}%</p>
      <p>User: {userPct.toFixed(2)}%</p>
      <p>Nice: {nicePct.toFixed(2)}%</p>
      <p>Idle: {idlePct.toFixed(2)}%</p>
      <p>IntIRQ: {irqPct.toFixed(2)}%</p>
    </div>
  );
}

export default CPUCore;
