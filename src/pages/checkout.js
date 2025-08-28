import { useState } from "react";
import { useCart } from "../context"; 
import {useNavigate } from "react-router-dom"
import BASE_URL from "../config";

const CheckOut = ({setCheckout}) => {
    const navigate = useNavigate();
    
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    });

    

    

 const {total, cart} = useCart()

function handleChange(event){
  setUser({...user, [event.target.name]: event.target.value})
}

  async function handleOrder(event) {
    event.preventDefault();
    //validate form
    const{fullName, email, address, phone} = user;
    if(!fullName || !email || !address || !phone){
        setError("please fill all fields")
        return null
    };

    await new Promise(resolve => setTimeout(resolve, 2000));

    try{
        const order = {
            ...user,
            product: cart,
            date: new Date().toISOString(),
            status: "pending"
        };

        const resp = await fetch(`${BASE_URL}/orders`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(order)
        })
        if(!resp.ok) throw new Error("fail to save order");
        
        navigate("/order", {state: {status: "success", order}})
    }catch(error){
        setError(error.message)
         navigate('/order', {state: {status: "fail"}})
    }
  }




    return ( 
      <section>
        <div className="checkout">
            <div  className="checkout-desc">
                <button className="close" onClick={() => setCheckout(false)}><i class="bi bi-x"></i></button>
                <div>
                    <h3>Card Payment <i class="bi bi-credit-card-2-front"></i></h3>
                    <form onSubmit={handleOrder}>
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name="fullName" value={user.fullName} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"  value={user.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address"  value={user.address} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone"  value={user.phone} onChange={handleChange}/>
                        </div>

                        
                        <p>total: ${total}</p>
                        {error && <p>{error}</p>}
                        <button type="submit" >Pay Now!</button>
                    </form>
                </div>
            </div>

        </div>
      </section>
 );
}

export default CheckOut;
