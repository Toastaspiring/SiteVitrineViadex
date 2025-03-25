
import { Check } from "lucide-react";

const ObjectivesAndBenefits = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
              <h2>Objectifs de la certification</h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Sélectionner les meilleurs outils IAG selon un projet donné",
                "Dialoguer avec l'IA de manière efficace et stratégique (prompt engineering)",
                "Produire des contenus professionnels multimédias (texte, image, vidéo…)",
                "Réviser et améliorer les productions IA",
                "Identifier et limiter les risques éthiques, légaux, techniques",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-1 text-white mt-1 flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
              <h2>Avantages pour les entreprises</h2>
            </div>

            <div className="space-y-4">
              {[
                "Productivité optimisée",
                "Transformation digitale facilitée",
                "Gain de compétitivité",
                "Formation collective sur site disponible",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-1 text-white mt-1 flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesAndBenefits;
