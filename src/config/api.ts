
// API configuration to connect to our MySQL database
// This should be updated when the actual backend API is implemented

// Note: In a production environment, these values should come from environment variables
// and not be hardcoded in the frontend code for security reasons.
// The actual database connection should happen on the backend.

export const API_CONFIG = {
  // Base URL for API requests
  baseUrl: '/api',
  
  // API endpoints
  endpoints: {
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
    },
    contacts: {
      list: '/contacts',
      update: (id: number) => `/contacts/${id}`,
      create: '/contacts',
    },
    blogPosts: {
      list: '/blog-posts',
      bySlug: (slug: string) => `/blog-posts/${slug}`,
    },
  },
  
  // Default request headers
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

// Helper function to build API URLs
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};

// Helper function for handling API responses
export const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Une erreur est survenue');
  }
  
  return response.json();
};
