
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/home/ui/button";

const FormationBanner = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-sm">
          <div className="md:w-7/12">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Formation CertifIAG
            </h3>
            <p className="text-secondary mb-6">
              Maîtrisez l'IA Générative avec discernement grâce à notre certification CertifOpac, reconnue officiellement en partenariat avec JustAI.
              Formation éligible CPF pour les professionnels souhaitant intégrer l'IA de façon concrète et responsable.
            </p>
            <Link to="/formation">
              <Button className="flex items-center gap-2 bg-primary text-white">
                Découvrir la formation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-5/12 bg-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold mb-3">Points clés :</h4>
            <ul className="space-y-2">
              {["Certification officielle (France Compétences RS6891)", "Éligible au financement CPF", "Formation exclusive en France", "Tarif de lancement : 2 500 €"].map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationBanner;
