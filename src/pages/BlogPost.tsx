
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Données simulées pour les articles
const BLOG_POSTS = {
  "usages-ia": {
    title: "3 usages concrets de l'IA pour les PME",
    content: "Contenu détaillé sur les usages de l'IA...",
    date: "2024-02-20"
  },
  "integration-ia": {
    title: "Comment intégrer l'IA sans investir des milliers d'euros ?",
    content: "Guide pratique pour l'intégration de l'IA...",
    date: "2024-02-15"
  },
  "erreurs-ia": {
    title: "Les erreurs à éviter avec l'IA en entreprise",
    content: "Liste des erreurs courantes...",
    date: "2024-02-10"
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? BLOG_POSTS[slug as keyof typeof BLOG_POSTS] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-5">
          {post ? (
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="text-muted-foreground mb-8">
                Publié le {new Date(post.date).toLocaleDateString('fr-FR')}
              </div>
              <div className="leading-relaxed">
                {post.content}
              </div>
            </article>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
              <p>Désolé, cet article n'existe pas.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
