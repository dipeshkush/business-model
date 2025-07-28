import AiAndMachineLearningHero from "@/components/ai-and-machine-learning/AiAndMachineLearningHero";
import CTATop from "@/components/ai-and-machine-learning/CTATop";
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
    <AiAndMachineLearningHero />
    <CTATop />
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