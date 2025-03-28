
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/home/ui/card";
import { LucideBrainCircuit, Clock, User, FileText } from "lucide-react";

const AppointmentInfo = () => {
  return (
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
  );
};

export default AppointmentInfo;
