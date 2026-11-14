import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeBenefits from "../components/HomeBenefits";
import HomeAbout from "../components/HomeAbout";
import HomeGroups from "../components/HomeGroups";
import LearningApproach from "../components/LearningApproach";

import CorePhilosophy from "../components/CorePhilosophy";
import WhyChooseUs from "../components/WhyChooseUs";
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
    <div className="min-h-screen home-theme text-[#142B4A] font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 1. Header / Navigation */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Key benefits */}
        <HomeBenefits />

        {/* About Chocolate Kids */}
        <HomeAbout />

        {/* Our core philosophy: Play, Learn, Grow */}
        <CorePhilosophy />

        {/* The five groups with their photos */}
        <HomeGroups />

        {/* Learning Beyond the Classroom */}
        <LearningApproach />

        {/* Why choose us */}
        <WhyChooseUs showPhoto={false} />

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
