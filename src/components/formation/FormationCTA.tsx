
import { Button } from "@/components/home/ui/button";
import { Link } from "react-router-dom";

const FormationCTA = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center gap-2 text-xl md:text-2xl font-semibold mb-6">
          <span className="text-3xl">✉️</span>
          <h2>Pour en savoir plus, contactez-nous ou découvrez les prochaines sessions !</h2>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 px-6 py-6 text-lg w-full sm:w-auto">
              Nous contacter
            </Button>
          </Link>
          <Link to="/calendrier">
            <Button className="bg-white/20 text-white hover:bg-white/30 px-6 py-6 text-lg w-full sm:w-auto">
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormationCTA;
