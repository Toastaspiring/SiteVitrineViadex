import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/home/ui/table";
import { Button } from "@/components/home/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/home/ui/dialog";
import { getContacts, deleteContact, updateContactStatus } from "@/services/contactService";
import { Contact } from "@/types/database";
import { toast } from "sonner";
import { Pencil, Trash2, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";

// Helper function to get status display text and icon
const getStatusDisplay = (statusId: number) => {
  switch(statusId) {
    case 1:
      return { text: "Non traité", icon: <Clock className="h-4 w-4 text-gray-400" /> };
    case 2:
      return { text: "En cours", icon: <AlertCircle className="h-4 w-4 text-yellow-500" /> };
    case 3:
      return { text: "Rendez-vous", icon: <Calendar className="h-4 w-4 text-blue-500" /> };
    case 4:
      return { text: "Complété", icon: <CheckCircle className="h-4 w-4 text-green-500" /> };
    default:
      return { text: "Statut inconnu", icon: <Clock className="h-4 w-4" /> };
  }
};

// Helper function to get source display text
const getSourceDisplay = (sourceId: number) => {
  switch(sourceId) {
    case 1: return "Site Web";
    case 2: return "Réseaux Sociaux";
    case 3: return "Référence";
    case 4: return "Autre";
    default: return "Inconnu";
  }
};

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
    fetchContacts();
  }, []);
  
  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des contacts:", error);
      toast.error("Erreur lors du chargement des contacts");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStatusChange = async (contactId: number, statusId: number) => {
    try {
      const success = await updateContactStatus(contactId, statusId);
      if (success) {
        // Update local state
        setContacts(contacts.map(contact => 
          contact.id === contactId ? { ...contact, status: statusId } : contact
        ));
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      toast.error("Erreur lors de la mise à jour du statut");
    }
  };
  
  const handleDelete = async (contactId: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) {
      try {
        const success = await deleteContact(contactId);
        if (success) {
          // Remove from local state
          setContacts(contacts.filter(contact => contact.id !== contactId));
          toast.success("Contact supprimé avec succès");
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du contact:", error);
        toast.error("Erreur lors de la suppression du contact");
      }
    }
  };
  
  const openDialog = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
  };

  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Liste des contacts</h2>
        <Button onClick={fetchContacts} variant="outline" disabled={isLoading}>
          {isLoading ? "Chargement..." : "Rafraîchir"}
        </Button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-10">Chargement des contacts...</div>
      ) : contacts.length === 0 ? (
        <div className="text-center py-10">Aucun contact trouvé</div>
      ) : (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Source</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">
                    {contact.prenom ? `${contact.prenom} ${contact.nom}` : contact.nom}
                  </TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{new Date(contact.date).toLocaleDateString('fr-FR')}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusDisplay(contact.status).icon}
                      <span>{getStatusDisplay(contact.status).text}</span>
                    </div>
                  </TableCell>
                  <TableCell>{contact.source ? getSourceDisplay(contact.source) : "Site Web"}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        onClick={() => openDialog(contact)} 
                        variant="ghost" 
                        size="icon"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        onClick={() => handleDelete(contact.id)} 
                        variant="ghost" 
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      
      {/* Contact Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Détails du contact</DialogTitle>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Nom</h3>
                  <p>{selectedContact.prenom ? `${selectedContact.prenom} ${selectedContact.nom}` : selectedContact.nom}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>{selectedContact.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Date</h3>
                  <p>{new Date(selectedContact.date).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Statut</h3>
                  <div className="flex gap-2 mt-1">
                    <Button 
                      variant={selectedContact.status === 1 ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleStatusChange(selectedContact.id, 1)}
                    >
                      Non traité
                    </Button>
                    <Button 
                      variant={selectedContact.status === 2 ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleStatusChange(selectedContact.id, 2)}
                    >
                      En cours
                    </Button>
                    <Button 
                      variant={selectedContact.status === 3 ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleStatusChange(selectedContact.id, 3)}
                    >
                      Rendez-vous
                    </Button>
                    <Button 
                      variant={selectedContact.status === 4 ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleStatusChange(selectedContact.id, 4)}
                    >
                      Complété
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold">Message</h3>
                <p className="mt-1 p-3 bg-secondary/10 rounded-md whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              
              {selectedContact.date_rdv && (
                <div>
                  <h3 className="font-semibold">Date de rendez-vous</h3>
                  <p>{new Date(selectedContact.date_rdv).toLocaleString('fr-FR')}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactList;
