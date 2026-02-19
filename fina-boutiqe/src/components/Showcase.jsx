import React from "react";
import image1 from "../assets/showcase.png";

import "./showcase.css";
function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-content">
        <h2>
          When the occasion matters, so should your outfit <br /> let’s talk.
        </h2>
        <button
          onClick={() => {
            const message = `Hello, I'm interested in your products. I found your website and would love to place an order.`;
            const url = `https://wa.me/2349164581178?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Showcase;
