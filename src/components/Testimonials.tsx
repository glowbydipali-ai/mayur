import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
 {
    name: 'Devyani',
    role: 'Bride, Pune • Oct 2024',
    img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Dipali tai made my bridal look absolutely perfect. She understood exactly what I wanted and created a beautiful Maharashtrian bridal look. I received compliments from everyone throughout the wedding.',
  },
  {
    name: 'Harshada',
    role: 'Engagement Client, Mumbai',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'I wanted a soft and elegant look for my engagement ceremony, and Dipali exceeded my expectations. Her makeup was flawless, long-lasting, and looked amazing in every photograph.',
  },
  {
    name: 'Lina',
    role: 'Special Occasion Client, Nashik',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'From consultation to the final look, everything was smooth and professional. Dipali carefully listened to my preferences and created a look that perfectly suited my personality.',
  },
  {
    name: 'Prachi',
    role: 'Reception Client, Aurangabad',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Dipali is incredibly talented and professional. My reception makeup looked elegant, natural, and stayed perfect throughout the event. I felt confident and beautiful.',
  },
  {
    name: 'Vidhya',
    role: 'Wedding Guest, Kolhapur',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'The makeup was subtle, classy, and exactly what I had imagined. Dipali has an eye for detail and knows how to enhance natural beauty beautifully.',
  },
  {
    name: 'Smita',
    role: 'Party Makeup Client, Thane',
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'I received so many compliments on my look. Dipali was punctual, friendly, and very professional. The makeup lasted the entire evening without any touch-ups.',
  },
  {
    name: 'Harshita',
    role: 'Pre-Wedding Shoot Client, Nagpur',
    img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Dipali created the perfect look for my pre-wedding shoot. The makeup looked stunning both in person and on camera. I couldn’t have asked for a better artist.',
  },
  {
    name: 'Palak',
    role: 'Bridal Client, Solapur',
    img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Choosing Dipali was the best decision for my wedding day. She made me feel comfortable, confident, and beautiful. The final look was beyond my expectations.',
  },
];

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D1525 0%, #200B14 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-blush-300 mb-3 block">Client Love</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white leading-tight">
            Stories of <span className="italic text-blush-300">Transformation</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white/7 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={26} className="text-blush-300/40 mb-4" />
              <p className="font-cormorant text-lg text-white/80 italic leading-relaxed mb-5 line-clamp-3">
                "{t.text}"
              </p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={11} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="font-sans text-sm font-semibold text-white leading-tight">{t.name}</p>
                  <p className="font-sans text-xs text-white/45 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
