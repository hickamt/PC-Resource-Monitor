/* eslint-disable react/prop-types */
import LinuxPlatform from "./linuxPlatform/LinuxPlatform";

function TraceRoute({ tracerouteData, platform }) {
  switch (platform) {
    case "linux":
      return <LinuxPlatform traceData={tracerouteData} />;
    case "win32":
      console.log("win32 data: ", tracerouteData);
      return;
    default:
      return (
        <div className="traceroute-default">
          Unable to parse the traceroute for {tracerouteData.data.platform}
        </div>
      );
  }
}

export default TraceRoute;
