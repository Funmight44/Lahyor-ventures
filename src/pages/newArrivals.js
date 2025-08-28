import Card from "../components/card";
import SessionHeading from "../components/sessionHeading";

// import products from '../data/products.json'
import Carousel from "react-multi-carousel";
import Responsive from "../components/responsive";
import { useCart } from "../context";
import UseFetch from "../hooks/UseFetch";
import BASE_URL from "../config";



const NewArrivals = () => {
   const {data:popularProducts, error, loading} = UseFetch(`${BASE_URL}/products`);

   const popular  = Array.isArray(popularProducts) ? popularProducts.filter((item) => item.popular === true) : [];
   

   const {addToCart} = useCart();

    return ( 
        <div className="new-arrivals">
           {loading && <p>Loading Products.....</p>}
           {error && <p>{error}</p>}
           <SessionHeading title={'Top Products'}/>
           
           <Carousel 
           responsive={Responsive}
           autoPlay={false}
           swipeable={true}
           draggable={false}
           showDots={false}
           infinite={false}
           partialVisbile={false} 
           itemClass={"carousal-items"}
           >
               
               {popular.map((item) =>  <Card key={item.id} item={item} addToCart={addToCart} category="mixedCategory"/> )}
           </Carousel>
         
        </div>
     );
}
 
export default NewArrivals;