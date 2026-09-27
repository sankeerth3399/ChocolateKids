import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import LearningPrograms from "../components/LearningPrograms";
import LearningApproach from "../components/LearningApproach";
import Activities from "../components/Activities";
import EventsSection from "../components/EventsSection";
import EducationalVisits from "../components/EducationalVisits";
import Gallery from "../components/Gallery";
import Facilities from "../components/Facilities";
import Branches from "../components/Branches";
import Testimonials from "../components/Testimonials";
import AdmissionsCTA from "../components/AdmissionsCTA";
import AdmissionForm from "../components/AdmissionForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    document.title = "Chocolate Kids | Innovative Learning Preschool - Dammaiguda & Kapra, Hyderabad";
  }, []);

  const handleScrollToEnquiry = () => {
    const el = document.getElementById("admissions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 1. Header / Navigation */}
      <Navbar onOpenEnquiry={handleScrollToEnquiry} />

      <main>
        {/* 2. Hero Section (Child & Parent Focused) */}
        <Hero />

        {/* 3. About Chocolate Kids */}
        <About />

        {/* 4. Why Choose Chocolate Kids */}
        <WhyChooseUs />

        {/* 5. Learning Programs (Play Group, Nursery, LKG, UKG) */}
        <LearningPrograms />

        {/* 6. Learning Approach (Beyond the Classroom) */}
        <LearningApproach />

        {/* 7. Activities (Learning Through Fun & Discovery) */}
        <Activities />

        {/* 8. Events & Celebrations (Special Cultural Moments) */}
        <EventsSection />

        {/* 9. Educational Experiences (Field Trips & Community Helpers) */}
        <EducationalVisits />

        {/* 10. Gallery Preview (Real Authentic Moments) */}
        <Gallery />

        {/* 11. Facilities (Safe & Child-Friendly Spaces) */}
        <Facilities />

        {/* 12. Branches Preview (Dammaiguda & Kapra Campuses) */}
        <Branches />

        {/* 13. Parent & Child Focused Testimonials */}
        <Testimonials />

        {/* 14. Admissions Call to Action & Interactive Form */}
        <AdmissionsCTA />
        <AdmissionForm />

        {/* 15. Contact & Campus Information */}
        <Contact />
      </main>

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button (Parent & Admissions Focused) */}
      <WhatsAppButton />
    </div>
  );
}
