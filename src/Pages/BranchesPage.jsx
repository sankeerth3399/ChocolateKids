import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Branches from "../components/Branches";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function BranchesPage() {
  useEffect(() => {
    document.title = "Our Schools | Chocolate Kids Preschool Branches in Hyderabad";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main>
        
        {/* ==================================================
            1. PAGE HERO: OUR SCHOOLS INTRODUCTION
           ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#17243A] to-[#5E152E] pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-4">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#D6B56D]/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-[#801D3A]/35 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#D6B56D] mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#D6B56D]" />
              <span>Our Schools • Hyderabad</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Our Schools at</span> <BrandBadge className="text-[0.72em]" />
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore our branches and discover a welcoming learning environment for your child. Our child-safe campuses in Dammaiguda, Kapra, and Yapral are thoughtfully designed for joyful foundational learning.
            </p>

            {/* Quick stats mini-bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D6B56D]/40 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#D6B56D]" />
                Child-Proof Safe Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D6B56D]/40 text-slate-200">
                Indoor & Outdoor Sensory Play
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D6B56D]/40 text-slate-200">
                <Clock className="w-4 h-4 text-[#D6B56D]" />
                Morning & Extended Timings
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================
            2. VISIT OUR BRANCHES COMPONENT
            (ONE UNIFIED RENDERED SECTION IN THE ENTIRE WEBSITE)
           ================================================== */}
        <Branches />

        {/* ==================================================
            5. ADMISSIONS CTA FOR PARENTS
           ================================================== */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-[#17243A] mb-4 leading-tight">
              Ready to Visit a <span className="text-[#801D3A]">Chocolate Kids</span> Campus?
            </h3>
            <p className="text-base sm:text-lg text-[#536174] max-w-xl mx-auto mb-9 leading-relaxed">
              Schedule a personalized tour of our classrooms, meet our caring educators, and learn more about our 2026-27 admission process.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[46px] rounded-md text-sm font-semibold tracking-wide text-white bg-[#801D3A] hover:bg-[#5E152E] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center cursor-pointer"
              >
                <span>Fill Admission Form</span>
              </Link>
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[46px] rounded-md text-sm font-semibold tracking-wide text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
