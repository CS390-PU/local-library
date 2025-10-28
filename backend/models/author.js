// backend/models/author.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    family_name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    date_of_birth: {
      type: Date,
    },
    date_of_death: {
      type: Date,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/* ----------------------------- VIRTUAL FIELDS ----------------------------- */

/**
 * Virtual: full name "FamilyName, FirstName"
 */
AuthorSchema.virtual("name").get(function () {
  if (!this.first_name || !this.family_name) return "";
  return `${this.family_name}, ${this.first_name}`;
});

/**
 * Virtual: lifespan "YYYY - YYYY"
 */
AuthorSchema.virtual("lifespan").get(function () {
  const birth = this.date_of_birth
    ? this.date_of_birth.getFullYear()
    : "?" ;

  const death = this.date_of_death
    ? this.date_of_death.getFullYear()
    : "" ;

  return death ? `${birth} - ${death}` : `${birth} -`;
});

/**
 * Virtual: formatted birth date
 */
AuthorSchema.virtual("formatted_birth").get(function () {
  if (!this.date_of_birth) return "";
  return this.date_of_birth.toISOString().slice(0, 10);
});

/**
 * Virtual: formatted death date
 */
AuthorSchema.virtual("formatted_death").get(function () {
  if (!this.date_of_death) return "";
  return this.date_of_death.toISOString().slice(0, 10);
});

/**
 * Virtual: URL for this author
 * (used for frontend routing or detail pages)
 */
AuthorSchema.virtual("url").get(function () {
  return `/authors/${this._id}`;
});

export default mongoose.model("Author", AuthorSchema);
