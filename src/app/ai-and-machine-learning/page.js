import AIMLHero from "@/components/ai-and-machine-learning/AIMLHero";
import WhyAI from "@/components/ai-and-machine-learning/WhyAI";
import AIMLServices from "@/components/ai-and-machine-learning/AIMLServices";
import AIStack from "@/components/ai-and-machine-learning/AIStack";
import AIDevelopmentProcess from "@/components/ai-and-machine-learning/AIDevelopmentProcess";
import SuccessMetrics from "@/components/ai-and-machine-learning/SuccessMetrics";
import FAQAIML from "@/components/ai-and-machine-learning/FAQAIML";
import CTABottom from "@/components/ai-and-machine-learning/CTABottom";
export default function Home() {
  return (
   <>
    <AIMLHero />
    <WhyAI />
    <AIMLServices />
    <AIStack />
    <AIDevelopmentProcess />
    <SuccessMetrics />
    <FAQAIML />
    <CTABottom />
   </>
  );
}