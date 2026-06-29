import { useState } from 'react';
import { CartProvider } from '../context/CartContext';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Shop from './Shop';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Booking from './Booking';
import Contact from './Contact';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-100 antialiased">
        <Navigation onCartOpen={() => setCartOpen(true)} />
        <main>
          <Hero />
          <About />
          <Services />
          <Shop />
          <Gallery />
          <Testimonials />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}