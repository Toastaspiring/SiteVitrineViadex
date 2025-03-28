
import { useState } from "react";
import { Input } from "@/components/home/ui/input";
import { Label } from "@/components/home/ui/label";
import { Textarea } from "@/components/home/ui/textarea";
import { Button } from "@/components/home/ui/button";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { addMeeting } from "@/services/contactService";
import CalendarSelector from "./CalendarSelector";

const AppointmentForm = () => {
  // Two dates with their respective preferences
  const [date1, setDate1] = useState<Date | undefined>(undefined);
  const [pref1, setPref1] = useState<number>(1); // 1: morning, 2: afternoon
  const [date2, setDate2] = useState<Date | undefined>(undefined);
  const [pref2, setPref2] = useState<number>(1); // 1: morning, 2: afternoon
  
  // User information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [motif, setMotif] = useState("");
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date1 || !date2 || !name || !email || !motif) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting appointment form with data:", {
        contact: {
          nom: name,
          email: email,
          message: motif,
          telephone: phone,
        },
        meeting: {
          date1: date1,
          date2: date2,
          pref1: pref1,
          pref2: pref2
        }
      });

      const success = await addMeeting(
        {
          nom: name,
          email: email,
          message: motif,
          telephone: phone,
        },
        {
          date1: date1,
          date2: date2,
          pref1: pref1,
          pref2: pref2
        }
      );

      if (success) {
        toast.success("Demande de rendez-vous envoyée avec succès!", {
          description: `Nous vous contacterons pour confirmer l'une des dates proposées.`
        });

        // Reset form
        setDate1(undefined);
        setPref1(1);
        setDate2(undefined);
        setPref2(1);
        setName("");
        setEmail("");
        setPhone("");
        setMotif("");
        setFormStep(0);
      }
    } catch (error) {
      console.error("Erreur lors de la création du rendez-vous:", error);
      toast.error("Une erreur est survenue lors de la réservation");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (!date1 || !date2) {
      toast.error("Veuillez sélectionner deux dates et vos préférences horaires");
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
            date1={date1}
            setDate1={setDate1}
            pref1={pref1}
            setPref1={setPref1}
            date2={date2}
            setDate2={setDate2}
            pref2={pref2}
            setPref2={setPref2}
          />
          
          <Button 
            type="button" 
            className="w-full text-white" 
            onClick={handleNext}
            disabled={!date1 || !date2}
          >
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
            <Button 
              type="submit" 
              className="sm:flex-1 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Confirmer le rendez-vous"}
            </Button>
          </div>
        </>
      )}

      {formStep === 0 && date1 && date2 && (
        <div className="border-t px-6 py-4 text-sm text-center w-full">
          <div>
            <p>Premier choix: <span className="font-medium">
              {format(date1, "dd MMMM yyyy", {
                locale: fr
              })} ({pref1 === 1 ? "Matin" : "Après-midi"})
            </span></p>
            <p>Second choix: <span className="font-medium">
              {format(date2, "dd MMMM yyyy", {
                locale: fr
              })} ({pref2 === 1 ? "Matin" : "Après-midi"})
            </span></p>
          </div>
        </div>
      )}
    </form>
  );
};

export default AppointmentForm;
