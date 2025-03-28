
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/home/ui/card";
import AppointmentForm from "./AppointmentForm";

const AppointmentCard = () => {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle>Réserver un créneau</CardTitle>
        <CardDescription>
          Sélectionnez une date et votre préférence horaire
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AppointmentForm />
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
