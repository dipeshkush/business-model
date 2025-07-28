import HybridAppSection from "@/components/hybrid-app-development/HybridAppSection";
import CardsSection from "@/components/hybrid-app-development/CardsSection";
import TechStack from "@/components/hybrid-app-development/TechStack";
import AgileProcessSection from "@/components/hybrid-app-development/AgileProcessSection";
import CTASection from "@/components/hybrid-app-development/CTASection";
import FAQ from "@/components/hybrid-app-development/FAQ";

export default function Home() {    
  return (
   <>
   <HybridAppSection />
   <CardsSection />
   <TechStack />
   <AgileProcessSection />
   <CTASection />
   <FAQ />
   </>
  );
}