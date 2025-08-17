import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*dgKuXkCYJCHAa50IlseeMg.png"
          alt=""
        />

        <div className="navbar-text">
          <a href="#">Home</a>
          <a href="#">Docs</a>
          <a
            href="https://github.com/Hafis-bv?tab=repositories"
            target="_blank"
          >
            GitHub
          </a>
          <a href="#">Buy us a coffee</a>
        </div>
      </div>
    </nav>
  );
}
