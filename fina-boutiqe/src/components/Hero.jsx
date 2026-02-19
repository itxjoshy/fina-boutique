import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import menuIcon from "../assets/menu-icon.svg";
import closeMenuIcon from "../assets/close-menu-icon.svg";
import logo from "../assets/logo.png";
import "./hero.css";
function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="hero-section">
        <div className="tag">
          Exchange Available (Terms and Conditions Apply)
        </div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#catalogue">catalouge</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
          <div class="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div class="buttons">
            <button class="insta">
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
            <div className="menu-icon" onClick={toggleMenu}>
              <img src={isMenuOpen ? closeMenuIcon : menuIcon} alt="menu-btn" />
            </div>
          </div>
        </header>
        <div class="hero-section-content" id="home">
          <h1>the fina boutique</h1>
          <p>shop now for the latest in contour fashion.</p>

          <a href="#catalogue">
            <button>Shop Now</button>
          </a>
        </div>
      </main>
    </>
  );
}

export default Hero;
