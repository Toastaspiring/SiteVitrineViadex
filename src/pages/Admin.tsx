
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/home/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/home/ui/card";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/home/ui/button";
import { Grid, Calendar as CalendarIcon, List, User, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import ContactList from "@/components/admin/ContactList";
import AppointmentManager from "@/components/admin/AppointmentManager";

const Admin = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [activeView, setActiveView] = useState<string>("contacts");
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-semibold flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/3699b2d8-edb8-4fe3-ade8-f89c626c1ab9.png" 
                alt="Viadex Logo" 
                className="h-8 mr-2" 
              />
              <span className="text-primary">Viadex Admin</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center gap-2 hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 space-y-6">
            <nav className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h2 className="font-medium">Tableau de bord</h2>
              </div>
              <div className="space-y-1 p-2">
                <Button 
                  variant={activeView === "contacts" ? "default" : "ghost"} 
                  className={`w-full justify-start text-left ${activeView === "contacts" ? "text-white" : ""}`}
                  onClick={() => {
                    setActiveView("contacts");
                    navigate("/admin/contacts");
                  }}
                >
                  <List className="h-4 w-4 mr-2" />
                  Formulaires de contact
                </Button>
                <Button 
                  variant={activeView === "appointments" ? "default" : "ghost"} 
                  className={`w-full justify-start text-left ${activeView === "appointments" ? "text-white" : ""}`}
                  onClick={() => {
                    setActiveView("appointments");
                    navigate("/admin/rendez-vous");
                  }}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Rendez-vous
                </Button>
              </div>
            </nav>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Utilisateur connecté</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{user?.email || "Admin"}</p>
                    <p className="text-xs text-muted-foreground">{user?.email || "admin@viadex.fr"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/contacts" element={<ContactList />} />
              <Route path="/rendez-vous" element={<AppointmentManager />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
