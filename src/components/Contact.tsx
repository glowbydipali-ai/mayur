import { useState } from 'react';
import { MapPin, Mail, Phone, Check, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { ContactForm } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMPTY: ContactForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { ref, visible } = useScrollReveal();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Name, email, and message are required.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: dbErr } = await supabase.from('contact_messages').insert([form]);
    setLoading(false);
    if (dbErr) setError('Something went wrong. Please try again.');
    else { setSuccess(true); setForm(EMPTY); }
  };

  const input = 'w-full bg-cream-100 border border-rose-100 rounded-xl px-4 py-3 font-sans text-sm text-rose-900 placeholder:text-rose-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all';

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-3 block">Get In Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight mb-4">
            Let's <span className="italic text-rose-500">Connect</span>
          </h2>
          <p className="font-sans text-sm text-rose-800/60 leading-relaxed">
            Questions about services, products, or collaborations? Dipali would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: 'Location', value: 'Los Angeles, CA\nOn-location & Studio' },
                { icon: Mail, label: 'Email', value: 'hello@glowbydipali.com' },
                { icon: Phone, label: 'Phone', value: '+1 (310) 555-0192' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-blush-400 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <item.icon size={17} className="text-rose-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-rose-400 uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-sans text-sm text-rose-800 whitespace-pre-line leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-rose-100 mb-8">
              <p className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-rose-400 mb-4">Follow Along</p>
              <div className="flex flex-wrap gap-2">
                {['Instagram', 'Pinterest', 'TikTok', 'YouTube'].map(p => (
                  <div key={p} className="px-3 py-2 rounded-xl bg-rose-50 border border-rose-100 hover:bg-rose-500 hover:border-rose-500 cursor-pointer transition-all group">
                    <span className="font-sans text-xs text-rose-600 group-hover:text-white transition-colors font-semibold">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability chip */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-rose-700 to-rose-950 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-sans text-sm font-semibold">Currently Accepting Bookings</span>
              </div>
              <p className="font-sans text-xs text-white/60 leading-relaxed">
                Limited spots for 2025 weddings. Early booking strongly recommended for peak season dates.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-cream-100 rounded-3xl p-8 border border-rose-100">
              {success ? (
                <div className="text-center py-14 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-rose-900 mb-3">Message Sent!</h3>
                  <p className="font-sans text-sm text-rose-800/65 mb-7">Dipali typically responds within 24–48 hours.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 rounded-full bg-rose-100 text-rose-700 font-sans font-medium hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Name *</label>
                      <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className={input} />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" className={input} />
                    </div>
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Subject</label>
                    <input name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" className={input} />
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Message *</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell me what you're looking for..." className={`${input} resize-none`} />
                  </div>
                  {error && (
                    <p className="font-sans text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-blush-400 text-white font-sans font-medium tracking-wide shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? <><Loader size={16} className="animate-spin" /> Sending...</> : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
