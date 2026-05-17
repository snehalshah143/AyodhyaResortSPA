'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BedDouble, Users, Maximize, ArrowRight } from 'lucide-react';
import { getWhatsAppURL, formatPrice } from '@/lib/utils';
import CTABanner from '@/components/home/CTABanner';

const rooms = [
  { id: 1, category: 'Deluxe Room',      name: 'Garden View Deluxe',       price: 4500,  maxOccupancy: 2, bedType: 'King Size',    size: 320, view: 'Garden View',           desc: 'A beautifully appointed deluxe room overlooking our lush green gardens. Features premium bedding, rain shower, and a private sit-out area.', amenities: ['King Bed','Rain Shower','Free WiFi','Flat Screen TV','Mini Bar','Air Conditioning','Room Service','Sit-out Balcony'], image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85', badge: null },
  { id: 2, category: 'Deluxe Room',      name: 'Pool View Deluxe',          price: 5000,  maxOccupancy: 2, bedType: 'King Size',    size: 340, view: 'Pool View',             desc: 'Stunning pool-facing room with direct views of our infinity pool. Contemporary interiors with warm saffron tones.', amenities: ['King Bed','Pool View','Rain Shower','Free WiFi','Flat Screen TV','Air Conditioning','Mini Fridge'], image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=85', badge: null },
  { id: 3, category: 'Premium Room',     name: 'Premium Courtyard Room',    price: 6000,  maxOccupancy: 3, bedType: 'King + Single', size: 420, view: 'Courtyard View',        desc: 'Spacious premium room with elegant furnishings, dedicated seating area, and beautiful courtyard views.', amenities: ['King + Single Bed','Seating Area','Premium Toiletries','Free WiFi','Large LCD TV','Air Conditioning','Safe','Bathtub'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=85', badge: null },
  { id: 4, category: 'Family Room',      name: 'Family Retreat Room',       price: 7500,  maxOccupancy: 4, bedType: 'King + Twin',  size: 520, view: 'Garden View',           desc: 'A spacious family room featuring master bedroom area and separate twin bed section. Perfect for family getaways.', amenities: ['King + Twin Beds','Family Setup','Large Bathroom','Free WiFi','43" Smart TV','Air Conditioning','Kids Welcome Kit'], image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=85', badge: null },
  { id: 5, category: 'Suite',            name: 'Royal Garden Suite',        price: 9500,  maxOccupancy: 3, bedType: 'King Size',    size: 650, view: 'Garden & Pool View',    desc: 'An exquisite suite with separate living room, private garden terrace, king-size bed, and luxury jacuzzi bathroom.', amenities: ['Separate Living Room','Private Terrace','Jacuzzi','King Bed','Premium Minibar','Butler Service','Free WiFi','Smart TV'], image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85', badge: 'Most Popular' },
  { id: 6, category: 'Executive Suite',  name: 'Presidential Suite',        price: 15000, maxOccupancy: 4, bedType: 'King Size',    size: 900, view: 'Panoramic Resort View', desc: 'The crown jewel — ultra-luxury suite with grand living room, private dining, master bedroom, and panoramic resort views.', amenities: ['Grand Living Room','Private Dining','Master Bath','Jacuzzi','Premium Butler','Welcome Amenities','Panoramic Views'], image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85', badge: 'Luxury' },
];

const categories = ['ALL', 'Deluxe Room', 'Premium Room', 'Family Room', 'Suite', 'Executive Suite'];

function RoomCard({ room, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="luxury-card overflow-hidden group"
    >
      <div className="relative h-56 overflow-hidden">
        <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {room.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-saffron" style={{ background: 'linear-gradient(135deg,#FF8C00,#FFB347)' }}>{room.badge}</span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 z-10"><span className="badge-gold text-xs">{room.category}</span></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30">
          <a href={getWhatsAppURL('booking', `Hello! I am interested in booking the ${room.name} at MPT Ayodhya Resort.`)} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5">Inquire Now</a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif font-bold text-xl text-resort-900 group-hover:text-saffron-700 transition-colors">{room.name}</h3>
            <p className="text-resort-500 text-sm mt-0.5">{room.view}</p>
          </div>
          <div className="text-right flex-shrink-0 ml-3">
            <div className="font-serif font-bold text-saffron-600 text-xl">{formatPrice(room.price)}</div>
            <div className="text-resort-400 text-xs">per night</div>
          </div>
        </div>

        <div className="flex items-center gap-4 py-3 border-y border-cream-200 mb-4">
          <span className="flex items-center gap-1.5 text-resort-600 text-xs"><BedDouble size={13} className="text-saffron-500" />{room.bedType}</span>
          <span className="flex items-center gap-1.5 text-resort-600 text-xs"><Users size={13} className="text-saffron-500" />{room.maxOccupancy} Guests</span>
          <span className="flex items-center gap-1.5 text-resort-600 text-xs"><Maximize size={13} className="text-saffron-500" />{room.size} SqFt</span>
        </div>

        <p className="text-resort-500 text-sm leading-relaxed mb-5 line-clamp-2">{room.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.amenities.slice(0, 5).map(a => <span key={a} className="text-xs text-resort-600 bg-cream-100 px-2.5 py-1 rounded-full">{a}</span>)}
          {room.amenities.length > 5 && <span className="text-xs text-saffron-600 font-medium">+{room.amenities.length - 5} more</span>}
        </div>

        <div className="flex gap-3">
          <a href={getWhatsAppURL('booking', `Hello! I would like to book the ${room.name}. Please share availability.`)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center text-sm py-3">Book Now</a>
          <Link href="/contact" className="btn-secondary text-sm py-3 px-4">Inquire</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function RoomsPage() {
  const [filter, setFilter] = useState('ALL');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const filtered = filter === 'ALL' ? rooms : rooms.filter(r => r.category === filter);

  return (
    <>
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=90" alt="MPT Ayodhya Resort Rooms" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><BedDouble size={14} /> Accommodation</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">Rooms &{' '}<span className="shimmer-text">Suites</span></h1>
            <p className="text-white/75 text-xl mt-3 max-w-2xl">80+ thoughtfully designed rooms — each a sanctuary of comfort and luxury</p>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? 'text-white shadow-saffron' : 'bg-white text-resort-700 border border-cream-200 hover:border-saffron-300 hover:text-saffron-600'}`}
                style={filter === cat ? { background: 'linear-gradient(135deg,#FF8C00,#FFB347)' } : {}}
              >
                {cat === 'ALL' ? 'All Rooms' : cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((room, i) => <RoomCard key={room.id} room={room} index={i} inView={inView} />)}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 bg-white rounded-3xl shadow-luxury-sm border border-cream-200 p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[{val:'80+',label:'Luxury Rooms',sub:'Across 5 premium categories'},{val:'300+',label:'Guest Capacity',sub:'Comfortable accommodation'},{val:'24/7',label:'Room Service',sub:'At your service round the clock'}].map(s => (
                <div key={s.label}>
                  <div className="font-serif text-4xl font-bold text-saffron-600 mb-2">{s.val}</div>
                  <p className="font-semibold text-resort-800 mb-1">{s.label}</p>
                  <p className="text-resort-500 text-sm">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
