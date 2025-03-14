
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Données simulées plus détaillées pour les articles
const BLOG_POSTS = {
  "usages-ia": {
    title: "3 usages concrets de l'IA pour les PME",
    content: `
      <p>L'Intelligence Artificielle offre aujourd'hui des opportunités concrètes pour les PME, bien loin des concepts abstraits ou des technologies réservées aux grands groupes. Voici trois applications pratiques que toute PME peut mettre en œuvre rapidement :</p>
      
      <h2>1. Automatisation des tâches administratives</h2>
      <p>Les assistants IA comme ChatGPT ou Claude peuvent rédiger des emails, préparer des comptes-rendus, ou organiser votre agenda. Des outils comme Zapier ou Make permettent d'automatiser des processus entiers sans code.</p>
      
      <h2>2. Analyse de données clients</h2>
      <p>Des solutions comme Tableau ou PowerBI intègrent désormais l'IA pour analyser vos données clients et identifier des tendances que vous n'auriez pas détectées. Ces insights peuvent transformer votre approche commerciale.</p>
      
      <h2>3. Service client augmenté</h2>
      <p>Les chatbots IA modernes comme ceux proposés par Intercom ou Drift permettent de répondre aux questions fréquentes 24h/24 tout en dirigeant les demandes complexes vers vos équipes. Résultat : satisfaction client accrue et économie de temps.</p>
      
      <p>L'important est de commencer par identifier les processus chronophages dans votre entreprise et d'explorer les solutions IA accessibles qui peuvent vous faire gagner du temps et de l'argent.</p>
    `,
    date: "2024-02-20"
  },
  "integration-ia": {
    title: "Comment intégrer l'IA sans investir des milliers d'euros ?",
    content: `
      <p>Beaucoup de dirigeants de PME croient à tort que l'IA nécessite d'importants investissements. Pourtant, il existe aujourd'hui des solutions accessibles et peu coûteuses pour commencer :</p>
      
      <h2>Utiliser des outils SaaS intégrant l'IA</h2>
      <p>De nombreux services par abonnement intègrent déjà l'IA dans leur fonctionnement. Par exemple, Canva utilise l'IA pour la création graphique, tandis que Grammarly améliore vos textes grâce à l'intelligence artificielle.</p>
      
      <h2>S'appuyer sur les outils d'IA générative</h2>
      <p>Des plateformes comme ChatGPT (dans sa version gratuite) ou Bard de Google peuvent déjà vous aider sur de nombreuses tâches quotidiennes comme la rédaction, la recherche d'information ou la génération d'idées.</p>
      
      <h2>Former vos équipes plutôt qu'engager des experts</h2>
      <p>Au lieu d'embaucher des spécialistes coûteux, formez vos collaborateurs existants à l'utilisation d'outils IA. De nombreuses ressources gratuites existent en ligne pour apprendre à maîtriser ces technologies.</p>
      
      <h2>Commencer petit et itérer</h2>
      <p>Identifiez un processus spécifique qui pourrait bénéficier de l'IA, et testez une solution à petite échelle. Une fois que vous avez prouvé la valeur, vous pouvez élargir progressivement.</p>
      
      <p>L'adoption de l'IA n'est pas une question de budget, mais plutôt d'état d'esprit et de volonté d'innovation progressive.</p>
    `,
    date: "2024-02-15"
  },
  "erreurs-ia": {
    title: "Les erreurs à éviter avec l'IA en entreprise",
    content: `
      <p>L'enthousiasme pour l'IA peut parfois conduire à des erreurs coûteuses. Voici les pièges les plus courants à éviter :</p>
      
      <h2>Erreur n°1 : Adopter l'IA sans objectif clair</h2>
      <p>Trop d'entreprises adoptent l'IA "parce que tout le monde le fait". Sans un cas d'usage précis et un objectif mesurable, vous risquez de gaspiller ressources et énergie. Définissez toujours le problème spécifique que vous cherchez à résoudre.</p>
      
      <h2>Erreur n°2 : Négliger la qualité des données</h2>
      <p>La règle "garbage in, garbage out" s'applique particulièrement à l'IA. Si vos données sont incomplètes, biaisées ou de mauvaise qualité, les résultats le seront aussi. Investissez dans la gouvernance des données avant tout projet d'IA.</p>
      
      <h2>Erreur n°3 : Ignorer l'aspect humain</h2>
      <p>L'IA doit être un outil pour augmenter les capacités humaines, non les remplacer. Les projets qui négligent la formation des équipes ou qui ignorent leurs préoccupations face à ces technologies échouent souvent.</p>
      
      <h2>Erreur n°4 : Sous-estimer les implications éthiques</h2>
      <p>Les questions de vie privée, de biais algorithmiques et de transparence sont essentielles. Négliger ces aspects peut nuire à votre réputation et vous exposer à des risques juridiques.</p>
      
      <p>La clé du succès avec l'IA est une approche réfléchie, qui considère autant les aspects techniques que humains, éthiques et stratégiques.</p>
    `,
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
              <div 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
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
