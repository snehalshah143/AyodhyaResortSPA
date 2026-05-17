'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BedDouble, Users, Building2, TreePine, Car } from 'lucide-react';

const stats = [
  { icon: BedDouble,  value: '80+',    label: 'Luxury Rooms',      desc: 'Premium accommodations' },
  { icon: Users,      value: '300+',   label: 'Guest Capacity',    desc: 'Accommodated comfortably' },
  { icon: Building2,  value: '2',      label: 'Banquet Halls',     desc: '500 capacity each' },
  { icon: TreePine,   value: '80,000', label: 'SqFt Wedding Lawn', desc: 'For 1000+ guests' },
  { icon: TreePine,   value: '40,000', label: 'SqFt Event Lawn',   desc: 'For 500+ guests' },
  { icon: Car,        value: '500+',   label: 'Vehicle Parking',   desc: 'Ample space for all' },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative -mt-16 z-20 container-luxury">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white rounded-3xl shadow-luxury-lg p-8 border border-cream-200/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center mb-3 group-hover:bg-saffron-100 transition-colors duration-200">
                  <Icon size={20} className="text-saffron-500" />
                </div>
                <div className="font-serif font-bold text-2xl text-resort-900 leading-none mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-resort-700 mb-0.5">{stat.label}</div>
                <div className="text-xs text-resort-400">{stat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
