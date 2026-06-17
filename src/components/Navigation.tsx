import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../imgs/logo.jpeg';

interface Props {
  onCartOpen: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Shop', href: '#shop' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ onCartOpen }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <div className="w-1/12 h-1/12 rounded-full bg-gradient-to-br from-rose-500 to-blush-300 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
             <img src={logo} alt="Logo" className='w-full h-full rounded-full' />
            </div>
            <span className={`font-playfair italic text-3xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-rose-900' : 'text-white'}`}>
              glowbydipali
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  scrolled ? 'text-rose-800 hover:text-rose-500' : 'text-white/85 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-rose-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-colors ${scrolled ? 'text-rose-800 hover:bg-rose-50' : 'text-white hover:bg-white/10'}`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => scrollTo('#booking')}
              className="hidden md:block px-5 py-2.5 w-28 rounded-full bg-gradient-to-r from-rose-500 to-blush-400 text-white text-sm font-sans font-medium tracking-wide shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 ${scrolled ? 'text-rose-800' : 'text-white'}`}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 inset-y-0 w-72 bg-cream-100 shadow-2xl transition-transform duration-300 flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex items-center justify-between border-b border-rose-100">
            <span className="font-playfair text-xl font-semibold text-rose-900">Glow <em className="not-italic italic font-normal">by</em> Dipali</span>
            <button onClick={() => setMobileOpen(false)} className="text-rose-600"><X size={20} /></button>
          </div>
          <nav className="flex-1 p-6 flex flex-col gap-5">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left font-sans text-lg font-medium text-rose-800 hover:text-rose-500 transition-colors">
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#booking')}
              className="mt-4 w-full py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-blush-400 text-white font-sans font-medium shadow-glow"
            >
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
