// backend/routes/author.js
import express from "express";
import Author from "../models/author.js";

const router = express.Router();

/* ---------------------------- GET /authors ---------------------------- */
// Return a list of all authors
router.get("/", async (req, res) => {
  try {
    const authors = await Author.find().sort({ family_name: 1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch authors" });
  }
});

/* ------------------------- GET /authors/:id -------------------------- */
// Return a single author by ID
router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.json(author);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch author" });
  }
});

export default router;
