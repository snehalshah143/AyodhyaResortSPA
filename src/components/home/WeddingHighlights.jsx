'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Trees, Building2 } from 'lucide-react';
import { getWhatsAppURL } from '@/lib/utils';

const venues = [
  {
    name: 'Royal Wedding Lawn',
    capacity: '1000+ Guests',
    size: '80,000 SqFt',
    type: 'Outdoor',
    icon: Trees,
    desc: 'An expansive open-air lawn perfect for grand destination weddings under the stars.',
    color: 'bg-gradient-to-br from-emerald-50 to-green-50 border-green-200',
    iconColor: 'text-green-600 bg-green-50',
  },
  {
    name: 'Event Lawn',
    capacity: '500+ Guests',
    size: '40,000 SqFt',
    type: 'Outdoor',
    icon: Trees,
    desc: 'A beautiful outdoor venue ideal for receptions, sangeet ceremonies, and large celebrations.',
    color: 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200',
    iconColor: 'text-teal-600 bg-teal-50',
  },
  {
    name: 'Banquet Hall',
    capacity: '500 Guests',
    size: 'Grand Hall',
    type: 'Indoor AC',
    icon: Building2,
    desc: 'Elegantly designed air-conditioned banquet hall with premium décor and world-class facilities.',
    color: 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200',
    iconColor: 'text-amber-600 bg-amber-50',
  },
];

export default function WeddingHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="section-padding bg-resort-texture relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-saffron-500/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">
              <Heart size={14} className="fill-saffron-500 text-saffron-500" />
              Weddings & Events
            </div>
            <h2 className="section-title mb-6">
              Your Dream Wedding,{' '}
              <span className="shimmer-text">Our Legacy</span>
            </h2>
            <p className="text-resort-600 text-lg leading-relaxed mb-8">
              Over 1.2 lakh sq ft of stunning venues — grand outdoor lawns to air-conditioned halls. Our wedding specialists handle every detail, from décor to catering.
            </p>

            <div className="space-y-3 mb-10">
              {[
                '80,000 SqFt outdoor wedding lawn for 1000+ guests',
                '1 Air-conditioned banquet hall, 500 guest capacity',
                'In-house catering with customized wedding menus',
                'Professional decoration and event management',
                '80+ luxury rooms for wedding guests',
                'Complimentary pre-wedding photography spots',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-saffron-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-resort-700 text-sm">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/weddings" className="btn-primary">
                <Heart size={16} />
                Wedding Packages
              </Link>
              <a href={getWhatsAppURL('wedding')} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Quick Inquiry
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {venues.map((venue, i) => {
              const Icon = venue.icon;
              return (
                <motion.div
                  key={venue.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  className={`rounded-3xl border p-6 ${venue.color} group cursor-pointer hover:shadow-luxury transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${venue.iconColor}`}>
                    <Icon size={20} />
                  </div>
                  <span className="badge-saffron text-xs mb-3 inline-block">{venue.type}</span>
                  <h3 className="font-serif font-bold text-resort-900 text-base mb-1">{venue.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-resort-500 flex items-center gap-1">
                      <Users size={11} /> {venue.capacity}
                    </span>
                    <span className="text-xs text-resort-500">{venue.size}</span>
                  </div>
                  <p className="text-resort-600 text-xs leading-relaxed">{venue.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
