// src/pages/AllGenres.jsx
import React, { useState, useEffect } from "react";
import "../styles/AllGenres.css";

export default function AllGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const host = window.location.hostname;

      let baseUrl;
      if (host.includes("-5173")) {
        baseUrl = `https://${host.replace("-5173", "-3000")}`;
      } else if (host.includes("localhost")) {
        baseUrl = "http://localhost:3000";
      } else {
        baseUrl = `https://${host}`;
      }

      const response = await fetch(`${baseUrl}/genres`);
      const data = await response.json();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return (
    <div className="all-genres-container">
      <h1>All Genres</h1>

      <div className="genres-grid">
        {genres.map((genre) => (
          <div className="genre-card" key={genre._id}>
            <h3>{genre.name}</h3>
            <p>
              <strong>ID:</strong> {genre._id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
