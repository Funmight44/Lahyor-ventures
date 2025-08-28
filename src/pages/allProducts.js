// import { useEffect} from "react";
import Card from "../components/card";
import { useCart } from "../context";
import BASE_URL from "../config";
import UseFetch from "../hooks/UseFetch";
import { useSearchParams } from "react-router-dom";

const AllProducts = () => {
    const{addToCart} = useCart()
    const [searchParams] = useSearchParams()
    const {data:allProducts, loading, error} =  UseFetch(`${BASE_URL}/Products`)
    const category = searchParams.get("category")

    const filteredProducts = category ? allProducts.filter((item) => item.category.toLowerCase() === category.toLowerCase()) : allProducts;

    return ( 
        <section className="all-products">
            {loading && <p>Products Loading....</p>}
            {error && <p style={{ color: "red" }}>{error}</p> }
                {filteredProducts.map((item) => <Card key={item.id} item={item} addToCart={addToCart} />)  }
        </section>
     );
}
 
export default AllProducts;