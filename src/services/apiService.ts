
import { toast } from "sonner";

// Base URL for API requests
export const API_BASE_URL = "https://api.viadex.fr";

// Helper function to handle API responses
export const handleApiResponse = async (response: Response) => {
  const data = await response.json().catch(() => ({}));
  
  // Debug: Display the API response in a toast notification
  if (process.env.NODE_ENV !== 'production') {
    const endpoint = response.url.replace(API_BASE_URL, '');
    const statusColor = response.ok ? 'green' : 'red';
    
    toast.success(`API Debug: ${endpoint}`, {
      description: `Status: ${response.status} ${response.statusText}\nResponse: ${JSON.stringify(data, null, 2)}`,
      duration: 10000,
    });
  }
  
  if (!response.ok) {
    throw new Error(data.error || 'Une erreur est survenue');
  }
  return data;
};

// Generic fetch function with error handling
export const fetchApi = async <T>(
  endpoint: string, 
  options?: RequestInit
): Promise<T> => {
  try {
    // Debug: Display the request in a toast notification
    if (process.env.NODE_ENV !== 'production') {
      let debugMessage = `Sending request to: ${endpoint}`;
      let payloadStr = '';
      
      if (options?.body) {
        try {
          payloadStr = JSON.stringify(JSON.parse(options.body as string), null, 2);
          debugMessage += `\nPayload: ${payloadStr}`;
        } catch (e) {
          payloadStr = options.body as string;
        }
      }
      
      toast.info(`API Request: ${endpoint}`, {
        description: `Method: ${options?.method || 'GET'}${options?.body ? `\nPayload: ${payloadStr}` : ''}`,
        duration: 5000,
      });
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      }
    });
    return await handleApiResponse(response);
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    
    // Debug: Display the error in a toast notification
    if (process.env.NODE_ENV !== 'production') {
      toast.error(`API Error: ${endpoint}`, {
        description: error instanceof Error ? error.message : String(error),
        duration: 10000,
      });
    }
    
    throw error;
  }
};
