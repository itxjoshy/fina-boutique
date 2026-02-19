import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import "./collection.css";
import image1 from "../collection-images/c-i-1.png";
import image2 from "../collection-images/c-i-2.png";
import image3 from "../collection-images/c-i-3.png";
import image4 from "../collection-images/c-i-4.png";
const catalougeItems = [
  {
    id: 1,
    title: "SEQUENCE DRESS",
    price: "₦29,000",
    sizes: "Small, Medium, Large, Extra Large (Fits sizes 6-12)",
    color: "Black",
    image: image1,
  },
  {
    id: 2,
    title: "BODYCON DRESS",
    price: "₦25,000",
    sizes: "Small, Medium, Large, Extra Large (Fits sizes 6-12)",
    color: "Black",
    image: image2,
  },
  {
    id: 3,
    title: "BODYCON DRESS",
    price: "₦26,000",
    sizes: "Small, Medium, Large, Extra Large (Fits sizes 6-12)",
    color: "Multicolor",
    image: image3,
  },
  {
    id: 4,
    title: "LACY DRESS",
    price: "₦29,000",
    sizes: "Small, Medium, Large, Extra Large (Fits sizes 6-12)",
    color: "Red",
    image: image4,
  },
];

function Collection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;

    const checkScroll = () => {
      setIsAtStart(el.scrollLeft === 0);
      setIsAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 5);
    };

    el.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const carouselRef = useRef(null);

  return (
    <>
      {isModalOpen && (
        <Modal
          modalopen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
        />
      )}
      <div className="container" id="catalogue">
        <div className="collection-section">
          <h2>Product Collection</h2>

          <div className="relative">
            {/* Carousel Track */}
            <div className="collection-items" ref={carouselRef}>
              {catalougeItems.map((product, index) => (
                <div
                  key={product.id}
                  id={`slide-${index}`}
                  className="collection-item"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedProduct(product);
                    }}
                  />
                  <div className="prod-cta">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button
                      onClick={() => {
                        const message = `Hello, I'm interested in the ${selectedProduct.title}
Price: ${selectedProduct.price}
Size: ${selectedProduct.sizes}
Color: ${selectedProduct.color}
I found it on your website and would love to place an order.`;

                        const url = `https://wa.me/2349164581178?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                      }}
                    >
                      Order On WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
