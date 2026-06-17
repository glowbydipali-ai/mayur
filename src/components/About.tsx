import { Award, Heart, Brush, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HIGHLIGHTS = [
  { icon: Award, title: 'Award-Winning Artist', desc: 'Recognized by top bridal & fashion publications for outstanding artistry.' },
  { icon: Heart, title: 'Client-Centred Approach', desc: 'Every look is tailored to enhance your natural beauty and reflect your personality.' },
  { icon: GraduationCap, title: 'Certified Professional', desc: 'Trained under industry masters with international certifications.' },
  { icon: Brush, title: 'Pro-Grade Tools & Products', desc: 'Works exclusively with premium, skin-safe, long-wearing formulas.' },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-cream-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-rose-200/50 to-blush-100/40 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Dipali at work"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/35 to-transparent" />
            </div>

            {/* Floating badge — years */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-card-hover border border-rose-100">
              <p className="font-playfair text-3xl font-bold text-rose-600 leading-none">8+</p>
              <p className="font-sans text-xs text-rose-400 mt-1 font-medium">Years of Artistry</p>
            </div>

            {/* Floating badge — award */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3.5 shadow-card border border-rose-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-blush-400 flex items-center justify-center flex-shrink-0">
                <Award size={16} className="text-white" />
              </div>
              <div>
                <p className="font-sans text-xs font-bold text-rose-900 leading-none">Top Artist</p>
                <p className="font-sans text-[10px] text-rose-400 mt-0.5">2023 · 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-4 block">
              About the Artist
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight mb-5">
              Meet <span className="italic text-rose-500">Dipali</span>
            </h2>
            <p className="font-cormorant text-xl text-rose-700 italic leading-relaxed mb-5">
              "Beauty is not about perfection — it's about confidence, expression, and feeling like the best version of yourself."
            </p>
            <p className="font-sans text-sm text-rose-800/65 leading-relaxed mb-4">
              With over 8 years of professional experience, Dipali has transformed hundreds of faces for weddings, fashion editorials, film, and special occasions. Her signature style blends classic elegance with a modern eye, creating looks that are timeless and deeply personal.
            </p>
            <p className="font-sans text-sm text-rose-800/65 leading-relaxed mb-10">
              Passionate about clean beauty, Dipali has hand-curated a shop of professional-grade products that she trusts and uses in every session.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map(h => (
                <div key={h.title} className="group flex gap-3.5 items-start p-4 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-card cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-blush-400 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <h.icon size={17} className="text-rose-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-rose-900 mb-1">{h.title}</h4>
                    <p className="font-sans text-xs text-rose-700/60 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
