import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import "./styles/styles.css";

/**
 * @TODO
 * Show the CPU Information as a header
 * Show the total process time for all cores next to header
 * Show each cores usage next to CORE #: totalCoreUsage = (total - idle) / total * 100
 */

// eslint-disable-next-line react/prop-types
function CpuUsage({ core, system, user, nice, idle, irq }) {
  const total = system + user + nice + idle + irq;

  const systemPct = (system / total) * 100;
  const userPct = (user / total) * 100;
  const nicePct = (nice / total) * 100;
  const idlePct = (idle / total) * 100;
  const irqPct = (irq / total) * 100;

  return (
    <div className={`grid-item-${core}`}>
      <h3>CORE {core}</h3>
      <p>System: {systemPct.toFixed(2)}%</p>
      <p>User: {userPct.toFixed(2)}%</p>
      <p>Nice: {nicePct.toFixed(2)}%</p>
      <p>Idle: {idlePct.toFixed(2)}%</p>
      <p>IntIRQ: {irqPct.toFixed(2)}%</p>
    </div>
  );
}

function Dashboard() {
  const { systemInformation } = useContext(AuthContext);

  /**
   * @todo create a loading animation while websocket connection is being made
   * and resources are being created from server side.
   */
  if (systemInformation === undefined || systemInformation.cpuUsage === undefined) {
    return <div className="is-loading">Loading PC Resources . . .</div>;
  } else {
    console.log("PC Resources:\n", systemInformation)
    const cpuUsageComponents = systemInformation.cpuUsage.map((cpu, index) => {
      return (
        <CpuUsage
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

    return (
      <div className="grid-container">
        <div className="grid-item col1">{cpuUsageComponents}</div>
        <div className="grid-item col2">Column 2, Row 1</div>
        <div className="grid-item col3">Column 3, Row 1 & 2</div>
        <div className="grid-item col4">Column 1, Row 2</div>
        <div className="grid-item col5">Column 2, Row 2</div>
      </div>
    );
  }
}

export default Dashboard;
