import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/ui/home/about";
import { HeroSection } from "@/components/ui/home/hero";
import { ServicesSection } from "@/components/ui/home/services";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
