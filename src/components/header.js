import { Link, useNavigate, useSearchParams} from 'react-router-dom';

import { useCart } from '../context';
import { useEffect, useState } from 'react';


const Header = () => {
    const {totalQuantity} = useCart();
    const [cartToggle, setCartToggle] = useState(false)
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const [query, setQuery] = useState(searchParams.get("query") || "");

    const [showNav, setShowNav] = useState(false)
   

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!query.trim()) return;
      navigate(`/search?query=${encodeURIComponent(query)}`);
};

    return ( 
        <header>
            <div className="logo-div">
                <img src="/images/logo.png" alt='logo' className='logo'/>
                <h2>Lahyor Ventures</h2> 
            </div>

            <nav  className={showNav ? "show-nav" : ''} onClick={() => setShowNav(false)}>
                <Link to="/" onClick={() => setShowNav(false)}><p>Home</p></Link>  
                <h4 onClick={()=> navigate("/products?category=male")}>Men</h4>
                <h4 onClick={()=> navigate("/products?category=female")}>Female</h4>
                <h4 onClick={()=> navigate("/products?category=kids")}>Kids</h4>
    
                <form className='search-div' onSubmit={handleSubmit}>
                    <input type='text' placeholder='search product' value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type='submit' onClick={() => setShowNav(false)} > <i class="bi bi-search"></i></button>
                </form>
             </nav>

            <button className="menu-icon" onClick={() => setShowNav(!showNav)}>
                   <i className="bi bi-list"></i>
            </button>

            <div className='actions'>
                <i class="bi bi-balloon-heart"></i>
                <i class="bi bi-person"></i>
                <div className='cart-div' onClick={() => setCartToggle(!cartToggle)}>
                   <Link to="cart"><i class="bi bi-cart" ></i></Link>
                   <span>{totalQuantity}</span>
                </div>
                
            </div>
        </header>
     );
}
 
export default Header;