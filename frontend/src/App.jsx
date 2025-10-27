// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/layouts/Sidebar.jsx";
import Home from "./Home.jsx";
import Category1 from "./Category1.jsx";
import Category2 from "./Category2.jsx";
import Category3 from "./Category3.jsx";

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
            <Route path="/category1" element={<Category1 />} />
            <Route path="/category2" element={<Category2 />} />
            <Route path="/category3" element={<Category3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
