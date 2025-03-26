
import { User } from "@/types/database";
import { API_BASE_URL, handleApiResponse } from "./apiService";

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
