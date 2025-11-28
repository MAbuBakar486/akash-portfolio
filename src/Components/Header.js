import React, { useState } from "react";
import "../Styles/header.css";
import { Link, NavLink } from "react-router-dom";
import MyCV from "../assets/MyCV.pdf";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>MA</Link>
        </div>
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>


        <nav className={open ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li>
              <NavLink to="/" end className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactme" className="nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>


          <a
            className="btn-teal"
            href={MyCV}
            download
            onClick={closeMenu}
            rel="noopener noreferrer"
          >
            <i className="ri-download-line" /> Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
