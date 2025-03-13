
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PourquoiViadex = () => {
  const forces = [
    {
      title: "Approche sans jargon technique",
      description: "Nous croyons que l'IA doit être accessible à tous, pas seulement aux spécialistes. C'est pourquoi nous nous engageons à communiquer de façon claire et compréhensible, sans jargon technique.",
      icon: "💬"
    },
    {
      title: "Solutions IA accessibles et concrètes",
      description: "Nous identifions des solutions adaptées à vos besoins réels et à votre budget, avec un focus sur le retour sur investissement rapide et mesurable.",
      icon: "🔑"
    },
    {
      title: "Accompagnement pragmatique et personnalisé",
      description: "Chaque entreprise a ses défis uniques. Notre approche personnalisée garantit que les solutions proposées correspondent parfaitement à vos objectifs spécifiques.",
      icon: "🤝"
    }
  ];

  const engagements = [
    "Clarté et transparence dans nos communications",
    "Approche pédagogique adaptée à tous les niveaux",
    "Focus sur des résultats concrets et mesurables",
    "Respect de vos données et de votre confidentialité",
    "Accompagnement sur le long terme"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Pourquoi choisir Viadex ?</h1>
            <p className="text-xl max-w-3xl">
              Découvrez ce qui rend notre approche unique et pourquoi nous sommes le partenaire idéal pour votre transformation IA.
            </p>
          </div>
        </section>

        {/* L'IA pour les PME/ETI */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">L'IA pour les PME/ETI : Une opportunité à saisir</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                L'intelligence artificielle n'est plus réservée aux grandes entreprises disposant de ressources illimitées. 
                Aujourd'hui, les PME et ETI peuvent également tirer parti de cette technologie pour optimiser leurs processus, 
                améliorer leur productivité et développer de nouveaux avantages concurrentiels.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/3258e66c-55f9-47f0-a8af-e2ec44ce6416.png"
                    alt="Viadex Diagram" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Notre vision</h3>
                  <p className="text-secondary mb-6">
                    Chez Viadex, nous croyons que l'IA doit être accessible à toutes les entreprises, 
                    quelle que soit leur taille. Notre mission est de démocratiser l'accès à cette technologie 
                    en la rendant compréhensible, accessible et exploitable par tous.
                  </p>
                  <p className="text-secondary">
                    Nous travaillons main dans la main avec nos clients pour identifier les opportunités concrètes 
                    où l'IA peut apporter une réelle valeur ajoutée, puis nous les accompagnons pas à pas dans 
                    leur mise en œuvre, en veillant à ce que ces solutions soient parfaitement intégrées à leur 
                    activité et à leur culture d'entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos forces */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos forces</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {forces.map((force, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl mb-4">{force.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{force.title}</h3>
                  <p className="text-secondary">{force.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos engagements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {engagements.map((engagement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 text-primary flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-lg">{engagement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Voyons ensemble comment l'IA peut vous aider</h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Prêt à explorer les possibilités de l'IA pour votre entreprise ? Prenons rendez-vous pour un échange personnalisé.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-primary text-white text-lg">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PourquoiViadex;
