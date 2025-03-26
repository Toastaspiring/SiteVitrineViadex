
import { User } from "@/types/database";
import { API_BASE_URL, handleApiResponse, fetchApi } from "./apiService";

// Authentication service
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  console.log("Authenticating user:", email);
  
  try {
    return await fetchApi<User>('/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
};
