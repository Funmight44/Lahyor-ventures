import Services from "../components/services";
import FAQ from "../components/FAQ";

import UseTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import Features from "../components/features";
import NewArrivals from "./newArrivals";

const Hero = () => {
   UseTitle("hero session")

    return ( 
        <>
        <div className="hero" id="shop">
            <div className="hero-text">
                <div className="hero-text-top">
                    <h3>Shop in Style & Celebrate with Sweetness! Lahyor 
                        Ventures has everything</h3>            
                </div>
               
               <Link to="products"><button className="shop-btn">Shop Now</button></Link> 
            </div>  
        </div>
            <Services/>
            <Features/>
            <NewArrivals/>
            <FAQ/>
        </>
     );
}
 
export default Hero;