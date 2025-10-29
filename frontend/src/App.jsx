// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./styles/App.css";

// Layout
import Sidebar from "./components/layouts/Sidebar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import AllBooks from "./pages/AllBooks.jsx";
// Later you will add:
// import AllAuthors from "./pages/AllAuthors.jsx";
// import AllGenres from "./pages/AllGenres.jsx";

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Fixed sidebar */}
        <Sidebar />

        {/* Scrollable right content area */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<AllBooks />} />
            {/* <Route path="/authors" element={<AllAuthors />} /> */}
            {/* <Route path="/genres" element={<AllGenres />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
