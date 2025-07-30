import BmHero from "@/components/business-model/BmHero";
import PricingModel from "@/components/business-model/PricingModel";
import WorkingModel from "@/components/business-model/WorkingModel";
import WorkingMethod from "@/components/business-model/WorkingMethod";
import Contact from "@/components/business-model/Contact";


export default function Home() {
  return (
   <>
   <BmHero />
   <WorkingModel />
   <PricingModel />
   <WorkingMethod />
   <Contact />
   </>
  );
}
