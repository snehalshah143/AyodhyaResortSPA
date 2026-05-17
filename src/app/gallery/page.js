'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_CATEGORIES } from '@/lib/constants';

const galleryData = [
  { id: 1,  title: 'Grand Wedding Ceremony',  category: 'WEDDING',     src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',  span: 'lg:col-span-2 lg:row-span-2' },
  { id: 2,  title: 'Poolside Luxury',          category: 'EXPERIENCES', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',  span: '' },
  { id: 3,  title: 'Royal Garden Suite',       category: 'ROOMS',       src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',  span: '' },
  { id: 4,  title: 'Banquet Hall Decoration',  category: 'EVENTS',      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=80',  span: 'lg:col-span-2' },
  { id: 5,  title: 'Garden Restaurant Night',  category: 'DINING',      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',  span: '' },
  { id: 6,  title: 'Resort Exterior',          category: 'EXTERIOR',    src: '/images/resort-hero.png',                                                   span: '' },
  { id: 7,  title: 'Sangeet Celebration',      category: 'WEDDING',     src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',  span: '' },
  { id: 8,  title: 'Cricket Tournament',       category: 'EXPERIENCES', src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80',  span: '' },
  { id: 9,  title: 'Deluxe Room Interior',     category: 'ROOMS',       src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',  span: '' },
  { id: 10, title: 'Wedding Reception',        category: 'WEDDING',     src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',  span: 'lg:col-span-2' },
  { id: 11, title: 'AC Restaurant Dining',     category: 'DINING',      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',  span: '' },
  { id: 12, title: 'Event Lawn Setup',         category: 'EVENTS',      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',  span: '' },
  { id: 13, title: 'Fruit Garden Walk',        category: 'EXPERIENCES', src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',  span: '' },
  { id: 14, title: 'Presidential Suite',       category: 'ROOMS',       src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',  span: '' },
  { id: 15, title: 'Night Wedding Ceremony',   category: 'WEDDING',     src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',  span: 'lg:col-span-2 lg:row-span-2' },
  { id: 16, title: 'Football Turf Action',     category: 'EXPERIENCES', src: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80',  span: '' },
  { id: 17, title: 'Food Court Variety',       category: 'DINING',      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',  span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightbox, setLightbox] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeCategory === 'ALL' ? galleryData : galleryData.filter(img => img.category === activeCategory);

  const navigate = (dir) => {
    const idx = filtered.findIndex(i => i.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <>
      <div className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=90" alt="MPT Ayodhya Resort Gallery" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><Camera size={14} /> Visual Stories</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">Photo{' '}<span className="shimmer-text">Gallery</span></h1>
            <p className="text-white/70 text-lg mt-3">Glimpses of luxury, celebrations, and unforgettable moments</p>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-wrap gap-2 justify-center mb-12">
            {GALLERY_CATEGORIES.map(cat => (
              <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.value ? 'text-white shadow-saffron' : 'bg-white text-resort-700 border border-cream-200 hover:border-saffron-300 hover:text-saffron-600'}`}
                style={activeCategory === cat.value ? { background: 'linear-gradient(135deg,#FF8C00,#FFB347)' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
            <AnimatePresence mode="wait">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span || ''}`}
                  onClick={() => setLightbox(item)}
                >
                  <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" quality={75} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn size={28} className="text-white mb-3" />
                    <p className="text-white font-serif font-semibold text-center px-4 text-sm">{item.title}</p>
                  </div>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="badge-saffron text-xs">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-resort-400">
              <Camera size={48} className="mx-auto mb-4 opacity-30" />
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><X size={20} /></button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><ChevronLeft size={24} /></button>

            <motion.div key={lightbox.id} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" sizes="100vw" quality={90} />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-serif text-xl">{lightbox.title}</p>
                <span className="badge-saffron text-xs mt-2 inline-block">{lightbox.category}</span>
              </div>
            </motion.div>

            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><ChevronRight size={24} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
