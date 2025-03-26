import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/home/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getBlogPostBySlug, getBlogPostById } from "@/services/blogService";
import { BlogPost as BlogPostType } from "@/types/database";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/home/ui/card";
import { Skeleton } from "@/components/home/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const id = parseInt(slug);
        let blogPost: BlogPostType | null = null;
        
        if (!isNaN(id)) {
          blogPost = await getBlogPostById(id);
        } else {
          blogPost = await getBlogPostBySlug(slug);
        }
        
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
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux articles
            </Link>
            
            <Card className="w-full mb-8">
              <Skeleton className="w-full h-[400px] rounded-t-xl" />
            </Card>
            
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <div className="flex gap-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
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
          
          <article className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
            <div className="relative">
              <img src={post.imagePath} alt={post.titre} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
                    {post.categorie_nom || `Catégorie ${post.categorie}`}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.titre}</h1>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 border-b border-gray-100 pb-4">
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
                  {post.categorie_nom || `Catégorie ${post.categorie}`}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {post.excerpt && (
                  <div className="lead text-xl font-medium text-gray-900 mb-6">
                    {post.excerpt}
                  </div>
                )}
                
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </article>
          
          <Card className="bg-primary/5 mb-10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Vous avez aimé cet article ?</h3>
              <p className="mb-6">
                Découvrez comment nous pouvons vous aider à implémenter des solutions d'IA adaptées à votre entreprise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="text-gray-50">Contactez-nous</Button>
                </Link>
                <Link to="/calendrier">
                  <Button variant="outline">Prendre rendez-vous</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
