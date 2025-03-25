
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Vers l'intelligence en toute confiance</h3>
            <p className="text-secondary mb-6">
              L'IA n'est plus réservée aux grandes entreprises. Chez Viadex, nous vous aidons à exploiter son potentiel de manière simple et efficace, quelles que soient la taille et les ressources de votre entreprise.
            </p>
            <Link to="/methodologie">
              <Button className="flex items-center gap-2 bg-primary text-white">
                Découvrir notre méthodologie <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <ContactForm isShort={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
