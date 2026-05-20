'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, ArrowRight } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Grand Wedding Ceremony', category: 'Wedding',     src: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=800&q=80', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Luxury Suite',           category: 'Rooms',       src: 'https://images.unsplash.com/photo-1761039265583-9489b4246454?w=600&q=80', span: '' },
  { id: 3, title: 'Infinity Pool',          category: 'Experiences', src: 'https://images.unsplash.com/photo-1758448756167-88dc934c58e4?w=600&q=80', span: '' },
  { id: 4, title: 'Banquet Hall',           category: 'Events',      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=80', span: 'col-span-2' },
  { id: 5, title: 'Garden Dining',          category: 'Dining',      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', span: '' },
  { id: 6, title: 'Resort Exterior',        category: 'Resort',      src: '/images/resort-hero.png',                                                  span: '' },
];

export default function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="section-label"><Camera size={14} />Gallery</div>
            <h2 className="section-title">Captured{' '}<span className="shimmer-text">Memories</span></h2>
          </div>
          <Link href="/gallery" className="btn-secondary self-start md:self-auto">
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} relative rounded-3xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end p-5">
                <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <span className="badge-saffron text-xs mb-2 block w-fit">{item.category}</span>
                  <p className="text-white font-serif font-semibold text-sm md:text-base">{item.title}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Camera size={13} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-resort-500 mb-4">Explore hundreds more photos from our resort</p>
          <Link href="/gallery" className="btn-primary">
            <Camera size={16} />
            Full Photo Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
