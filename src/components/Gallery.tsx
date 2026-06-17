import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IMAGES = [
  { src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bridal Look', cat: 'Bridal', tall: true },
  { src: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Natural Glam', cat: 'Natural', tall: false },
  { src: 'https://images.pexels.com/photos/2583582/pexels-photo-2583582.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Smoky Eye', cat: 'Evening', tall: false },
  { src: 'https://hdmakeover.com/wp-content/uploads/2025/07/hd-bridal-makeup.webp', alt: 'Editorial', cat: 'Editorial', tall: true },
  { src: 'https://images.pexels.com/photos/3762874/pexels-photo-3762874.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Contour & Glow', cat: 'Glam', tall: false },
  { src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Soft Bridal', cat: 'Bridal', tall: false },
  { src: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Product Close-up', cat: 'Products', tall: false },
  { src: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Pro Brushes', cat: 'Tools', tall: false },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-3 block">Portfolio</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight mb-4">
            The Art of <span className="italic text-rose-500">Transformation</span>
          </h2>
          <p className="font-sans text-sm text-rose-800/60 leading-relaxed">
            A glimpse into worlds created — one face at a time. Each look is a unique collaboration between artist and client.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {IMAGES.map((img, i) => (
            <div
              key={img.alt}
              onClick={() => setLightbox(img.src)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid transition-all duration-700 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${img.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-1">
                  {img.cat}
                </span>
                <p className="font-sans text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-4xl w-full max-h-[88vh] object-contain rounded-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
