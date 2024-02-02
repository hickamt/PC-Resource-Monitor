import { AuthContext } from "./components/AuthProvider";
import { useContext } from "react";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const { systemInformation } = useContext(AuthContext);
  console.table("App Sys Info: ", systemInformation);
  return <Dashboard />;
}

export default App;
