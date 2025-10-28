// backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import cors from "cors";

// ✅ Only import Author model
import Author from "./models/author.js";

// ✅ Import only author routes
import authorRoutes from "./routes/author.js";

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
   ✅ Counts route — Author only
------------------------------------------------------------------ */
app.get("/counts", async (req, res) => {
  try {
    const authorCount = await Author.countDocuments();

    res.json({
      authorCount,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ error: "Failed to fetch counts" });
  }
});

/* ------------------------------------------------------------------
   ✅ Author routes
------------------------------------------------------------------ */
app.use("/authors", authorRoutes);

/* ------------------------------------------------------------------
   Export
------------------------------------------------------------------ */
export default app;
