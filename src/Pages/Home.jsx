import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    document.title = "Chocolate Kids | Innovative Learning Preschool - Dammaiguda, Kapra & Yapral, Hyderabad";
  }, []);

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Key benefits */}
      <HomeBenefits />

      {/* About Chocolate Kids */}
      <div className="cv-auto"><HomeAbout /></div>

      {/* Our core philosophy: Play, Learn, Grow */}
      <div className="cv-auto"><CorePhilosophy /></div>

      {/* The five groups with their photos */}
      <div className="cv-auto"><HomeGroups /></div>

      {/* Learning Beyond the Classroom */}
      <div className="cv-auto"><LearningApproach /></div>

      {/* Why choose us */}
      <div className="cv-auto"><WhyChooseUs showPhoto={false} /></div>

      {/* 6. Facilities (What We Offer) */}
      <div className="cv-auto"><Facilities /></div>

      {/* 7. Parent & Child Focused Testimonials */}
      <div className="cv-auto"><Testimonials /></div>

      {/* 14. Admissions Call to Action ("Let Their Adventure Begin at") */}
      <div className="cv-auto"><AdmissionsCTA showQuickInquiry={false} showConnect /></div>
    </main>
  );
}
