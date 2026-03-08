import { Link } from 'react-router-dom';
import { ShoppingCart, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Moon className="w-6 h-6 text-pink-500 group-hover:text-pink-400 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">
              Midnight Surprise
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-300 hover:text-pink-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-slate-300 hover:text-pink-400 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-slate-300 hover:text-pink-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-slate-300 hover:text-pink-400 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link
              to="/cart"
              className="relative text-slate-300 hover:text-pink-400 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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
