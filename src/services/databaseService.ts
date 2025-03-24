
import { User, Contact, BlogPost } from "@/types/database";

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
  // const response = await fetch(`${API_BASE_URL}/blog-posts`);
  // return await response.json();
  
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

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // In a real implementation, this would make a GET request to get a specific blog post by slug
  // Example:
  // const response = await fetch(`${API_BASE_URL}/blog-posts/${slug}`);
  // return response.ok ? await response.json() : null;
  
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

// For future implementation: Adding a new contact from the contact form
export const addContact = async (contact: Omit<Contact, 'id' | 'date' | 'status'>): Promise<boolean> => {
  // In a real implementation, this would make a POST request to create a new contact
  // Example:
  // const response = await fetch(`${API_BASE_URL}/contacts`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(contact)
  // });
  // return response.ok;
  
  console.log("Adding new contact:", contact);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock success response
  return true;
};
