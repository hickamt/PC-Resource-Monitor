import { AuthContext } from "../AuthProvider";
import { useContext, useState } from "react";

// Components
import CPU from "../cpu/CPU";
import DiskUsage from "../disk/DiskUsage";
import MemoryUsage from "../memory/MemoryUsage";

// Module Helper Function: in /cpu modules directory
import { totalCoreUsage } from "../cpu/modules/cpuCalculations";

// Dashboard CSS Styles
import "./styles/styles.css";
import TraceRouteForm from "../tracerouteForm/TraceRouteForm";
import TraceRoute from "../traceroute/TraceRoute";

function Dashboard() {
  const { systemInformation } = useContext(AuthContext);
  const [tracerouteData, setTraceRouteData] = useState({});

  /**
   * @todo create a loading animation while websocket connection is being made
   * and resources are being created from server side.
   * @todo when each grid is complete with data, abstract to their own components
   * with /styles/styles.css for grid and other graphic stylings
   */
  if (
    systemInformation === undefined ||
    systemInformation.cpuUsage === undefined
  ) {
    return <div className="is-loading">Loading PC Resources . . .</div>;
  } else {
    return (
      <div className="grid-container">
        {/* GRID 1 | CPU */}
        <div className="grid-item col1">
          <h3 className="cpu-header">
            {systemInformation.cpuUsage[0].model} | CPU (
            {totalCoreUsage(systemInformation.cpuUsage).toFixed(2)}%)
          </h3>
          <CPU cpu={systemInformation} />
        </div>
        {/* GRID 2 */}
        <div className="grid-item col2">Column 2, Row 1</div>
        {/* GRID 3 */}
        <div className="grid-item col3">
          {tracerouteData && tracerouteData.data && (
            <TraceRoute tracerouteData={tracerouteData} />
          )}
        </div>
        {/* GRID 4 | Disk & Memory */}
        <div className="grid-item col4">
          {/* GRID 4 SubGrid 1 | Disk */}
          <div className="disk-container">
            <div className="disk-col1">
              <h3 className="disk-header">Disk Usage</h3>
              <DiskUsage diskUsage={systemInformation.diskUsage} />
            </div>
            <div className="disk-col2">
              <div className="disk-chart">GRAPHICS HERE</div>
            </div>
          </div>
          {/* GRID 4 SubGrid 2 | Memory */}
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
        {/* GRID 5 */}
        <div className="grid-item col5">
          <div className="traceroute-row1">
            <h3 className="pentest-container">Traceroute</h3>
            <TraceRouteForm setTraceRouteData={setTraceRouteData} />
          </div>
          <div className="tcpdump-row2">
            <h3 className="title">Standard Tests</h3>
            {/* Dropdown of standard GET request tests */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
