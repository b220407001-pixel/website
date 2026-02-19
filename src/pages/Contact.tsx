import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg">
            We're here to help make your moments unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6 text-center hover:border-yellow-500/50 transition-all">
            <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+880 1712345678</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6 text-center hover:border-yellow-500/50 transition-all">
            <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">support@midnightsurprise.com</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6 text-center hover:border-yellow-500/50 transition-all">
            <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Name</label>
              <input
                type="text"
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Message</label>
              <textarea
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows={5}
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
