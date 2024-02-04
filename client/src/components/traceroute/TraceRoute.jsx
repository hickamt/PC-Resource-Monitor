/* eslint-disable react/prop-types */
import LinuxPlatform from "./linuxPlatform/LinuxPlatform";

function TraceRoute({ tracerouteData, tracertData, platform }) {
  switch (platform) {
    case "linux":
      if (tracerouteData && tracerouteData.data) {
        return <LinuxPlatform traceData={tracerouteData} />;
      }
      break;
    case "win32":
      if (tracertData && tracertData.parsedData) {
        console.log("Tracert Data", tracertData);
        return;
      }
      break;
    default:
      return (
        <div className="traceroute-default">
          Unable to parse the traceroute for {platform}
        </div>
      );
  }
}

export default TraceRoute;
