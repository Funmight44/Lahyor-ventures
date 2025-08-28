import { Link } from "react-router-dom";


const OrderSuccess = ({ order }) => {
  if (!order) return <p>Order Information is missing</p>;

  return (
    <section className="order-success">
      <div className="order-box">
        <h2>✅ Order Confirmed!</h2>
        <p className="greeting">Thank you <strong>{order.fullName}</strong> for your purchase!</p>
        <div className="order-details">
          <p><strong>Order ID:</strong> {order.id || "AUTO_GENERATED"}</p>
          <p><strong>Payment ID:</strong> xyz_123456789</p>
          <p><strong>Delivery Email:</strong> {order.email}</p>
          <p className="note">Please check your inbox for your products and order receipt.</p>
        </div>
        <Link to="/" className="btn-continue">
          <i className="bi bi-cart"></i> Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
