import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PackagesSection } from "@/components/packages-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GallerySection } from "@/components/gallery-section";
import { VideoSection } from "@/components/video-section";
import { SpotifySection } from "@/components/spotify-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <TestimonialsSection />
        <GallerySection />
        <VideoSection />
        <SpotifySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
