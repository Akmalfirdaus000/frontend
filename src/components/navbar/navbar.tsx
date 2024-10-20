import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white text-lg font-semibold">Home</a>
        </Link>
        <Link href="/orders">
          <a className="ml-4 text-white text-lg">Orders</a>
        </Link>
        <Link href="/login">
          <a className="ml-4 text-white text-lg">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
