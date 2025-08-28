import { Link } from "react-router-dom";

const OrderFail = () => {
    return ( 
        <section className="order-fail">
            <div className="my-5">
                <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
                <p>Payment failed, please try again!</p>     
            </div>
            <div className="my-5">
                <p>Your order is not confirmed.</p>
                <p>Connect <span className="">lahyor@gmail.com</span> for support.</p>
            </div>
            <Link    to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Check Cart Again<i className="ml-2 bi bi-cart"></i></Link>
        </section>
     );
}
 
export default OrderFail;