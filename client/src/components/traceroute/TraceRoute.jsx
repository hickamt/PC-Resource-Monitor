/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import LinuxPlatform from "./linuxPlatform/LinuxPlatform";
import Win32Platform from "./win32Platform.jsx/Win32Platform";

function TraceRoute({ tracerouteData, tracertData, apiError }) {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (tracerouteData && tracerouteData.data) {
      setPlatforms((prevPlatforms) => [
        ...prevPlatforms,
        { type: "LinuxPlatform", traceData: tracerouteData },
      ]);
    }

    if (tracertData && tracertData.data) {
      setPlatforms((prevPlatforms) => [
        ...prevPlatforms,
        { type: "Win32Platform", traceData: tracertData },
      ]);
    }
  }, [tracerouteData, tracertData]); // dependencies

  return (
    <div>
      {apiError
        ? Object.entries(apiError).map(([key, value]) => {
            if (typeof value === "object" && value !== null) {
              // Convert object to string
              value = JSON.stringify(value, null, 2);
            }
            return (
              <div key={key}>
                <pre>
                  <strong>{key}:</strong> {value}
                </pre>
              </div>
            );
          })
        : platforms.map((platform, index) => {
            if (platform.type === "LinuxPlatform") {
              return (
                <LinuxPlatform key={index} traceData={platform.traceData} />
              );
            } else if (platform.type === "Win32Platform") {
              return (
                <Win32Platform key={index} traceData={platform.traceData} />
              );
            } else {
              return null;
            }
          })}
    </div>
  );
}

export default TraceRoute;
