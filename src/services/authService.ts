
import { User } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Authentication service
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  console.log("Authenticating user:", email);
  
  try {
    return await fetchApi<User>('/user', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  } catch (error) {
    console.error("Authentication error:", error);
    toast.error("Erreur d'authentification");
    return null;
  }
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  console.log("Fetching user by email:", email);
  
  try {
    // Email must be URL encoded as per documentation
    const encodedEmail = encodeURIComponent(email);
    return await fetchApi<User>(`/user/${encodedEmail}`);
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  console.log("Fetching all users");
  
  try {
    return await fetchApi<User[]>('/user');
  } catch (error) {
    console.error("Error fetching users:", error);
    toast.error("Erreur lors du chargement des utilisateurs");
    return [];
  }
};

export const registerUser = async (email: string, password: string): Promise<User | null> => {
  console.log("Registering new user:", email);
  
  try {
    return await fetchApi<User>('/user', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Erreur lors de l'enregistrement");
    return null;
  }
};

export const deleteUser = async (email: string): Promise<boolean> => {
  console.log("Deleting user:", email);
  
  try {
    // Email must be URL encoded as per documentation
    const encodedEmail = encodeURIComponent(email);
    await fetchApi(`/user/${encodedEmail}`, {
      method: 'DELETE'
    });
    
    toast.success("Utilisateur supprimé avec succès");
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    toast.error("Erreur lors de la suppression de l'utilisateur");
    return false;
  }
};
