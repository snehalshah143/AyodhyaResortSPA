'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, ArrowRight } from 'lucide-react';
import { RESORT } from '@/lib/constants';
import { getWhatsAppURL } from '@/lib/utils';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #D4AF37 50%, #C9A84C 100%)' }} />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Begin Your Luxury
            <br />
            <span className="text-resort-900">Experience Today</span>
          </h2>

          <p className="text-white/85 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether it's a dream wedding, a luxurious stay, or an unforgettable event —
            Ayodhya Resort is ready to make it perfect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-saffron-600 font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-cream-50 shadow-luxury transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-lg"
            >
              Book Your Stay
              <ArrowRight size={18} />
            </Link>
            <a
              href={getWhatsAppURL('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-green-600 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {WA_ICON}
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a href={`tel:${RESORT.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              <span className="font-medium">{RESORT.phone}</span>
            </a>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <a href={`mailto:${RESORT.email}`} className="flex items-center gap-2 hover:text-white transition-colors text-sm">
              {RESORT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
