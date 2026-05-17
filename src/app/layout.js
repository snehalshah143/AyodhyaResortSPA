import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata = {
  title: {
    default: 'MPT Ayodhya Resort | Luxury Destination Resort in Burhanpur, MP',
    template: '%s | MPT Ayodhya Resort',
  },
  description: 'Experience unmatched luxury at MPT Ayodhya Resort, Burhanpur. Premium rooms, destination weddings, grand event lawns, 4 restaurants, swimming pool, sports turfs & more.',
  keywords: ['luxury resort', 'Burhanpur resort', 'destination wedding', 'MPT Ayodhya Resort', 'Madhya Pradesh resort'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'MPT Ayodhya Resort',
    title: 'MPT Ayodhya Resort | Luxury Destination Resort',
    description: 'Experience unmatched luxury at MPT Ayodhya Resort. Premier destination for weddings, events and luxury stays in Burhanpur, Madhya Pradesh.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 antialiased">
        <Navbar />
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
