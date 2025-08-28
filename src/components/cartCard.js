const CartCard = ({ item, removeFromCart }) => {
  if (!item) return null; //Prevents breaking if item is undefined

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