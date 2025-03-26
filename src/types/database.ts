
// Database types that match our MySQL schema

export interface User {
  id: number;
  email: string;
  password?: string; // Only used for authentication, not stored in frontend
}

export interface Contact {
  id: number;
  nom: string;
  prenom?: string;
  email: string;
  message: string;
  date: string;
  status: number;
  date_rdv?: string;
  source?: number;
  raison?: number;
  ip_address?: string;
}

export interface BlogPost {
  id: number;
  titre: string;
  imagePath: string;
  date: string;
  tempsLecture: string;
  categorie: number;
  excerpt?: string;
  content?: string;
  slug?: string;
}

// API request/response types to match the documentation
export interface BlogPostRequest {
  titre: string;
  ImagePath: string;
  date: string;
  Text: string;
  reading_time: number;
  categorie: number;
}

export interface ContactRequest {
  nom: string;
  prenom?: string;
  date: string;
  status: number;
  message: string;
  date_rdv?: string;
  source?: number;
  raison?: number;
}

export interface UserRequest {
  email: string;
  password: string;
}
