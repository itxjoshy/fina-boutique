import React from "react";
import "./menu.css";
function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <div className={`menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
      <nav onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <a onClick={() => toggleMenu()} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => toggleMenu()} href="#catalogue">
              catalouge
            </a>
          </li>
          <li>
            <a onClick={() => toggleMenu()} href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="insta">
          <a
            href="https://www.instagram.com/byfegor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              width="24"
            />
          </a>
        </button>
        <button className="insta">
          <a
            href="https://www.instagram.com/byfegor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp"
              width="24"
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Menu;
