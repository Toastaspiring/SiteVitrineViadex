
import { toast } from "sonner";

// Base URL for API requests
export const API_BASE_URL = "https://api.viadex.fr";

// Helper function to handle API responses
export const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Une erreur est survenue');
  }
  return response.json();
};

// Generic fetch function with error handling
export const fetchApi = async <T>(
  endpoint: string, 
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    return await handleApiResponse(response);
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};
