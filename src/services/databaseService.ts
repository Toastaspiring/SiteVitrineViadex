
import { User, Contact, BlogPost } from "@/types/database";

// This service will be updated when the actual MySQL database is connected
// Currently using mock data with the correct structure

// Mock function to simulate authentication with the database
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  // This will be replaced with an actual API call
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

// Mock function to fetch contacts from the database
export const getContacts = async (): Promise<Contact[]> => {
  // This will be replaced with an actual API call
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
      source: "formulaire_contact"
    },
    {
      id: 2,
      nom: "Laurent",
      prenom: "Marie",
      email: "marie.laurent@example.com",
      message: "Bonjour, est-il possible d'obtenir un devis pour un accompagnement stratégique ?",
      date: "2023-06-10",
      status: "traité",
      source: "formulaire_accueil"
    },
    {
      id: 3,
      nom: "Martin",
      prenom: "Pierre",
      email: "pierre.martin@example.com",
      message: "J'aimerais organiser un diagnostic IA pour mon entreprise de 50 personnes",
      date: "2023-06-08",
      status: "non-traité",
      source: "formulaire_contact"
    },
    {
      id: 4,
      nom: "Bernard",
      prenom: "Sophie",
      email: "sophie.bernard@example.com",
      message: "Quelles sont vos disponibilités pour une première réunion?",
      date: "2023-06-05",
      status: "traité",
      source: "formulaire_accueil"
    },
  ];
};

// Mock function to update a contact's status
export const updateContactStatus = async (id: number, status: string): Promise<boolean> => {
  // This will be replaced with an actual API call
  console.log(`Updating contact ${id} status to ${status}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock success response
  return true;
};

// Mock function to fetch blog posts from the database
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // This will be replaced with an actual API call
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
      slug: "3-usages-concrets-ia-pme"
    },
    {
      id: 2,
      titre: "Comment intégrer l'IA sans investir des milliers d'euros ?",
      imagePath: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2 juin 2024",
      tempsLecture: "7 min",
      categorie: "Stratégie",
      excerpt: "L'adoption de l'IA n'implique pas nécessairement des investissements massifs. Voici des stratégies pour démarrer avec un budget limité.",
      slug: "integrer-ia-petit-budget"
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

// Mock function to get a specific blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};
