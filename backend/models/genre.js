// backend/models/genre.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const GenreSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 1, maxlength: 100, trim: true },
  },
  { timestamps: true }
);

// Virtual for this genre's URL
GenreSchema.virtual("url").get(function () {
  return `/genres/${this._id}`;
});

const Genre = mongoose.model("Genre", GenreSchema);
export default Genre;
