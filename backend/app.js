// backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolve __dirname since we're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Example route (we’ll replace later with real ones)
app.get("/", (req, res) => {
  res.send("Local Library backend is running!");
});

// Export the app for bin/www to import
export default app;
