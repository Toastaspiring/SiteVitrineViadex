
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseSection = () => {
  const points = [{
    title: "Centrer sur vos processus",
    description: "Nous parlons votre langage et notre expérience nous permet de s'adapter à votre métier."
  }, {
    title: "Solutions accessibles",
    description: "Des approches concrètes adaptées à vos besoins réels."
  }, {
    title: "Accompagnement personnalisé",
    description: "Un suivi sur mesure pour votre entreprise."
  }];

  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Viadex ?</h2>
          <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
            Notre approche unique rend l'IA accessible et efficace pour votre entreprise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 text-white flex-shrink-0 mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-secondary">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/contact">
            <Button className="px-6 py-3 bg-primary text-white text-lg hidden md:inline-flex">
              Voyons ensemble comment l'IA peut vous aider
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
