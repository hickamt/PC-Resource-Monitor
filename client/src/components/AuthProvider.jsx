import { useState, useEffect, createContext } from "react";

// Gives application global context for useState() objects
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [systemInformation, setSystemInformation] = useState({});

  useEffect(() => {
    let socket = null;
    let attempts = 0;
    const maxAttempts = 5; // maximum number of reconnection attempts

    const connect = () => {
      if (attempts >= maxAttempts) {
        console.log("Max reconnection attempts reached. Not reconnecting.");
        return;
      }

      // Create WebSocket connection.
      socket = new WebSocket("ws://localhost:5500");

      // Connection opened
      socket.addEventListener("open", () => {
        console.log("Client WS Connection Open");
        socket.send("WebSocket Connection Open");
        attempts = 0; // reset attempts count on successful connection
      });

      // Listen for messages
      socket.addEventListener("message", (event) => {
        const resources = JSON.parse(event.data);
        setSystemInformation(resources);
      });

      // Connection closed
      socket.addEventListener("close", (event) => {
        console.log("Server connection closed:\n", event.code);
        attempts++; // increment attempts count
        console.log("Reconnecting...");
        setTimeout(connect, 1000); // try to reconnect after a second
      });

      // Connection error
      socket.addEventListener("error", (event) => {
        console.error("WebSocket error observed:\n", event);
      });
    };

    connect(); // initial connection

    // Cleanup function to close the socket when the component unmounts
    return () => socket && socket.close();
  }, []);

  return (
    <AuthContext.Provider value={{ systemInformation }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
