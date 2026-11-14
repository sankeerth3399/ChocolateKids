import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CorePhilosophy from "../components/CorePhilosophy";
import WhyChooseUs from "../components/WhyChooseUs";
import LearningPrograms from "../components/LearningPrograms";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import AdmissionsCTA from "../components/AdmissionsCTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    document.title = "Chocolate Kids | Innovative Learning Preschool - Dammaiguda, Kapra & Yapral, Hyderabad";
  }, []);

  return (
    <div className="min-h-screen home-theme text-[#17243A] font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 1. Header / Navigation */}
      <Navbar />

      <main>
        {/* 2. Simplified Clean Hero Section */}
        <Hero />

        {/* 3. Our Core Philosophy: Play • Learn • Grow */}
        <CorePhilosophy />

        {/* 4. About Chocolate Kids */}
        <About showPhotos={false} />

        {/* 5. Educational Philosophy & Details */}
        <WhyChooseUs showPhoto={false} />

        {/* 5. Learning Programs (Playgroup, Nursery, PP1/LKG, PP2/UKG, Day Care) */}
        <LearningPrograms showShowcase={false} showSafetyLine={false} />

        {/* 6. Facilities (What We Offer) */}
        <Facilities />

        {/* 7. Parent & Child Focused Testimonials */}
        <Testimonials />

        {/* 14. Admissions Call to Action ("Let Their Adventure Begin at") */}
        <AdmissionsCTA showQuickInquiry={false} showConnect />
      </main>

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button (Parent & Admissions Focused) */}
      <WhatsAppButton />
    </div>
  );
}
