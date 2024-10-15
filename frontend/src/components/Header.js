// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have styles for your header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="ICREP Logo" />{" "}
        {/* Update with your logo path */}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          <li>
            <Link to="/downloads">Downloads</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
