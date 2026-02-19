import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Product, Order } from '../../lib/database.types';
import { Package, ShoppingBag, Plus, Edit, Trash2, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image_url: '',
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin');
    }
  }, [navigate]);

  useEffect(() => {
    if (activeTab === 'products') {
      fetchProducts();
    } else {
      fetchOrders();
    }
  }, [activeTab]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchOrders() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('products').insert({
        title: formData.title,
        price: parseFloat(formData.price),
        category: formData.category,
        description: formData.description,
        image_url: formData.image_url,
      });

      if (error) throw error;
      setShowAddModal(false);
      setFormData({ title: '', price: '', category: '', description: '', image_url: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      const { error } = await supabase
        .from('products')
        .update({
          title: formData.title,
          price: parseFloat(formData.price),
          category: formData.category,
          description: formData.description,
          image_url: formData.image_url,
        })
        .eq('id', editingProduct.id);

      if (error) throw error;
      setEditingProduct(null);
      setFormData({ title: '', price: '', category: '', description: '', image_url: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price.toString(),
      category: product.category,
      description: product.description,
      image_url: product.image_url,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-yellow-500 text-black'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            <Package className="w-5 h-5" />
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'orders'
                ? 'bg-yellow-500 text-black'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            Orders
          </button>
        </div>

        {activeTab === 'products' && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add New Product
              </button>
            </div>

            {loading ? (
              <div className="text-center text-gray-400 py-12">Loading...</div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-800 border-b border-slate-700">
                    <tr>
                      <th className="text-left p-4 text-gray-300 font-semibold">Image</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Title</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Category</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Price</th>
                      <th className="text-right p-4 text-gray-300 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="border-b border-slate-700">
                        <td className="p-4">
                          <img
                            src={product.image_url}
                            alt={product.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </td>
                        <td className="p-4 text-white">{product.title}</td>
                        <td className="p-4 text-gray-400">{product.category}</td>
                        <td className="p-4 text-yellow-500 font-semibold">
                          ৳{product.price.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEditClick(product)}
                              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            {loading ? (
              <div className="text-center text-gray-400 py-12">Loading...</div>
            ) : orders.length === 0 ? (
              <div className="text-center text-gray-400 py-12">No orders yet</div>
            ) : (
              <div className="space-y-4">
                {orders.map(order => (
                  <div
                    key={order.id}
                    className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Customer Info</h3>
                        <p className="text-gray-300">
                          <span className="font-semibold">Name:</span> {order.customer_info.name}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Phone:</span> {order.customer_info.phone}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Address:</span> {order.customer_info.address}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-semibold">Recipient:</span> {order.recipient_name}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Delivery Time:</span>{' '}
                          {new Date(order.delivery_time).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Order Details</h3>
                        <p className="text-yellow-500 font-semibold text-2xl mb-2">
                          ৳{order.total_price.toLocaleString()}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">TrxID:</span> {order.trx_id}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Status:</span>{' '}
                          <span className="text-yellow-500">{order.status}</span>
                        </p>
                        {order.gift_message && (
                          <p className="text-gray-300 mt-2">
                            <span className="font-semibold">Message:</span> {order.gift_message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <h4 className="text-white font-semibold mb-2">Items:</h4>
                      {order.cart_items.map((item, idx) => (
                        <div key={idx} className="text-gray-400 text-sm">
                          {item.title} x {item.quantity} = ৳{(item.price * item.quantity).toLocaleString()}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {(showAddModal || editingProduct) && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Price (BDT)</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Category</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Image URL</label>
                  <input
                    type="url"
                    required
                    value={formData.image_url}
                    onChange={e => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-gray-500 text-sm mt-1">
                    Paste the image URL from ImgBB, Cloudinary, or any other image host
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingProduct(null);
                      setFormData({ title: '', price: '', category: '', description: '', image_url: '' });
                    }}
                    className="flex-1 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
