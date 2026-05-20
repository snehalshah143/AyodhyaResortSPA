'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, Leaf, Star } from 'lucide-react';

const features = [
  { icon: MapPin,  title: 'Prime Location',     desc: 'Burhanpur, MP — where history meets luxury' },
  { icon: Award,   title: 'World-Class Service', desc: 'Unparalleled hospitality for every guest' },
  { icon: Leaf,    title: 'Nature & Serenity',  desc: 'Lush greenery in an oasis of calm' },
  { icon: Star,    title: 'Luxury Standards',   desc: 'Every detail crafted for perfection' },
];

export default function IntroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-resort-texture">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-luxury-lg" style={{ aspectRatio: '4/5', maxHeight: 600 }}>
              <Image
                src="/images/resort-hero.png"
                alt="Ayodhya Resort — Luxury Destination"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white/90 font-serif text-xl italic leading-relaxed text-center">
                  "A sanctuary of luxury where every moment becomes a cherished memory"
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-5 bg-white rounded-3xl shadow-luxury p-5 min-w-[180px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-saffron-400 text-saffron-400" />)}
              </div>
              <p className="text-resort-800 font-bold text-sm">4.9 / 5 Rating</p>
              <p className="text-resort-500 text-xs mt-0.5">Based on 500+ guest reviews</p>
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-20" style={{ background: 'linear-gradient(135deg, #FF8C00, #D4AF37)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="section-label">
              <span className="w-8 h-0.5 rounded-full bg-saffron-gradient" />
              Welcome to Ayodhya Resort
            </div>

            <h2 className="section-title mb-6">
              A Luxury Retreat Like{' '}
              <span className="shimmer-text">No Other</span>
            </h2>

            <p className="text-resort-600 text-lg leading-relaxed mb-10">
              Nestled on Burhanpur–Khandwa Road, MP — a luxury destination offering grand weddings, family retreats, corporate events, and romantic getaways, all crafted with exceptional care.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-luxury-sm hover:shadow-luxury transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-saffron-50 flex items-center justify-center flex-shrink-0 group-hover:bg-saffron-100 transition-colors">
                      <Icon size={16} className="text-saffron-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-resort-800 text-sm">{f.title}</p>
                      <p className="text-resort-500 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/about" className="btn-primary">Discover Our Story</Link>
              <Link href="/rooms" className="btn-secondary">Explore Rooms</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
