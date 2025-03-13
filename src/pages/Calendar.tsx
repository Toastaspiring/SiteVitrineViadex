
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const availableTimes = [
    "09:00", "10:00", "11:00", 
    "14:00", "15:00", "16:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const appointmentDetails = {
      name,
      email,
      date: date ? format(date, 'yyyy-MM-dd') : '',
      time: selectedTime,
      reason
    };
    
    console.log("Rendez-vous programmé:", appointmentDetails);
    
    // Dans un environnement de production, envoyer ces données à une API
    alert("Votre rendez-vous a été programmé avec succès!");
    
    // Réinitialiser le formulaire
    setName("");
    setEmail("");
    setReason("");
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-in fade-in-0">Prenez rendez-vous</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Sélectionnez une date et une heure</h2>
              <Card className="animate-in fade-in-0 zoom-in-95">
                <CardHeader>
                  <CardTitle>Calendrier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        // Désactiver les week-ends et les dates passées
                        const day = date.getDay();
                        return (
                          day === 0 || 
                          day === 6 || 
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        );
                      }}
                      locale={fr}
                      className="pointer-events-auto"
                    />
                  </div>
                  
                  {date && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        <Clock className="inline-block mr-2 h-5 w-5" />
                        Heures disponibles
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="transition-all hover:scale-105"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Vos informations</h2>
              <Card className="animate-in fade-in-0 zoom-in-95 delay-100">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-1">
                        Date sélectionnée
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "EEEE d MMMM yyyy", { locale: fr })
                            ) : (
                              <span>Sélectionnez une date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => {
                              const day = date.getDay();
                              return (
                                day === 0 || 
                                day === 6 || 
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              );
                            }}
                            locale={fr}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-1">
                        Heure sélectionnée
                      </label>
                      <input
                        id="time"
                        type="text"
                        value={selectedTime || ""}
                        readOnly
                        className="w-full px-3 py-2 border border-border rounded-md bg-muted focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium mb-1">
                        Motif du rendez-vous
                      </label>
                      <textarea
                        id="reason"
                        rows={3}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={!date || !selectedTime}
                    >
                      Confirmer le rendez-vous
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;
