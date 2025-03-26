
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import ServicesList from "@/components/home/ServicesList";
import FormationBanner from "@/components/home/FormationBanner";
import BlogSection from "@/components/home/BlogSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Toaster />
      
      <main className="pt-16">
        <HeroBanner />
        <ServicesList />
        <WhyChooseSection />
        <FormationBanner />
        <AboutSection />
        <BlogSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
