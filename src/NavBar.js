import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function NavBar({ onEnquireClick }) {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/About">About us</Link>
        <Link to="/Features">Features</Link>
        <Link to="/Testimonial">Testimonial</Link>
        <Link to="/Gallery">Gallery</Link>
        <button onClick={onEnquireClick}>Enquire now</button>
      </div>
      <div className="navbar-line"></div>
    </div>
  );
}


