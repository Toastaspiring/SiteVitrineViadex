
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Calendar as CalendarViewIcon, Download, ExternalLink } from "lucide-react";

// Simulation de données
const initialAppointments = [
  {
    id: 1,
    nom: "Alexandre Leroy",
    email: "alexandre.leroy@example.com",
    date: "2023-06-15",
    heure: "10:00",
    motif: "Présentation des services de diagnostic IA",
    statut: "à venir"
  },
  {
    id: 2,
    nom: "Claire Dupont",
    email: "claire.dupont@example.com",
    date: "2023-06-14",
    heure: "14:00",
    motif: "Discussion sur une formation IA pour mon équipe",
    statut: "à venir"
  },
  {
    id: 3,
    nom: "Julien Moreau",
    email: "julien.moreau@example.com",
    date: "2023-06-08",
    heure: "11:00",
    motif: "Suivi de notre collaboration en veille IA",
    statut: "passé"
  },
  {
    id: 4,
    nom: "Lucie Mercier",
    email: "lucie.mercier@example.com",
    date: "2023-06-05",
    heure: "15:30",
    motif: "Premier contact - découverte des besoins",
    statut: "passé"
  },
];

type Appointment = typeof initialAppointments[0];

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [exportModalOpen, setExportModalOpen] = useState(false);
  
  const todayDateString = format(new Date(), "yyyy-MM-dd");
  
  // Filtrer les rendez-vous pour le calendrier
  const appointmentsForSelectedDate = selectedDate 
    ? appointments.filter(app => app.date === format(selectedDate, "yyyy-MM-dd"))
    : [];
  
  // Filtrer les rendez-vous à venir et passés pour les onglets
  const upcomingAppointments = appointments.filter(app => 
    app.date >= todayDateString
  );
  
  const pastAppointments = appointments.filter(app => 
    app.date < todayDateString
  );
  
  // Pour générer le fichier d'exportation Google Calendar
  const generateGoogleCalendarLink = (appointment: Appointment) => {
    const { date, heure, nom, motif } = appointment;
    
    // Formatage de la date et l'heure
    const [year, month, day] = date.split('-');
    const [hour, minute] = heure.split(':');
    
    const startDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // Durée d'une heure
    
    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    
    const text = `Rendez-vous Viadex avec ${nom}`;
    const details = `Rendez-vous Viadex\nClient: ${nom}\nMotif: ${motif}`;
    
    const googleCalendarUrl = 
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(details)}`;
    
    return googleCalendarUrl;
  };
  
  // Pour générer le fichier d'exportation Outlook
  const generateOutlookCalendarLink = (appointment: Appointment) => {
    const { date, heure, nom, motif } = appointment;
    
    // Formatage de la date et l'heure
    const [year, month, day] = date.split('-');
    const [hour, minute] = heure.split(':');
    
    const startDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // Durée d'une heure
    
    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    
    const subject = `Rendez-vous Viadex avec ${nom}`;
    const body = `Rendez-vous Viadex\nClient: ${nom}\nMotif: ${motif}`;
    
    const outlookCalendarUrl = 
      `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&startdt=${startFormatted}&enddt=${endFormatted}`;
    
    return outlookCalendarUrl;
  };
  
  return (
    <div className="space-y-6 animate-in fade-in-0">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des rendez-vous</h1>
        <Button 
          onClick={() => setExportModalOpen(true)}
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Exporter vers Calendrier
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <Tabs defaultValue="upcoming">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Liste des rendez-vous</CardTitle>
              <TabsList>
                <TabsTrigger value="upcoming">À venir</TabsTrigger>
                <TabsTrigger value="past">Passés</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="upcoming" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Heure</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{appointment.nom}</p>
                            <p className="text-xs text-muted-foreground">{appointment.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.heure}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => window.open(generateGoogleCalendarLink(appointment))}>
                              <CalendarViewIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => window.open(`mailto:${appointment.email}`)}>
                              Mail
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {upcomingAppointments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-4">
                          Aucun rendez-vous à venir
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="past" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Heure</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{appointment.nom}</p>
                            <p className="text-xs text-muted-foreground">{appointment.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.heure}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => window.open(`mailto:${appointment.email}`)}>
                              Mail
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pastAppointments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-4">
                          Aucun rendez-vous passé
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Calendrier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={fr}
                className="mx-auto pointer-events-auto"
              />
              
              {selectedDate && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">
                    Rendez-vous du {format(selectedDate, "d MMMM yyyy", { locale: fr })}
                  </h3>
                  
                  {appointmentsForSelectedDate.length > 0 ? (
                    <div className="space-y-2">
                      {appointmentsForSelectedDate.map((appointment) => (
                        <div key={appointment.id} className="p-2 bg-secondary/10 rounded-md text-sm">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{appointment.heure}</p>
                            <p className={`px-2 py-0.5 rounded-full text-xs ${
                              appointment.statut === "à venir" 
                                ? "bg-primary/10 text-primary" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {appointment.statut}
                            </p>
                          </div>
                          <p>{appointment.nom}</p>
                          <p className="text-xs text-muted-foreground mt-1">{appointment.motif}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-muted/30 rounded-md">
                      <p className="text-sm text-muted-foreground">Aucun rendez-vous ce jour</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={exportModalOpen} onOpenChange={setExportModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Exporter les rendez-vous</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Sélectionnez le format de calendrier vers lequel vous souhaitez exporter vos rendez-vous.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-4 flex flex-col items-center gap-2" 
                onClick={() => {
                  // Pour démo, on va simplement ouvrir un rendez-vous dans Google Calendar
                  if (appointments.length > 0) {
                    window.open(generateGoogleCalendarLink(appointments[0]));
                  }
                  setExportModalOpen(false);
                }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" 
                  alt="Google Calendar" 
                  className="w-8 h-8" 
                />
                <span>Google Calendar</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-4 flex flex-col items-center gap-2"
                onClick={() => {
                  // Pour démo, on va simplement ouvrir un rendez-vous dans Outlook
                  if (appointments.length > 0) {
                    window.open(generateOutlookCalendarLink(appointments[0]));
                  }
                  setExportModalOpen(false);
                }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" 
                  alt="Outlook" 
                  className="w-8 h-8" 
                />
                <span>Outlook</span>
              </Button>
            </div>
            
            <div>
              <Button 
                className="w-full mt-4"
                onClick={() => {
                  // Créer des données à exporter
                  const headers = ["Nom", "Email", "Date", "Heure", "Motif", "Statut"];
                  const csvData = appointments.map(appointment => [
                    appointment.nom,
                    appointment.email,
                    appointment.date,
                    appointment.heure,
                    appointment.motif,
                    appointment.statut
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
                  link.setAttribute("download", "rendez_vous_viadex.csv");
                  link.style.visibility = "hidden";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  setExportModalOpen(false);
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Télécharger en CSV
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentManager;
