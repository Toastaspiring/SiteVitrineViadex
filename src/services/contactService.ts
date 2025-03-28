
import { Contact } from "@/types/database";
import { fetchApi } from "./apiService";
import { toast } from "sonner";

// Contact service functions
export const getContacts = async (): Promise<Contact[]> => {
  console.log("Fetching contacts from API");
  
  try {
    return await fetchApi<Contact[]>('/contact');
  } catch (error) {
    console.error("Error fetching contacts:", error);
    toast.error("Erreur lors du chargement des contacts");
    return [];
  }
};

export const getContactById = async (id: number): Promise<Contact | null> => {
  console.log(`Fetching contact with ID: ${id}`);
  
  try {
    return await fetchApi<Contact>(`/contact/${id}`);
  } catch (error) {
    console.error(`Error fetching contact with ID ${id}:`, error);
    toast.error("Erreur lors du chargement du contact");
    return null;
  }
};

export const updateContactStatus = async (id: number, statusId: number): Promise<boolean> => {
  console.log(`Updating contact ${id} status to ${statusId}`);
  
  try {
    await fetchApi(`/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: statusId })
    });
    
    toast.success("Statut mis à jour avec succès");
    return true;
  } catch (error) {
    console.error("Error updating contact status:", error);
    toast.error("Erreur lors de la mise à jour du statut");
    return false;
  }
};

// Adding a new contact via the general contact form
export const addContact = async (contactData: {
  nom: string;
  prenom?: string;
  email: string;
  message: string;
  telephone?: string;
  entreprise?: string;
  source?: number;
  raison?: number;
}): Promise<boolean> => {
  console.log("Adding new contact:", contactData);
  
  try {
    // Construct the request body with all possible fields
    // Optional fields will be sent as empty strings if not provided
    const requestBody = {
      nom: contactData.nom,
      prenom: contactData.prenom || "",
      email: contactData.email,
      message: contactData.message,
      telephone: contactData.telephone || "",
      entreprise: contactData.entreprise || "",
      date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
      status: 1, // Default to 'non-traité'
      source: contactData.source || 1,
      raison: contactData.raison || 1,
    };
    
    console.log("Sending contact data:", requestBody);
    
    await fetchApi('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    toast.success("Votre message a été envoyé avec succès");
    return true;
  } catch (error) {
    console.error("Error adding contact:", error);
    toast.error("Erreur lors de l'envoi du message");
    return false;
  }
};

// New function specifically for creating a meeting request
export const addMeeting = async (
  contactData: {
    nom: string;
    prenom?: string;
    email: string;
    message: string;
    telephone?: string;
    entreprise?: string;
    source?: number;
    raison?: number;
  },
  meetingData: {
    date1: Date;
    date2: Date;
    pref1: number; // 1 for morning, 2 for afternoon
    pref2: number; // 1 for morning, 2 for afternoon
  }
): Promise<boolean> => {
  console.log("Creating new meeting request:", { contactData, meetingData });
  
  try {
    // Step 1: Create the contact
    const contactRequestBody = {
      nom: contactData.nom,
      prenom: contactData.prenom || "",
      email: contactData.email,
      message: contactData.message,
      telephone: contactData.telephone || "",
      entreprise: contactData.entreprise || "",
      date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
      status: 1, // Default to 'non-traité'
      source: contactData.source || 1,
      raison: contactData.raison || 1,
    };
    
    console.log("Sending contact data for meeting request:", contactRequestBody);
    
    // Create the contact and get the contact ID
    const contactResponse = await fetchApi<{ id: number }>('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactRequestBody)
    });
    
    console.log("Contact created successfully:", contactResponse);
    
    // Step 2: Create the meeting with the contact ID
    const meetingRequestBody = {
      id_contact: contactResponse.id, // Use the ID returned from contact creation
      date1: meetingData.date1.toISOString(),
      date2: meetingData.date2.toISOString(),
      pref1: meetingData.pref1,
      pref2: meetingData.pref2
    };
    
    console.log("Sending meeting data:", meetingRequestBody);
    
    await fetchApi('/meeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(meetingRequestBody)
    });
    
    toast.success("Votre demande de rendez-vous a été envoyée avec succès");
    return true;
  } catch (error) {
    console.error("Error creating meeting:", error);
    toast.error("Erreur lors de la création du rendez-vous");
    return false;
  }
};

export const deleteContact = async (id: number): Promise<boolean> => {
  console.log(`Deleting contact ${id}`);
  
  try {
    await fetchApi(`/contact/${id}`, {
      method: 'DELETE'
    });
    
    toast.success("Contact supprimé avec succès");
    return true;
  } catch (error) {
    console.error(`Error deleting contact ${id}:`, error);
    toast.error("Erreur lors de la suppression du contact");
    return false;
  }
};
