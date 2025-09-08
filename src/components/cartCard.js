import { useCart } from "../context";

const CartCard = ({ item}) => {
  const {removeFromCart } = useCart();
  //Prevents breaking if item is undefined
   if (!item) return null;

  return ( 
      <div className="cartCard">
          <img src={item.imgpath} alt={item.title} />
          <p className="productName">{item.title}</p>
          <p className="productPrice">${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
  );
}

export default CartCard;