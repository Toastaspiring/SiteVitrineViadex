
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FormationHeader from "@/components/formation/FormationHeader";
import FormationIntro from "@/components/formation/FormationIntro";
import AboutCertifIAG from "@/components/formation/AboutCertifIAG";
import WhyTrainInAI from "@/components/formation/WhyTrainInAI";
import TrainingInfo from "@/components/formation/TrainingInfo";
import ObjectivesAndBenefits from "@/components/formation/ObjectivesAndBenefits";
import ProcessAndTarget from "@/components/formation/ProcessAndTarget";
import FormationCTA from "@/components/formation/FormationCTA";

const Formation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <FormationHeader />
        <FormationIntro />
        <AboutCertifIAG />
        <WhyTrainInAI />
        <TrainingInfo />
        <ObjectivesAndBenefits />
        <ProcessAndTarget />
        <FormationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Formation;
