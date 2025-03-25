
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/services/databaseService";
import { BlogPost } from "@/types/database";
import { toast } from "sonner";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  const fetchBlogPosts = async () => {
    setIsLoading(true);
    try {
      const posts = await getBlogPosts();
      setBlogPosts(posts.slice(0, 3)); // Get only the first 3 posts for the landing page
    } catch (error) {
      console.error("Erreur lors de la récupération des articles:", error);
      toast.error("Erreur lors du chargement des articles");
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
          <div className="text-center py-8">
            <p>Chargement des articles...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-8">
            <p>Aucun article trouvé</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`} className="block hover:no-underline">
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
                    <p className="text-secondary">{article.excerpt}</p>
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
