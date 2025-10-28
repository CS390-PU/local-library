// backend/models/genre.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

GenreSchema.virtual("url").get(function () {
  return `/genres/${this._id}`;
});

export default mongoose.model("Genre", GenreSchema);
