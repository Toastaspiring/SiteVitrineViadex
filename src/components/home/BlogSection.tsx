
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/home/ui/button";
import { getBlogPosts } from "@/services/blogService";
import { BlogPost } from "@/types/database";
import { toast } from "sonner";
import { Skeleton } from "@/components/home/ui/skeleton";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  const fetchBlogPosts = async () => {
    setIsLoading(true);
    try {
      console.log("Fetching blog posts from API");
      const posts = await getBlogPosts();
      console.log("Received blog posts:", posts);
      
      // Make sure posts is an array before using array methods
      if (Array.isArray(posts)) {
        setBlogPosts(posts.slice(0, 3)); // Get only the first 3 posts for the landing page
      } else {
        console.error("API did not return an array for blog posts:", posts);
        throw new Error("Invalid blog posts format from API");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des articles:", error);
      // Fallback to sample data for development purposes
      if (process.env.NODE_ENV !== 'production') {
        console.log("Using fallback sample data");
        setBlogPosts([
          {
            id: 1,
            titre: "L'IA générative et son impact sur les PME",
            imagePath: "https://via.placeholder.com/800x400",
            date: "2025-03-15",
            tempsLecture: "5 min",
            categorie: 1,
            categorie_nom: "Usage",
            excerpt: "Découvrez comment l'IA générative peut transformer votre entreprise et améliorer votre productivité."
          },
          {
            id: 2,
            titre: "Les bases de l'intégration de l'IA dans votre entreprise",
            imagePath: "https://via.placeholder.com/800x400",
            date: "2025-03-10",
            tempsLecture: "7 min",
            categorie: 2,
            categorie_nom: "Stratégie",
            excerpt: "Un guide étape par étape pour intégrer l'IA dans vos processus d'entreprise."
          },
          {
            id: 3,
            titre: "5 cas d'usage de l'IA pour augmenter votre chiffre d'affaires",
            imagePath: "https://via.placeholder.com/800x400",
            date: "2025-03-05",
            tempsLecture: "6 min",
            categorie: 3,
            categorie_nom: "Conseil",
            excerpt: "Des exemples concrets d'utilisation de l'IA pour développer votre business."
          }
        ]);
      } else {
        toast.error("Erreur lors du chargement des articles");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 lg:px-8 bg-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Blog & Ressources</h2>
          <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
            Découvrez nos articles et ressources pour mieux comprendre les enjeux de l'IA et son application dans votre entreprise.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 flex-grow space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
                <div className="p-6 pt-0">
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-8">
            <p>Aucun article trouvé</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((article) => (
              <Link key={article.id} to={`/blog/${article.id}`} className="block hover:no-underline">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.imagePath} 
                      alt={article.titre}
                      className="w-full h-full object-cover transition-transform hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{article.titre}</h3>
                    <p className="text-secondary">{article.excerpt || article.titre}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <span className="text-primary flex items-center gap-1 font-medium">
                      Lire l'article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <Link to="/blog">
            <Button className="px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2">
              Voir tous les articles <BookOpen className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
