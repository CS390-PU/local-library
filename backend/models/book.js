import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  summary: String,
  isbn: String
});

// Compile model from schema
export default mongoose.model("Book", bookSchema);
