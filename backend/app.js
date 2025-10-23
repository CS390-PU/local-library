// backend/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';

const app = express();

const mongoDB = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/local_library';

mongoose.connect(mongoDB)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error(err));



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

// Export the app for bin/www to import
export default app;
