import { ArrowBigRightDashIcon, ArrowUp, Mail } from 'lucide-react';
import logo from '../imgs/logo.jpeg';
import whatsapp from '../imgs/whatsapp.png'

const FOOTER_NAV = {
  Services: [
    { name: 'Bridal Makeup', link: '#services' },
    { name: 'Editorial & Fashion', link: '#services' },
    { name: 'Special Occasion', link: '#services' },
    { name: 'Group Bookings', link: '#services' },
    { name: 'Masterclass', link: '#services' },
  ],

  Shop: [
    { name: 'Foundation', link: '#shop' },
    { name: 'Lips', link: '#shop' },
    { name: 'Eyes', link: '#shop' },
    { name: 'Cheeks', link: '#shop' },
    { name: 'Tools', link: '#shop' },
  ],

  Info: [
    { name: 'About Dipali', link: '#about' },
    { name: 'Portfolio', link: '#gallery' },
    { name: 'Press', link: '#testimonials' },
    { name: 'Policies & FAQ', link: '#contact' },
  ],
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
                             <img src={logo} alt="Logo" className='w-full h-full rounded-full' />
              </div>
              <span className="font-playfair text-2xl text-white font-semibold">
                glowbydipali
              </span>
            </div>
            <p className="font-cormorant text-lg italic text-white/55 leading-relaxed mb-6 max-w-xs">
              "Enhancing natural beauty through the artistry of professional makeup -Ishu."
            </p>
          
          </div>

          {/* Nav columns */}
{Object.entries(FOOTER_NAV).map(([section, links]) => (
  <div key={section}>
    <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-rose-300 mb-5">
      {section}
    </h4>

    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            className="font-sans text-sm text-white/45 hover:text-white/70 transition-colors cursor-pointer"
          >
            {item.name}
          </a>
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
              <ArrowBigRightDashIcon size={16} className="text-blush-300" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-white">Join the glowbydipali WhatsApp Channel</p>
              <p className="font-sans text-xs text-white/45">Beauty tips, exclusive offers &amp; new arrivals.</p>
            </div>
          </div>
          <div className="flex gap-3 relative justify-end w-full md:max-w-xs md:ml-auto">
            <button 
            onClick={() => window.open("https://whatsapp.com/channel/0029VbCLrQSCsU9OUQAaGh2M",
              "_blank"
            )}
            className="rounded-3xl w-1/5 text-white text-sm font-sans font-medium whitespace-nowrap hover:shadow-glow transition-shadow">
                     <img
  src={whatsapp}
  className="w-full h-full object-cover object-[70%_center] md:object-center"
/>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} glowbydipali. All rights reserved.
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
