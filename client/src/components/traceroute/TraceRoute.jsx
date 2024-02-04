/* eslint-disable react/prop-types */
import LinuxPlatform from "./linuxPlatform/LinuxPlatform";
import Win32Platform from "./win32Platform.jsx/Win32Platform";

function TraceRoute({ tracerouteData, tracertData }) {
  if (tracerouteData && tracerouteData.data) {
    return <LinuxPlatform traceData={tracerouteData} />;
  }

  if (tracertData) {
    return <Win32Platform traceData={tracertData} />;
  }
}

export default TraceRoute;
