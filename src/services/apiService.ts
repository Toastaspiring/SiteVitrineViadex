
import { toast } from "sonner";

// Base URL for API requests
export const API_BASE_URL = "https://api.viadex.fr";

// Helper function to handle API responses
export const handleApiResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  let data;

  if (contentType && contentType.includes("application/json")) {
    data = await response.json().catch(() => ({}));
  } else {
    console.warn("API response is not JSON:", await response.text().catch(() => ""));
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || 'Une erreur est survenue');
  }

  return data;
};

// Generic fetch function with single toast for request + response
export const fetchApi = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const effectiveUrl = `${API_BASE_URL}${endpoint}`;
  const method = options?.method || 'GET';

  try {
    const response = await fetch(effectiveUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://viadex.fr',
        'Accept': 'application/json',
        ...options?.headers,
      },
    });

    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json().catch(() => ({}));
    } else {
      data = await response.text().catch(() => "");
    }

    if (!response.ok) {
      throw new Error(typeof data === 'string' ? data : data.error || 'Une erreur est survenue');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
