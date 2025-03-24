import { ArrowRight, Check, LightbulbIcon, ClockIcon, UsersIcon, ShieldIcon, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Formations IA",
      description: "Acculturation des dirigeants et équipes, formations certifiantes CertifIA, ateliers pratiques pour comprendre et maîtriser l'IA.",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      color: "bg-blue-50",
      link: "/formation"
    },
    {
      title: "Diagnostic Data & IA",
      description: "Audit de vos données et processus, identification des opportunités d'IA, évaluation de la maturité et recommandations personnalisées.",
      icon: <ClockIcon className="w-6 h-6 text-primary" />,
      color: "bg-blue-50",
      link: "/methodologie"
    },
    {
      title: "Accompagnement de projets IA",
      description: "Suivi de bout en bout de vos projets IA, change management, intégration technique et formation des utilisateurs.",
      icon: <UsersIcon className="w-6 h-6 text-primary" />,
      color: "bg-blue-50",
      link: "/methodologie"
    },
    {
      title: "Mise en œuvre dé-risquée",
      description: "Approche progressive qui minimise les risques, respect du RGPD, évaluation du ROI et focus sur les cas d'usage à valeur ajoutée.",
      icon: <ShieldIcon className="w-6 h-6 text-primary" />,
      color: "bg-blue-50",
      link: "/methodologie"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Section Bannière */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 relative">
                <span className="block">L'IA au service des</span>
                <span className="block">PME & ETI de l'Ouest :</span>
                <span className="block text-white">simplifiez votre transformation</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                Viadex accompagne les entreprises dans l'adoption de l'IA, sans complexité technique.
              </p>
              <Link to="/contact">
                <Button className="px-6 py-6 bg-white text-primary hover:bg-white/90 rounded-lg text-lg font-medium">
                  Prenez un rendez-vous découverte
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-blue-300/20 rounded-full filter blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <img 
                    src="/lovable-uploads/logoV1.png"
                    alt="Viadex Logo" 
                    className="max-w-[100%] w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Nos services d'accompagnement IA</h2>
              <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
                Notre approche méthodique vous garantit une adoption sécurisée et efficace de l'intelligence artificielle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block h-full hover:no-underline"
                >
                  <div
                    className="p-6 rounded-xl border border-border hover:border-primary transition-colors bg-background flex flex-col h-full"
                  >
                    <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-secondary text-sm flex-grow">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/methodologie">
                <Button className="px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2">
                  Découvrir notre méthodologie <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Formation CertifIAG Banner */}
        <section className="py-12 px-6 lg:px-8 bg-gradient-to-r from-blue-100 to-blue-50">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-sm">
              <div className="md:w-7/12">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" />
                  Formation CertifIAG
                </h3>
                <p className="text-secondary mb-6">
                  Maîtrisez l'IA Générative avec discernement grâce à notre certification reconnue officiellement.
                  Formation éligible CPF pour les professionnels souhaitant intégrer l'IA de façon concrète et responsable.
                </p>
                <Link to="/formation">
                  <Button className="flex items-center gap-2 bg-primary text-white">
                    Découvrir la formation <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-5/12 bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Points clés :</h4>
                <ul className="space-y-2">
                  {[
                    "Certification officielle (France Compétences RS6891)",
                    "Éligible au financement CPF",
                    "Formation exclusive en France",
                    "Tarif de lancement : 2 500 €"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
            
        {/* Présentation rapide */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-xl">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Vers l'intelligence en toute confiance</h3>
                <p className="text-secondary mb-6">
                  L'IA n'est plus réservée aux grandes entreprises. Chez Viadex, nous vous aidons à exploiter son potentiel de manière simple et efficace, quelles que soient la taille et les ressources de votre entreprise.
                </p>
                <Link to="/methodologie">
                  <Button className="flex items-center gap-2 bg-primary text-white">
                    Découvrir notre méthodologie <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <ContactForm isShort={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Viadex */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Viadex ?</h2>
              <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
                Notre approche unique rend l'IA accessible et efficace pour votre entreprise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Sans jargon technique",
                  description: "Nous parlons votre langage, pas celui des ingénieurs.",
                },
                {
                  title: "Solutions accessibles",
                  description: "Des approches concrètes adaptées à vos besoins réels.",
                },
                {
                  title: "Accompagnement personnalisé",
                  description: "Un suivi sur mesure pour votre entreprise.",
                },
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 text-white flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-secondary">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/contact">
                <Button className="px-6 py-3 bg-primary text-white text-lg">
                  Voyons ensemble comment l'IA peut vous aider
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Prêt à commencer votre transformation ?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui ont déjà simplifié leur adoption de l'IA avec Viadex.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
                Prendre un rendez-vous
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
