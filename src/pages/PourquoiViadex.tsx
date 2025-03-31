
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/home/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PourquoiViadex = () => {
  const forces = [
    {
      title: "Une communication claire et pédagogique",
      description: "Fini le jargon. Nous parlons IA avec simplicité et transparence, pour que vos équipes comprennent, s'approprient et s'engagent.",
      icon: "💬"
    },
    {
      title: "Des solutions pragmatiques et accessibles",
      description: "Nous privilégions des outils à impact rapide (quick wins), des démarches progressives, et un focus permanent sur le ROI. L'IA n'a de valeur que si elle sert vos objectifs métiers et votre organisation.",
      icon: "🔑"
    },
    {
      title: "Un accompagnement humain, sur mesure",
      description: "Chaque entreprise est unique. Nous adaptons nos interventions à votre niveau de maturité, à vos priorités et à vos contraintes, en mobilisant notre réseau de partenaires locaux.",
      icon: "🤝"
    }
  ];

  const engagements = [
    `<span class="font-medium">Accessibilité :</span> rendre l'IA simple, concrète et adaptée à tous.`,
    `<span class="font-medium">Pragmatisme :</span> rester ancrés dans vos enjeux de terrain.</p>`,
    `<span class="font-medium">Éthique :</span> respecter vos données, vos valeurs, et le cadre réglementaire.</p>`,
    `<span class="font-medium">Collaboration :</span> avancer ensemble, avec vos équipes et nos partenaires.</p>`,
    `<span class="font-medium">Exécution :</span> transformer les idées en actions, avec rigueur et méthode.</p>`
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
              <h2 className="text-3xl font-bold mb-6">L'IA pour les PME/TPE/ETI : Une opportunité à saisir</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                L'intelligence artificielle n'est plus réservée aux grandes entreprises disposant de ressources illimitées. 
                Aujourd'hui, les PME, TPE et ETI peuvent également tirer parti de cette technologie pour optimiser leurs processus, 
                améliorer leur productivité et développer de nouveaux avantages concurrentiels.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Équipe travaillant sur des solutions IA" 
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Notre vision</h3>
                  <p className="text-secondary mb-6">
                    Chez Viadex, nous croyons que l'IA doit être accessible à toutes les entreprises, 
                    quelle que soit leur taille. Notre mission est de démocratiser l'accès à cette technologie 
                    en la rendant compréhensible et exploitable par tous.
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

        {/* Notre Vision et Pourquoi Viadex */}
        <section className="pt-2 pb-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Pourquoi Viadex a été créé ?</h3>
                  <p className="text-secondary mb-6">
                  Viadex est né d'un constat simple : malgré un engouement croissant pour l'IA, beaucoup d'entreprises se sentent perdues 
                  face à un discours trop technique, des outils mal adaptés et une promesse floue.
                  </p>
                  <p className="text-secondary mb-6">
                  Fort de 20 ans d'expérience en innovation et gestion d'entreprise à l'international, notre fondateur a voulu créer une structure 
                  qui parle le langage des dirigeants, s'appuie sur une vision business et apporte des solutions concrètes.
                  </p>
                  <p className="text-secondary">
                  Nous sommes basés en Bretagne, au plus proche des PME, TPE et ETI du Grand Ouest, et nous avons une mission claire : 
                  Vous aider à tirer profit de l'IA sans brûler les étapes, sans risques inutiles, et avec un retour sur investissement tangible.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Équipe travaillant sur des solutions IA" 
                    className="rounded-xl w-full h-auto object-cover"
                  />
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
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-2 text-primary flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <p 
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: engagement }}
                  ></p>
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
