
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Diagnostic IA",
      description: "Une analyse approfondie de votre entreprise pour identifier les opportunités d'utilisation de l'IA et les défis à relever.",
      details: [
        "Audit des processus existants",
        "Identification des cas d'usage pertinents",
        "Évaluation de la maturité numérique",
        "Recommandations stratégiques"
      ],
      icon: "🔍"
    },
    {
      title: "Accompagnement stratégique",
      description: "Un accompagnement sur mesure pour intégrer l'IA dans votre stratégie d'entreprise et mettre en place des solutions adaptées.",
      details: [
        "Définition de la vision IA",
        "Élaboration de la feuille de route",
        "Sélection des outils adaptés",
        "Gestion du changement"
      ],
      icon: "🚀"
    },
    {
      title: "Formations IA",
      description: "Des programmes de formation pour sensibiliser vos équipes aux enjeux de l'IA et développer leurs compétences.",
      details: [
        "Sensibilisation aux fondamentaux de l'IA",
        "Formation aux outils d'IA générative",
        "Ateliers pratiques sur cas d'usage",
        "Coaching des équipes"
      ],
      icon: "📚"
    },
    {
      title: "Veille IA",
      description: "Un service de veille pour vous tenir informé des dernières tendances et innovations en matière d'IA pertinentes pour votre secteur.",
      details: [
        "Rapports de veille personnalisés",
        "Alertes sur les innovations pertinentes",
        "Analyse des tendances sectorielles",
        "Recommandations d'adoption"
      ],
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl max-w-3xl">
              Découvrez comment Viadex peut vous accompagner dans l'adoption de l'IA, de manière simple, 
              efficace et adaptée à votre entreprise.
            </p>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 p-8 rounded-xl bg-white shadow-sm ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="text-8xl">{service.icon}</div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4 text-primary">{service.title}</h2>
                    <p className="text-secondary mb-6">{service.description}</p>
                    <h3 className="font-semibold mb-3">Ce que nous proposons:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="bg-primary text-white">En savoir plus</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'un accompagnement ?</h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Chaque entreprise est unique. Échangeons ensemble pour identifier la meilleure approche pour votre situation.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-primary text-white text-lg">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
