'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UtensilsCrossed, Clock, Users, Star, Wind, Trees, ShoppingBag } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const restaurants = [
  {
    id: 1, name: 'Saffron Spice', type: 'Signature AC Restaurant', icon: Wind,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85',
    desc: "Our flagship fine-dining restaurant offering a curated menu of Indian and Continental cuisine in an elegantly air-conditioned setting. Chef's specials change seasonally to incorporate the freshest local produce.",
    cuisine: 'Indian & Continental Fusion', capacity: '120 Covers', hours: '7:00 AM – 11:00 PM',
    specialties: ['Butter Chicken Royale','Dal Makhani Supreme','Grilled Snapper','Biryani Nawabi','Continental Breakfast'],
    features: ['Fine Dining','Private Dining Room','Live Music (Fri & Sat)',"Chef's Table",'Veg & Jain Options'],
    badge: 'Signature', badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 2, name: 'The Garden Terrace', type: 'Outdoor Garden Restaurant', icon: Trees,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85',
    desc: 'A romantic open-air dining experience nestled in the heart of our lush gardens. Dine under the stars as gentle breezes carry the fragrance of flowers.',
    cuisine: 'Indian, Mughlai & Barbecue', capacity: '80 Covers', hours: '6:00 PM – 11:00 PM',
    specialties: ['Seekh Kebab Platter','Tandoori Mixed Grill','Mughlai Biryani','Shami Kebab','Live BBQ Station'],
    features: ['Al Fresco Dining','Romantic Lighting','Live BBQ Station','Garden Seating','Open Air'],
    badge: 'Romantic', badgeColor: 'bg-green-100 text-green-700',
  },
  {
    id: 3, name: 'Food Court', type: 'Multi-Cuisine Food Court', icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85',
    desc: 'A vibrant and lively food court offering a wide variety of cuisines. From South Indian dosas to North Indian chaat, Chinese noodles to Italian pasta — something for everyone.',
    cuisine: 'Multi-Cuisine & Fast Food', capacity: '200 Covers', hours: '8:00 AM – 10:00 PM',
    specialties: ['Masala Dosa','Pav Bhaji','Hakka Noodles','Rajasthani Thali','Pizza & Pasta'],
    features: ['Family Friendly','Multiple Counters','Quick Service','Kids Corner','Takeaway Available'],
    badge: 'Family', badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 4, name: 'Food Plaza', type: 'Outdoor Food Plaza', icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85',
    desc: 'Our sprawling outdoor food plaza perfect for large gatherings, events, and casual outdoor dining. Features multiple stalls, street food favorites, and refreshment kiosks.',
    cuisine: 'Street Food, Snacks & Beverages', capacity: '300+ Covers', hours: '9:00 AM – 10:00 PM',
    specialties: ['Bhel Puri & Chaat','Corn & Popcorn','Fresh Fruit Juices','Ice Cream Parlour','Chai & Snacks'],
    features: ['Outdoor Setting','Street Food Favorites','Large Capacity','Event Catering','Self Service'],
    badge: 'Casual', badgeColor: 'bg-purple-100 text-purple-700',
  },
];

export default function DiningPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90" alt="Dining at MPT Ayodhya Resort" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><UtensilsCrossed size={14} /> Culinary Excellence</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">A Journey of <span className="shimmer-text">Flavours</span></h1>
            <p className="text-white/75 text-xl mt-3 max-w-2xl">4 distinct dining experiences crafted to satisfy every palate</p>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <div className="section-label justify-center">Dining Destinations</div>
            <h2 className="section-title mb-4">Four Unique <span className="shimmer-text">Culinary Worlds</span></h2>
            <p className="section-subtitle mx-auto text-center">From fine dining to casual feasts — four distinctly different dining destinations await you.</p>
            <div className="gold-divider mt-6" />
          </motion.div>

          <div className="space-y-12">
            {restaurants.map((rest, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <motion.div key={rest.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }} className="luxury-card overflow-hidden">
                  <div className={`grid lg:grid-cols-5 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`lg:col-span-2 ${isReversed ? 'lg:col-start-4' : ''}`}>
                      <div className="relative h-72 lg:h-full min-h-[300px]">
                        <Image src={rest.image} alt={rest.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" quality={80} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-5 left-5"><span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${rest.badgeColor}`}>{rest.badge}</span></div>
                        <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap">
                          <div className="glass-card px-3 py-1.5 text-white text-xs flex items-center gap-1.5"><Clock size={11} /> {rest.hours}</div>
                          <div className="glass-card px-3 py-1.5 text-white text-xs flex items-center gap-1.5"><Users size={11} /> {rest.capacity}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`lg:col-span-3 p-8 md:p-10 flex flex-col justify-center ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <span className="text-saffron-500 text-sm font-semibold mb-2">{rest.type}</span>
                      <h3 className="font-serif font-bold text-3xl text-resort-900 mb-3">{rest.name}</h3>
                      <p className="text-resort-500 text-sm mb-1 font-medium">Cuisine: {rest.cuisine}</p>
                      <p className="text-resort-600 leading-relaxed mb-6">{rest.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-resort-800 uppercase tracking-wider mb-3">Signature Dishes</p>
                          <ul className="space-y-2">
                            {rest.specialties.slice(0, 4).map(s => (
                              <li key={s} className="flex items-center gap-2 text-resort-600 text-sm">
                                <Star size={10} className="fill-saffron-400 text-saffron-400 flex-shrink-0" />{s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-resort-800 uppercase tracking-wider mb-3">Features</p>
                          <ul className="space-y-2">
                            {rest.features.slice(0, 4).map(f => (
                              <li key={f} className="flex items-center gap-2 text-resort-600 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-saffron-400 flex-shrink-0" />{f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
