
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
  source?: number;
  raison?: number;
  ip_address?: string;
  telephone?: string;
  entreprise?: string;
}

export interface Meeting {
  id: number;
  id_contact: number;
  date1: string;
  date2: string;
  pref1: number; // 1 for morning, 2 for afternoon
  pref2: number; // 1 for morning, 2 for afternoon
}

export interface BlogPost {
  id: number;
  titre: string;
  imagePath: string;
  date: string;
  tempsLecture: string;
  categorie: number;
  categorie_nom?: string;
  excerpt?: string;
  content?: string;
  slug?: string;
}

// Type to match the actual API response for blog posts
export interface ApiBlogPost {
  ID_article: number;
  titre: string;
  ImagePath: string;
  date: string;
  Text: string;
  reading_time: number;
  categorie: number;
  categorie_nom?: string;
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
  source?: number;
  raison?: number;
  telephone?: string;
  entreprise?: string;
}

export interface MeetingRequest {
  id_contact: number;
  date1: string;
  date2: string;
  pref1: number;
  pref2: number;
}

export interface UserRequest {
  email: string;
  password: string;
}
