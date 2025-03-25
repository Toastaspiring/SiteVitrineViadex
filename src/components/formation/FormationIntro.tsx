
const FormationIntro = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
          <h2>L'IA, oui… mais pas sans intelligence humaine.</h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-secondary">
            Aujourd'hui, tout le monde parle d'IA. Certains la craignent, d'autres la fantasment. 
            Et pourtant, une vérité s'impose : l'intelligence artificielle n'est rien sans l'intelligence humaine. 
            Ce n'est pas celui qui sait utiliser une IA qui fera la différence, mais celui qui saura l'exploiter 
            avec discernement, méthode et éthique.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary">
            <div className="flex items-center gap-2 font-semibold mb-2">
              <p className="text-primary">C'est exactement ce que propose CertifIAG :</p>
            </div>
            <p className="text-secondary">
              Une certification conçue pour les professionnels souhaitant intégrer l'IA générative 
              dans leurs pratiques de façon concrète, raisonnée… et impactante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationIntro;
