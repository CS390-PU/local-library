// backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import cors from "cors";

// ✅ Models
import Author from "./models/author.js";
import Book from "./models/book.js";
import Genre from "./models/genre.js";              // ✅ NEW

// ✅ Routes
import authorRoutes from "./routes/author.js";
import bookRoutes from "./routes/book.js";
import genreRoutes from "./routes/genre.js";        // ✅ NEW

const app = express();
app.use(cors());

/* ------------------------------------------------------------------
   Select MongoDB connection string
------------------------------------------------------------------ */
let mongoDB;

if (process.env.MONGO_URI) {
  mongoDB = process.env.MONGO_URI;
  console.log("Using MONGO_URI from environment.");
} else if (process.env.CODESPACES) {
  mongoDB = "mongodb://db:27017/local_library";
  console.log("Detected Codespaces environment – using mongodb://db:27017/local_library");
} else {
  mongoDB = "mongodb://127.0.0.1:27017/local_library";
  console.log("Running locally – using mongodb://127.0.0.1:27017/local_library");
}

/* ------------------------------------------------------------------
   Connect to MongoDB
------------------------------------------------------------------ */
mongoose
  .connect(mongoDB)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ------------------------------------------------------------------
   Express config
------------------------------------------------------------------ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ------------------------------------------------------------------
   Root route
------------------------------------------------------------------ */
app.get("/", (req, res) => {
  res.send("Local Library backend is running!!");
});

/* ------------------------------------------------------------------
   ✅ Counts route — Authors + Books + Genres (instances later)
------------------------------------------------------------------ */
app.get("/api/counts", async (req, res) => {
  try {
    const [authorCount, bookCount, genreCount] = await Promise.all([
      Author.countDocuments(),
      Book.countDocuments(),
      Genre.countDocuments(),
    ]);

    res.json({
      authorCount,
      bookCount,
      genreCount,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ error: "Failed to fetch counts" });
  }
});


/* ------------------------------------------------------------------
   ✅ Register routes
------------------------------------------------------------------ */
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/genres", genreRoutes);   // ✅ NEW

/* ------------------------------------------------------------------
   Export
------------------------------------------------------------------ */
export default app;
