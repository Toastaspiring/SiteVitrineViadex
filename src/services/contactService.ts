
import { Contact } from "@/types/database";
import { API_BASE_URL, handleApiResponse, fetchApi } from "./apiService";
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

export const updateContactStatus = async (id: number, status: string): Promise<boolean> => {
  console.log(`Updating contact ${id} status to ${status}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    
    return response.ok;
  } catch (error) {
    console.error("Error updating contact status:", error);
    return false;
  }
};

// Adding a new contact from the contact form
export const addContact = async (contactData: Omit<Contact, 'id' | 'date' | 'status'>): Promise<boolean> => {
  console.log("Adding new contact:", contactData);
  
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });
    
    if (response.ok) {
      toast.success("Votre message a été envoyé avec succès");
      return true;
    } else {
      toast.error("Erreur lors de l'envoi du message");
      return false;
    }
  } catch (error) {
    console.error("Error adding contact:", error);
    toast.error("Erreur lors de l'envoi du message");
    return false;
  }
};
