import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturedExperiences from '@/components/home/FeaturedExperiences';
import WeddingHighlights from '@/components/home/WeddingHighlights';
import Testimonials from '@/components/home/Testimonials';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'Ayodhya Resort | Luxury Destination Resort in Burhanpur, MP',
  description: 'Experience unmatched luxury at Ayodhya Resort. 80+ luxury rooms, grand wedding lawns, 4 restaurants, swimming pool & more in Burhanpur, Madhya Pradesh.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <FeaturedExperiences />
      <WeddingHighlights />
      <Testimonials />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
