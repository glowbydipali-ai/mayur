import { ChevronDown } from 'lucide-react';
import hero from '../imgs/hero.png'
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const STATS = [
  { value: '500+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Products Curated' },
  { value: '4.9★', label: 'Average Rating' },
];

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
  src={hero}
  alt="Makeup artistry background"
  className="w-full h-full object-cover object-[70%_center] md:object-center"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-rose-900/70 to-rose-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 via-transparent to-transparent" />
      </div>

      {/* Soft orb accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blush-300/8 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-rose-400/10 blur-3xl pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-blush-300 animate-pulse" />
            <span className="font-sans text-white/90 text-xs font-medium tracking-[0.18em] uppercase">Luxury Makeup Artistry</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-5xl md:text-7xl font-semibold text-white leading-[1.1] mb-5 animate-fade-up">
            Your Glow,
            <br />
            <span className="italic font-normal text-blush-200">Perfected.</span>
          </h1>

          {/* Quote */}
          <p className="font-cormorant text-xl md:text-2xl text-white/75 italic leading-relaxed mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            "Every face tells a story. I help yours shine."
          </p>

          {/* Body */}
          <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed mb-10 max-w-lg animate-fade-up" style={{ animationDelay: '0.25s' }}>
            Award-winning makeup artist specializing in bridal, editorial, and special occasion looks —
            plus a curated shop of professional beauty products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <button
              onClick={() => scrollTo('#booking')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-blush-400 text-white font-sans font-medium tracking-wide shadow-glow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Book Your Session
            </button>
            <button
              onClick={() => scrollTo('#gallery')}
              className="px-8 py-4 rounded-full border border-white/30 text-white font-sans font-medium tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Portfolio
            </button> 
          </div>

          {/* Social Icons */}
<div
  className="flex flex-wrap gap-4 my-4 animate-fade-up"
  style={{ animationDelay: "0.35s" }}
>
  {/* Facebook */}
  <button
    onClick={() =>
      window.open(
        "https://www.facebook.com/share/1EkWHEFY5z/?mibextid=wwXIfr",
        "_blank"
      )
    }
    className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-110 transition-all duration-300"
  >
    <Facebook size={32} />
  </button>

  {/* Instagram */}
  <button
    onClick={() =>
      window.open(
        "https://www.instagram.com/glowbydipali?igsh=OHI1NzJ0N2I3M2t1",
        "_blank"
      )
    }
    className="p-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover:scale-110 transition-all duration-300"
  >
    <Instagram size={32} />
  </button>

  {/* YouTube */}
  <button
    onClick={() =>
      window.open(
        "https://youtube.com/@glowbydipali?si=DAUxauzXhiSLxzXr",
        "_blank"
      )
    }
    className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:scale-110 transition-all duration-300"
  >
    <Youtube size={32} />
  </button>

  {/* Twitter / X */}
  <button
    onClick={() =>
      window.open(
        "https://in.pinterest.com/glowbydipali/",
        "_blank"
      )
    }
    className="p-4 rounded-full bg-black hover:bg-gray-800 text-white shadow-lg hover:scale-110 transition-all duration-300"
  >
    <Twitter size={32} />
  </button>
</div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {STATS.map(s => (
            <div key={s.label} className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl py-4 px-3 text-center">
              <p className="font-playfair text-2xl font-semibold text-white mb-1">{s.value}</p>
              <p className="font-sans text-[11px] text-white/55 tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
