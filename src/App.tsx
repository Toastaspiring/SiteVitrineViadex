
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext } from "react";

// Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import PourquoiViadex from "./pages/PourquoiViadex";
import APropos from "./pages/APropos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/Calendar";
import Admin from "./pages/Admin";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import Cookies from "./pages/Cookies";

// Context pour l'authentification
export const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pourquoi-viadex" element={<PourquoiViadex />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calendrier" element={<CalendarPage />} />
              <Route 
                path="/admin/*" 
                element={isAuthenticated ? <Admin /> : <Navigate to="/" />} 
              />
              {/* Nouvelles routes pour les pages légales */}
              <Route path="/mentions-légales" element={<MentionsLegales />} />
              <Route path="/confidentialité" element={<Confidentialite />} />
              <Route path="/conditions-d'utilisation" element={<ConditionsUtilisation />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default App;
