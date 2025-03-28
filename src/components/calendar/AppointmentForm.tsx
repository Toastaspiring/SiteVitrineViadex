
import { useState } from "react";
import { Input } from "@/components/home/ui/input";
import { Label } from "@/components/home/ui/label";
import { Textarea } from "@/components/home/ui/textarea";
import { Button } from "@/components/home/ui/button";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { addContact } from "@/services/contactService";
import CalendarSelector from "./CalendarSelector";

const AppointmentForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timePreference, setTimePreference] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [motif, setMotif] = useState("");
  const [formStep, setFormStep] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timePreference || !name || !email || !motif) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const formattedDate = format(date, "yyyy-MM-dd");
    const rdvInfo = `${formattedDate} - Préférence: ${timePreference}`;

    try {
      console.log("Submitting appointment form with data:", {
        nom: name,
        email: email,
        message: motif,
        telephone: phone,
        preferenceContact: timePreference,
        date_rdv: rdvInfo
      });

      const success = await addContact({
        nom: name,
        email: email,
        message: motif,
        telephone: phone,
        preferenceContact: timePreference,
        date_rdv: rdvInfo
      });

      if (success) {
        toast.success("Rendez-vous réservé avec succès!", {
          description: `Votre rendez-vous le ${format(date, "dd MMMM yyyy", {
            locale: fr
          })} (${timePreference}) a été confirmé.`
        });

        setDate(undefined);
        setTimePreference("");
        setName("");
        setEmail("");
        setPhone("");
        setMotif("");
        setFormStep(0);
      }
    } catch (error) {
      console.error("Erreur lors de la création du rendez-vous:", error);
      toast.error("Une erreur est survenue lors de la réservation");
    }
  };

  const handleNext = () => {
    if (!date || !timePreference) {
      toast.error("Veuillez sélectionner une date et une préférence horaire");
      return;
    }
    setFormStep(1);
  };

  const handleBack = () => {
    setFormStep(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStep === 0 ? (
        <>
          <CalendarSelector 
            date={date}
            setDate={setDate}
            timePreference={timePreference}
            setTimePreference={setTimePreference}
          />
          
          <Button type="button" className="w-full text-white" onClick={handleNext}>
            Continuer
          </Button>
        </>
      ) : (
        <>
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
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="06 XX XX XX XX" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="motif">Motif du rendez-vous *</Label>
              <Textarea 
                id="motif" 
                value={motif} 
                onChange={e => setMotif(e.target.value)} 
                placeholder="Décrivez brièvement l'objet de votre demande" 
                rows={4} 
                required 
              />
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
        </>
      )}

      {formStep === 0 && date && timePreference && (
        <div className="border-t px-6 py-4 text-sm text-center w-full">
          Vous avez sélectionné le{" "}
          <span className="font-medium">
            {format(date, "dd MMMM yyyy", {
              locale: fr
            })} ({timePreference})
          </span>
        </div>
      )}
    </form>
  );
};

export default AppointmentForm;
