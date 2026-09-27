import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import EventsSection from "../components/EventsSection";
import EducationalVisits from "../components/EducationalVisits";
import AdmissionsCTA from "../components/AdmissionsCTA";
import { Calendar, Sparkles } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-amber-100/60 to-transparent py-14 sm:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-200/70 text-rose-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-rose-700" />
              <span>School Events & Excursions</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight">
              Celebrations & Special Moments
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              From joyful cultural festivals and patriotic flag hoistings to real-world educational excursions at the Goshala, discover how Chocolate Kids turns celebrations into meaningful learning.
            </p>
          </div>
        </section>

        {/* Celebrations & Events Grid */}
        <EventsSection />

        {/* Educational Visits & Excursions */}
        <EducationalVisits />

        {/* Admissions CTA */}
        <AdmissionsCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
