/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Styles
import "./styles/styles.css";

// POST API
import expressPostAPI from "../../api/expressAPI";

/**
 * Takes user input for web host to trace route and sets the return
 * data from server.
 * Form expects a web host name: string (i.e. myWebsite.com)
 * @param {useState setter} setTraceRouteData
 * @returns a form component with text input, submit, and clear buttons
 */
function TraceRouteForm({ setTraceRouteData, setTracertData, platform }) {
  const [targetURL, setTargetURL] = useState("");
  // API Endpoint Expects traceType: { 'traceroute' || 'tracertWSL' || tracertWin32' }
  const [traceType, setTraceType] = useState("");

  useEffect(() => {
    if (platform === "win32") {
      setTraceType("tracertWin32");
    }
  }, [platform]);

  const handleTraceTypeChange = (event) => {
    setTraceType(event.target.value);
  };

  const handleTraceRoute = async (event) => {
    event.preventDefault();
    if (targetURL) {
      const data = await expressPostAPI("traceroute", targetURL);
      if (traceType === "traceroute") {
        setTraceRouteData(data);
      } else {
        setTracertData(data);
      }
      setTargetURL(""); // reset the domain state
    }
  };

  const handleInputChange = (event) => {
    setTargetURL(event.target.value);
  };

  const clearInput = () => {
    setTargetURL("");
  };

  return (
    <div className="traceroute">
      <form onSubmit={handleTraceRoute}>
        <label htmlFor="domain" className="traceroute-label">
          Website Target:
        </label>
        <input
          id="domain"
          type="text"
          className="domain traceroute-input"
          value={targetURL}
          onChange={handleInputChange}
        />

        {platform === "linux" && (
          <select value={traceType} onChange={handleTraceTypeChange}>
            <option value="traceroute">traceroute</option>
            <option value="tracertWSL">tracertWSL</option>
          </select>
        )}

        <div className="btn-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="clear-btn" onClick={clearInput}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default TraceRouteForm;
