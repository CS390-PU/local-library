// src/pages/AllAuthors.jsx
import React, { useState, useEffect } from "react";
import "../styles/AllAuthors.css";

export default function AllAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const host = window.location.hostname;

      let baseUrl;
      if (host.includes("-5173")) {
        baseUrl = `https://${host.replace("-5173", "-13064")}`;
      } else if (host.includes("localhost")) {
        baseUrl = "http://localhost:13064";
      } else {
        baseUrl = `https://${host}`;
      }

      const response = await fetch(`${baseUrl}/api/authors`);
      const data = await response.json();
      setAuthors(data);
    };

    fetchAuthors();
  }, []);

  return (
    <div className="all-authors-container">
      <h1>All Authors</h1>

      <div className="authors-grid">
        {authors.map((author) => (
          <div className="author-card" key={author._id}>
            <h3>{author.first_name} {author.family_name}</h3>

            <p>
              <strong>Born:</strong>{" "}
              {author.date_of_birth ? author.date_of_birth.substring(0, 10) : "Unknown"}
            </p>

            <p>
              <strong>Died:</strong>{" "}
              {author.date_of_death ? author.date_of_death.substring(0, 10) : "—"}
            </p>

            <p>
              <strong>ID:</strong> {author._id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
