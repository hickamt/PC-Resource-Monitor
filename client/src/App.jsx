import { AuthContext } from "./components/AuthProvider";
import { useContext } from "react";

function App() {
  const { systemInformation } = useContext(AuthContext);
  console.table("App Sys Info: ", systemInformation);
  return (
    <>
      <h1>The Client is Working, why aren't you</h1>
    </>
  );
}

export default App;
