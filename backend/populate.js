// populateLL.js
// Populates the local_library database with authors, genres, and books
// USES ES MODULES (import/export)

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// ✅ Import models (must match your actual schema paths)
import Author from "./models/author.js";
import Genre from "./models/genre.js";
import Book from "./models/book.js";

// ✅ Determine MongoDB connection string
let mongoDB;

if (process.env.MONGO_URI) {
  mongoDB = process.env.MONGO_URI;
  console.log("Using MONGO_URI from environment.");
} else if (process.env.CODESPACES) {
  mongoDB = "mongodb://db:27017/local_library";
  console.log("Detected Codespaces – using mongodb://db:27017/local_library");
} else {
  mongoDB = "mongodb://127.0.0.1:27017/local_library";
  console.log("Using local MongoDB at mongodb://127.0.0.1:27017/local_library");
}

// ✅ Connect and run main program
mongoose
  .connect(mongoDB)
  .then(() => seedDatabase())
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });

// ----------------------------------------------------
// ✅ DATA (exactly as approved by you)
// ----------------------------------------------------

const authorData = [
  {
    first_name: "Professor",
    family_name: "Null Pointer",
    date_of_birth: null,
    date_of_death: null,
  },
  {
    first_name: "Anonymous",
    family_name: "Function",
    date_of_birth: null,
    date_of_death: null,
  },
  {
    first_name: "Stack Overflow",
    family_name: "Collective Consciousness",
    date_of_birth: null,
    date_of_death: null,
  },
];

const genreData = [
  { name: "Tales from the Infinite Loop" },
  { name: "Git Merge Conflicts: Chronicles of Pain" },
  { name: "JavaScript: A Comedy of Undefined Errors" },
];

const bookData = [
  {
    title: "Adventures in MongoDB: The Missing Semicolon",
    summary: "A debugging odyssey through the wild world of missing syntax.",
    isbn: "978-0-11111-000-1",
    author: "Professor Null Pointer",
    genre: "JavaScript: A Comedy of Undefined Errors",
  },
  {
    title: "The Great Vite Panic of 2025",
    summary:
      "The tale of a Vite server that refused to hot-reload at the worst possible moment.",
    isbn: "978-0-20250-517-3",
    author: "Anonymous Function",
    genre: "Tales from the Infinite Loop",
  },
  {
    title: "Zeus Server: A Tragic Opera in 3 Acts",
    summary:
      "A dramatic retelling of the outages, reboots, and triumphs of Pacific's most legendary machine.",
    isbn: "978-0-00000-003-0",
    author: "Stack Overflow Collective Consciousness",
    genre: "Git Merge Conflicts: Chronicles of Pain",
  },
  {
    title: "The Legend of CS at Pacific: Are We Having Fun Yet",
    summary:
      "A humorous chronicle of CS students' adventures, triumphs, and existential debugging crises.",
    isbn: "978-0-77777-777-7",
    author: "Professor Null Pointer",
    genre: "Tales from the Infinite Loop",
  },
  {
    title: "React Router and the Lost Routes of Pacific",
    summary:
      "A daring expedition to locate routes that refuse to render.",
    isbn: "978-0-40404-404-0",
    author: "Anonymous Function",
    genre: "JavaScript: A Comedy of Undefined Errors",
  },
];

// ----------------------------------------------------
// ✅ MAIN SEEDING FUNCTION
// ----------------------------------------------------

async function seedDatabase() {
  try {
    console.log("Dropping existing database...");
    await mongoose.connection.dropDatabase();

    console.log("Inserting Authors...");
    const authors = await Author.insertMany(authorData);

    console.log("Inserting Genres...");
    const genres = await Genre.insertMany(genreData);

    // Helper maps for IDs
    const authorMap = {};
    const genreMap = {};

    authors.forEach((a) => {
      const fullName = `${a.first_name} ${a.family_name}`;
      authorMap[fullName] = a._id;
    });

    genres.forEach((g) => {
      genreMap[g.name] = g._id;
    });

    console.log("Inserting Books...");
    const books = await Promise.all(
      bookData.map((b) => {
        return Book.create({
          title: b.title,
          summary: b.summary,
          isbn: b.isbn,
          author: authorMap[b.author],
          genre: genreMap[b.genre],
        });
      })
    );

    console.log("\n✅ DONE! Local Library Database Seeded Successfully.");
    console.log("----------------------------------------------------");
    console.log(`Authors inserted: ${authors.length}`);
    console.log(`Genres inserted:  ${genres.length}`);
    console.log(`Books inserted:   ${books.length}`);
    console.log("----------------------------------------------------");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error populating database:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
}
