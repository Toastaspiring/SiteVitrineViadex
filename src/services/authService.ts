
import { User } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Typing for the backend's login response
type AuthResponse = {
  success: true;
  user: User;
};

// 🔐 Authenticate user via POST /user - disabled functionality
export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  console.log("Authentication disabled:", { email });
  // Return null to indicate authentication is disabled
  return null;
};

// 📩 Get user by email (GET /user/{email}) - disabled functionality
export const getUserByEmail = async (email: string): Promise<User | null> => {
  console.log("Get user by email disabled:", { email });
  // Return null to indicate functionality is disabled
  return null;
};

// 📋 Get all users (GET /user) - disabled functionality
export const getAllUsers = async (): Promise<User[]> => {
  console.log("Get all users disabled");
  // Return empty array to indicate functionality is disabled
  return [];
};
