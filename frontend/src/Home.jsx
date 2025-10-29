// src/Home.jsx
import React, { useState, useEffect } from "react";
import { FaBook, FaUserAlt, FaTags } from "react-icons/fa";
import "./styles/Home.css";

const Home = () => {
  const [stats, setStats] = useState({
    bookCount: 0,
    authorCount: 0,
    genreCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const host = window.location.hostname;

        let baseUrl;
        if (host.includes("-5173")) {
          baseUrl = `https://${host.replace("-5173", "-3000")}`;
        } else if (host.includes("localhost")) {
          baseUrl = "http://localhost:3000";
        } else {
          baseUrl = `https://${host}`;
        }

        const response = await fetch(`${baseUrl}/counts`);
        const data = await response.json();

        setStats({
          bookCount: data.bookCount ?? 0,
          authorCount: data.authorCount ?? 0,
          genreCount: data.genreCount ?? 0,
        });
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

        {/* Books */}
        <div className="stat-item">
          <FaBook size={50} color="#3498db" />
          <h3>Books</h3>
          <p>{stats.bookCount}</p>
        </div>

        {/* Authors */}
        <div className="stat-item">
          <FaUserAlt size={50} color="#9b59b6" />
          <h3>Authors</h3>
          <p>{stats.authorCount}</p>
        </div>

        {/* Genres */}
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
