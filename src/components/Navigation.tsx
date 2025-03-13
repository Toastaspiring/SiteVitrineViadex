
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold flex items-center">
          <img 
            src="/lovable-uploads/3258e66c-55f9-47f0-a8af-e2ec44ce6416.png" 
            alt="Viadex Logo" 
            className="h-8 mr-2" 
          />
          <span className="text-primary">Viadex</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-secondary hover:text-primary transition-colors">
            Nos Services
          </Link>
          <Link to="/pourquoi-viadex" className="text-secondary hover:text-primary transition-colors">
            Pourquoi Viadex
          </Link>
          <Link to="/a-propos" className="text-secondary hover:text-primary transition-colors">
            À Propos
          </Link>
          <Link to="/blog" className="text-secondary hover:text-primary transition-colors">
            Ressources & Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Se Connecter
          </Button>
          <Button className="bg-primary text-white">
            Prendre RDV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
