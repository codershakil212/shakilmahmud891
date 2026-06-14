import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Shakil Mahmud</div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/service">Service</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div
        className={open ? "hamburger active" : "hamburger"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;