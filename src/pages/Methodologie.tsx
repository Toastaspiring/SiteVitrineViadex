
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, LineChart, Layers, Users, Shield } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Methodologie = () => {
  const etapes = [
    {
      title: "Acculturation et Formation en amont",
      description: "Sensibilisation aux enjeux de l'IA, formations ciblées selon les profils utilisateurs (CODIR, équipes opérationnelles, fonctions support), adoption d'un socle commun de compréhension avant tout déploiement.",
      details: [
        "Sensibilisation aux enjeux de l'IA",
        "Formations ciblées selon les profils utilisateurs",
        "Adoption d'un socle commun de compréhension"
      ],
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Évaluation et Diagnostic",
      description: "Audit des processus et des flux de données, analyse des usages internes non contrôlés, établissement d'une roadmap progressive et réaliste.",
      details: [
        "Audit des processus et des flux de données",
        "Analyse des usages internes non contrôlés",
        "Roadmap progressive et réaliste"
      ],
      icon: <LineChart className="w-8 h-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Expérimentation et Proof of Concept (POC)",
      description: "Tests en conditions réelles sur vos cas d'usage, résultats mesurables avant généralisation, ajustements agiles et sur-mesure.",
      details: [
        "Tests en conditions réelles sur vos cas d'usage",
        "Résultats mesurables avant généralisation",
        "Ajustements agiles et sur-mesure"
      ],
      icon: <Layers className="w-8 h-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Mise en œuvre progressive",
      description: "Focus initial sur les quick wins à fort impact, identification des partenaires et des solutions adaptées pour chaque cas d'usage, déploiement par phases sécurisées.",
      details: [
        "Focus initial sur les quick wins à fort impact",
        "Identification des partenaires et des solutions adaptées",
        "Déploiement par phases sécurisées",
        "Accompagnement dans la gestion du projet IA",
        "Encadrement RH et conduite du changement"
      ],
      icon: <Users className="w-8 h-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Suivi et optimisation",
      description: "Tableaux de bord et indicateurs de ROI, ajustements fonctionnels, évolution des solutions en fonction de vos besoins.",
      details: [
        "Tableaux de bord et indicateurs de ROI",
        "Ajustements fonctionnels",
        "Évolution des solutions en fonction de vos besoins"
      ],
      icon: <Shield className="w-8 h-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Notre Méthodologie : Dérisquer votre transition IA</h1>
            <p className="text-xl max-w-3xl">
              Une IA maîtrisée : Réduction des risques, usage responsable, ROI mesurable et approche progressive adaptée à vos cas d'usage
            </p>
          </div>
        </section>

        {/* Étapes détaillées */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12">
              {etapes.map((etape, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 p-8 rounded-xl bg-white shadow-sm ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img 
                          src={etape.image} 
                          alt={etape.title} 
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </div>
                      <h2 className="text-2xl font-bold text-primary">{etape.title}</h2>
                    </div>
                    <p className="text-secondary mb-6">{etape.description}</p>
                    <h3 className="font-semibold mb-3">Ce que nous proposons :</h3>
                    <ul className="space-y-2 mb-6">
                      {etape.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Échangeons sur votre stratégie IA et réduisons ensemble vos risques opérationnels !</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Notre approche méthodique permet de minimiser les risques tout en maximisant le retour sur investissement de vos initiatives d'IA.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-white text-primary hover:bg-white/90 text-lg">
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

export default Methodologie;
