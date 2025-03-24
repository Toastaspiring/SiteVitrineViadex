
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getBlogPostBySlug } from "@/services/databaseService";
import { BlogPost as BlogPostType } from "@/types/database";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      try {
        const blogPost = await getBlogPostBySlug(slug);
        setPost(blogPost);
        
        if (!blogPost) {
          toast.error("Article non trouvé");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article:", error);
        toast.error("Erreur lors du chargement de l'article");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center py-20">Chargement de l'article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
            <p className="mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Link to="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
          
          <div className="mb-8">
            <img 
              src={post.imagePath} 
              alt={post.titre} 
              className="w-full h-80 object-cover rounded-xl" 
            />
          </div>
          
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-6">{post.titre}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.tempsLecture} de lecture
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.categorie}
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {/* This would be replaced with actual content from the database */}
              <p className="lead">{post.excerpt}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non diam euismod, 
                ultrices nisl a, tristique risus. Ut ut convallis nisl. Sed sit amet orci at magna 
                efficitur mollis. Mauris vel diam sed velit feugiat interdum.
              </p>
              <p>
                Nulla facilisi. Integer eget sagittis urna. Pellentesque habitant morbi tristique senectus 
                et netus et malesuada fames ac turpis egestas. Curabitur fermentum nulla eget ipsum pulvinar 
                lacinia. Mauris tristique sem et felis pulvinar, a tempor odio convallis.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold mb-4">Vous avez aimé cet article ?</h3>
            <p className="mb-6">
              Découvrez comment nous pouvons vous aider à implémenter des solutions d'IA adaptées à votre entreprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button>Contactez-nous</Button>
              </Link>
              <Link to="/calendrier">
                <Button variant="outline">Prendre rendez-vous</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
