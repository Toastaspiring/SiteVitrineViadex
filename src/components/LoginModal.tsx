import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/home/ui/dialog";
import { Input } from "@/components/home/ui/input";
import { Button } from "@/components/home/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { authenticateUser } from "@/services/authService";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({
  isOpen,
  onClose
}: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    setIsAuthenticated,
    setUser
  } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await authenticateUser(email, password);
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        onClose();
        toast.success("Connexion réussie");
        navigate("/admin");
      } else {
        toast.error("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      toast.error("Erreur lors de la connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] animate-in fade-in-0 zoom-in-95">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Connexion à Viadex
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="votreemail@exemple.com" className="w-full bg-gray-200" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Mot de passe
            </label>
            <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-gray-200" />
          </div>
          <div className="text-xs text-muted-foreground">
            Pour la démonstration, utilisez: admin@viadex.fr / admin
          </div>
          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 transition-colors text-slate-50">
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>;
}
