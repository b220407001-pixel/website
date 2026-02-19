import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">
            Discover our premium gifts and start shopping
          </p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

        <div className="space-y-4 mb-8">
          {cart.map(item => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6 flex items-center gap-6"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-yellow-500 font-semibold">
                  ৳{item.price.toLocaleString()} each
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-700 rounded-full px-2 py-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white font-semibold w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-2xl font-bold text-yellow-500">
                    ৳{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-red-500/20 rounded-full transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl text-gray-300">Subtotal:</span>
            <span className="text-2xl font-bold text-white">
              ৳{cartTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-700">
            <span className="text-2xl font-bold text-white">Total:</span>
            <span className="text-3xl font-bold text-yellow-500">
              ৳{cartTotal.toLocaleString()}
            </span>
          </div>

          <Link
            to="/checkout"
            className="block w-full bg-yellow-500 text-black text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
