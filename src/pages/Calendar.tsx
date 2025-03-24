import { CalendarIcon, LucideBrainCircuit, Clock, User, FileText } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [motif, setMotif] = useState("");
  const [formStep, setFormStep] = useState(0);

  const isPastDay = (day: Date) => {
    return day < new Date(new Date().setHours(0, 0, 0, 0));
  };
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timeSlot || !name || !email || !motif) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    toast.success("Rendez-vous réservé avec succès!", {
      description: `Votre rendez-vous le ${format(date, "dd MMMM yyyy", {
        locale: fr
      })} à ${timeSlot} a été confirmé.`
    });

    setDate(undefined);
    setTimeSlot("");
    setName("");
    setEmail("");
    setPhone("");
    setMotif("");
    setFormStep(0);
  };

  const handleNext = () => {
    if (!date || !timeSlot) {
      toast.error("Veuillez sélectionner une date et un horaire");
      return;
    }
    setFormStep(1);
  };

  const handleBack = () => {
    setFormStep(0);
  };

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Prenez rendez-vous avec nos experts</h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Réservez un créneau pour discuter de vos besoins et découvrir comment l'IA peut transformer votre entreprise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 animate-in fade-in-0 slide-in-from-bottom-4">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LucideBrainCircuit className="h-5 w-5 text-primary" />
                    Pourquoi nous rencontrer?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Consultation personnalisée</h3>
                      <p className="text-sm text-secondary/70">Une approche adaptée à votre activité et vos besoins spécifiques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Rendez-vous de 45 minutes</h3>
                      <p className="text-sm text-secondary/70">Le temps d'échanger sur vos enjeux et d'explorer des solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Suivi personnalisé</h3>
                      <p className="text-sm text-secondary/70">Recevez un compte rendu et des recommandations après votre rendez-vous.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Besoin d'aide?</CardTitle>
                  <CardDescription>Contactez-nous par email</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">contact@viadex.fr</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Réserver un créneau</CardTitle>
                <CardDescription>
                  {formStep === 0 ? "Sélectionnez une date et un horaire disponible" : "Complétez vos informations pour confirmer"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 0 ? <>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="date">Date du rendez-vous</Label>
                          <div className="mt-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "dd MMMM yyyy", {
                                locale: fr
                              }) : <span>Sélectionnez une date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent mode="single" selected={date} onSelect={setDate} disabled={date => isPastDay(date) || isWeekend(date)} locale={fr} className="pointer-events-auto" />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                        
                        {date && <div>
                            <Label htmlFor="time">Horaire</Label>
                            <div className="grid grid-cols-4 gap-2 mt-2">
                              {timeSlots.map(time => <Button key={time} type="button" variant={timeSlot === time ? "default" : "outline"} className={cn("h-10", timeSlot === time ? "bg-primary text-white" : "")} onClick={() => setTimeSlot(time)}>
                                  {time}
                                </Button>)}
                            </div>
                          </div>}
                      </div>
                      
                      <Button type="button" className="w-full text-white" onClick={handleNext}>
                        Continuer
                      </Button>
                    </> : <>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Nom complet *</Label>
                          <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Votre nom et prénom" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre.email@exemple.com" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="motif">Motif du rendez-vous *</Label>
                          <Textarea id="motif" value={motif} onChange={e => setMotif(e.target.value)} placeholder="Décrivez brièvement l'objet de votre demande" rows={4} required />
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button type="button" variant="outline" onClick={handleBack} className="sm:flex-1">
                          Retour
                        </Button>
                        <Button type="submit" className="sm:flex-1 text-white">
                          Confirmer le rendez-vous
                        </Button>
                      </div>
                    </>}
                </form>
              </CardContent>
              {formStep === 0 && date && timeSlot && <CardFooter className="border-t px-6 py-4">
                  <p className="text-sm text-center w-full">
                    Vous avez sélectionné le{" "}
                    <span className="font-medium">
                      {format(date, "dd MMMM yyyy", {
                    locale: fr
                  })} à {timeSlot}
                    </span>
                  </p>
                </CardFooter>}
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default CalendarPage;
