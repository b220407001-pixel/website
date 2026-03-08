import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [message, setMessage] = useState('');

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-400 text-xl">No items in cart</p>
        </div>
      </div>
    );
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    const orderDetails = `
🌙 MIDNIGHT SURPRISE ORDER 🌙

📦 ORDER DETAILS:
${cart.map(item => `• ${item.title} x${item.quantity} = ৳${(item.price * item.quantity).toLocaleString()}`).join('\n')}

💰 Total: ৳${cartTotal.toLocaleString()}

📝 SENDER DETAILS:
• Name: ${senderName}
• Phone: ${senderPhone}

👥 RECIPIENT DETAILS:
• Name: ${recipientName}
• Address: ${recipientAddress}
• Delivery Date/Time: ${deliveryDate}

💌 SPECIAL MESSAGE:
${message || 'No message provided'}

Please confirm this order via WhatsApp!
    `.trim();

    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/8801814790752?text=${encodedMessage}`;

    clearCart();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-100 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="md:col-span-2 space-y-6">
            <form onSubmit={handleCheckout} className="space-y-6">
              {/* Sender Details */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={e => setSenderName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Your Phone</label>
                    <input
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={e => setSenderPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Recipient Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={e => setRecipientName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                      placeholder="Who will receive this gift?"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Delivery Address</label>
                    <textarea
                      required
                      value={recipientAddress}
                      onChange={e => setRecipientAddress(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                      placeholder="Enter complete delivery address"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Delivery Date & Time</label>
                    <input
                      type="datetime-local"
                      required
                      value={deliveryDate}
                      onChange={e => setDeliveryDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                    />
                    <p className="text-slate-400 text-sm mt-2">We guarantee delivery at 12:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Special Message (Optional)</h2>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                  placeholder="Write a heartfelt message for the recipient..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Complete Order via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-20 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="text-slate-300 font-medium">{item.title}</p>
                      <p className="text-slate-500 text-xs">x{item.quantity}</p>
                    </div>
                    <p className="text-amber-400 font-semibold">
                      ৳{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">Subtotal:</span>
                  <span className="text-slate-100 font-semibold">৳{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Delivery:</span>
                  <span className="text-slate-100 font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-lg border-t border-white/10 pt-3">
                  <span className="text-slate-100 font-bold">Total:</span>
                  <span className="text-amber-400 font-bold">৳{cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                <p className="text-pink-300 text-sm">
                  🌙 You will be redirected to WhatsApp to confirm your order. Our team will contact you within 1 hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
