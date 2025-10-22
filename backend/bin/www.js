#!/usr/bin/env node
import app from "../app.js";
import http from "http";

// Normalize port number
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Start listening
server.listen(port);
server.on("listening", () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Helper function
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
