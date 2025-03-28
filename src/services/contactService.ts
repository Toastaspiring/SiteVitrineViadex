
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

// Adding a new contact from the contact form
export const addContact = async (contactData: {
  nom: string;
  prenom?: string;
  email: string;
  message: string;
  preferenceContact?: string;
  date_rdv?: string;
  source?: number;
  raison?: number;
}): Promise<boolean> => {
  console.log("Adding new contact:", contactData);
  
  try {
    await fetchApi('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nom: contactData.nom,
        prenom: contactData.prenom,
        message: contactData.message,
        preferenceContact: contactData.preferenceContact || "",
        date: new Date().toISOString().replace('T', ' ').substring(0, 19),
        date_rdv: contactData.date_rdv,
        status: 1, // Default to 'non-traité'
        source: contactData.source || 1,
        raison: contactData.raison || 1,
      })
    });
    
    toast.success("Votre message a été envoyé avec succès");
    return true;
  } catch (error) {
    console.error("Error adding contact:", error);
    toast.error("Erreur lors de l'envoi du message");
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
