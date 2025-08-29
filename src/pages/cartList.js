import { useState } from "react";
import CartCard from "../components/cartCard";
import SessionHeading from "../components/sessionHeading";
import { useCart } from "../context";
import CheckOut from "./checkout";



const CartList = () => {
    
    const {cart, removeFromCart, clearCart, total} = useCart();
     const [checkOut, setCheckout] = useState(false);
    return ( 
        <>
          <SessionHeading title={'Cart'}/>
        <div className="cart-list-page">
            <div className="cart">
                <div className="cart-top-text">
                    <p>Total: {cart.length}</p>
                    <span>Total Amount: ${total}</span>
                </div>
                
            {cart.length === 0 ? (<p>Cart is empty</p>) : 
                (<>{cart.map((item)  => <CartCard key={item.id} item={item} removeFromCart={removeFromCart}/>)}</>) }
            </div>


            <div className="cartList-btn">
                <button className="clearCart" onClick={clearCart}>Clear cart</button>
                {cart.length === 0 ? (<button className="order-btn" disabled>Place Order <i class="bi bi-arrow-right"></i></button>) :
                <button className="order-btn" onClick={() => setCheckout(!checkOut)}>Place Order <i class="bi bi-arrow-right"></i></button>}
            </div>
        

            {checkOut && <CheckOut setCheckout={setCheckout}/>}

        </div>
        </>
     );
}
 
export default CartList;