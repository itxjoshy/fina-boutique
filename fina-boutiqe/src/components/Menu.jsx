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
            href="https://www.instagram.com/fina.boutiques/"
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
            href="https://wa.me/2349164581178?text=Hello,%20I'm%20interested%20in%20your%20products.%20I%20found%20your%20website%20and%20would%20love%20to%20place%20an%20order."
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
