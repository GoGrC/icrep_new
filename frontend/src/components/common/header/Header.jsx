import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB rounded">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <RouteLink to="/">Home</RouteLink>
            </li>
            <li>
            <ScrollLink to="home-compo" smooth={true} duration={800} style={{cursor:"pointer"}}>About us</ScrollLink>
            </li>
            <li>
              <ScrollLink to="course-compo" smooth={true} duration={800} style={{cursor:"pointer"}}>Courses</ScrollLink>
            </li>
            <li>
              <RouteLink to="/team">Team</RouteLink>
            </li>
            <li>
              <RouteLink to="/activites">Activities</RouteLink>
            </li>
            <li>
              <RouteLink to="/library">Library</RouteLink>
            </li>
            <li>
              <RouteLink to="/publications">Publications</RouteLink>
            </li>
            <li>
              <RouteLink to="/downloads">Downloads</RouteLink>
            </li>
            <li>
              <RouteLink to="/contact">Contact Us</RouteLink>
            </li>
          </ul>
          <div className="start">
            <div className="button">ICREP</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
