
import { BlogPost } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Blog service functions
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  console.log("Fetching blog posts from API");
  
  try {
    return await fetchApi<BlogPost[]>('/blogpost');
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    toast.error("Erreur lors du chargement des articles");
    return [];
  }
};

export const getBlogPostById = async (id: number): Promise<BlogPost | null> => {
  console.log(`Fetching blog post with ID: ${id}`);
  
  try {
    return await fetchApi<BlogPost>(`/blogpost/${id}`);
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    toast.error("Erreur lors du chargement de l'article");
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
    return await fetchApi<BlogPost>('/blogpost', {
      method: 'POST',
      body: JSON.stringify({
        titre: postData.titre,
        ImagePath: postData.imagePath,
        date: postData.date,
        Text: postData.content,
        reading_time: parseInt(postData.tempsLecture),
        categorie: postData.categorie
      })
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    toast.error("Erreur lors de la création de l'article");
    return null;
  }
};

export const updateBlogPost = async (id: number, postData: Partial<BlogPost>): Promise<BlogPost | null> => {
  console.log(`Updating blog post ${id}:`, postData);
  
  try {
    return await fetchApi<BlogPost>(`/blogpost/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        titre: postData.titre,
        ImagePath: postData.imagePath,
        date: postData.date,
        Text: postData.content,
        reading_time: postData.tempsLecture ? parseInt(postData.tempsLecture) : undefined,
        categorie: postData.categorie
      })
    });
  } catch (error) {
    console.error(`Error updating blog post ${id}:`, error);
    toast.error("Erreur lors de la mise à jour de l'article");
    return null;
  }
};

export const deleteBlogPost = async (id: number): Promise<boolean> => {
  console.log(`Deleting blog post ${id}`);
  
  try {
    await fetchApi(`/blogpost/${id}`, {
      method: 'DELETE'
    });
    toast.success("Article supprimé avec succès");
    return true;
  } catch (error) {
    console.error(`Error deleting blog post ${id}:`, error);
    toast.error("Erreur lors de la suppression de l'article");
    return false;
  }
};
