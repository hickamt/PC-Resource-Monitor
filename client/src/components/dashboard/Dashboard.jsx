import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

// Components
import CPU from "../cpu/CPU";

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
          <h3 className="cpu-header">{systemInformation.cpuUsage[0].model}</h3>
          <CPU systemInformation={systemInformation} />
        </div>
        <div className="grid-item col2">Column 2, Row 1</div>
        <div className="grid-item col3">Column 3, Row 1 & 2</div>
        <div className="grid-item col4">Column 1, Row 2</div>
        <div className="grid-item col5">Column 2, Row 2</div>
      </div>
    );
  }
}

export default Dashboard;
