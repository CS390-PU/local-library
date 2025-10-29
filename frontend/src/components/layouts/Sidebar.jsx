// src/components/layouts/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/category1", label: "All Books" },
    { to: "/category2", label: "All Authors" },
    { to: "/category3", label: "All Genres" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Local Library</div>
      <ul className="sidebar-links">
        {links.map(({ to, label, exact }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={exact} // only Home has `end` to prevent overlap
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
