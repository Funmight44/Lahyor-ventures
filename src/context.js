import { createContext,  useContext, useEffect, useState } from "react";

//create the context
const CartContext = createContext();

// Custom hook to use the cart context
export function useCart(){
   const context =  useContext(CartContext);
    return context
}
  
//create the cart provider
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=> {
        // Load cart from localStorage on first render
        try{
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        }catch(error){
            console.error("Error parsing cart from localStorage:", error);
            return [];
        }
    });
    const [total, setTotal] = useState();

    
  

        // Save cart whenever it changes
        useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart));
            //to get total
            const totalPrice = cart.reduce((sum, item) => {
                return sum + parseFloat(item.price) * item.quantity
            },0);
            setTotal(totalPrice)
        }, [cart])


        const addToCart = (item, qty = 1) => {
            setCart((prev) => {
            const existing = prev.find((p) => p.id === item.id);
            let updated;
            if (existing) {
                updated = prev.map((p) =>
                p.id === item.id
                    ? { ...p, quantity: (p.quantity ?? 1) + qty }
                    : p
                );
            } else {
                updated = [...prev, { ...item, quantity: qty }];
            }
            return updated;
            });
  };


        function removeFromCart(id){
            const newCart = cart.filter(item => item.id !== id)
            setCart(newCart)
            // localStorage.setItem("cart", JSON.stringify(newCart))
        };

        function clearCart(){
            setCart([])
            localStorage.removeItem("cart")
        };

    
        function increaseQuantity(id) {
        setCart((prevCart) =>
            prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        };

        function decreaseQuantity(id) {
        setCart((prevCart) =>
            prevCart
            .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0) // remove item if quantity is 0
        );
        };

         const totalQuantity =  Array.isArray(cart)? cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0) : 0;


    return ( 
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, total, increaseQuantity, decreaseQuantity, totalQuantity}}>
            {children}
        </CartContext.Provider>
     );     
}
