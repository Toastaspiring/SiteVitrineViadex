import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/home/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight, Users, Handshake, Shield, Check } from "lucide-react";
const APropos = () => {
  const team = [{
    name: "Jad Marchoudi",
    role: "Développeur IA",
    bio: "Alternant en Bachelor IA à l'EPSI Rennes",
    avatar: "lovable-uploads/avatar/jad.jpg"
  }, {
    name: "Vincent Delacroix",
    role: "CEO & entrepreneur",
    bio: "Expert en solutions technologiques et sécurité, avec une expérience polyvalente dans la formation",
    avatar: "lovable-uploads/avatar/Vincent.jpg"
  }, {
    name: "Louis Marec",
    role: "Développeur IA",
    bio: "Étudiant passionné d'informatique et de voile à Alternant en Bachelor IA à l'EPSI Rennes'EPSI Rennes.",
    avatar: "lovable-uploads/avatar/Louis.jpg"
  }];
  const Partenaire = [{
    name: "Just AI",
    avatar: "lovable-uploads/partenaire/justAi.png"
  }, {
    name: "Le Poool",
    avatar: "lovable-uploads/partenaire/LePool.png"
  }, {
    name: "AppInside",
    avatar: "lovable-uploads/partenaire/coachappinside.png"
  }];
  return <div className="min-h-screen bg-background">
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

        {/* Nos Partenaires */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos partenaires</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Partenaire.map((member, index) => <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <img src={member.avatar} alt={member.name} className="w-32 h-32 mx-auto mb-4 object-cover" />
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

        {/* Notre Vision et Pourquoi Viadex */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-primary">
                
                <h2 className="text-3xl font-bold">Notre Vision : L'IA, un levier stratégique pour toutes les entreprises</h2>
              </div>
              
              <p className="text-secondary mb-6">
                Chez Viadex, nous sommes convaincus que l'intelligence artificielle ne doit pas être réservée aux grands groupes ou aux experts techniques. 
                Nous croyons que chaque entreprise – quelle que soit sa taille ou son secteur – peut tirer une valeur concrète et mesurable de l'IA, 
                à condition qu'elle soit bien comprise, bien cadrée et bien intégrée.
              </p>
              
              <p className="text-secondary mb-8">
                Notre ambition ? <span className="font-medium">Démocratiser l'accès à l'IA</span>, en la rendant compréhensible, utile et adaptée à votre réalité opérationnelle.
                Nous avançons à vos côtés, pas à pas, pour identifier les bons usages, définir les priorités et sécuriser la mise en œuvre, 
                sans jargon inutile ni promesse irréaliste.
              </p>
              
              <div className="flex items-center gap-3 mb-4 text-primary">
                
                <h3 className="text-2xl font-bold">Pourquoi Viadex a été créé ?</h3>
              </div>
              
              <p className="text-secondary mb-4">
                Viadex est né d'un constat simple : malgré un engouement croissant pour l'IA, beaucoup d'entreprises se sentent perdues 
                face à un discours trop technique, des outils mal adaptés et une promesse floue.
              </p>
              
              <p className="text-secondary mb-6">
                Fort de 20 ans d'expérience en innovation et gestion d'entreprise à l'international, notre fondateur a voulu créer une structure 
                qui parle le langage des dirigeants, s'appuie sur une vision business et apporte des solutions concrètes.
              </p>
              
              <p className="text-secondary mb-8">
                Nous sommes basés en Bretagne, au plus proche des PME et ETI du Grand Ouest, et nous avons une mission claire : 
                Vous aider à tirer profit de l'IA sans brûler les étapes, sans risques inutiles, et avec un retour sur investissement tangible.
              </p>
              
              <div className="flex items-center gap-3 mb-5 text-primary">
                
                <h3 className="text-2xl font-bold">Notre approche : 3 piliers qui font la différence</h3>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1">1</span> 
                    Une communication claire et pédagogique
                  </h4>
                  <p className="text-secondary ml-8">
                    Fini le jargon. Nous parlons IA avec simplicité et transparence, pour que vos équipes comprennent, s'approprient et s'engagent.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1">2</span> 
                    Des solutions pragmatiques et accessibles
                  </h4>
                  <p className="text-secondary ml-8">
                    Nous privilégions des outils à impact rapide (quick wins), des démarches progressives, et un focus permanent sur le ROI. 
                    L'IA n'a de valeur que si elle sert vos objectifs business.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1">3</span> 
                    Un accompagnement humain, sur mesure
                  </h4>
                  <p className="text-secondary ml-8">
                    Chaque entreprise est unique. Nous adaptons nos interventions à votre niveau de maturité, à vos priorités et à vos contraintes, 
                    en mobilisant notre réseau de partenaires locaux.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-5 text-primary">
                
                <h3 className="text-2xl font-bold">Nos valeurs : notre boussole au quotidien</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-secondary"><span className="font-medium">Accessibilité :</span> rendre l'IA simple, concrète et adaptée à tous.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-secondary"><span className="font-medium">Pragmatisme :</span> rester ancrés dans vos enjeux de terrain.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-secondary"><span className="font-medium">Éthique :</span> respecter vos données, vos valeurs, et le cadre réglementaire.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-secondary"><span className="font-medium">Collaboration :</span> avancer ensemble, avec vos équipes et nos partenaires.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-secondary"><span className="font-medium">Exécution :</span> transformer les idées en actions, avec rigueur et méthode.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-primary">
                <Handshake className="w-6 h-6" />
                <p className="text-lg font-semibold">Une IA utile, sécurisée, responsable. Chez Viadex, nous croyons à une IA au service des hommes, des métiers, et de la performance durable.</p>
              </div>
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
export default APropos;