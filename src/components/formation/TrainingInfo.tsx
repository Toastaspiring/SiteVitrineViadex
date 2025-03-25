
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const TrainingInfo = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-semibold mb-8 text-primary">
          <h2>Une formation unique, pensée pour les professionnels</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Éligible CPF</h3>
                <p className="text-secondary">Financement facilité pour les salariés et indépendants</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Accompagnement expert</h3>
                <p className="text-secondary">Permanence hebdomadaire pour répondre à vos questions</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Tarif de lancement</h3>
                <p className="text-secondary">2 500 € pour un parcours complet et une certification reconnue</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Formation exclusive</h3>
                <p className="text-secondary">La seule en France axée sur la pratique responsable de l'IA générative</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary mb-8">
          <div className="flex items-center gap-2 font-semibold mb-2">
            <p className="text-primary">Formation sur site possible :</p>
          </div>
          <p className="text-secondary">
            Pour les entreprises avec plusieurs collaborateurs, Viadex propose des sessions de formation 
            en groupe dans vos locaux (à partir d'un certain nombre de participants).
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingInfo;
