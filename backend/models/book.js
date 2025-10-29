// backend/models/book.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  },
  { timestamps: true }
);

// ✅ Virtual: URL
BookSchema.virtual("url").get(function () {
  return `/books/${this._id}`;
});

// ✅ Virtual: title + author for convenience (optional but LL uses it)
BookSchema.virtual("titleAuthor").get(function () {
  return `${this.title} (${this.author})`;
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
