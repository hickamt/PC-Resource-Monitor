/* eslint-disable react/prop-types */

function Win32Platform({traceData}) {
  const {data, parsedData, targetURL, traceType,} = traceData.data;
  return (
    <div className="win32-container">
      <div className="win32-item">Trace cmd: {traceType}</div>
      <div className="win32-item">Target: {targetURL}</div>
      <div className="win32-item"><pre>{data}</pre></div>
      <div className="win32-end">-------------------------------------------</div>
    </div>
  );
}

export default Win32Platform;