'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { getWhatsAppURL } from '@/lib/utils';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const slides = [
  {
    id: 1,
    image: '/images/resort-hero.png',
    headline: 'Where Luxury',
    headline2: 'Meets Legacy',
    sub: 'An unparalleled luxury retreat in the heart of Madhya Pradesh',
    badge: '80+ Luxury Rooms · Burhanpur, MP',
    overlay: 'from-black/70 via-black/40 to-transparent',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=1920&q=90',
    headline: 'Dream Weddings',
    headline2: 'Made Reality',
    sub: '80,000 SqFt grand wedding lawn for 1000+ guests under the open sky',
    badge: 'Destination Weddings',
    overlay: 'from-black/75 via-black/40 to-black/20',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1758448756167-88dc934c58e4?w=1920&q=90',
    headline: 'Extraordinary',
    headline2: 'Experiences',
    sub: 'Swimming pool, sports turfs, fruit gardens & world-class dining',
    badge: 'Premium Amenities',
    overlay: 'from-black/70 via-black/35 to-black/20',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={`Ayodhya Resort - ${slide.headline} ${slide.headline2}`}
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
            quality={95}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: 'linear-gradient(90deg, #FF8C00, #D4AF37, #FF8C00)' }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center"
            >
              <div className="flex items-center gap-2 backdrop-blur-sm border border-saffron-400/40 text-saffron-200 text-sm font-medium px-5 py-2 rounded-full" style={{ background: 'rgba(255,140,0,0.18)' }}>
                <Star size={12} className="fill-saffron-400 text-saffron-400" />
                {slide.badge}
                <Star size={12} className="fill-saffron-400 text-saffron-400" />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`headline-${current}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif text-white leading-[1.05] font-bold mb-5 drop-shadow-lg">
                <span className="block text-5xl md:text-7xl lg:text-8xl">{slide.headline}</span>
                <span className="block text-5xl md:text-7xl lg:text-8xl shimmer-text">{slide.headline2}</span>
              </h1>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book Your Stay
            </Link>
            <a
              href={getWhatsAppURL('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base px-8 py-4"
            >
              {WA_ICON}
              WhatsApp Inquiry
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-400 rounded-full ${i === current ? 'w-8 h-2 bg-saffron-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
