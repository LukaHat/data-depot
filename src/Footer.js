import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>
        All rights reserved by{" "}
        <Link to="https://github.com/LukaHat" target="_blank">
          Luka Hat
        </Link>
      </p>
    </footer>
  );
}
