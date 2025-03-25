
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, ClockIcon, UsersIcon, ShieldIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesList = () => {
  const services = [{
    title: "Formations IA",
    description: "Acculturation des dirigeants et équipes, formations certifiantes CertifIA, ateliers pratiques pour comprendre et maîtriser l'IA.",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    color: "bg-blue-50",
    link: "/formation"
  }, {
    title: "Diagnostic Data & IA",
    description: "Audit de vos données et processus, identification des opportunités d'IA, évaluation de la maturité et recommandations personnalisées.",
    icon: <ClockIcon className="w-6 h-6 text-primary" />,
    color: "bg-blue-50",
    link: "/methodologie"
  }, {
    title: "Accompagnement de projets IA",
    description: "Suivi de bout en bout de vos projets IA, change management, intégration technique et formation des utilisateurs.",
    icon: <UsersIcon className="w-6 h-6 text-primary" />,
    color: "bg-blue-50",
    link: "/methodologie"
  }, {
    title: "Mise en œuvre dé-risquée",
    description: "Approche progressive qui minimise les risques, respect du RGPD, évaluation du ROI et focus sur les cas d'usage à valeur ajoutée.",
    icon: <ShieldIcon className="w-6 h-6 text-primary" />,
    color: "bg-blue-50",
    link: "/methodologie"
  }];

  return (
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
            <Link key={index} to={service.link} className="block h-full hover:no-underline">
              <div className="p-6 rounded-xl border border-border hover:border-primary transition-colors bg-background flex flex-col h-full">
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
  );
};

export default ServicesList;
