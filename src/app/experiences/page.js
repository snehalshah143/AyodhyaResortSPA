'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Waves, Trophy, Leaf, Trees, Users, Clock, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';
import { getWhatsAppURL } from '@/lib/utils';

const experiences = [
  {
    id: 'pool', name: 'Infinity Swimming Pool', category: 'Wellness & Recreation', icon: Waves,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
    desc: 'Immerse yourself in our stunning infinity-style swimming pool, surrounded by lush tropical greenery. Whether you prefer leisurely laps at sunrise or a refreshing afternoon dip, our pool offers the perfect serene escape.',
    highlights: ['Crystal clear filtered water','Sun loungers & poolside service','Shaded resting areas','Safe shallow section for children','Lifeguard on duty','Towel & amenity service'],
    hours: '6:00 AM – 10:00 PM', capacity: '50 Guests', type: 'Wellness',
  },
  {
    id: 'cricket', name: 'Professional Cricket Turf', category: 'Sports & Recreation', icon: Trophy,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&q=85',
    desc: 'A professionally maintained cricket turf perfect for friendly matches, practice sessions, corporate tournaments, and coaching. The pitch meets professional standards with top-quality matting.',
    highlights: ['Professional pitch matting','Full-size cricket ground','Batting & bowling nets','Floodlights for evening','Equipment available for rent','Corporate tournaments welcome'],
    hours: '6:00 AM – 8:00 PM', capacity: '22 Players', type: 'Sports',
  },
  {
    id: 'football', name: 'FIFA-Standard Football Turf', category: 'Sports & Recreation', icon: Trophy,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=900&q=85',
    desc: 'Our synthetic football turf meets FIFA standards with all-weather surface for year-round play. Floodlit for evening matches with changing rooms and professional goal posts.',
    highlights: ['FIFA-grade synthetic turf','Floodlit for night matches','Changing rooms & showers','Professional goal posts','Referee & equipment rental','Corporate leagues welcome'],
    hours: '6:00 AM – 10:00 PM', capacity: '22 Players', type: 'Sports',
  },
  {
    id: 'garden', name: 'Exotic Fruit Garden', category: 'Nature & Wellness', icon: Leaf,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=85',
    desc: 'Stroll through our enchanting fruit garden featuring a diverse collection of seasonal fruits. Take guided tours, learn about organic farming, and pluck fresh fruits directly from the trees.',
    highlights: ['Variety of exotic fruits','Guided orchard tours','Organic farming methods','Pick-your-own fruit','Photography opportunities','Educational nature walks'],
    hours: '7:00 AM – 6:00 PM', capacity: 'Unlimited', type: 'Nature',
  },
  {
    id: 'landscape', name: 'Lush Green Landscape', category: 'Nature & Relaxation', icon: Trees,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85',
    desc: 'Beautifully manicured gardens enveloping the entire resort. Perfect for morning walks, yoga sessions, romantic evening strolls, and nature photography throughout the property.',
    highlights: ['Manicured lawns & gardens','Walking & jogging paths','Yoga & meditation spots','Scenic photography spots','Bird watching areas',"Children's play zones"],
    hours: 'Always Open', capacity: 'All Guests', type: 'Nature',
  },
];

function ExperienceCard({ exp, index, inView }) {
  const { icon: Icon } = exp;
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      id={exp.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="luxury-card overflow-hidden"
    >
      <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
        <div className={isReversed ? 'lg:col-start-2' : ''}>
          <div className="relative h-72 lg:h-full min-h-[320px]">
            <Image src={exp.image} alt={exp.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={80} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
              <span className="glass-card text-white text-xs px-3 py-1.5 flex items-center gap-1.5"><Clock size={11} />{exp.hours}</span>
              <span className="glass-card text-white text-xs px-3 py-1.5 flex items-center gap-1.5"><Users size={11} />{exp.capacity}</span>
            </div>
            <div className="absolute bottom-5 left-5"><span className="badge-saffron">{exp.type}</span></div>
          </div>
        </div>
        <div className={`p-8 md:p-10 flex flex-col justify-center ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center mb-5">
            <Icon size={22} className="text-saffron-500" />
          </div>
          <span className="text-saffron-500 text-xs font-semibold uppercase tracking-wider mb-2">{exp.category}</span>
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-resort-900 mb-4">{exp.name}</h3>
          <p className="text-resort-600 leading-relaxed mb-6">{exp.desc}</p>
          <div className="grid grid-cols-2 gap-2 mb-7">
            {exp.highlights.map(h => (
              <div key={h} className="flex items-start gap-2 text-sm text-resort-600">
                <div className="w-1.5 h-1.5 rounded-full bg-saffron-400 mt-2 flex-shrink-0" />{h}
              </div>
            ))}
          </div>
          <a href={getWhatsAppURL('general', `Hello! I am interested in the ${exp.name} at MPT Ayodhya Resort.`)} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">
            Inquire Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=90" alt="Experiences at MPT Ayodhya Resort" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3"><Leaf size={14} /> Recreation & Nature</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">Extraordinary <span className="shimmer-text">Experiences</span></h1>
            <p className="text-white/75 text-xl mt-3 max-w-2xl">From thrilling sports to serene nature walks — every experience is designed to delight</p>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
            <div className="section-label justify-center">Activities</div>
            <h2 className="section-title mb-4">Activities & <span className="shimmer-text">Recreation</span></h2>
            <div className="gold-divider" />
          </motion.div>
          <div className="space-y-10">
            {experiences.map((exp, i) => <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />)}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
