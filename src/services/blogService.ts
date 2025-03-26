
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
