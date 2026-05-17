'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BedDouble, GlassWater, Trophy, Trees, UtensilsCrossed, Building2, ArrowRight } from 'lucide-react';

const experiences = [
  {
    icon: BedDouble,
    title: 'Luxury Rooms & Suites',
    desc: '80+ elegantly appointed rooms with premium furnishings, modern amenities, and stunning garden views.',
    href: '/rooms',
    color: 'from-amber-500/20 to-orange-500/10',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badge: '80+ Rooms',
  },
  {
    icon: Building2,
    title: 'Grand Banquet Halls',
    desc: 'Two magnificent banquet halls, each accommodating 500 guests with state-of-the-art facilities.',
    href: '/weddings',
    color: 'from-saffron-500/20 to-gold-500/10',
    iconBg: 'bg-saffron-50',
    iconColor: 'text-saffron-600',
    badge: '2 Halls',
  },
  {
    icon: Trees,
    title: 'Breathtaking Lawns',
    desc: '80,000 SqFt wedding lawn for 1000+ and 40,000 SqFt event lawn for 500+ guests under the open sky.',
    href: '/weddings',
    color: 'from-green-500/20 to-emerald-500/10',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    badge: '1.2 Lakh SqFt',
  },
  {
    icon: UtensilsCrossed,
    title: 'World-Class Dining',
    desc: 'Four distinct dining experiences — AC restaurant, garden terrace, food court & food plaza.',
    href: '/dining',
    color: 'from-rose-500/20 to-pink-500/10',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    badge: '4 Restaurants',
  },
  {
    icon: GlassWater,
    title: 'Swimming Pool',
    desc: 'A stunning infinity-style pool surrounded by lush greenery — perfect for leisure and recreation.',
    href: '/experiences',
    color: 'from-blue-500/20 to-cyan-500/10',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badge: 'Open Daily',
  },
  {
    icon: Trophy,
    title: 'Sports Facilities',
    desc: 'Professional cricket and football turfs for sports enthusiasts and corporate team-building events.',
    href: '/experiences',
    color: 'from-violet-500/20 to-purple-500/10',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    badge: 'Cricket & Football',
  },
];

export default function FeaturedExperiences() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <span className="w-8 h-0.5 bg-saffron-gradient rounded-full" />
            Experiences
            <span className="w-8 h-0.5 bg-saffron-gradient rounded-full" />
          </div>
          <h2 className="section-title mb-5">
            Every Moment, an{' '}
            <span className="shimmer-text">Unforgettable Experience</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From luxurious accommodations to thrilling activities — MPT Ayodhya Resort offers
            everything you need for a perfect stay.
          </p>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={exp.href} className="group block">
                  <div className={`luxury-card p-7 h-full bg-gradient-to-br ${exp.color} border border-cream-200/60`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${exp.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className={exp.iconColor} />
                      </div>
                      <span className="badge-saffron">{exp.badge}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-resort-900 mb-3 group-hover:text-saffron-700 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-resort-600 text-sm leading-relaxed mb-5">{exp.desc}</p>
                    <div className="flex items-center gap-1 text-saffron-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
