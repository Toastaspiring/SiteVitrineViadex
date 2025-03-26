
import { BlogPost, ApiBlogPost } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Function to convert API blog post format to our frontend format
const mapApiBlogPostToBlogPost = (apiPost: ApiBlogPost): BlogPost => {
  return {
    id: apiPost.ID_article,
    titre: apiPost.titre,
    imagePath: apiPost.ImagePath,
    date: apiPost.date,
    tempsLecture: `${apiPost.reading_time} min`,
    categorie: apiPost.categorie,
    categorie_nom: apiPost.categorie_nom,
    content: apiPost.Text,
    excerpt: apiPost.Text ? extractExcerpt(apiPost.Text) : undefined,
    // Generate a slug from the title
    slug: apiPost.titre.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
  };
};

// Helper function to extract an excerpt from content
const extractExcerpt = (content: string): string => {
  // Remove HTML tags and get first 150 chars
  const plainText = content.replace(/<[^>]*>/g, '');
  return plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');
};

// Blog service functions
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  console.log("Fetching blog posts from API");
  
  try {
    const response = await fetchApi<ApiBlogPost[]>('/blogpost');
    
    // Ensure we always return an array
    if (Array.isArray(response)) {
      // Map the API response to our BlogPost format
      return response.map(mapApiBlogPostToBlogPost);
    } else {
      console.error("API did not return an array for blog posts:", response);
      return [];
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    //toast.error("Erreur lors du chargement des articles");
    return [];
  }
};

export const getBlogPostById = async (id: number): Promise<BlogPost | null> => {
  console.log(`Fetching blog post with ID: ${id}`);
  
  try {
    const response = await fetchApi<ApiBlogPost>(`/blogpost/${id}`);
    return mapApiBlogPostToBlogPost(response);
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    //toast.error("Erreur lors du chargement de l'article");
    return null;
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

export const createBlogPost = async (postData: Omit<BlogPost, 'id'>): Promise<BlogPost | null> => {
  console.log("Creating new blog post:", postData);
  
  try {
    const apiPostData = {
      titre: postData.titre,
      ImagePath: postData.imagePath,
      date: postData.date,
      Text: postData.content || '',
      reading_time: parseInt(postData.tempsLecture),
      categorie: postData.categorie
    };
    
    const response = await fetchApi<ApiBlogPost>('/blogpost', {
      method: 'POST',
      body: JSON.stringify(apiPostData)
    });
    
    return mapApiBlogPostToBlogPost(response);
  } catch (error) {
    console.error("Error creating blog post:", error);
    //toast.error("Erreur lors de la création de l'article");
    return null;
  }
};

export const updateBlogPost = async (id: number, postData: Partial<BlogPost>): Promise<BlogPost | null> => {
  console.log(`Updating blog post ${id}:`, postData);
  
  try {
    const apiPostData: Partial<ApiBlogPost> = {
      titre: postData.titre,
      ImagePath: postData.imagePath,
      date: postData.date,
      Text: postData.content,
      reading_time: postData.tempsLecture ? parseInt(postData.tempsLecture) : undefined,
      categorie: postData.categorie
    };
    
    const response = await fetchApi<ApiBlogPost>(`/blogpost/${id}`, {
      method: 'PUT',
      body: JSON.stringify(apiPostData)
    });
    
    return mapApiBlogPostToBlogPost(response);
  } catch (error) {
    console.error(`Error updating blog post ${id}:`, error);
    //toast.error("Erreur lors de la mise à jour de l'article");
    return null;
  }
};

export const deleteBlogPost = async (id: number): Promise<boolean> => {
  console.log(`Deleting blog post ${id}`);
  
  try {
    await fetchApi(`/blogpost/${id}`, {
      method: 'DELETE'
    });
    //toast.success("Article supprimé avec succès");
    return true;
  } catch (error) {
    console.error(`Error deleting blog post ${id}:`, error);
    //toast.error("Erreur lors de la suppression de l'article");
    return false;
  }
};
