import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/ui/home/about";
import { HeroSection } from "@/components/ui/home/hero";
import { ServicesSection } from "@/components/ui/home/services";
import { TeamSection } from "@/components/ui/home/team";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
}
