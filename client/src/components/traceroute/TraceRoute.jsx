import { useState } from "react";

// Styles
import "./styles/styles.css";

// POST API
import expressPostAPI from "../../api/expressAPI";

function TraceRoute() {
  const [domain, setDomain] = useState("");

  const handleTraceRoute = async (event) => {
    event.preventDefault();
    if (domain) {
      await expressPostAPI("traceroute", domain);
      setDomain(""); // reset the domain state
    }
  };

  const handleInputChange = (event) => {
    setDomain(event.target.value);
  };

  const clearInput = () => {
    setDomain("");
  };

  return (
    <div className="traceroute">
      <form onSubmit={handleTraceRoute}>
        <label htmlFor="domain" className="traceroute-label">
          Enter A Domain:
        </label>
        <input
          id="domain"
          type="text"
          className="domain traceroute-input"
          value={domain}
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

export default TraceRoute;
