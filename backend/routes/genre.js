// backend/routes/genre.js
import express from "express";
const router = express.Router();

import Genre from "../models/genre.js";

// GET /genres — list all genres
router.get("/", async (req, res) => {
  try {
    const genres = await Genre.find().sort({ name: 1 });
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
