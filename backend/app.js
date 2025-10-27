// backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import Book from "./models/book.js";
import Author from "./models/author.js";


const app = express();

// --- Determine MongoDB connection string ---
let mongoDB;

// Priority 1: Use environment variable if provided
if (process.env.MONGO_URI) {
  mongoDB = process.env.MONGO_URI;
  console.log("Using MONGO_URI from environment.");
}
// Priority 2: Codespaces environment (Mongo runs in 'db' container)
else if (process.env.CODESPACES) {
  mongoDB = "mongodb://db:27017/local_library";
  console.log("Detected Codespaces environment – using mongodb://db:27017/local_library");
}
// Priority 3: Local environment (Mongo on host)
else {
  mongoDB = "mongodb://127.0.0.1:27017/local_library";
  console.log("Running locally – using mongodb://127.0.0.1:27017/local_library");
}

// --- Connect to MongoDB ---
mongoose
  .connect(mongoDB)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Resolve __dirname since we're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Example route (we’ll replace later with real ones)
app.get("/", (req, res) => {
  res.send("Local Library backend is running!!");
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/authors", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});


// Export the app for bin/www to import
export default app;
