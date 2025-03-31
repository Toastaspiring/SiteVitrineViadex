import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/home/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight, Users, Handshake, Shield, Check } from "lucide-react";

const NotreEcosystem = () => {
  const team = [{
    name: "Jad Marchoudi",
    role: "Développeur Cybersécurité et DataScience",
    bio: "Jad s’assure que chaque projet respecte les bonnes pratiques de cybersécurité, un pilier essentiel dans l’intégration responsable de l’IA.",
    avatar: "lovable-uploads/avatar/jad.jpg"
  }, {
    name: "Vincent Delacroix",
    role: "CEO & Expert IA Business",
    bio: "Fort de 20 ans d’expérience, Vincent accompagne les entreprises avec une approche business de l’IA. Un seul objectif : assurer la réussite concrète et opérationnelle de chaque projet mené.",
    avatar: "lovable-uploads/avatar/Vincent.jpg"
  }, {
    name: "Louis Marec",
    role: "Développeur Fullstack BackEnd",
    bio: "Louis transforme les idées en outils concrets, robustes et évolutifs, en lien direct avec les besoins opérationnels des entreprises.",
    avatar: "lovable-uploads/avatar/Louis.jpg"
  }];
  const Partenaire = [{
    name: "Just AI",
    avatar: "lovable-uploads/partenaire/justAi.png",
    link: "https://www.justai.co/"
  }, {
    name: "Le Poool",
    avatar: "lovable-uploads/partenaire/LePool.png",
    link: "https://lepoool.tech/"
  }, {
    name: "AppInside",
    avatar: "lovable-uploads/partenaire/coachappinside.png",
    link: "https://www.linkedin.com/company/coachappinside/"
  }];

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Notre Écosystème</h1>
            <p className="text-xl max-w-3xl">
              Découvrez qui nous sommes, notre mission et notre passion pour rendre l'IA accessible à toutes les entreprises.
            </p>
          </div>
        </section>

        {/* Nos Partenaires */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos partenaires</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Partenaire.map((member, index) => <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md  transition-all">
                  <a href={member.link}><img src={member.avatar} alt={member.name} className="w-32 h-32 mx-auto mb-4 object-cover" /></a>
                </div>)}
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre équipe</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-secondary">{member.bio}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Échangeons sur vos besoins</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Prêt à en savoir plus sur notre approche et comment nous pouvons vous accompagner ? Prenons contact.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-white text-primary text-lg">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};

export default NotreEcosystem;
