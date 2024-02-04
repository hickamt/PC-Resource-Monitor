/* eslint-disable react/prop-types */
import LinuxPlatform from "./linuxPlatform/LinuxPlatform";

function TraceRoute({tracerouteData}) {
  const platform = tracerouteData.data.platform;
  // console.log("Trace Route PID: ", tracerouteData.data.destPID)
  // console.log("Trace Route IP: ", tracerouteData.data.ipAddress)
  // console.table("Trace Route Hops: ", tracerouteData.data.hops)

  switch (platform) {
    case "linux":
      return <LinuxPlatform traceData={tracerouteData} />;
    case "win32":
      console.log("win32 data: ", tracerouteData)
      return ;
    default:
      return <div className="traceroute-default">Unable to parse the traceroute for {tracerouteData.data.platform}</div>
  }
}

export default TraceRoute;