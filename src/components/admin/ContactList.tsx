
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Mail, MailCheck, MailX, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Simulation de données
const initialContacts = [
  {
    id: 1,
    nom: "Thomas Dubois",
    email: "thomas.dubois@example.com",
    message: "Je souhaiterais en savoir plus sur vos services de formation IA",
    date: "2023-06-12",
    status: "non-traité"
  },
  {
    id: 2,
    nom: "Marie Laurent",
    email: "marie.laurent@example.com",
    message: "Bonjour, est-il possible d'obtenir un devis pour un accompagnement stratégique ?",
    date: "2023-06-10",
    status: "traité"
  },
  {
    id: 3,
    nom: "Pierre Martin",
    email: "pierre.martin@example.com",
    message: "J'aimerais organiser un diagnostic IA pour mon entreprise de 50 personnes",
    date: "2023-06-08",
    status: "non-traité"
  },
  {
    id: 4,
    nom: "Sophie Bernard",
    email: "sophie.bernard@example.com",
    message: "Quelles sont vos disponibilités pour une première réunion?",
    date: "2023-06-05",
    status: "traité"
  },
];

type Contact = typeof initialContacts[0];

const ContactList = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  
  const markAsHandled = (id: number) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, status: "traité" } : contact
    ));
  };
  
  const markAsUnhandled = (id: number) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, status: "non-traité" } : contact
    ));
  };
  
  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsViewModalOpen(true);
  };
  
  const exportToCSV = () => {
    // Créer les données CSV
    const headers = ["Nom", "Email", "Message", "Date", "Statut"];
    const csvData = contacts.map(contact => [
      contact.nom,
      contact.email,
      contact.message,
      contact.date,
      contact.status
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");
    
    // Créer un blob et télécharger
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
          className="flex items-center gap-2"
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
                  <TableCell className="font-medium">{contact.nom}</TableCell>
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
        </CardContent>
      </Card>
      
      {selectedContact && (
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Message de {selectedContact.nom}</DialogTitle>
              <DialogDescription>
                {selectedContact.email} • {selectedContact.date}
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
