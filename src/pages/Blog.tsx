import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { getBlogPosts } from "@/services/blogService";
import { BlogPost } from "@/types/database";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  const fetchBlogPosts = async () => {
    setIsLoading(true);
    try {
      const posts = await getBlogPosts();
      
      if (Array.isArray(posts)) {
        setBlogPosts(posts);
      } else {
        console.error("API did not return an array for blog posts:", posts);
        setBlogPosts([]);
        toast.error("Format de données incorrect lors du chargement des articles");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des articles:", error);
      toast.error("Erreur lors du chargement des articles");
      setBlogPosts([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email inscrit à la newsletter:", email);
    toast.success("Merci pour votre inscription à notre newsletter !");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Ressources & Blog</h1>
            <p className="text-xl max-w-3xl">
              Explorez nos articles, guides et ressources pour mieux comprendre comment l'IA peut transformer votre entreprise.
            </p>
          </div>
        </section>

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
                <form onSubmit={handleSubmit} className="flex w-full items-center">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full pl-10 py-3 pr-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-primary ml-2 text-white rounded-r-lg">
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Articles récents</h2>
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <Skeleton className="h-8 w-full mb-2" />
                      <Skeleton className="h-20 w-full mb-4" />
                      <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-8">
                <p>Aucun article trouvé</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((article) => (
                  <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <img 
                      src={article.imagePath} 
                      alt={article.titre} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {article.categorie}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {article.tempsLecture} de lecture
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{article.titre}</h3>
                      <p className="text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <Link to={`/blog/${article.slug || article.id}`} className="text-primary font-medium flex items-center gap-1 hover:underline">
                          Lire plus <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

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
