import { useState } from "react";
import { useCart } from "../context";


const ProductDetailCard = ({ products }) => {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1)

  function increase(){
    setQuantity((prev) => prev + 1 )
  }

  function decrease(){
    setQuantity((prev) => prev > 1 ?  prev - 1 : 1)
  }



  if (!products) return null;

  return (
    <section className="product-detail-card">
      <div className="product-image">
        <img src={products.imgpath} alt={products.title} />
      </div>

      <div className="product-info">
        <h1>{products.title}</h1>
        <p className="product-description">{products.description}</p>

        <div className="product-meta">
          <p><strong>Price:</strong> ${products.price}</p>
          <p><strong>Sizes:</strong> {products.size ? products.size.join(", ") : "No size available"}</p>
          <p><strong>{products.inStock ? "inStock ✅" : "Out Of Stock ❌"}</strong></p>
        </div>

        <div className="quantity-btns">
          <button className="plus-btn" onClick={increase}><i class="bi bi-plus"></i></button>
          <h3>{quantity}</h3>
          <button className="minus-btn" onClick={decrease}><i class="bi bi-dash"></i></button>
        </div>

        <div className="action-buttons">
          <button className="add-btn" onClick={() => addToCart(products, quantity)}>🛒 Add {quantity} to Cart</button>
          <button className="remove-btn" onClick={() => removeFromCart(products.id)}>🗑️ Remove</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
 