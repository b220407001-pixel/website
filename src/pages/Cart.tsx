import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-24 h-24 text-slate-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-100 mb-3">Cart is Empty</h2>
          <p className="text-slate-400 mb-8">
            Start shopping now to deliver midnight magic
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-pink-500 hover:to-pink-400 transition-all transform hover:scale-105"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-100 mb-8">Shopping Cart</h1>

        <div className="space-y-4 mb-8">
          {cart.map(item => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-white/20 transition-all"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
                <p className="text-amber-400 font-semibold">
                  ৳{item.price.toLocaleString()} each
                </p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                  >
                    <Minus className="w-4 h-4 text-slate-300" />
                  </button>
                  <span className="text-slate-100 font-semibold w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                  >
                    <Plus className="w-4 h-4 text-slate-300" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-amber-400">
                    ৳{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-red-500/20 rounded-full transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center text-slate-300">
              <span>Subtotal:</span>
              <span className="text-lg font-bold text-slate-100">
                ৳{cartTotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pb-4 border-b border-white/10">
              <span>Delivery Fee:</span>
              <span className="text-lg font-bold text-slate-100">Free</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-slate-100">Total:</span>
              <span className="text-3xl font-bold text-amber-400">
                ৳{cartTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white text-center px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
