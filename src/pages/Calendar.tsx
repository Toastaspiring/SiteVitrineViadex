
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppointmentInfo from "@/components/calendar/AppointmentInfo";
import AppointmentCard from "@/components/calendar/AppointmentCard";

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <AppointmentInfo />
            <AppointmentCard />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalendarPage;
