
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { useAuth } from "@/context/AuthContext";
import { Calendar, Menu, X } from "lucide-react";

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-8">
          <Link to="/methodologie" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            Notre Méthodologie
          </Link>
          <Link to="/formation" className="text-secondary hover:text-primary transition-colors hover:scale-105 transform">
            Formation CertifIAG
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
            <Link to="/admin" className="hidden xl:inline-flex">
              <Button 
                variant="ghost" 
                className="hover:scale-105 transform transition-all"
              >
                Administration
              </Button>
            </Link>
          ) : (
            <Button 
              variant="ghost" 
              className="hidden xl:inline-flex hover:scale-105 transform transition-all"
              onClick={() => setShowLoginModal(true)}
            >
              Se Connecter
            </Button>
          )}
          <Link to="/calendrier" className="hidden sm:flex">
            <Button className="bg-primary text-white hover:scale-105 transform transition-all flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Prendre RDV
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="xl:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-background border-b border-border animate-in slide-in-from-top-5">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/methodologie" 
              className="block py-2 text-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Méthodologie
            </Link>
            <Link 
              to="/formation" 
              className="block py-2 text-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formation CertifIAG
            </Link>
            <Link 
              to="/pourquoi-viadex" 
              className="block py-2 text-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pourquoi Viadex
            </Link>
            <Link 
              to="/a-propos" 
              className="block py-2 text-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ressources & Blog
            </Link>
            <div className="pt-2 border-t border-border">
              {isAuthenticated ? (
                <Link 
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Administration
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowLoginModal(true);
                  }}
                >
                  Se Connecter
                </Button>
              )}
              <Link 
                to="/calendrier"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block"
              >
                <Button className="w-full bg-primary text-white flex items-center gap-2 justify-center">
                  <Calendar className="h-4 w-4" />
                  Prendre RDV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </nav>
  );
};

export default Navigation;
