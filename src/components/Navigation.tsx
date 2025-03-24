
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { useAuth } from "@/context/AuthContext";
import { Calendar } from "lucide-react";

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold flex items-center hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/LogoV3bleu.png" 
            alt="Viadex Logo" 
            className="h-10 mr-2 rounded-full" 
          />
          <span className="text-primary animate-in fade-in-0">Viadex</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            Nos Services
          </Link>
          <Link to="/pourquoi-viadex" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            Pourquoi Viadex
          </Link>
          <Link to="/a-propos" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            À Propos
          </Link>
          <Link to="/blog" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            Ressources & Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <Link to="/admin">
              <Button 
                variant="ghost" 
                className="hidden md:inline-flex hover:scale-105 transform transition-all"
              >
                Administration
              </Button>
            </Link>
          ) : (
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex hover:scale-105 transform transition-all"
              onClick={() => setShowLoginModal(true)}
            >
              Se Connecter
            </Button>
          )}
          <Link to="/calendrier">
            <Button className="bg-primary text-white hover:scale-105 transform transition-all flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Prendre RDV
            </Button>
          </Link>
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </nav>
  );
};

export default Navigation;
