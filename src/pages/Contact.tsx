import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg">
            We're here to help create your perfect midnight moment
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/10">
            <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Phone</h3>
            <p className="text-slate-400">+880 1814 790 752</p>
            <p className="text-slate-500 text-sm mt-2">Available 24/7</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/10">
            <MessageCircle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">WhatsApp</h3>
            <p className="text-slate-400">Message us anytime</p>
            <a
              href="https://wa.me/8801814790752"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-sm mt-2 inline-block"
            >
              Start a chat →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/10">
            <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Location</h3>
            <p className="text-slate-400">Dhaka, Bangladesh</p>
            <p className="text-slate-500 text-sm mt-2">Serving all areas</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-semibold">Subject</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-semibold">Message</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-slate-500"
                rows={5}
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What time do you deliver?',
                a: 'We guarantee delivery at 12:00 AM sharp on your requested date.',
              },
              {
                q: 'Do you deliver every day?',
                a: 'Yes! We deliver 365 days a year, including holidays.',
              },
              {
                q: 'Can I customize my gift?',
                a: 'Absolutely! We offer personalized messages and custom arrangements.',
              },
              {
                q: 'How do I place an order?',
                a: 'Simply browse our catalog, add items to cart, checkout, and confirm via WhatsApp.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-slate-100 mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
