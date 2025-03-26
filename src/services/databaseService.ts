
import { User, Contact, BlogPost } from "@/types/database";
import { toast } from "sonner";

// Base URL for API requests
const API_BASE_URL = "https://api.viadex.fr";

// Helper function to handle API responses
const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Une erreur est survenue');
  }
  return response.json();
};

// Authentication service
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  console.log("Authenticating user:", email);
  
  try {
    const response = await fetch(`${API_BASE_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) return null;
    
    const user = await handleApiResponse(response);
    return user;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
};

// Contact service functions
export const getContacts = async (): Promise<Contact[]> => {
  console.log("Fetching contacts from API");
  
  try {
    const response = await fetch(`${API_BASE_URL}/contact`);
    return await handleApiResponse(response);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    toast.error("Erreur lors du chargement des contacts");
    return [];
  }
};

export const updateContactStatus = async (id: number, status: string): Promise<boolean> => {
  console.log(`Updating contact ${id} status to ${status}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    
    return response.ok;
  } catch (error) {
    console.error("Error updating contact status:", error);
    return false;
  }
};

// Blog service functions
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  console.log("Fetching blog posts from API");
  
  try {
    const response = await fetch(`${API_BASE_URL}/blogpost`);
    return await handleApiResponse(response);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    toast.error("Erreur lors du chargement des articles");
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  console.log(`Fetching blog post with slug: ${slug}`);
  
  try {
    // First get all posts since the API doesn't have a direct slug endpoint
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
};

// Adding a new contact from the contact form
export const addContact = async (contactData: Omit<Contact, 'id' | 'date' | 'status'>): Promise<boolean> => {
  console.log("Adding new contact:", contactData);
  
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });
    
    if (response.ok) {
      toast.success("Votre message a été envoyé avec succès");
      return true;
    } else {
      toast.error("Erreur lors de l'envoi du message");
      return false;
    }
  } catch (error) {
    console.error("Error adding contact:", error);
    toast.error("Erreur lors de l'envoi du message");
    return false;
  }
};
