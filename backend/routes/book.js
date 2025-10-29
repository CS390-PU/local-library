// backend/routes/book.js
import express from "express";
import Book from "../models/book.js";

const router = express.Router();

// GET /books → return all books WITH author + genre populated
router.get("/", async (req, res) => {
  try {
    const books = await Book.find()
      .populate("author")
      .populate("genre");

    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

export default router;
