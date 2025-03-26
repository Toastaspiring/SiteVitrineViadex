
import { Link } from "react-router-dom";
import { Button } from "@/components/home/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Prêt à commencer votre transformation ?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Rejoignez les entreprises qui ont déjà simplifié leur adoption de l'IA avec Viadex.
        </p>
        <Link to="/contact">
          <Button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
            Prendre un rendez-vous
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
