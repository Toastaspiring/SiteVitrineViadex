
import { Button } from "@/components/home/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="mx-auto max-w-7xl relative">
        {/* Background Logo - Only visible on screens larger than 1200px (xl breakpoint) */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-90 md:opacity-100 pointer-events-none z-0 hidden xl:block">
          <div className="relative max-w-[400px] md:max-w-[500px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-blue-300/20 rounded-full filter blur-3xl animate-pulse"></div>
            </div>
            <img src="/lovable-uploads/logoV1.png" alt="Viadex Logo" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Content that can overlap the logo */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 relative">
            <span className="block mb-2 py-[30px]">L'IA au service des PME & ETI du Grand Ouest :
          </span>
            <span className="block text-white">simplifiez votre transformation</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">Viadex accompagne les entreprises dans la valorisation de leur Data et l'adoption de l'IA.</p>
          <Link to="/contact">
            <Button className="px-6 py-6 bg-white text-primary hover:bg-white/90 rounded-lg text-lg font-medium">
              Prenez un rendez-vous découverte
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
