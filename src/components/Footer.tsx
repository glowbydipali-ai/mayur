import { Sparkles, ArrowUp, Mail } from 'lucide-react';

const FOOTER_NAV = {
  Services: ['Bridal Makeup', 'Editorial & Fashion', 'Special Occasion', 'Group Bookings', 'Masterclass'],
  Shop: ['Foundation', 'Lips', 'Eyes', 'Cheeks', 'Tools'],
  Info: ['About Dipali', 'Portfolio', 'Press', 'Policies & FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-rose-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-blush-400 flex items-center justify-center">
                <Sparkles size={15} className="text-white" />
              </div>
              <span className="font-playfair text-2xl text-white font-semibold">
                Glow <em className="not-italic italic font-normal">by</em> Dipali
              </span>
            </div>
            <p className="font-cormorant text-lg italic text-white/55 leading-relaxed mb-6 max-w-xs">
              "Enhancing natural beauty through the artistry of professional makeup."
            </p>
            <div className="flex gap-2.5">
              {['IG', 'YT', 'TK', 'PIN'].map(s => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all cursor-pointer"
                >
                  <span className="font-sans text-[11px] text-white/65 font-semibold">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-rose-300 mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <span className="font-sans text-sm text-white/45 hover:text-white/70 transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="bg-white/6 border border-white/10 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center gap-5">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-rose-500/30 flex items-center justify-center">
              <Mail size={16} className="text-blush-300" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-white">Join the Glow Community</p>
              <p className="font-sans text-xs text-white/45">Beauty tips, exclusive offers &amp; new arrivals.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:max-w-xs md:ml-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-rose-400 transition-colors"
            />
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-blush-400 text-white text-sm font-sans font-medium whitespace-nowrap hover:shadow-glow transition-shadow">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Glow by Dipali. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms', 'Cookies'].map(item => (
              <span key={item} className="font-sans text-xs text-white/30 hover:text-white/55 transition-colors cursor-pointer">
                {item}
              </span>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all"
          >
            <ArrowUp size={14} className="text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
}
