import './globals.css';
import { Playfair_Display, Inter, Cinzel_Decorative } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ComingSoonBanner from '@/components/layout/ComingSoonBanner';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Ayodhya Resort | Luxury Destination Resort in Burhanpur, MP',
    template: '%s | Ayodhya Resort',
  },
  description: 'Experience unmatched luxury at Ayodhya Resort, Burhanpur. Premium rooms, destination weddings, grand event lawns, 4 restaurants, swimming pool, sports turfs & more.',
  keywords: ['luxury resort', 'Burhanpur resort', 'destination wedding', 'Ayodhya Resort', 'Madhya Pradesh resort'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ayodhya Resort',
    title: 'Ayodhya Resort | Luxury Destination Resort',
    description: 'Experience unmatched luxury at Ayodhya Resort. Premier destination for weddings, events and luxury stays in Burhanpur, Madhya Pradesh.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="bg-cream-50 antialiased">
        <Navbar />
        <ComingSoonBanner />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#FFF8F0',
              color: '#2E1A0A',
              border: '1px solid #FFD9A0',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
