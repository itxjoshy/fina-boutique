import React from "react";
import logo from "../assets/logo.png";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <span class="logo">
            <img src={logo} alt="" />
          </span>
          <p>Bringing Out The Extra In You.</p>
        </div>
        <div class="footer-links">
          <div class="links-content">
            <div>
              <h4>Shop</h4>
              <ul>
                <li>
                  <a href="#catalogue">New Arrivals</a>
                </li>
                <li>
                  <a href="#catalogue">Best Sellers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-social">
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                width="24"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                alt="Twitter"
                width="24"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                alt="Facebook"
                width="24"
              />
            </a>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Fina.B Fashion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
