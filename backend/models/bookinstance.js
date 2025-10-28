// backend/models/bookinstance.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const BookInstanceSchema = new Schema(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    imprint: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Available", "Maintenance", "Loaned", "Reserved"],
      default: "Maintenance",
    },
    due_back: {
      type: Date,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/* -------------------- VIRTUALS -------------------- */

// URL for detail page
BookInstanceSchema.virtual("url").get(function () {
  return `/bookinstances/${this._id}`;
});

// Clean ISO date needed for forms & frontend
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  if (!this.due_back) return "";
  return this.due_back.toISOString().slice(0, 10); // YYYY-MM-DD
});

export default mongoose.model("BookInstance", BookInstanceSchema);
