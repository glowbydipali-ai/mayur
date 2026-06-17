export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string | null;
  image_url: string | null;
  badge: string | null;
  in_stock: boolean;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  booking_date: string;
  time_slot: string;
  notes: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
