import { Gem, Camera, Star, Users, Flower, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  {
    icon: Gem,
    title: 'Bridal Makeup',
    desc: 'Your wedding day deserves flawless perfection. Includes bridal trial, day-of application, and a touch-up kit for the reception.',
    price: 'From ₹25000',
    duration: '3–4 hours',
    featured: true,
  },
  {
    icon: Camera,
    title: 'Editorial & Fashion',
    desc: 'High-impact, camera-ready looks for shoots, runway, and print. Experienced with studio and natural light setups.',
    price: 'From ₹10000',
    duration: '2–3 hours',
    featured: false,
  },
  {
    icon: Star,
    title: 'Special Occasion',
    desc: 'Gala, prom, anniversaries, graduations — look & glow by glowbydipali unforgettable for every milestone that matters.',
    price: 'From ₹5000',
    duration: '1.5–2 hours',
    featured: false,
  },
  {
    icon: Users,
    title: 'Group & Bridal Party',
    desc: 'Coordinated, cohesive looks & vibes for the full bridal party or group event. On-location service available.',
    price: 'From ₹4000/person',
    duration: 'Varies',
    featured: false,
  },
  {
    icon: Flower,
    title: 'Natural Glam',
    desc: 'Effortlessly radiant — your skin, but better. Perfect for business portraits, everyday luxury, and first dates.',
    price: 'From ₹4000',
    duration: '1 hour',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Makeup Masterclass',
    desc: 'Learn professional-level technique in a 1-on-1 session with Dipali. Curriculum customized to your skill level.',
    price: 'From ₹8000',
    duration: '2 hours',
    featured: false,
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-3 block">What I Offer</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight mb-4">
            Services &amp; <span className="italic text-rose-500">Experiences</span>
          </h2>
          <p className="font-sans text-sm text-rose-800/60 leading-relaxed">
            From intimate wedding mornings to high-fashion editorials — every service is crafted with precision and personal care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl p-7 transition-all duration-700 cursor-default ${
                s.featured
                  ? 'bg-gradient-to-br from-rose-700 to-rose-950 shadow-glow-lg'
                  : 'bg-cream-100 hover:bg-white border border-cream-200 shadow-card hover:shadow-card-hover hover:-translate-y-1'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {s.featured && (
                <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="font-sans text-white/80 text-xs font-medium">Most Popular</span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                s.featured ? 'bg-white/15' : 'bg-rose-100 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-blush-400'
              }`}>
                <s.icon size={21} className={s.featured ? 'text-white' : 'text-rose-500 group-hover:text-white transition-colors duration-300'} />
              </div>

              <h3 className={`font-playfair text-xl font-semibold mb-3 ${s.featured ? 'text-white' : 'text-rose-900'}`}>{s.title}</h3>
              <p className={`font-sans text-sm leading-relaxed mb-6 ${s.featured ? 'text-white/70' : 'text-rose-800/60'}`}>{s.desc}</p>

              <div className={`flex items-center justify-between pt-5 border-t ${s.featured ? 'border-white/15' : 'border-rose-100'}`}>
                <div>
                  <p className={`font-playfair text-lg font-semibold ${s.featured ? 'text-white' : 'text-rose-700'}`}>{s.price}</p>
                  <p className={`font-sans text-xs mt-0.5 ${s.featured ? 'text-white/55' : 'text-rose-400'}`}>{s.duration}</p>
                </div>
                <button
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200 ${
                    s.featured
                      ? 'bg-white text-rose-700 hover:bg-rose-50'
                      : 'bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white'
                  }`}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
