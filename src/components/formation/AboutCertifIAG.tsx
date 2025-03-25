
import { Award, Check, FileText } from "lucide-react";

const AboutCertifIAG = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-semibold mb-8 text-primary">
          <h2>Qu'est-ce que CertifIAG ?</h2>
        </div>
        
        <p className="text-lg mb-8">
          La certification "Produire et réviser du contenu professionnel multimédia à l'aide d'outils 
          d'Intelligence Artificielle Générative (IAG) de façon responsable" est bien plus qu'un simple 
          programme de formation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold">Reconnue officiellement</p>
            <p className="text-secondary text-sm">(France Compétences RS6891)</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold">Validation de compétences opérationnelles</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold">Usage éthique, juridique et stratégique de l'IAG</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertifIAG;
