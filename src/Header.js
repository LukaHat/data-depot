import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="home-link">
        <div className="main-title-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/hardware.png"}
            alt="main logo"
            className="main-logo"
          />
          <h1 className="main-heading">Data Depot</h1>
        </div>
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <NavLink>Products</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Locations</NavLink>
        </ul>
      </nav>
    </header>
  );
}
