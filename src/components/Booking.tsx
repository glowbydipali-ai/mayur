import { useState } from 'react';
import { Calendar, Clock, Check, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { BookingForm } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  'Bridal Makeup',
  'Editorial & Fashion',
  'Special Occasion',
  'Group / Bridal Party',
  'Natural Glam',
  'Makeup Masterclass',
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const EMPTY: BookingForm = { name: '', email: '', phone: '', service: '', booking_date: '', time_slot: '', notes: '' };

export default function Booking() {
  const [form, setForm] = useState<BookingForm>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { ref, visible } = useScrollReveal();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.booking_date || !form.time_slot) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: dbErr } = await supabase.from('bookings').insert([form]);
    setLoading(false);
    if (dbErr) setError('Something went wrong. Please try again.');
    else { setSuccess(true); setForm(EMPTY); }
  };

  const input = 'w-full bg-white border border-rose-100 rounded-xl px-4 py-3 font-sans text-sm text-rose-900 placeholder:text-rose-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all';

  return (
    <section
      id="booking"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-cream-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left info */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-4 block">Reserve Your Date</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-rose-900 leading-tight mb-5">
              Book Your <span className="italic text-rose-500">Session</span>
            </h2>
            <p className="font-sans text-sm text-rose-800/65 leading-relaxed mb-8">
              Every appointment is a personalized experience. After booking, you'll receive a confirmation within 24 hours along with your session details and preparation tips.
            </p>

            {/* Process steps */}
            <div className="space-y-4 mb-10">
              {[
                { step: '01', title: 'Submit Your Request', desc: 'Fill in the form with your date and service preference.' },
                { step: '02', title: 'Confirmation in 24hrs', desc: 'Dipali will confirm availability and send session details.' },
                { step: '03', title: 'Glam Day!', desc: 'Relax and let your transformation begin.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-blush-400 flex items-center justify-center flex-shrink-0 text-white font-sans text-xs font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-rose-900">{item.title}</h4>
                    <p className="font-sans text-xs text-rose-700/60 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Makeup brushes"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent" />
              <blockquote className="absolute bottom-5 left-5 right-5">
                <p className="font-playfair text-xl text-white italic font-medium">"The details make the difference."</p>
                <cite className="font-sans text-white/55 text-xs not-italic mt-1 block">— Dipali</cite>
              </blockquote>
            </div>
          </div>

          {/* Right form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-card-hover border border-rose-100">
              {success ? (
                <div className="text-center py-14 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-rose-900 mb-3">Booking Received!</h3>
                  <p className="font-sans text-sm text-rose-800/65 mb-7 max-w-xs mx-auto">
                    Thank you! Dipali will confirm your appointment within 24 hours. Check your email for details.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 rounded-full bg-rose-100 text-rose-700 font-sans font-medium hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="font-playfair text-2xl font-semibold text-rose-900 mb-1">Your Details</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Name *</label>
                      <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className={input} />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Phone</label>
                      <input name="phone" value={form.phone} onChange={onChange} placeholder="+1 (555) 000" className={input} />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" className={input} />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Service *</label>
                    <select name="service" value={form.service} onChange={onChange} className={input}>
                      <option value="">Select a service</option>
                      {SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <Calendar size={11} /> Date *
                      </label>
                      <input
                        type="date"
                        name="booking_date"
                        value={form.booking_date}
                        onChange={onChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={input}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <Clock size={11} /> Time *
                      </label>
                      <select name="time_slot" value={form.time_slot} onChange={onChange} className={input}>
                        <option value="">Select time</option>
                        {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-rose-500 uppercase tracking-wide mb-1.5 block">Notes</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={onChange}
                      rows={3}
                      placeholder="Vision, event details, special requests..."
                      className={`${input} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-blush-400 text-white font-sans font-medium tracking-wide shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? <><Loader size={16} className="animate-spin" /> Confirming...</> : 'Request Appointment'}
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
