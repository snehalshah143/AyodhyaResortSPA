'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { generateStars } from '@/lib/utils';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {generateStars(rating).map((filled, i) => (
        <Star key={i} size={14} className={filled ? 'fill-saffron-400 text-saffron-400' : 'text-cream-300'} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => navigate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[current];

  return (
    <section ref={ref} className="section-padding bg-elegant-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-saffron-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label justify-center text-saffron-400">
            <span className="w-8 h-0.5 bg-saffron-gradient rounded-full" />
            Guest Stories
            <span className="w-8 h-0.5 bg-saffron-gradient rounded-full" />
          </div>
          <h2 className="section-title text-white mb-4">
            What Our Guests{' '}
            <span className="shimmer-text">Say About Us</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-4xl p-8 md:p-12 text-center relative">
                <div className="absolute top-8 left-8 text-saffron-500/20">
                  <Quote size={60} />
                </div>

                <StarRating rating={t.rating} />

                <p className="text-white/85 text-lg md:text-xl leading-relaxed my-8 italic font-light max-w-3xl mx-auto relative z-10">
                  "{t.review}"
                </p>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-saffron-gradient flex items-center justify-center text-white font-serif font-bold text-xl shadow-saffron">
                    {t.guestName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg font-serif">{t.guestName}</p>
                    {t.designation && <p className="text-saffron-400 text-sm">{t.designation}</p>}
                    {t.location && <p className="text-white/40 text-xs mt-1">{t.location}</p>}
                  </div>
                  {t.stayType && <span className="badge-saffron text-xs">{t.stayType} Guest</span>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-saffron-400 hover:bg-saffron-500/10 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-saffron-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-saffron-400 hover:bg-saffron-500/10 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
