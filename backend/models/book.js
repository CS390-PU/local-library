// backend/models/book.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    genre: [
      {
        type: Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual URL for routing
BookSchema.virtual("url").get(function () {
  return `/books/${this._id}`;
});

export default mongoose.model("Book", BookSchema);
