'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, RESORT } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isTransparent = !isScrolled && !mobileOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/97 backdrop-blur-xl shadow-luxury-sm border-b border-cream-200/80'
            : 'bg-transparent'
        )}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none group">
              <span className={cn(
                'font-cinzel font-bold text-2xl tracking-tight transition-colors duration-300',
                isScrolled ? 'text-[#1B4332]' : 'text-white'
              )}>
                Ayodhya
              </span>
              <span className={cn(
                'font-cinzel font-normal text-[10px] tracking-[0.35em] uppercase transition-colors duration-300',
                isScrolled ? 'text-[#C9A84C]' : 'text-[#D4AF37]'
              )}>
                Resort
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                    pathname === link.href
                      ? isScrolled
                        ? 'text-saffron-600 bg-saffron-50'
                        : 'text-saffron-300 bg-white/10'
                      : isScrolled
                        ? 'text-resort-700 hover:text-saffron-600 hover:bg-saffron-50/50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${RESORT.phone}`}
                className={cn(
                  'hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200',
                  isScrolled ? 'text-resort-700 hover:text-saffron-600' : 'text-white/90 hover:text-white'
                )}
              >
                <Phone size={14} />
                <span className="hidden lg:inline">{RESORT.phone}</span>
              </a>

              <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5 rounded-full">
                Book Now
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-xl transition-all duration-200',
                  isScrolled ? 'text-resort-800 hover:bg-saffron-50' : 'text-white hover:bg-white/10'
                )}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center py-4 px-4 text-xl font-serif font-semibold rounded-xl transition-all duration-200 border-b border-cream-200',
                        pathname === link.href
                          ? 'text-saffron-600 bg-saffron-50'
                          : 'text-resort-800 hover:text-saffron-600 hover:bg-saffron-50/50'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a href={`tel:${RESORT.phone}`} className="btn-secondary justify-center">
                  <Phone size={16} />
                  {RESORT.phone}
                </a>
                <Link href="/contact" className="btn-primary justify-center">
                  Book Now
                </Link>
              </div>

              <p className="text-center text-sm text-resort-400 mt-6 font-medium">
                {RESORT.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
