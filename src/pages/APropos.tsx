
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const APropos = () => {
  const team = [
    {
      name: "Jad Marchoudi",
      role: "Développeur IA",
      bio: "Alternant en Bachelor IA à l'EPSI Rennes",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Vincent Delacroix",
      role: "CEO & entrepreneur",
      bio: "Expert en solutions technologiques et sécurité, avec une expérience polyvalente dans la formation",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Louis Marec",
      role: "Développeur IA",
      bio: "Étudiant passionné d'informatique et de voile à Alternant en Bachelor IA à l'EPSI Rennes'EPSI Rennes, en quête d'une alternance avec une expérience internationale",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">À Propos de Viadex</h1>
            <p className="text-xl max-w-3xl">
              Découvrez qui nous sommes, notre mission et notre passion pour rendre l'IA accessible à toutes les entreprises.
            </p>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-primary">Notre mission</h2>
                <p className="text-xl text-secondary mb-6">
                  Permettre aux PME d'adopter l'IA simplement et efficacement.
                </p>
                <p className="text-secondary mb-4">
                  Chez Viadex, nous croyons fermement que l'intelligence artificielle ne doit pas être réservée aux grandes entreprises. 
                  Notre mission est de démocratiser l'accès à cette technologie transformative en la rendant compréhensible, 
                  accessible et exploitable par toutes les entreprises, quelle que soit leur taille.
                </p>
                <p className="text-secondary">
                  Nous nous engageons à accompagner nos clients avec pédagogie et bienveillance, en nous adaptant à leur niveau 
                  de maturité technologique et en veillant à ce que chaque solution proposée apporte une valeur concrète et mesurable.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/3699b2d8-edb8-4fe3-ade8-f89c626c1ab9.png"
                  alt="Viadex Mission" 
                  className="rounded-full shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre équipe</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-secondary">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Viadex a été créé */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">Pourquoi Viadex a été créé ?</h2>
              
              <p className="text-secondary mb-4">
                Viadex est né d'un constat simple : malgré le potentiel immense de l'intelligence artificielle pour toutes les entreprises, 
                son adoption reste freinée par des barrières techniques, un langage complexe et des solutions souvent inadaptées aux besoins des PME.
              </p>
              
              <p className="text-secondary mb-4">
                Nos fondateurs, forts de leur expérience dans l'accompagnement des entreprises en transformation numérique, 
                ont décidé de créer Viadex pour combler ce fossé et offrir un accompagnement véritablement adapté aux besoins 
                et aux réalités des PME et ETI françaises.
              </p>
              
              <p className="text-secondary mb-4">
                Notre approche différenciante repose sur trois piliers :
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-secondary space-y-2">
                <li>Une communication claire et accessible, sans jargon technique</li>
                <li>Des solutions pragmatiques et abordables, avec un focus sur le ROI</li>
                <li>Un accompagnement personnalisé et sur mesure, qui s'adapte à votre niveau de maturité</li>
              </ul>
              
              <p className="text-secondary">
                Aujourd'hui, notre mission reste plus pertinente que jamais : aider les entreprises françaises à tirer parti 
                de la révolution de l'IA pour développer leur compétitivité et pérenniser leur activité dans un monde en constante évolution.
              </p>
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
    </div>
  );
};

export default APropos;
