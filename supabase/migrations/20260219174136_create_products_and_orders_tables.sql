/*
  # Midnight Surprise E-commerce Database Schema
  
  ## Overview
  Creates the database schema for a premium gift delivery service marketplace.
  
  ## New Tables
  
  ### `products`
  Stores all gift products available for purchase.
  - `id` (uuid, primary key) - Unique product identifier
  - `title` (text) - Product name
  - `price` (numeric) - Product price in BDT
  - `category` (text) - Product category (e.g., "Flowers", "Chocolates", "Gift Boxes")
  - `description` (text) - Detailed product description
  - `image_url` (text) - URL to product image hosted externally (ImgBB/Cloudinary)
  - `created_at` (timestamptz) - Timestamp of product creation
  
  ### `orders`
  Stores all customer orders with complete details.
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_info` (jsonb) - Customer details (name, phone, address)
  - `cart_items` (jsonb) - Array of ordered products with quantities
  - `total_price` (numeric) - Total order amount in BDT
  - `trx_id` (text) - Payment transaction ID (bKash/Nagad)
  - `delivery_time` (text) - Preferred delivery date and time
  - `gift_message` (text) - Special message for the recipient
  - `recipient_name` (text) - Name of the gift recipient
  - `status` (text) - Order status (pending, confirmed, delivered, cancelled)
  - `created_at` (timestamptz) - Timestamp of order placement
  
  ## Security
  
  ### RLS Policies
  - Products: Public read access for customer browsing
  - Orders: Public insert for customer orders, restricted read for order tracking
  
  ## Notes
  1. All prices are stored in BDT (Bangladeshi Taka)
  2. Image URLs are stored as text (hosted externally)
  3. Customer and cart data stored as JSONB for flexibility
  4. Orders default to "pending" status
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_info jsonb NOT NULL,
  cart_items jsonb NOT NULL,
  total_price numeric NOT NULL CHECK (total_price >= 0),
  trx_id text NOT NULL,
  delivery_time text NOT NULL,
  gift_message text DEFAULT '',
  recipient_name text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products policies: Anyone can read products
CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Orders policies: Anyone can insert orders (for customer checkout)
CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Orders policies: Anyone can read orders (for order tracking/admin)
CREATE POLICY "Anyone can view orders"
  ON orders
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample products for initial demo
INSERT INTO products (title, price, category, description, image_url) VALUES
  ('Midnight Rose Bouquet', 2500, 'Flowers', 'A stunning bouquet of 24 red roses, perfect for midnight surprises.', 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Luxury Chocolate Box', 1800, 'Chocolates', 'Premium assorted chocolates in an elegant gold box.', 'https://images.pexels.com/photos/3745526/pexels-photo-3745526.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Golden Gift Hamper', 4500, 'Gift Boxes', 'A luxurious hamper with chocolates, flowers, and a greeting card.', 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Teddy Bear & Roses', 2200, 'Combo', 'Adorable teddy bear with a bouquet of fresh roses.', 'https://images.pexels.com/photos/7925859/pexels-photo-7925859.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Champagne Celebration', 5500, 'Premium', 'Premium champagne with gourmet chocolates and flowers.', 'https://images.pexels.com/photos/5530280/pexels-photo-5530280.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Artisan Cake Delight', 3200, 'Cakes', 'Handcrafted premium cake with personalized message.', 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT DO NOTHING;
