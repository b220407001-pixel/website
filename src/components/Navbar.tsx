import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-black border-b border-slate-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Midnight Surprise
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-yellow-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-yellow-500 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-yellow-500 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-yellow-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
