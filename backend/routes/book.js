// backend/routes/book.js
import express from "express";
const router = express.Router();
import Book from "../models/book.js";

// GET /books — list all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author").populate("genre");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
