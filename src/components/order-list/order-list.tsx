import { useEffect, useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Panggil API untuk mengambil orderan dari backend
    const fetchOrders = async () => {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Order List</h1>
      <ul>
        {orders.map((order: any) => (
          <li key={order.id}>
            <h2>{order.title}</h2>
            <p>{order.description}</p>
            <p>{order.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
