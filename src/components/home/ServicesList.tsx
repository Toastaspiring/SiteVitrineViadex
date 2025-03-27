import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Lightbulb, BookOpen } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Diagnostic & Stratégie IA",
      description: "Audit personnalisé, identification des opportunités, feuille de route IA adaptée à vos enjeux business.",
      link: "/methodologie"
    },
    {
      icon: Zap,
      title: "Acculturation & Formation",
      description: "Acculturation des dirigeants et équipes, orientation formations CertifIA, ateliers pratiques pour comprendre et maîtriser l'IA.",
      link: "/formation"
    },
    {
      icon: BookOpen,
      title: "Expérimentation & Mise en Œuvre",
      description: "Prototypage rapide, POC sur mesure, déploiement progressif et sécurisé de solutions IA.",
      link: "/methodologie"
    }
  ];

  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
              onClick={() => navigate(service.link)}
            >
              <div className="mb-4 flex justify-center">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
