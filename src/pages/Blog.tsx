
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const Blog = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email inscrit à la newsletter:", email);
    alert("Merci pour votre inscription à notre newsletter !");
    setEmail("");
  };

  const articles = [
    {
      id: "3-usages-concrets-ia-pme",
      title: "3 usages concrets de l'IA pour les PME",
      excerpt: "Découvrez comment des PME de différents secteurs utilisent l'IA pour optimiser leurs opérations et améliorer leur rentabilité.",
      date: "10 juin 2024",
      imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Usage",
      readTime: "5 min de lecture"
    },
    {
      id: "integrer-ia-petit-budget",
      title: "Comment intégrer l'IA sans investir des milliers d'euros ?",
      excerpt: "L'adoption de l'IA n'implique pas nécessairement des investissements massifs. Voici des stratégies pour démarrer avec un budget limité.",
      date: "2 juin 2024",
      imageUrl: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Stratégie",
      readTime: "7 min de lecture"
    },
    {
      id: "erreurs-eviter-ia-entreprise",
      title: "Les erreurs à éviter avec l'IA en entreprise",
      excerpt: "L'implémentation de l'IA comporte des pièges courants. Cet article détaille les erreurs les plus fréquentes et comment les éviter.",
      date: "25 mai 2024",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conseil",
      readTime: "6 min de lecture"
    },
    {
      id: "ia-generative-entreprise",
      title: "L'IA générative: comment l'utiliser dans votre entreprise",
      excerpt: "Les modèles d'IA générative comme GPT transforment les entreprises. Découvrez des cas d'usage pratiques pour votre activité.",
      date: "18 mai 2024",
      imageUrl: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technologie",
      readTime: "8 min de lecture"
    },
    {
      id: "ia-avantage-concurrentiel",
      title: "Comment transformer l'IA en avantage concurrentiel",
      excerpt: "L'IA peut être un puissant différenciateur sur le marché. Voici comment en faire un véritable avantage concurrentiel.",
      date: "12 mai 2024",
      imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Stratégie",
      readTime: "5 min de lecture"
    },
    {
      id: "preparation-equipes-ia",
      title: "Comment préparer vos équipes à l'arrivée de l'IA",
      excerpt: "La transformation par l'IA nécessite une préparation des équipes. Découvrez nos conseils pour une transition réussie.",
      date: "5 mai 2024",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Management",
      readTime: "6 min de lecture"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Ressources & Blog</h1>
            <p className="text-xl max-w-3xl">
              Explorez nos articles, guides et ressources pour mieux comprendre comment l'IA peut transformer votre entreprise.
            </p>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-10 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Recevez nos derniers insights sur l'IA</h2>
                <p className="text-secondary mb-0">
                  Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs, des études de cas et les dernières tendances en matière d'IA pour les entreprises.
                </p>
              </div>
              <div className="md:w-1/3 w-full">
                <form onSubmit={handleSubmit} className="flex w-full">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full pl-10 py-3 pr-3 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-primary text-white rounded-r-lg">
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Articles récents</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Link to={`/blog/${article.id}`} className="text-primary font-medium flex items-center gap-1 hover:underline">
                        Lire plus <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin de conseils adaptés à votre entreprise ?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Nos articles vous donnent un aperçu, mais chaque entreprise est unique. Discutons de vos besoins spécifiques.
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

export default Blog;
