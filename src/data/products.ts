export interface Product {
  id: string;
  title: string;
  category: 'Flowers' | 'Chocolates' | 'Cakes' | 'Combos' | 'Customized Boxes';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Flowers (15)
  {
    id: 'f1',
    title: 'Red Rose Paradise',
    category: 'Flowers',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'Beautiful bouquet of 24 red roses'
  },
  {
    id: 'f2',
    title: 'Midnight Rose Collection',
    category: 'Flowers',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1552765753-b426bcb082c3?w=500&h=500&fit=crop',
    description: 'Premium selection of 36 red roses'
  },
  {
    id: 'f3',
    title: 'White Elegance Bouquet',
    category: 'Flowers',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop',
    description: 'Stunning white roses and lilies'
  },
  {
    id: 'f4',
    title: 'Pink Dream Flowers',
    category: 'Flowers',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=500&fit=crop',
    description: 'Delicate pink roses with greenery'
  },
  {
    id: 'f5',
    title: 'Sunflower Sunshine',
    category: 'Flowers',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1597848212624-84ba6de03c6c?w=500&h=500&fit=crop',
    description: 'Bright sunflowers bouquet'
  },
  {
    id: 'f6',
    title: 'Mixed Garden Bouquet',
    category: 'Flowers',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1490684794356-eb8bbf19e857?w=500&h=500&fit=crop',
    description: 'Rainbow mix of seasonal flowers'
  },
  {
    id: 'f7',
    title: 'Purple Luxury Flowers',
    category: 'Flowers',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    description: 'Purple orchids and roses'
  },
  {
    id: 'f8',
    title: 'Tulip Romance',
    category: 'Flowers',
    price: 1700,
    image: 'https://images.unsplash.com/photo-1580985541550-e323be2ae537?w=500&h=500&fit=crop',
    description: 'Red and pink tulips bundle'
  },
  {
    id: 'f9',
    title: 'Lily Elegance',
    category: 'Flowers',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop',
    description: 'White lilies arrangement'
  },
  {
    id: 'f10',
    title: 'Daisy Happiness',
    category: 'Flowers',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1563241527-3004b57d98b0?w=500&h=500&fit=crop',
    description: 'Fresh daisies bouquet'
  },
  {
    id: 'f11',
    title: 'Cherry Blossom Dreams',
    category: 'Flowers',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1585714052207-4df46433b375?w=500&h=500&fit=crop',
    description: 'Premium pink cherry blossoms'
  },
  {
    id: 'f12',
    title: 'Iris Fantasy',
    category: 'Flowers',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1591043341393-7b5c9f5b18b1?w=500&h=500&fit=crop',
    description: 'Beautiful iris flowers mix'
  },
  {
    id: 'f13',
    title: 'Peony Romance',
    category: 'Flowers',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1599599810829-c0fb8a1d0fbc?w=500&h=500&fit=crop',
    description: 'Romantic peony arrangement'
  },
  {
    id: 'f14',
    title: 'Lavender Serenity',
    category: 'Flowers',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1606181413073-ac70e289c5cd?w=500&h=500&fit=crop',
    description: 'Calming lavender bouquet'
  },
  {
    id: 'f15',
    title: 'Carnation Beauty',
    category: 'Flowers',
    price: 1550,
    image: 'https://images.unsplash.com/photo-1604265503214-74d440642117?w=500&h=500&fit=crop',
    description: 'Colorful carnation collection'
  },

  // Chocolates (15)
  {
    id: 'c1',
    title: 'Luxury Chocolate Box',
    category: 'Chocolates',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Premium assorted chocolates'
  },
  {
    id: 'c2',
    title: 'Dark Chocolate Dream',
    category: 'Chocolates',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1599599810775-89235eb20f1a?w=500&h=500&fit=crop',
    description: '72% dark chocolate selection'
  },
  {
    id: 'c3',
    title: 'Milk Chocolate Bliss',
    category: 'Chocolates',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1599599811276-0e752cb5e600?w=500&h=500&fit=crop',
    description: 'Smooth milk chocolate collection'
  },
  {
    id: 'c4',
    title: 'White Chocolate Fantasy',
    category: 'Chocolates',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1599599811232-39fd51d82fcd?w=500&h=500&fit=crop',
    description: 'Delicate white chocolate box'
  },
  {
    id: 'c5',
    title: 'Chocolate Truffle Paradise',
    category: 'Chocolates',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1599599811174-0b45b27b8b87?w=500&h=500&fit=crop',
    description: 'Handmade chocolate truffles'
  },
  {
    id: 'c6',
    title: 'Almond Chocolate Delight',
    category: 'Chocolates',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1599599812029-c0ad5c9b8159?w=500&h=500&fit=crop',
    description: 'Almonds coated in chocolate'
  },
  {
    id: 'c7',
    title: 'Hazelnut Heaven',
    category: 'Chocolates',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1599599812130-e4a8a8f4f3e1?w=500&h=500&fit=crop',
    description: 'Hazelnut chocolate collection'
  },
  {
    id: 'c8',
    title: 'Strawberry Chocolate Kiss',
    category: 'Chocolates',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1599599811222-9e2b1da0e4f3?w=500&h=500&fit=crop',
    description: 'Strawberry filled chocolate box'
  },
  {
    id: 'c9',
    title: 'Caramel Chocolate Box',
    category: 'Chocolates',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1599599811304-af4f89da3e6a?w=500&h=500&fit=crop',
    description: 'Caramel filled chocolates'
  },
  {
    id: 'c10',
    title: 'Mint Chocolate Bliss',
    category: 'Chocolates',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1599599811385-b2c8d0fdbf2f?w=500&h=500&fit=crop',
    description: 'Refreshing mint chocolate mix'
  },
  {
    id: 'c11',
    title: 'Coffee Chocolate Blend',
    category: 'Chocolates',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1599599811467-6c5d8f8a3f7a?w=500&h=500&fit=crop',
    description: 'Coffee infused chocolate box'
  },
  {
    id: 'c12',
    title: 'Pistachio Chocolate',
    category: 'Chocolates',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1599599811548-03a8f0f3a5a0?w=500&h=500&fit=crop',
    description: 'Premium pistachio chocolate'
  },
  {
    id: 'c13',
    title: 'Walnut Chocolate Box',
    category: 'Chocolates',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1599599811629-c3e8e6f7f9b2?w=500&h=500&fit=crop',
    description: 'Walnut studded chocolates'
  },
  {
    id: 'c14',
    title: 'Raspberry Chocolate',
    category: 'Chocolates',
    price: 1280,
    image: 'https://images.unsplash.com/photo-1599599811710-f8fd3f8a3f5c?w=500&h=500&fit=crop',
    description: 'Raspberry filled chocolate box'
  },
  {
    id: 'c15',
    title: 'Orange Chocolate Bliss',
    category: 'Chocolates',
    price: 1320,
    image: 'https://images.unsplash.com/photo-1599599811791-e6f7f7f9b3d2?w=500&h=500&fit=crop',
    description: 'Orange zest chocolate collection'
  },

  // Cakes (15)
  {
    id: 'k1',
    title: 'Midnight Black Forest Cake',
    category: 'Cakes',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Rich dark chocolate Black Forest cake'
  },
  {
    id: 'k2',
    title: 'Red Velvet Romance',
    category: 'Cakes',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Elegant red velvet cake'
  },
  {
    id: 'k3',
    title: 'Strawberry Cheesecake',
    category: 'Cakes',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Creamy strawberry cheesecake'
  },
  {
    id: 'k4',
    title: 'Chocolate Lava Cake',
    category: 'Cakes',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Decadent chocolate lava cake'
  },
  {
    id: 'k5',
    title: 'Vanilla Dream Cake',
    category: 'Cakes',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Classic vanilla cake with frosting'
  },
  {
    id: 'k6',
    title: 'Caramel Delight Cake',
    category: 'Cakes',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Sweet caramel cake with toppings'
  },
  {
    id: 'k7',
    title: 'Chocolate Mousse Cake',
    category: 'Cakes',
    price: 2750,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Light chocolate mousse cake'
  },
  {
    id: 'k8',
    title: 'Lemon Zest Cake',
    category: 'Cakes',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Refreshing lemon cake'
  },
  {
    id: 'k9',
    title: 'Carrot Cake Supreme',
    category: 'Cakes',
    price: 2350,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Spiced carrot cake with cream cheese frosting'
  },
  {
    id: 'k10',
    title: 'Butterscotch Cake',
    category: 'Cakes',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Rich butterscotch cake'
  },
  {
    id: 'k11',
    title: 'Pistachio Cake',
    category: 'Cakes',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Elegant pistachio cake'
  },
  {
    id: 'k12',
    title: 'Blueberry Cake',
    category: 'Cakes',
    price: 2250,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Fresh blueberry cake'
  },
  {
    id: 'k13',
    title: 'Raspberry White Chocolate Cake',
    category: 'Cakes',
    price: 2650,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Raspberry with white chocolate cake'
  },
  {
    id: 'k14',
    title: 'Coffee Cake Delight',
    category: 'Cakes',
    price: 2350,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Strong coffee flavored cake'
  },
  {
    id: 'k15',
    title: 'Mint Chocolate Cake',
    category: 'Cakes',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Refreshing mint with dark chocolate cake'
  },

  // Combos (10)
  {
    id: 'cb1',
    title: 'Rose & Chocolate Combo',
    category: 'Combos',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Red roses + premium chocolates'
  },
  {
    id: 'cb2',
    title: 'Flower & Cake Combo',
    category: 'Combos',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'Flowers + delicious cake'
  },
  {
    id: 'cb3',
    title: 'Complete Romance Package',
    category: 'Combos',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Roses + Chocolates + Cake'
  },
  {
    id: 'cb4',
    title: 'Luxury Love Combo',
    category: 'Combos',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Premium flowers + luxury chocolates'
  },
  {
    id: 'cb5',
    title: 'Sweet Dreams Combo',
    category: 'Combos',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Chocolates + Red velvet cake'
  },
  {
    id: 'cb6',
    title: 'Midnight Magic Combo',
    category: 'Combos',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'Premium flowers + black forest cake + chocolates'
  },
  {
    id: 'cb7',
    title: 'Express Love Combo',
    category: 'Combos',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Flower bouquet + chocolate box'
  },
  {
    id: 'cb8',
    title: 'Anniversary Special Combo',
    category: 'Combos',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Premium everything for anniversary'
  },
  {
    id: 'cb9',
    title: 'Romantic Evening Combo',
    category: 'Combos',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'White flowers + cake + wine chocolates'
  },
  {
    id: 'cb10',
    title: 'Ultimate Midnight Combo',
    category: 'Combos',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Everything - ultimate luxury combo'
  },

  // Customized Boxes (5)
  {
    id: 'cb11',
    title: 'Custom Message Box',
    category: 'Customized Boxes',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Personalized gift box with custom message'
  },
  {
    id: 'cb12',
    title: 'Photo Memory Box',
    category: 'Customized Boxes',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'Custom photo printed on luxury box'
  },
  {
    id: 'cb13',
    title: 'Premium Wooden Gift Box',
    category: 'Customized Boxes',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    description: 'Elegant wooden box with personalization'
  },
  {
    id: 'cb14',
    title: 'Luxury Velvet Gift Box',
    category: 'Customized Boxes',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=500&h=500&fit=crop',
    description: 'Velvet luxury box with custom design'
  },
  {
    id: 'cb15',
    title: 'Custom Engraved Box',
    category: 'Customized Boxes',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    description: 'Hand-engraved personalized gift box'
  },
];
