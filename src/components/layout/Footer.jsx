'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart, ArrowRight } from 'lucide-react';
import { RESORT, NAV_LINKS } from '@/lib/constants';
import { getWhatsAppURL } from '@/lib/utils';

const footerLinks = {
  'Quick Links': NAV_LINKS.slice(0, 5),
  'Experiences': [
    { href: '/experiences#pool',     label: 'Swimming Pool' },
    { href: '/experiences#cricket',  label: 'Cricket Turf' },
    { href: '/experiences#football', label: 'Football Turf' },
    { href: '/experiences#garden',   label: 'Fruit Garden' },
    { href: '/dining',               label: 'Dining' },
  ],
  'Events & Weddings': [
    { href: '/weddings',           label: 'Destination Weddings' },
    { href: '/weddings#banquet',   label: 'Banquet Hall' },
    { href: '/weddings#lawn',      label: 'Wedding Lawn' },
    { href: '/weddings#packages',  label: 'Event Packages' },
    { href: '/weddings#inquiry',   label: 'Request Quote' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-elegant-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-saffron-gradient" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-saffron-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="container-luxury pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-saffron-gradient flex items-center justify-center text-white font-bold text-xl group-hover:shadow-saffron transition-all">
                M
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">Ayodhya</div>
                <div className="text-saffron-400 text-xs tracking-widest uppercase">Luxury Resort</div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              A premier luxury destination resort in Burhanpur, Madhya Pradesh.
              Experience unmatched hospitality, grand wedding venues, and world-class amenities.
            </p>

            <div className="space-y-3">
              <a href={`tel:${RESORT.phone}`} className="flex items-center gap-3 text-white/70 hover:text-saffron-400 transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-saffron-500/10 flex items-center justify-center group-hover:bg-saffron-500/20 transition-colors">
                  <Phone size={14} className="text-saffron-400" />
                </div>
                {RESORT.phone}
              </a>
              <a href={`mailto:${RESORT.email}`} className="flex items-center gap-3 text-white/70 hover:text-saffron-400 transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-saffron-500/10 flex items-center justify-center group-hover:bg-saffron-500/20 transition-colors">
                  <Mail size={14} className="text-saffron-400" />
                </div>
                {RESORT.email}
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-saffron-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-saffron-400" />
                </div>
                {RESORT.address.full}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { href: RESORT.social.facebook,  Icon: Facebook,  label: 'Facebook' },
                { href: RESORT.social.instagram, Icon: Instagram, label: 'Instagram' },
                { href: RESORT.social.youtube,   Icon: Youtube,   label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-saffron-500/20 border border-white/10 hover:border-saffron-500/40 flex items-center justify-center text-white/50 hover:text-saffron-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif font-semibold text-white text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-saffron-gradient">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-saffron-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-saffron-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-saffron-500/15 to-gold-500/10 border border-saffron-500/20 p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-1">Plan Your Perfect Stay</h3>
            <p className="text-white/60 text-sm">Get in touch for room bookings, wedding packages & event planning.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={getWhatsAppURL('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-secondary text-sm px-6 py-3">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Ayodhya Resort. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Crafted with <Heart size={11} className="text-saffron-500 fill-saffron-500" /> for luxury hospitality
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
