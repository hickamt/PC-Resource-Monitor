/* eslint-disable react/prop-types */
function LinuxPlatform({ traceData }) {
  const { traceType, destPID, ipAddress, hops } = traceData.data;

  return (
    <div className="linux-container">
      <div className="linux-item">Trace cmd: {traceType}</div>
      <div className="linux-item">PID: {destPID}</div>
      <div className="linux-item">Target: {ipAddress}</div>
      <table>
        <thead>
          <tr>
            <th>HOP</th>
            <th>IP</th>
            <th>RTT1</th>
          </tr>
        </thead>
        <tbody>
          {hops.map(
            (hop, index) =>
              hop.rtt1 !== "*" && (
                <tr key={index}>
                  <td>{hop.hop}</td>
                  <td>{hop.ip}</td>
                  <td>{hop.rtt1}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div className="win32-end">
        -------------------------------------------
      </div>
    </div>
  );
}

export default LinuxPlatform;
