// app/user/orders/page.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { getOrders, createOrder } from '../../../../lib/api'; // Tambahkan fungsi ini di lib/api.ts

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        setError(err as string);
      }
    };
    fetchOrders();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createOrder(title, description); // Pastikan fungsi ini ada di lib/api.ts
      setTitle('');
      setDescription('');
      // Fetch ulang order setelah berhasil
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Order</button>
      </form>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.title}: {order.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
