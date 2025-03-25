
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, GraduationCap, BookOpen, Award, FileText, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Formation CertifIAG</h1>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-2">
              <p>Maîtrisez l'IA Générative avec discernement grâce à la certification CertifIAG</p>
            </div>
            <div className="flex items-center text-gray-300 text-[1.1rem] tracking-wide italic gap-4">
              <div className="bg-white rounded-full p-3">
                <img src="lovable-uploads/partenaire/justAi.png" alt="Just IA Logo" className="h-16 w-16 object-contain" />
              </div>
              <div className="bg-white rounded-full p-3">
                <img src="lovable-uploads/partenaire/certifopac.png" alt="CertifOpac Logo" className="h-16 w-16 object-contain" />
              </div>
              <span><strong>Formation CertifOpac en partenariat avec Just IA</strong></span>
            </div>
          </div>
        </section>




        {/* Intro */}
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

        {/* À propos de CertifIAG */}
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

        {/* Pourquoi se former */}
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

        {/* Informations sur la formation */}
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

        {/* Objectifs et avantages */}
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

        {/* Modalités */}
        <section className="py-12 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
                  <h2>Comment ça se passe ?</h2>
                </div>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Épreuve 1 – Rapport professionnel (écrit)</h3>
                    <p className="text-secondary">Application concrète des compétences dans votre contexte professionnel</p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Épreuve 2 – Soutenance orale (visioconférence)</h3>
                    <p className="text-secondary">Présentation et défense de votre projet devant un jury</p>
                  </CardContent>
                </Card>
                
                <p className="text-secondary italic">
                  ⏳ Jusqu'à un an après la formation pour passer la certification
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
                  <h2>Pour qui ?</h2>
                </div>
                
                <p className="mb-6 text-lg">
                  Consultants, marketeurs, formateurs, communicants, chefs de projet, managers…
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary mb-6">
                  <h3 className="font-semibold text-lg mb-2">En conclusion</h3>
                  <p className="text-secondary mb-2">
                    L'IA ne pense pas à votre place. Elle amplifie votre intelligence.
                  </p>
                  <p className="font-medium">
                    CertifIAG, c'est la preuve que vous savez faire la différence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-semibold mb-6">
              <span className="text-3xl">✉️</span>
              <h2>Pour en savoir plus, contactez-nous ou découvrez les prochaines sessions !</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-6 py-6 text-lg">
                  Nous contacter
                </Button>
              </Link>
              <Link to="/calendrier">
                <Button className="bg-white/20 text-white hover:bg-white/30 px-6 py-6 text-lg">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Formation;
