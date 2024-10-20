// pages/dashboard.tsx
import Sidebar from '@/components/sidebar/sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
        {/* Tambahkan konten dashboard lainnya di sini */}
      </div>
    </div>
  );
};

export default Dashboard;
