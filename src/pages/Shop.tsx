import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image_url: product.image,
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-3">
          Premium Gift Collection
        </h1>
        <p className="text-slate-400 text-lg">
          Choose from {products.length} carefully curated gifts for midnight delivery
        </p>
      </section>

      {/* Filters */}
      <section className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-pink-500" />
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-white/5 border border-white/20 text-slate-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/10 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <span className="text-pink-400 text-xs font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mt-2 mb-3 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl md:text-2xl font-bold text-amber-400">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No products found in this category</p>
          </div>
        )}

        {/* Product Count */}
        <div className="text-center mt-16">
          <p className="text-slate-400">
            Showing <span className="text-pink-400 font-bold">{filteredProducts.length}</span> of{' '}
            <span className="text-pink-400 font-bold">{products.length}</span> products
          </p>
        </div>
      </section>
    </div>
  );
}
