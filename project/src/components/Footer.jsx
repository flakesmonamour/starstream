import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaTwitch } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-light py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Our platform is trusted</h3>
          <p className="text-gray-400">by millions & features best updated movies</p>
          <p className="text-gray-400">all around the world.</p>
        </div>

        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-primary">Privacy policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary">Terms of service</Link>
            <Link to="/language" className="text-gray-400 hover:text-primary">Language</Link>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><FaTwitch size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}