import React, { useState, useEffect } from "react";
import { FaBook, FaUserAlt, FaTags, FaCopy } from "react-icons/fa";
import "./styles/Home.css";

const Home = () => {
  const [stats, setStats] = useState({
    bookCount: 0,            // stays 0
    bookInstanceCount: 0,    // stays 0
    availableCopies: 0,      // stays 0
    authorCount: 0,          // ✅ updated dynamically
    genreCount: 0,           // stays 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Auto-detect backend URL (Codespaces or localhost)
        const baseUrl = (() => {
          const host = window.location.hostname;

          // ✅ In Codespaces: convert frontend (5173) → backend (3000)
          if (host.includes("-5173")) {
            return `https://${host.replace("-5173", "-3000")}`;
          }

          // ✅ Local development
          if (host.includes("localhost")) {
            return "http://localhost:3000";
          }

          // fallback (rare)
          return `https://${host}`;
        })();
console.log("BASE URL IS:", baseUrl);


        const response = await fetch(`${baseUrl}/counts`);
        const data = await response.json();

        setStats((prev) => ({
          ...prev,
          authorCount: data.authorCount ?? 0,   // ✅ only update authors
        }));
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to LocalLibrary</h1>
      <p className="home-description">
        A very basic library management system built as a tutorial example.
      </p>

      <div className="stats">

        <div className="stat-item">
          <FaBook size={50} color="#3498db" />
          <h3>Books</h3>
          <p>{stats.bookCount}</p>
        </div>

        <div className="stat-item">
          <FaCopy size={50} color="#e67e22" />
          <h3>Copies</h3>
          <p>{stats.bookInstanceCount}</p>
        </div>

        <div className="stat-item">
          <FaCopy size={50} color="#27ae60" />
          <h3>Available Copies</h3>
          <p>{stats.availableCopies}</p>
        </div>

        <div className="stat-item">
          <FaUserAlt size={50} color="#9b59b6" />
          <h3>Authors</h3>
          <p>{stats.authorCount}</p>   {/* ✅ dynamic */}
        </div>

        <div className="stat-item">
          <FaTags size={50} color="#f39c12" />
          <h3>Genres</h3>
          <p>{stats.genreCount}</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
