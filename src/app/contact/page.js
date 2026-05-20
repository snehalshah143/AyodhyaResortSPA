'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import { RESORT } from '@/lib/constants';
import { getWhatsAppURL } from '@/lib/utils';

const schema = z.object({
  name:        z.string().min(2, 'Name must be at least 2 characters'),
  email:       z.string().email('Please enter a valid email'),
  phone:       z.string().min(10, 'Please enter a valid phone number'),
  subject:     z.string().min(5, 'Subject is required'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message:     z.string().min(20, 'Message must be at least 20 characters'),
});

const contactInfo = [
  { Icon: Phone,  title: 'Call Us',       lines: ['+91 9632359042'],                       action: { href: 'tel:+919632359042',                    label: 'Call Now' },                 color: 'bg-saffron-50 text-saffron-500' },
  { Icon: Mail,   title: 'Email Us',      lines: ['mptayodhyaresort@gmail.com'],            action: { href: 'mailto:mptayodhyaresort@gmail.com',    label: 'Send Email' },               color: 'bg-blue-50 text-blue-500' },
  { Icon: MapPin, title: 'Visit Us',      lines: ['Burhanpur – Khandwa Road','Burhanpur, Madhya Pradesh'], action: { href: 'https://maps.google.com/?q=Burhanpur+MP', label: 'Get Directions', external: true }, color: 'bg-green-50 text-green-500' },
  { Icon: Clock,  title: 'Reception Hours', lines: ['Open 24 × 7', 'All Days of the Year'],                                                                                            color: 'bg-purple-50 text-purple-500' },
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const msg = `Hello! I have an inquiry for Ayodhya Resort.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${data.inquiryType}
Subject: ${data.subject}

Message:
${data.message}`;

    window.open(getWhatsAppURL('general', msg), '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <div className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1C0A00 0%, #5C2A00 40%, #A04A00 70%, #C86000 100%)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><Phone size={14} /> Get in Touch</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">Contact{' '}<span className="shimmer-text">Us</span></h1>
            <p className="text-white/70 text-lg mt-3">We'd love to hear from you — bookings, inquiries, or just saying hello</p>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
                <div className="section-label">Contact Information</div>
                <h2 className="section-title text-3xl mb-6">We're Here to{' '}<span className="shimmer-text">Help</span></h2>
              </motion.div>

              {contactInfo.map((info, i) => {
                const { Icon } = info;
                return (
                  <motion.div key={info.title} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-5 shadow-luxury-sm hover:shadow-luxury transition-all duration-200 flex gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}><Icon size={20} /></div>
                    <div className="flex-1">
                      <p className="font-semibold text-resort-900 mb-1">{info.title}</p>
                      {info.lines.map(line => <p key={line} className="text-resort-600 text-sm">{line}</p>)}
                      {info.action && (
                        <a href={info.action.href} target={info.action.external ? '_blank' : undefined} rel={info.action.external ? 'noopener noreferrer' : undefined} className="text-saffron-600 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:text-saffron-700 transition-colors">
                          {info.action.label} →
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              <motion.a initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}
                href={getWhatsAppURL('general')} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 text-white rounded-2xl p-5 hover:bg-green-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">{WA_ICON}</div>
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Get instant responses</p>
                </div>
              </motion.a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="bg-white rounded-3xl shadow-luxury p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-green-500" /></div>
                    <h3 className="font-serif text-2xl font-bold text-resort-900 mb-3">Message Sent via WhatsApp!</h3>
                    <p className="text-resort-600">Your message has been forwarded to our team. We'll respond within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif font-bold text-2xl text-resort-900 mb-2">Send Us a Message</h3>
                    <p className="text-resort-500 text-sm mb-8">Fill in the details below — we'll receive your message via WhatsApp instantly.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div><label className="luxury-label">Your Name *</label><input {...register('name')} className="luxury-input" placeholder="John Doe" />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}</div>
                        <div><label className="luxury-label">Phone Number *</label><input {...register('phone')} type="tel" className="luxury-input" placeholder="+91 XXXXX XXXXX" />{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}</div>
                      </div>

                      <div><label className="luxury-label">Email Address *</label><input {...register('email')} type="email" className="luxury-input" placeholder="your@email.com" />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}</div>

                      <div>
                        <label className="luxury-label">Inquiry Type *</label>
                        <select {...register('inquiryType')} className="luxury-input">
                          <option value="">Select inquiry type</option>
                          <option value="Room Booking">Room Booking</option>
                          <option value="Wedding / Event">Wedding / Event</option>
                          <option value="Dining Reservation">Dining Reservation</option>
                          <option value="Activities & Experiences">Activities & Experiences</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                        {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType.message}</p>}
                      </div>

                      <div><label className="luxury-label">Subject *</label><input {...register('subject')} className="luxury-input" placeholder="What can we help you with?" />{errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}</div>

                      <div>
                        <label className="luxury-label">Your Message *</label>
                        <textarea {...register('message')} rows={5} className="luxury-input resize-none" placeholder="Please describe your inquiry or special requirements..." />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                      </div>

                      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4">
                        {isSubmitting
                          ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Opening WhatsApp...</span>
                          : <span className="flex items-center gap-2"><Send size={16} /> Send via WhatsApp</span>
                        }
                      </button>

                      <p className="text-center text-resort-400 text-xs">
                        Or call us directly at <a href={`tel:${RESORT.phone}`} className="text-saffron-600 font-semibold hover:underline">{RESORT.phone}</a>
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="mt-12 rounded-3xl overflow-hidden shadow-luxury-lg h-72 md:h-96">
            <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-saffron-500 mx-auto mb-4" />
                <p className="font-serif text-2xl font-semibold text-resort-800">Ayodhya Resort</p>
                <p className="text-resort-600 mt-1">Burhanpur – Khandwa Road, Burhanpur, MP</p>
                <a href="https://maps.google.com/?q=Burhanpur+Khandwa+Road+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">Open in Google Maps</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
