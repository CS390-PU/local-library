// src/components/layouts/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/books", label: "All Books" },
    { to: "/authors", label: "All Authors" },
    { to: "/genres", label: "All Genres" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Local Library</div>

      <ul className="sidebar-links">
        {links.map(({ to, label, exact }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={exact} // Home should match exactly
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
