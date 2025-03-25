
import { Card, CardContent } from "@/components/ui/card";

const ProcessAndTarget = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
              <h2>Comment ça se passe ?</h2>
            </div>
            
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Épreuve 1 – Rapport professionnel (écrit)</h3>
                <p className="text-secondary">Application concrète des compétences dans votre contexte professionnel</p>
              </CardContent>
            </Card>
            
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Épreuve 2 – Soutenance orale (visioconférence)</h3>
                <p className="text-secondary">Présentation et défense de votre projet devant un jury</p>
              </CardContent>
            </Card>
            
            <p className="text-secondary italic">
              ⏳ Jusqu'à un an après la formation pour passer la certification
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6 text-primary">
              <h2>Pour qui ?</h2>
            </div>
            
            <p className="mb-6 text-lg">
              Consultants, marketeurs, formateurs, communicants, chefs de projet, managers…
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary mb-6">
              <h3 className="font-semibold text-lg mb-2">En conclusion</h3>
              <p className="text-secondary mb-2">
                L'IA ne pense pas à votre place. Elle amplifie votre intelligence.
              </p>
              <p className="font-medium">
                CertifIAG, c'est la preuve que vous savez faire la différence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndTarget;
