
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Mail, MailCheck, MailX, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getContacts, updateContactStatus } from "@/services/databaseService";
import { Contact } from "@/types/database";
import { toast } from "sonner";

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch contacts on component mount
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
  
  const markAsHandled = async (id: number) => {
    try {
      const success = await updateContactStatus(id, "traité");
      if (success) {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status: "traité" } : contact
        ));
        toast.success("Statut mis à jour avec succès");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      toast.error("Erreur lors de la mise à jour du statut");
    }
  };
  
  const markAsUnhandled = async (id: number) => {
    try {
      const success = await updateContactStatus(id, "non-traité");
      if (success) {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status: "non-traité" } : contact
        ));
        toast.success("Statut mis à jour avec succès");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      toast.error("Erreur lors de la mise à jour du statut");
    }
  };
  
  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsViewModalOpen(true);
  };
  
  const exportToCSV = () => {
    // Create CSV data
    const headers = ["ID", "Nom", "Prénom", "Email", "Message", "Date", "Statut", "Source"];
    const csvData = contacts.map(contact => [
      contact.id,
      contact.nom,
      contact.prenom || "",
      contact.email,
      contact.message,
      contact.date,
      contact.status,
      contact.source || ""
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "contacts_viadex.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-in fade-in-0">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Formulaires de contact</h1>
        <Button 
          onClick={exportToCSV}
          className="flex items-center gap-2 text-white"
          disabled={contacts.length === 0}
        >
          <Download className="h-4 w-4" />
          Exporter en CSV
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des demandes de contact</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8">
              <p>Chargement des contacts...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="text-center py-8">
              <p>Aucun contact trouvé</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id} className={contact.status === "non-traité" ? "bg-secondary/10" : ""}>
                    <TableCell className="font-medium">{contact.prenom ? `${contact.prenom} ${contact.nom}` : contact.nom}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.date}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 rounded-full text-xs ${
                          contact.status === "non-traité" 
                            ? "bg-destructive/10 text-destructive" 
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewContact(contact)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {contact.status === "non-traité" ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => markAsHandled(contact.id)}
                            className="text-primary"
                          >
                            <MailCheck className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => markAsUnhandled(contact.id)}
                            className="text-destructive"
                          >
                            <MailX className="h-4 w-4" />
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(`mailto:${contact.email}`)}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      
      {selectedContact && (
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Message de {selectedContact.prenom ? `${selectedContact.prenom} ${selectedContact.nom}` : selectedContact.nom}
              </DialogTitle>
              <DialogDescription>
                {selectedContact.email} • {selectedContact.date}
                {selectedContact.source && ` • Source: ${selectedContact.source}`}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 p-4 bg-secondary/10 rounded-md">
              <p>{selectedContact.message}</p>
            </div>
            <div className="flex justify-between mt-4">
              <Button 
                variant="outline"
                onClick={() => setIsViewModalOpen(false)}
              >
                Fermer
              </Button>
              <Button
                onClick={() => window.open(`mailto:${selectedContact.email}`)}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Répondre par email
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ContactList;
