import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import EventsSection from "../components/EventsSection";
import EducationalVisits from "../components/EducationalVisits";
import AdmissionsCTA from "../components/AdmissionsCTA";
import { Calendar } from "lucide-react";
import { BrandBadge } from "../utils/brandHelper";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main>
        {/* Page Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#17243A] to-[#5E152E] pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-4">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#D6B56D]/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-[#801D3A]/35 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-200/70 text-rose-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-rose-700" />
              <span>School Events & Excursions</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Celebrations & Special Moments
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From joyful cultural festivals and patriotic flag hoistings to real-world educational excursions at the Goshala, discover how <BrandBadge isInline className="text-[0.88em]" /> turns celebrations into meaningful learning.
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
