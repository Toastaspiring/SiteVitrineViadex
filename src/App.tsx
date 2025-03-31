
import { Toaster } from "@/components/home/ui/toaster";
import { Toaster as Sonner } from "@/components/home/ui/sonner";
import { TooltipProvider } from "@/components/home/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Index from "./pages/Index";
import Methodologie from "./pages/Methodologie";
import Formation from "./pages/Formation";
import PourquoiViadex from "./pages/PourquoiViadex";
import NosTalents from "./pages/APropos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/Calendar";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/methodologie" element={<Methodologie />} />
      <Route path="/formation" element={<Formation />} />
      <Route path="/pourquoi-viadex" element={<PourquoiViadex />} />
      <Route path="/nos-talents" element={<NosTalents />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calendrier" element={<CalendarPage />} />
      
      {/* Legal pages */}
      <Route path="/mentions-légales" element={<MentionsLegales />} />
      <Route path="/confidentialité" element={<Confidentialite />} />
      <Route path="/conditions-d'utilisation" element={<ConditionsUtilisation />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
