/* eslint-disable react/prop-types */

function Win32Platform({traceData}) {
  const {data, parsedData, targetURL, destination, traceType,} = traceData.data;
  // console.log("Destination: ", targetURL)
  console.log("Trace Type: ", traceType)
  console.table("Parsed Data: ", parsedData)
  return (
    <div className="win32-container">
      <div className="win32-item">Trace cmd: {traceType}</div>
      {/* <div className="win32-item">Target: {targetURL}</div> */}
      <div className="win32-item">Target: {destination}</div>
      <div className="win32-item"><pre>{data}</pre></div>
    </div>
  );
}

export default Win32Platform;