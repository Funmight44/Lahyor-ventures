import { createContext, useContext, useEffect, useState } from "react";

//create the context
const CartContext = createContext();

// Custom hook to use the cart context
export function useCart(){
   const context =  useContext(CartContext);
    return context
}
  
//create the cart provider
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();

    function addToCart(item){
        setCart(prevCart => [...prevCart, item])
    }

    function removeFromCart(id){
        setCart(cart.filter(item => item.id !== id))
    }

    function clearCart(){
        setCart([])
    }


    useEffect(() => {
        const addTotal = cart.reduce((sum, item) => {
            return sum + parseFloat(item.price) 
        }, 0);
        setTotal(addTotal);
    }, [cart]);

    return ( 
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, total}}>
            {children}
        </CartContext.Provider>
     );     
}
