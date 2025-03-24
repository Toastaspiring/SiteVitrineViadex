
import { User, Contact, BlogPost } from "@/types/database";
import { API_CONFIG, getApiUrl, handleApiResponse } from "@/config/api";

// Configuration for the API (will be used when the actual API is implemented)
const API_BASE_URL = "/api"; // This should point to your backend API

// This service will be updated when the actual MySQL database is connected
// Currently using mock data with the correct structure

// Authentication service
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  // In a real implementation, this would make a POST request to the authentication endpoint
  // Example:
  // const response = await fetch(`${API_BASE_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password })
  // });
  // const data = await response.json();
  // return data.user || null;
  
  console.log("Authenticating user:", email);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock credentials check (will be replaced with real database validation)
  if (email === "admin@viadex.fr" && password === "admin") {
    return {
      id: 1,
      email: "admin@viadex.fr"
    };
  }
  
  return null;
};

// Contact service functions
export const getContacts = async (): Promise<Contact[]> => {
  // In a real implementation, this would make a GET request to the contacts endpoint
  // Example:
  // const response = await fetch(`${API_BASE_URL}/contacts`);
  // return await response.json();
  
  console.log("Fetching contacts from database");
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data with the structure that matches our future database
  return [
    {
      id: 1,
      nom: "Dubois",
      prenom: "Thomas",
      email: "thomas.dubois@example.com",
      message: "Je souhaiterais en savoir plus sur vos services de formation IA",
      date: "2023-06-12",
      status: "non-traité",
      source: "formulaire_contact",
      ip_address: "192.168.1.1"
    },
    {
      id: 2,
      nom: "Laurent",
      prenom: "Marie",
      email: "marie.laurent@example.com",
      message: "Bonjour, est-il possible d'obtenir un devis pour un accompagnement stratégique ?",
      date: "2023-06-10",
      status: "traité",
      source: "formulaire_accueil",
      ip_address: "192.168.1.2"
    },
    {
      id: 3,
      nom: "Martin",
      prenom: "Pierre",
      email: "pierre.martin@example.com",
      message: "J'aimerais organiser un diagnostic IA pour mon entreprise de 50 personnes",
      date: "2023-06-08",
      status: "non-traité",
      source: "formulaire_contact",
      ip_address: "192.168.1.3"
    },
    {
      id: 4,
      nom: "Bernard",
      prenom: "Sophie",
      email: "sophie.bernard@example.com",
      message: "Quelles sont vos disponibilités pour une première réunion?",
      date: "2023-06-05",
      status: "traité",
      source: "formulaire_accueil",
      ip_address: "192.168.1.4"
    },
  ];
};

export const updateContactStatus = async (id: number, status: string): Promise<boolean> => {
  // In a real implementation, this would make a PUT/PATCH request to update the contact status
  // Example:
  // const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
  //   method: 'PATCH',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ status })
  // });
  // return response.ok;
  
  console.log(`Updating contact ${id} status to ${status}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock success response
  return true;
};

// Blog service functions
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // In a real implementation, this would make a GET request to the blog posts endpoint
  // Example:
  // const response = await fetch(getApiUrl(API_CONFIG.endpoints.blogPosts.list));
  // return handleApiResponse(response);
  
  console.log("Fetching blog posts from database");
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data with the structure that matches our future database
  return [
    {
      id: 1,
      titre: "3 usages concrets de l'IA pour les PME",
      imagePath: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 juin 2024",
      tempsLecture: "5 min",
      categorie: "Usage",
      excerpt: "Découvrez comment des PME de différents secteurs utilisent l'IA pour optimiser leurs opérations et améliorer leur rentabilité.",
      slug: "3-usages-concrets-ia-pme",
      content: `<p>L'Intelligence Artificielle (IA) n'est plus réservée aux grandes entreprises disposant d'importants budgets technologiques. Aujourd'hui, les PME peuvent également bénéficier de cette technologie transformative pour optimiser leurs opérations, améliorer l'expérience client et stimuler leur croissance.</p>
        
        <h2>1. Automatisation des tâches administratives</h2>
        <p>De nombreuses PME consacrent un temps considérable à des tâches administratives répétitives telles que la saisie de données, le traitement des factures et la gestion des e-mails. L'IA peut automatiser ces processus, permettant aux employés de se concentrer sur des activités à plus forte valeur ajoutée.</p>
        <p>Par exemple, une entreprise de services comptables a implémenté une solution d'IA pour extraire automatiquement les données des factures et des reçus. Cette automatisation a permis de réduire le temps de traitement de 75% et d'éliminer pratiquement toutes les erreurs de saisie manuelle.</p>
        
        <h2>2. Amélioration du service client</h2>
        <p>Les chatbots alimentés par l'IA peuvent répondre aux questions fréquentes des clients 24h/24 et 7j/7, réduisant ainsi les délais d'attente et améliorant la satisfaction client. Pour les PME disposant d'équipes de support limitées, c'est un avantage concurrentiel significatif.</p>
        <p>Une boutique en ligne de produits artisanaux a implémenté un chatbot qui répond aux questions sur les délais de livraison, les politiques de retour et les détails des produits. Résultat : une réduction de 40% des demandes adressées au service client et une augmentation de 25% du taux de conversion.</p>
        
        <h2>3. Optimisation du marketing et des ventes</h2>
        <p>L'IA peut analyser les données clients pour identifier des modèles et des préférences, permettant aux PME de personnaliser leurs campagnes marketing et d'améliorer leur efficacité. Les outils d'IA peuvent également prévoir quels clients sont les plus susceptibles d'acheter quels produits, permettant une allocation plus efficace des ressources commerciales.</p>
        <p>Un détaillant de meubles a utilisé l'IA pour analyser les données d'achat et le comportement de navigation afin de personnaliser les recommandations de produits. Cette approche a conduit à une augmentation de 30% du panier moyen et à une amélioration de 20% du taux de rétention client.</p>
        
        <h3>Comment démarrer ?</h3>
        <p>L'adoption de l'IA peut sembler intimidante pour les PME, mais il existe aujourd'hui de nombreuses solutions accessibles et prêtes à l'emploi. Voici quelques conseils pour commencer :</p>
        <ul>
            <li>Identifiez les processus manuels répétitifs qui pourraient bénéficier de l'automatisation</li>
            <li>Explorez les solutions SaaS d'IA spécifiques à votre secteur</li>
            <li>Commencez petit avec un projet pilote pour démontrer la valeur avant de déployer à plus grande échelle</li>
            <li>Investissez dans la formation pour aider votre équipe à tirer le meilleur parti des outils d'IA</li>
        </ul>
        
        <p>En intégrant intelligemment l'IA dans leurs opérations, les PME peuvent non seulement optimiser leurs coûts, mais aussi améliorer significativement leur service client et accélérer leur croissance. L'IA n'est plus l'avenir - c'est le présent, et elle est plus accessible que jamais pour les entreprises de toutes tailles.</p>`
    },
    {
      id: 2,
      titre: "Comment intégrer l'IA sans investir des milliers d'euros ?",
      imagePath: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2 juin 2024",
      tempsLecture: "7 min",
      categorie: "Stratégie",
      excerpt: "L'adoption de l'IA n'implique pas nécessairement des investissements massifs. Voici des stratégies pour démarrer avec un budget limité.",
      slug: "integrer-ia-petit-budget",
      content: `<p>Contrairement à l'idée reçue, l'intégration de l'intelligence artificielle dans une entreprise ne nécessite pas forcément un investissement massif. De nombreuses solutions accessibles permettent aux PME et aux entrepreneurs de bénéficier des avantages de l'IA avec un budget raisonnable.</p>
      
      <h2>Tirez parti des plateformes IA en libre-service</h2>
      <p>De nombreux fournisseurs proposent désormais des plateformes IA en libre-service avec des modèles préentraînés que vous pouvez utiliser sans expertise technique approfondie. Ces plateformes offrent souvent des formules gratuites ou à faible coût pour commencer.</p>
      <p>Par exemple, vous pouvez utiliser des services comme Google Cloud AutoML, Microsoft Azure AI ou Amazon SageMaker pour créer des modèles de classification, de prédiction ou de reconnaissance d'images sans écrire une seule ligne de code.</p>
      
      <h2>Adoptez des outils IA spécifiques à votre secteur</h2>
      <p>De plus en plus d'applications métier intègrent des fonctionnalités d'IA. Au lieu de développer vos propres solutions, recherchez les outils existants adaptés à votre industrie qui offrent déjà ces capacités.</p>
      <p>Par exemple, si vous êtes dans le commerce de détail, de nombreuses plateformes e-commerce proposent désormais des fonctionnalités de recommandation de produits basées sur l'IA à des prix abordables.</p>
      
      <h2>Commencez par des cas d'usage à fort impact</h2>
      <p>Identifiez les processus au sein de votre entreprise qui consomment beaucoup de temps mais qui sont relativement simples. Ce sont souvent les meilleurs candidats pour une automatisation rapide avec un bon retour sur investissement.</p>
      <p>Par exemple, l'automatisation du tri des emails ou des requêtes clients par sentiment ou catégorie peut libérer un temps considérable pour votre équipe avec un investissement minimal.</p>
      
      <h2>Utilisez des API d'IA</h2>
      <p>Les API (interfaces de programmation) permettent d'accéder à des modèles d'IA sophistiqués sans avoir à les développer vous-même. De nombreux fournisseurs proposent des modèles préentraînés via des API avec une tarification basée sur l'utilisation.</p>
      <p>Par exemple, vous pouvez intégrer la reconnaissance d'images, la traduction automatique, l'analyse de sentiment ou la génération de texte à vos applications existantes pour quelques centimes par requête.</p>
      
      <h2>Formez-vous grâce aux ressources gratuites</h2>
      <p>Si vous ou votre équipe souhaitez développer des compétences en IA, de nombreuses ressources d'apprentissage gratuites ou peu coûteuses sont disponibles en ligne. Des plateformes comme Coursera, edX ou Khan Academy proposent des cours d'introduction à l'IA et au machine learning.</p>
      
      <h3>Étude de cas : Une petite agence marketing</h3>
      <p>Une agence marketing de 5 personnes a utilisé une combinaison d'outils IA accessibles pour transformer ses opérations :</p>
      <ul>
          <li>Utilisation de Canva avec IA pour générer rapidement des visuels pour les réseaux sociaux</li>
          <li>Implémentation d'un chatbot sur leur site Web à l'aide d'une plateforme sans code</li>
          <li>Analyse des médias sociaux via des outils d'écoute sociale basés sur l'IA</li>
          <li>Automatisation de la rédaction des rapports client avec des outils de génération de texte</li>
      </ul>
      <p>Le résultat ? Une réduction de 30% du temps consacré aux tâches administratives et une augmentation de 25% de leur capacité à gérer de nouveaux clients, le tout pour un investissement mensuel inférieur à 300€.</p>
      
      <p>L'IA n'est plus l'apanage des grandes entreprises disposant de budgets considérables. Avec une approche stratégique et en tirant parti des nombreuses solutions accessibles sur le marché, même les plus petites structures peuvent bénéficier de cette technologie transformative. La clé est de commencer petit, de mesurer les résultats, et d'étendre progressivement l'utilisation de l'IA à mesure que vous constatez des retours positifs sur vos premiers investissements.</p>`
    },
    {
      id: 3,
      titre: "Les erreurs à éviter avec l'IA en entreprise",
      imagePath: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "25 mai 2024",
      tempsLecture: "6 min",
      categorie: "Conseil",
      excerpt: "L'implémentation de l'IA comporte des pièges courants. Cet article détaille les erreurs les plus fréquentes et comment les éviter.",
      slug: "erreurs-eviter-ia-entreprise"
    },
    {
      id: 4,
      titre: "L'IA générative: comment l'utiliser dans votre entreprise",
      imagePath: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "18 mai 2024",
      tempsLecture: "8 min",
      categorie: "Technologie",
      excerpt: "Les modèles d'IA générative comme GPT transforment les entreprises. Découvrez des cas d'usage pratiques pour votre activité.",
      slug: "ia-generative-entreprise"
    },
    {
      id: 5,
      titre: "Comment transformer l'IA en avantage concurrentiel",
      imagePath: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "12 mai 2024",
      tempsLecture: "5 min",
      categorie: "Stratégie",
      excerpt: "L'IA peut être un puissant différenciateur sur le marché. Voici comment en faire un véritable avantage concurrentiel.",
      slug: "ia-avantage-concurrentiel"
    },
    {
      id: 6,
      titre: "Comment préparer vos équipes à l'arrivée de l'IA",
      imagePath: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "5 mai 2024",
      tempsLecture: "6 min",
      categorie: "Management",
      excerpt: "La transformation par l'IA nécessite une préparation des équipes. Découvrez nos conseils pour une transition réussie.",
      slug: "preparation-equipes-ia"
    }
  ];
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // In a real implementation, this would make a GET request to get a specific blog post by slug
  // Example:
  // const response = await fetch(getApiUrl(API_CONFIG.endpoints.blogPosts.bySlug(slug)));
  // return response.ok ? handleApiResponse(response) : null;
  
  console.log(`Fetching blog post with slug: ${slug}`);
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

// For future implementation: Adding a new contact from the contact form
export const addContact = async (contact: Omit<Contact, 'id' | 'date' | 'status'>): Promise<boolean> => {
  // In a real implementation, this would make a POST request to create a new contact
  // Example:
  // const response = await fetch(getApiUrl(API_CONFIG.endpoints.contacts.create), {
  //   method: 'POST',
  //   headers: API_CONFIG.defaultHeaders,
  //   body: JSON.stringify(contact)
  // });
  // return response.ok;
  
  console.log("Adding new contact:", contact);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock success response
  return true;
};
