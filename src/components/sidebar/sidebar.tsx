// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block p-2 hover:bg-gray-700 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/orders" className="block p-2 hover:bg-gray-700 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/tasks" className="block p-2 hover:bg-gray-700 rounded">
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block p-2 hover:bg-gray-700 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
