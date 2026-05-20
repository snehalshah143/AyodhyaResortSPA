'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, Heart, Leaf, Star, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const values = [
  { icon: Heart,  title: 'Heartfelt Hospitality', desc: 'Every guest is treated like family. Our team goes above and beyond to ensure your stay is perfect.' },
  { icon: Star,   title: 'Luxury at Every Touch', desc: 'From premium bedding to gourmet cuisine, luxury is woven into every aspect of your experience.' },
  { icon: Leaf,   title: 'Nature & Serenity',    desc: 'Surrounded by lush greenery, we offer a serene escape from the hustle of everyday life.' },
  { icon: Award,  title: 'Excellence Always',     desc: 'We hold ourselves to the highest standards, constantly striving for perfection in everything we do.' },
];

const milestones = [
  { year: '2015', title: 'Foundation Laid',   desc: 'Ayodhya Resort began as a vision to create a world-class luxury destination in Madhya Pradesh.' },
  { year: '2017', title: 'Grand Opening',     desc: 'Resort opened its doors with 40 luxury rooms and the first banquet hall, welcoming its first guests.' },
  { year: '2019', title: 'Expansion Phase',   desc: 'Added 40+ more rooms, wedding lawn, and sports facilities.' },
  { year: '2021', title: 'Dining Expansion',  desc: 'Launched Garden Restaurant, Food Court & Food Plaza, becoming a complete hospitality destination.' },
  { year: '2023', title: 'Recognition',       desc: 'Recognized as one of Madhya Pradesh\'s top luxury wedding destinations with 500+ weddings hosted.' },
  { year: '2024', title: 'Today',             desc: 'Continuing our journey of excellence with 80+ rooms, 4 restaurants, and world-class experiences.' },
];

export default function AboutPage() {
  const { ref: storyRef, inView: storyInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src="/images/resort-hero.png" alt="Ayodhya Resort" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FF8C00,#D4AF37,#FF8C00)' }} />
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-label text-saffron-300 mb-3">Our Story</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
              About<br /><span className="shimmer-text">Ayodhya Resort</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section ref={storyRef} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="relative rounded-4xl overflow-hidden shadow-luxury-lg" style={{ aspectRatio: '4/5' }}>
                <Image src="/images/resort-hero.png" alt="Ayodhya Resort" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between text-white">
                    {[['500+','Weddings'],['10K+','Happy Guests'],['9+','Years']].map(([v,l]) => (
                      <div key={l} className="text-center">
                        <div className="font-serif text-3xl font-bold">{v}</div>
                        <div className="text-xs text-white/60">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="section-label">Our Heritage</div>
              <h2 className="section-title mb-6">A Vision of Luxury{' '}<span className="shimmer-text">Brought to Life</span></h2>
              <div className="space-y-4 text-resort-600 leading-relaxed mb-8">
                <p>Ayodhya Resort was born from a singular vision: to create a world-class luxury destination that celebrates the rich cultural heritage of Madhya Pradesh while offering modern amenities that rival the finest resorts in the country.</p>
                <p>Situated along the scenic Burhanpur–Khandwa Road, our resort draws inspiration from the royal grandeur of Burhanpur's glorious past. Every corner of the property has been thoughtfully designed to evoke a sense of regal elegance.</p>
                <p>Today, Ayodhya Resort stands as one of Madhya Pradesh's premier luxury destinations — a place where families, couples, and corporate guests alike find their perfect retreat.</p>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-saffron-400 text-saffron-400" />)}
                </div>
                <span className="text-resort-600 text-sm">Rated 4.9/5 by 500+ guests</span>
              </div>
              <Link href="/contact" className="btn-primary">Plan Your Visit<ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <div className="section-label justify-center">Our Philosophy</div>
            <h2 className="section-title mb-4">Values That Drive{' '}<span className="shimmer-text">Our Excellence</span></h2>
            <div className="gold-divider" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="luxury-card p-8 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-saffron-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-saffron-100 transition-colors">
                    <Icon size={28} className="text-saffron-500" />
                  </div>
                  <h3 className="font-serif font-bold text-resort-900 text-lg mb-3">{v.title}</h3>
                  <p className="text-resort-600 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-resort-texture">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <div className="section-label justify-center">Our Journey</div>
            <h2 className="section-title">Milestones of{' '}<span className="shimmer-text">Growth & Excellence</span></h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-400 to-gold-400 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -30 }} animate={timelineInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.12 }} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-saffron-gradient flex items-center justify-center text-white font-serif font-bold text-sm shadow-saffron z-10">{m.year}</div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-luxury-sm hover:shadow-luxury transition-all duration-200">
                    <h3 className="font-serif font-bold text-resort-900 text-lg mb-1">{m.title}</h3>
                    <p className="text-resort-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-luxury text-center">
          <div className="section-label justify-center"><MapPin size={14} />Location</div>
          <h2 className="section-title mb-4">Find Us in{' '}<span className="shimmer-text">Burhanpur</span></h2>
          <p className="section-subtitle mx-auto text-center mb-8">Conveniently located on Burhanpur–Khandwa Road, easily accessible from major cities in MP & Maharashtra.</p>
          <div className="rounded-3xl overflow-hidden shadow-luxury-lg h-64 md:h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-saffron-500 mx-auto mb-3" />
                <p className="font-serif text-xl font-semibold text-resort-800">Burhanpur – Khandwa Road</p>
                <p className="text-resort-600">Burhanpur, Madhya Pradesh, India</p>
                <a href="https://maps.google.com/?q=Burhanpur+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">Open in Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
