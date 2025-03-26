import { User } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Typing for the backend's login response
type AuthResponse = {
  success: true;
  user: User;
};

// 🔐 Authenticate user via POST /user
export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await fetchApi<AuthResponse>("/user", {
      method: "POST",
      body: JSON.stringify({ email, password }), // plain password
    });

    toast.success("Connexion réussie !");
    return res.user;

  } catch (error) {
    toast.error("Email ou mot de passe incorrect");
    return null;
  }
};

// 📩 Get user by email (GET /user/{email})
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const encodedEmail = encodeURIComponent(email);
    return await fetchApi<User>(`/user/${encodedEmail}`);
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// 📋 Get all users (GET /user)
export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await fetchApi<User[]>("/user");
  } catch (error) {
    toast.error("Erreur lors du chargement des utilisateurs");
    return [];
  }
};
