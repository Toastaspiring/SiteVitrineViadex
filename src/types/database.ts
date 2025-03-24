
// Database types that match our future MySQL schema

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
  status: string;
  date_rdv?: string;
  source?: string;
  ip_address?: string;
}

export interface BlogPost {
  id: number;
  titre: string;
  imagePath: string;
  date: string;
  tempsLecture: string;
  categorie: string;
  excerpt?: string;
  content?: string;
  slug?: string;
}
