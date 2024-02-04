function LinuxPlatform({ traceData }) {
  const { platform, destPID, ipAddress, hops } = traceData.data;
  console.log(platform, destPID, ipAddress, hops);
  return (
    <div className="linux-container">
      <div className="linux-title">Platform: {platform}</div>
      <div className="linux-item">PID: {destPID}</div>
      <div className="linux-item">Target IP: {ipAddress}</div>
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
    </div>
  );
}

export default LinuxPlatform;
