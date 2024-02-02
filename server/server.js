/**
 * Express Server:
 * This server uses a websocket to message the client that changes have been made.
 */

// IMPORTS
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5500;
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
// WEBSOCKET FILE IMPORT (CLIENT ENDPOINT)
const pcResourcesController = require("./controllers/pcResourcesController");

// MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", require("./routes/root")); // serving the static html index.js file

// API ENDPOINTS
app.use("local_state", require("./routes/api/local_state"));

// Catch all for page request not matching an endpoint
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.sendFile(path.join(__dirname, "views", "Peugeot404.jpg"));
  }
});

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });

  // Here you can write the code to get the system information and send it to the client
  // For example:
  const sendResources = async () => {
    try {
      const resources = await pcResourcesController.getResources();
      ws.send(JSON.stringify(resources));
    } catch (error) {
      console.error("Unable to get system resources", error);
    }
  };

  sendResources();
  // Current interval time of (1) minute. Change as needed
  const intervalId = setInterval(sendResources, 60000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(intervalId);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
