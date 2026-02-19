export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          title: string;
          price: number;
          category: string;
          description: string;
          image_url: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          price: number;
          category: string;
          description?: string;
          image_url: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          price?: number;
          category?: string;
          description?: string;
          image_url?: string;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          customer_info: CustomerInfo;
          cart_items: CartItem[];
          total_price: number;
          trx_id: string;
          delivery_time: string;
          gift_message: string;
          recipient_name: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_info: CustomerInfo;
          cart_items: CartItem[];
          total_price: number;
          trx_id: string;
          delivery_time: string;
          gift_message?: string;
          recipient_name: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          customer_info?: CustomerInfo;
          cart_items?: CartItem[];
          total_price?: number;
          trx_id?: string;
          delivery_time?: string;
          gift_message?: string;
          recipient_name?: string;
          status?: string;
          created_at?: string;
        };
      };
    };
  };
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image_url: string;
}

export type Product = Database['public']['Tables']['products']['Row'];
export type Order = Database['public']['Tables']['orders']['Row'];
