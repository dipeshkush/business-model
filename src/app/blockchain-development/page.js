import BCDHero from "@/components/blockchain-development/BCDHero";
import BlockchainBenefits from "@/components/blockchain-development/BlockchainBenefits";
import Services from "@/components/blockchain-development/Services";
import BlockchainTech from "@/components/blockchain-development/BlockchainTech";
import BlockchainIndustries from "@/components/blockchain-development/BlockchainIndustries";
import BlockchainLifecycle from "@/components/blockchain-development/BlockchainLifecycle";
import BCDSuccessStories from "@/components/blockchain-development/BCDSuccessStories";
import BCDFAQ from "@/components/blockchain-development/BCDFAQ";
import CTABottom from "@/components/blockchain-development/CTABottom";
export default function Home() {
  return (
   <>
   <BCDHero />
   <BlockchainBenefits />
   <Services />
   <BlockchainTech />
   <BlockchainIndustries />
   <BlockchainLifecycle />
   <BCDSuccessStories />
   <BCDFAQ />
   <CTABottom />
   </>
  );
}