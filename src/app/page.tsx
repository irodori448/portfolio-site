import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { ServiceSection } from "@/components/ServiceSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WorksSection } from "@/components/WorksSection";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <ServiceSection />
        <ProcessSection />
        <WorksSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
