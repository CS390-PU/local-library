// src/pages/AllBooks.jsx
import React, { useState, useEffect } from "react";
import "../styles/AllBooks.css";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const host = window.location.hostname;

      let baseUrl;
      if (host.includes("-5173")) {
        baseUrl = `https://${host.replace("-5173", "-3000")}`;
      } else if (host.includes("localhost")) {
        baseUrl = "http://localhost:3000";
      } else {
        baseUrl = `https://${host}`;
      }

      const response = await fetch(`${baseUrl}/books`);
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="all-books-container">
      <h1>All Books</h1>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <h3>{book.title}</h3>

            <p>
              <strong>Author:</strong>{" "}
              {book.author
                ? `${book.author.first_name} ${book.author.family_name}`
                : "Unknown"}
            </p>

            <p>
              <strong>Genre:</strong>{" "}
              {Array.isArray(book.genre) && book.genre.length > 0
                ? book.genre[0].name
                : "None"}
            </p>

            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
