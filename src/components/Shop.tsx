import { useEffect, useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CATS = ['all', 'foundation', 'lips', 'eyes', 'cheeks', 'tools'];

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState('all');
  const [justAdded, setJustAdded] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();
  const { ref, visible } = useScrollReveal();

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .order('created_at')
      .then(({ data, error }) => {
        if (!error && data) setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (p: Product) => {
    addToCart(p);
    setJustAdded(prev => ({ ...prev, [p.id]: true }));
    setTimeout(() => setJustAdded(prev => ({ ...prev, [p.id]: false })), 1800);
  };

  const filtered = activeCat === 'all' ? products : products.filter(p => p.category === activeCat);
  return (
    <section
      id="shop"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-cream-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-3 block">Curated Beauty</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight">
              The <span className="italic text-rose-500">Shop</span>
            </h2>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium capitalize transition-all duration-200 ${
                  activeCat === cat
                    ? 'bg-rose-500 text-white shadow-glow'
                    : 'bg-white text-rose-700 border border-rose-200 hover:border-rose-400 hover:text-rose-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white animate-pulse h-80" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image_url ?? ''}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                    style={{ transform: undefined }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-rose-500 text-white text-[11px] font-sans font-semibold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {!product.in_stock && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                      <span className="font-sans text-sm font-semibold text-rose-400">Sold Out</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="font-sans text-[11px] font-semibold text-rose-400 uppercase tracking-[0.12em] capitalize mb-1">{product.category}</p>
                  <h3 className="font-playfair text-lg font-semibold text-rose-900 leading-snug mb-2">{product.name}</h3>
                  <p className="font-sans text-xs text-rose-800/55 line-clamp-2 leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-xl font-semibold text-rose-700">₹{product.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={!product.in_stock}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                        justAdded[product.id]
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed'
                      }`}
                    >
                      {justAdded[product.id] ? (
                        <><Check size={13} /> Added</>
                      ) : (
                        <><ShoppingBag size={13} /> Add</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
