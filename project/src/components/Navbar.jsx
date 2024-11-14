import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-dark-light py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-primary font-bold text-xl">SaintStream</Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-300 hover:text-primary">Home</Link>
            <Link to="/discover" className="text-gray-300 hover:text-primary">Discover</Link>
            <Link to="/movie-release" className="text-gray-300 hover:text-primary">Movie Release</Link>
            <Link to="/forum" className="text-gray-300 hover:text-primary">Forum</Link>
            <Link to="/about" className="text-gray-300 hover:text-primary">About</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-primary">
            <FaSearch size={18} />
          </button>
          <Link to="/create-profile" className="text-gray-300 hover:text-primary">
            <FaUser size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}