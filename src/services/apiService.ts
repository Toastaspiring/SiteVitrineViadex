
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
      description: (
        <div className="max-h-40 overflow-auto text-xs">
          <div><span className="font-semibold">Status:</span> <span style={{ color: statusColor }}>{response.status} {response.statusText}</span></div>
          <div className="mt-1 font-semibold">Response:</div>
          <pre className="mt-1 bg-gray-100 p-2 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      ),
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
      
      if (options?.body) {
        debugMessage += `\nPayload: ${options.body}`;
      }
      
      toast.info(`API Request: ${endpoint}`, {
        description: (
          <div className="max-h-40 overflow-auto text-xs">
            <div><span className="font-semibold">Method:</span> {options?.method || 'GET'}</div>
            {options?.body && (
              <>
                <div className="mt-1 font-semibold">Payload:</div>
                <pre className="mt-1 bg-gray-100 p-2 rounded">
                  {JSON.stringify(JSON.parse(options.body as string), null, 2)}
                </pre>
              </>
            )}
          </div>
        ),
        duration: 5000,
      });
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    return await handleApiResponse(response);
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    
    // Debug: Display the error in a toast notification
    if (process.env.NODE_ENV !== 'production') {
      toast.error(`API Error: ${endpoint}`, {
        description: (
          <div className="max-h-40 overflow-auto text-xs">
            <pre className="bg-gray-100 p-2 rounded">
              {error instanceof Error ? error.message : String(error)}
            </pre>
          </div>
        ),
        duration: 10000,
      });
    }
    
    throw error;
  }
};
