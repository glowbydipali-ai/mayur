/*
# GlowByDipali Full Schema

## Tables
1. `products` — Makeup products in the shop (id, name, category, price, description, image_url, badge, in_stock)
2. `bookings` — Appointment bookings (id, name, email, phone, service, booking_date, time_slot, notes, status)
3. `contact_messages` — Contact form submissions (id, name, email, subject, message)

## Security
- RLS enabled on all tables
- Public anon + authenticated read/write (single-tenant, no sign-in required)

## Seed Data
- 8 curated makeup products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  price numeric(10,2) NOT NULL,
  description text,
  image_url text,
  badge text,
  in_stock boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  booking_date date NOT NULL,
  time_slot text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

INSERT INTO products (name, category, price, description, image_url, badge) VALUES
  ('Velvet Matte Lipstick', 'lips', 10041.00, 'Long-lasting velvet matte formula in 12 stunning shades. Hydrating, no-transfer finish.', 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600', 'Bestseller'),
  ('Glow Serum Foundation', 'foundation', 24975.00, 'Buildable coverage with a luminous skin-like finish. SPF 30. 40 inclusive shades.', 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600', 'New'),
  ('Smoky Eye Palette', 'eyes', 5695.00, '12 highly-pigmented shades from nude to deep charcoal. Blendable, long-wearing formula.', 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600', NULL),
  ('Sculpt & Glow Contour Kit', 'cheeks', 20073.00, 'Buildable contour, blush, and highlight trio for a sculpted, radiant look.', 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600', 'Fan Fave'),
  ('Precision Liner Pen', 'eyes', 17732.00, 'Ultra-fine tip for precise lines. Waterproof, smudge-proof, 24-hour wear.', 'https://images.pexels.com/photos/2611512/pexels-photo-2611512.jpeg?auto=compress&cs=tinysrgb&w=600', NULL),
  ('Flawless Setting Powder', 'foundation', 12133.00, 'Translucent finishing powder that blurs pores and extends wear. Oil-controlling formula.', 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600', NULL),
  ('Pro Makeup Brush Set', 'tools', 9775.00, '12-piece professional brush set with vegan synthetic bristles and rose-gold ferrules.', 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600', 'Pro Pick'),
  ('Glass Lip Gloss', 'lips', 5626.00, 'Mirror-shine, non-sticky lip gloss in 8 sheer shades. Plumping peptide formula.', 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600', 'New')
ON CONFLICT DO NOTHING;
