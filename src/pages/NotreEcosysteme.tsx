
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Network, Group } from "lucide-react";

const NotreEcosysteme = () => {
  const ecosystemBlocks = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Nos Collaborateurs",
      description: "Une équipe dynamique et pluridisciplinaire, passionnée par l'innovation et l'intelligence artificielle."
    },
    {
      icon: <Network className="w-12 h-12 text-primary" />,
      title: "Nos Partenaires",
      description: "Un réseau solide de partenaires technologiques et stratégiques qui nous permettent d'offrir des solutions de pointe."
    },
    {
      icon: <Group className="w-12 h-12 text-primary" />,
      title: "Notre Communauté",
      description: "Un écosystème dynamique de clients, experts et passionnés d'IA qui partagent notre vision et notre mission."
    }
  ];

  const teamMembers = [
    {
      name: "Vincent",
      role: "Fondateur & Directeur",
      image: "/lovable-uploads/avatar/Vincent.jpg"
    },
    {
      name: "Louis",
      role: "Consultant IA",
      image: "/lovable-uploads/avatar/Louis.jpg"
    },
    {
      name: "Jad",
      role: "Consultant Technique",
      image: "/lovable-uploads/avatar/jad.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Notre Écosystème</h1>
            <p className="text-xl max-w-3xl">
              Découvrez l'équipe, les partenaires et la communauté qui font de Viadex un acteur unique dans l'accompagnement à l'IA.
            </p>
          </div>
        </section>

        {/* Ecosystem Blocks */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {ecosystemBlocks.map((block, index) => (
                <div key={index} className="text-center bg-background p-6 rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{block.title}</h3>
                  <p className="text-secondary">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 mx-auto object-cover rounded-full mb-4 shadow-md"
                  />
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotreEcosysteme;
