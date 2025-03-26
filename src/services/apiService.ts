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
  let payloadStr = '';

  if (options?.body) {
    try {
      payloadStr = JSON.stringify(JSON.parse(options.body as string), null, 2);
    } catch (e) {
      payloadStr = options.body as string;
    }
  }

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

    console.log(`API ${method} ${endpoint}`)

    toast(
      `API ${method} ${endpoint}`,
      {
        description: `Status: ${response.status} ${response.statusText}\n\nPayload:\n${payloadStr || '---'}\n\nResponse:\n${typeof data === 'string' ? data : JSON.stringify(data, null, 2)}`,
        duration: 10000,
      }
    );

    if (!response.ok) {
      throw new Error(typeof data === 'string' ? data : data.error || 'Une erreur est survenue');
    }

    return data;
  } catch (error) {
    // toast.error(`Erreur API: ${endpoint}`, {
    //   description: error instanceof Error ? error.message : String(error),
    //   duration: 10000,
    // });
    throw error;
  }
};
