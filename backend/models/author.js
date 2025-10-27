// backend/models/author.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const authorSchema = new Schema({
  first_name: { type: String, required: true },
  family_name: { type: String, required: true },
  date_of_birth: Date,
  date_of_death: Date
});

export default mongoose.model("Author", authorSchema);
