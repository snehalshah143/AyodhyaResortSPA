'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Trees, Building2, CheckCircle2 } from 'lucide-react';
import { getWhatsAppURL } from '@/lib/utils';
import CTABanner from '@/components/home/CTABanner';

const schema = z.object({
  brideName:    z.string().min(2, 'Required'),
  groomName:    z.string().min(2, 'Required'),
  email:        z.string().email('Invalid email'),
  phone:        z.string().min(10, 'Valid phone required'),
  weddingDate:  z.string().optional(),
  guestCount:   z.string().min(1, 'Required'),
  venue:        z.string().optional(),
  budget:       z.string().optional(),
  requirements: z.string().optional(),
});

const venues = [
  { id: 'wedding-lawn', name: 'Royal Wedding Lawn',  capacity: '1000+ Guests', size: '80,000 SqFt', type: 'Outdoor',   Icon: Trees,     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
  { id: 'event-lawn',   name: 'Event Lawn',           capacity: '500+ Guests',  size: '40,000 SqFt', type: 'Outdoor',   Icon: Trees,     image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80' },
  { id: 'banquet1',     name: 'Banquet Hall 1',       capacity: '500 Guests',   size: 'Grand Hall',  type: 'Indoor AC', Icon: Building2, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80' },
  { id: 'banquet2',     name: 'Banquet Hall 2',       capacity: '500 Guests',   size: 'Premium Hall',type: 'Indoor AC', Icon: Building2, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80' },
];

const packages = [
  { name: 'Silver Wedding', price: '₹2,50,000', forGuests: 'Up to 300 Guests', popular: false,
    features: ['Event Lawn (Outdoor)','Basic Floral Décor','Standard Catering Menu','Basic Sound System','Accommodation for 20 rooms','Event Coordinator'] },
  { name: 'Golden Wedding', price: '₹5,00,000', forGuests: 'Up to 500 Guests', popular: true,
    features: ['Banquet Hall OR Event Lawn','Premium Floral Décor','Royal Catering Menu','Professional Sound & Lighting','Accommodation for 40 rooms','Dedicated Event Manager','Photography Setup','Sangeet Night Support'] },
  { name: 'Royal Wedding',  price: '₹10,00,000+', forGuests: '1000+ Guests', popular: false,
    features: ['Wedding Lawn + Banquet Hall Combo','Grand Floral & Theme Décor','Royal Multi-Cuisine Catering','Full AV & Lighting Production','Accommodation for 80+ rooms','Complete Wedding Management','Pre-Wedding Shoot','Fireworks & Entertainment','Honeymoon Suite Complimentary'] },
];

function VenueCard({ venue, selected, onSelect }) {
  const { Icon } = venue;
  return (
    <button type="button" onClick={() => onSelect(venue.id)}
      className={`text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 w-full ${selected ? 'border-saffron-500 ring-2 ring-saffron-200' : 'border-cream-200 hover:border-saffron-300'}`}
    >
      <div className="relative h-32">
        <Image src={venue.image} alt={venue.name} fill className="object-cover" sizes="300px" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-white text-xs font-semibold">{venue.type}</span>
          {selected && <CheckCircle2 size={16} className="text-saffron-400" />}
        </div>
      </div>
      <div className="p-3 bg-white">
        <p className="font-semibold text-resort-900 text-sm">{venue.name}</p>
        <p className="text-xs text-resort-500">{venue.capacity} · {venue.size}</p>
      </div>
    </button>
  );
}

export default function WeddingsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const venueName = venues.find(v => v.id === selectedVenue)?.name || selectedVenue || 'Not selected';
    const msg = `Hello! I would like to inquire about a wedding at MPT Ayodhya Resort.

Bride: ${data.brideName}
Groom: ${data.groomName}
Email: ${data.email}
Phone: ${data.phone}
Wedding Date: ${data.weddingDate || 'TBD'}
Guest Count: ${data.guestCount}
Preferred Venue: ${venueName}
Budget: ${data.budget || 'Not specified'}
Requirements: ${data.requirements || 'None'}`;

    window.open(getWhatsAppURL('wedding', msg), '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <div className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=90" alt="Weddings at MPT Ayodhya Resort" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><Heart size={14} className="fill-saffron-300" /> Weddings & Events</div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              Your Dream Wedding,<br /><span className="shimmer-text">Our Masterpiece</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl">Four stunning venues. Unmatched grandeur. Memories that last forever.</p>
          </motion.div>
        </div>
      </div>

      {/* Venues */}
      <section className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Our Venues</div>
            <h2 className="section-title mb-4">Choose Your Perfect <span className="shimmer-text">Venue</span></h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {venues.map((venue, i) => {
              const { Icon } = venue;
              return (
                <motion.div key={venue.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="luxury-card overflow-hidden">
                  <div className="relative h-56">
                    <Image src={venue.image} alt={venue.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg,#FF8C00,#FFB347)' }}>{venue.capacity}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-serif font-bold text-xl drop-shadow">{venue.name}</p>
                      <p className="text-white/70 text-sm">{venue.size} · {venue.type}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <a href={getWhatsAppURL('wedding', `Hello! I am interested in the ${venue.name} for my wedding. Please share details.`)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm py-3" style={{ display: 'flex' }}>Inquire Now</a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Wedding Packages</div>
            <h2 className="section-title mb-4">Tailor-Made <span className="shimmer-text">Packages</span></h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
                className={`rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-luxury ${pkg.popular ? 'border-saffron-400 shadow-luxury' : 'border-cream-200'}`}
              >
                {pkg.popular && <div className="text-white text-center py-2.5 text-sm font-semibold" style={{ background: 'linear-gradient(135deg,#FF8C00,#FFB347)' }}>Most Popular</div>}
                <div className={`p-8 ${pkg.popular ? 'bg-gradient-to-b from-saffron-50 to-white' : 'bg-white'}`}>
                  <h3 className="font-serif font-bold text-2xl text-resort-900 mb-1">{pkg.name}</h3>
                  <p className="text-resort-500 text-sm mb-4">{pkg.forGuests}</p>
                  <div className="font-serif text-3xl font-bold text-saffron-600 mb-1">{pkg.price}</div>
                  <p className="text-resort-400 text-xs mb-6">onwards (customizable)</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-resort-600">
                        <CheckCircle2 size={15} className="text-saffron-500 flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={getWhatsAppURL('wedding', `Hello! I am interested in the ${pkg.name} package.`)} target="_blank" rel="noopener noreferrer"
                    className={`w-full justify-center text-sm py-3 ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ display: 'flex' }}>
                    Get This Package
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10">
            <div className="section-label justify-center"><Heart size={14} className="fill-saffron-500 text-saffron-500" />Wedding Inquiry</div>
            <h2 className="section-title mb-4">Start Planning Your <span className="shimmer-text">Dream Wedding</span></h2>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl shadow-luxury p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-green-500" /></div>
              <h3 className="font-serif text-2xl font-bold text-resort-900 mb-3">WhatsApp Opened!</h3>
              <p className="text-resort-600 mb-6">Your inquiry has been sent to our wedding team via WhatsApp. We'll respond within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary">Submit Another Inquiry</button>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-luxury p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="luxury-label">Bride's Name *</label><input {...register('brideName')} className="luxury-input" placeholder="Bride's name" />{errors.brideName && <p className="text-red-500 text-xs mt-1">{errors.brideName.message}</p>}</div>
                <div><label className="luxury-label">Groom's Name *</label><input {...register('groomName')} className="luxury-input" placeholder="Groom's name" />{errors.groomName && <p className="text-red-500 text-xs mt-1">{errors.groomName.message}</p>}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="luxury-label">Email *</label><input {...register('email')} type="email" className="luxury-input" placeholder="your@email.com" />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}</div>
                <div><label className="luxury-label">Phone *</label><input {...register('phone')} type="tel" className="luxury-input" placeholder="+91 XXXXX XXXXX" />{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="luxury-label">Wedding Date</label><input {...register('weddingDate')} type="date" className="luxury-input" /></div>
                <div>
                  <label className="luxury-label">Guest Count *</label>
                  <select {...register('guestCount')} className="luxury-input">
                    <option value="">Select guest count</option>
                    {['100-200','200-300','300-500','500-700','700-1000','1000+'].map(o => <option key={o} value={o}>{o} Guests</option>)}
                  </select>
                  {errors.guestCount && <p className="text-red-500 text-xs mt-1">{errors.guestCount.message}</p>}
                </div>
              </div>
              <div>
                <label className="luxury-label">Preferred Venue</label>
                <div className="grid grid-cols-2 gap-3">
                  {venues.map(v => <VenueCard key={v.id} venue={v} selected={selectedVenue === v.id} onSelect={setSelectedVenue} />)}
                </div>
              </div>
              <div>
                <label className="luxury-label">Budget Range</label>
                <select {...register('budget')} className="luxury-input">
                  <option value="">Select budget</option>
                  {['₹2–5 Lakhs','₹5–10 Lakhs','₹10–20 Lakhs','₹20 Lakhs+'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="luxury-label">Special Requirements</label><textarea {...register('requirements')} rows={4} className="luxury-input resize-none" placeholder="Tell us about your dream wedding..." /></div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base">
                {isSubmitting
                  ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</span>
                  : <span className="flex items-center gap-2">Send via WhatsApp</span>
                }
              </button>
              <p className="text-center text-resort-400 text-xs">Or call us at <a href="tel:+919632359042" className="text-saffron-600 font-semibold hover:underline">+91 9632359042</a></p>
            </motion.form>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
