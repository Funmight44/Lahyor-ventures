import { useLocation, useNavigate } from 'react-router-dom';
import OrderSucccess from '../order/orderSuccess'
import OrderFail from '../order/orderFail'

import { useEffect } from 'react';

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If someone visits directly, redirect to home
    if (!state || (!state.order && state.status === "success")) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null;

  const { status, order } = state;

  return (
    <div>
      {status === "success" && order ? ( <OrderSucccess order={order}/>) : <OrderFail/>}
    </div>
  );
};

export default OrderPage;
