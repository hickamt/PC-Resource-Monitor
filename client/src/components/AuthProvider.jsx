import { useState, useEffect, createContext } from "react";

// Gives application global context for useState() objects
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [systemInformation, setSystemInformation] = useState({});

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket("ws://localhost:5500");

    // Connection opened
    socket.addEventListener("open", () => {
      console.log("Client WS Connection Open")
      socket.send("WebSocket Connection Open");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      const resources = JSON.parse(event.data);
      setSystemInformation(resources);
    });

    // Connection closed
    socket.addEventListener("close", (event) => {
      console.log("Server connection closed:\n", event.code);
    });

    // Connection error
    socket.addEventListener("error", (event) => {
      console.error("WebSocket error observed:\n", event);
    });

    // Cleanup function to close the socket when the component unmounts
    return () => socket.close();
  }, []);

  return (
    <AuthContext.Provider value={{ systemInformation }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
