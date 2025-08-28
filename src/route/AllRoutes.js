import { Route, Routes } from "react-router-dom";
import CartList from "../pages/cartList";
import Hero from "../pages/hero";
import ProductDetail from "../pages/productDetail";
import OrderPage from "../pages/order/orderPage";
import AllProducts from "../pages/allProducts";
import SearchProduct from "../pages/searchProduct";




const AllRoutes = () => {
    
    return ( 
        <main>
        <Routes>
            <Route path="/"  element={<Hero/>}  />
            <Route path="cart" element={<CartList/>} />
            
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/order"  element={<OrderPage/>}/>
            <Route path="/products"  element={<AllProducts/>}/>
            <Route path="/search" element= {<SearchProduct/>} />
        </Routes>
        </main>
     );
}
 
export default AllRoutes;