
import { Check } from "lucide-react";

const WhyTrainInAI = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-semibold mb-8 text-primary">
          <span className="text-3xl">💡</span>
          <h2>Pourquoi se former à l'IA Générative ?</h2>
        </div>
        
        <p className="text-lg mb-6">
          Parce que l'IA ne remplace pas votre cerveau, elle l'augmente. Encore faut-il savoir la maîtriser…
        </p>
        
        <div className="mb-8">
          <h3 className="font-semibold text-xl mb-4">Ce que les meilleurs profils savent déjà :</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Où poser des limites à l'IA",
              "Comment challenger ses résultats",
              "Comment l'exploiter sans en devenir dépendant",
              "Et surtout : comment en faire un levier de performance",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-1 text-white mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-secondary">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrainInAI;
