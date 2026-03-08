import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: '1',
      title: 'Midnight Rose Elegance',
      category: 'Flowers',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    },
    {
      id: '2',
      title: 'Luxury Chocolate Dreams',
      category: 'Chocolates',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    },
    {
      id: '3',
      title: 'Midnight Velvet Cake',
      category: 'Cakes',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    },
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image_url: product.image,
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-100">
            Deliver Love<br />
            <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">
              While They Dream
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Guaranteed 12:00 AM delivery across Dhaka. Create unforgettable midnight moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
            >
              <span>Explore Gifts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Curated for Midnight Magic
          </h2>
          <p className="text-slate-400 text-lg">
            Handpicked gifts perfect for expressing love at the perfect moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/10 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 z-10"></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="text-pink-400 text-sm font-semibold">{product.category}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2 mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-full font-semibold transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 font-semibold text-lg group"
          >
            <span>View All 60 Premium Gifts</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Midnight Surprise */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Why Midnight Surprise?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Guaranteed Midnight Delivery',
                description: 'We deliver precisely at 12:00 AM for that perfect surprise moment.',
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Premium Quality',
                description: 'Handpicked gifts from the finest vendors across Dhaka.',
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: 'Personalized Messages',
                description: 'Add your heartfelt message to make it truly special.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all text-center"
              >
                <div className="text-pink-500 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Start shopping now and deliver emotions at midnight
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
