import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import { CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [surpriseDetails, setSurpriseDetails] = useState({
    recipientName: '',
    giftMessage: '',
    deliveryTime: '',
  });

  const [trxId, setTrxId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('orders').insert({
        customer_info: customerInfo,
        cart_items: cart,
        total_price: cartTotal,
        trx_id: trxId,
        delivery_time: surpriseDetails.deliveryTime,
        gift_message: surpriseDetails.giftMessage,
        recipient_name: surpriseDetails.recipientName,
        status: 'pending',
      });

      if (error) throw error;

      setSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !success) {
    navigate('/cart');
    return null;
  }

  if (success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
          <p className="text-gray-400 mb-4">
            Your midnight surprise is on its way. We'll deliver emotions at the perfect moment.
          </p>
          <p className="text-yellow-500 font-semibold">
            Redirecting to home...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Customer Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={e =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={e =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="01XXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Delivery Address
                </label>
                <textarea
                  required
                  value={customerInfo.address}
                  onChange={e =>
                    setCustomerInfo({ ...customerInfo, address: e.target.value })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows={3}
                  placeholder="Enter complete delivery address"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Surprise Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Recipient's Name
                </label>
                <input
                  type="text"
                  required
                  value={surpriseDetails.recipientName}
                  onChange={e =>
                    setSurpriseDetails({
                      ...surpriseDetails,
                      recipientName: e.target.value,
                    })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Who will receive this gift?"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Gift Message
                </label>
                <textarea
                  value={surpriseDetails.giftMessage}
                  onChange={e =>
                    setSurpriseDetails({
                      ...surpriseDetails,
                      giftMessage: e.target.value,
                    })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows={3}
                  placeholder="Write a special message for your loved one..."
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Preferred Delivery Date & Time
                </label>
                <input
                  type="datetime-local"
                  required
                  value={surpriseDetails.deliveryTime}
                  onChange={e =>
                    setSurpriseDetails({
                      ...surpriseDetails,
                      deliveryTime: e.target.value,
                    })
                  }
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Payment</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-500 font-semibold mb-2">
                Payment Instructions:
              </p>
              <p className="text-gray-300">
                Please pay via bKash/Nagad to: <span className="font-bold">01712345678</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Amount: ৳{cartTotal.toLocaleString()}
              </p>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">
                Transaction ID (TrxID)
              </label>
              <input
                type="text"
                required
                value={trxId}
                onChange={e => setTrxId(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your bKash/Nagad transaction ID"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl text-gray-300">Order Total:</span>
              <span className="text-3xl font-bold text-yellow-500">
                ৳{cartTotal.toLocaleString()}
              </span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Confirm Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
