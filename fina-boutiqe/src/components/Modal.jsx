import "./modal.css";
function Modal({ modalopen, setIsModalOpen, selectedProduct }) {
  return (
    <div
      className={`modal-container ${modalopen ? "open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsModalOpen(false)}>
          <span className="close-icon">&times;</span>
        </button>
        {selectedProduct && (
          <>
            <div className="image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="product-description">
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.price}</p>
              <p> Size: {selectedProduct.sizes}</p>
              <p> Color: {selectedProduct.color}</p>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
