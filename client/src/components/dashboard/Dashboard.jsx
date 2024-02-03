import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

// Components
import CPU from "../cpu/CPU";
import DiskUsage from "../disk/DiskUsage";
import MemoryUsage from "../memory/MemoryUsage";

// Module Helper Function: in /cpu modules directory
import { totalCoreUsage } from "../cpu/modules/cpuCalculations";

// Dashboard CSS Styles
import "./styles/styles.css";

function Dashboard() {
  const { systemInformation } = useContext(AuthContext);

  /**
   * @todo create a loading animation while websocket connection is being made
   * and resources are being created from server side.
   */
  if (
    systemInformation === undefined ||
    systemInformation.cpuUsage === undefined
  ) {
    return <div className="is-loading">Loading PC Resources . . .</div>;
  } else {
    return (
      <div className="grid-container">
        <div className="grid-item col1">
          <h3 className="cpu-header">
            {systemInformation.cpuUsage[0].model} | CPU (
            {totalCoreUsage(systemInformation.cpuUsage).toFixed(2)}%)
          </h3>
          <CPU systemInformation={systemInformation} />
        </div>
        <div className="grid-item col2">Column 2, Row 1</div>
        <div className="grid-item col3">Column 3, Row 1 & 2</div>

        <div className="grid-item col4">
          <div className="disk-container">
            <div className="disk-col1">
              <h3 className="disk-header">Disk Usage</h3>
              <DiskUsage diskUsage={systemInformation.diskUsage} />
            </div>
            <div className="disk-col2">
              <div className="disk-chart">GRAPHICS HERE</div>
            </div>
          </div>
          <div className="memory-container">
            <div className="memory-col1">
              <h3 className="memory-header">Memory Usage</h3>
              <MemoryUsage systemInformation={systemInformation} />
            </div>
            <div className="memory-col2">
              <div className="memory-chart">GRAPHICS HERE</div>
            </div>
          </div>
        </div>
        <div className="grid-item col5">Column 2, Row 2</div>
      </div>
    );
  }
}

export default Dashboard;
