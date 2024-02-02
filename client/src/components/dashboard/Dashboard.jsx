import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import "./styles/styles.css";

function Dashboard() {
  const { systemInformation } = useContext(AuthContext);
  console.table("Dashboard Sys Info: ", systemInformation);

  return (
    <div className="grid-container">
      <div className="grid-item col1">Column 1, Row 1</div>
      <div className="grid-item col2">Column 2, Row 1</div>
      <div className="grid-item col3">Column 3, Row 1 & 2</div>
      <div className="grid-item col4">Column 1, Row 2</div>
      <div className="grid-item col5">Column 2, Row 2</div>
    </div>
  );
}

export default Dashboard;
