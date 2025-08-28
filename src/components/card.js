import { Link } from "react-router-dom";

const Card = ({item, addToCart}) => {
    return (
        <>
            <div className="card">
                <Link to={`/products/${item.id}`}><img src={item.imgpath} alt="jean"/></Link>
                <p>{item.title}</p>
                
                <div className="card-buttons">
                    <p>${item.price}</p>
                    <button onClick={() => addToCart(item)}><i class="bi bi-plus"></i></button>
                    {/* <button><i class="bi bi-trash"></i></button> */}
                </div>
            </div>
        </>
     );
}

export default Card;