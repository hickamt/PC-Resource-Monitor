/* eslint-disable react/prop-types */
import { useState } from "react";

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
function TraceRouteForm({ setTraceRouteData }) {
  const [hostName, setHostName] = useState("");

  const handleTraceRoute = async (event) => {
    event.preventDefault();
    if (hostName) {
      const data = await expressPostAPI("traceroute", hostName);
      console.log("Trace Route Data: ", data);
      setTraceRouteData(data);
      setHostName(""); // reset the domain state
    }
  };

  const handleInputChange = (event) => {
    setHostName(event.target.value);
  };

  const clearInput = () => {
    setHostName("");
  };

  return (
    <div className="traceroute">
      <form onSubmit={handleTraceRoute}>
        <label htmlFor="domain" className="traceroute-label">
          Web Host Name:
        </label>
        <input
          id="domain"
          type="text"
          className="domain traceroute-input"
          value={hostName}
          onChange={handleInputChange}
        />
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
