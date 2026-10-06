import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MessageCircle 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Branches from "../components/Branches";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function BranchesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Schools | Chocolate Kids Preschool Branches in Hyderabad";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        
        {/* ==================================================
            1. PAGE HERO: OUR SCHOOLS INTRODUCTION
           ================================================== */}
        <section className="relative bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-[#FFFDF9] py-16 sm:py-20 border-b border-amber-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>Our Schools • Hyderabad</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Our Schools at</span> <BrandBadge className="text-[0.72em]" />
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore our branches and discover a welcoming learning environment for your child. Our child-safe campuses in Dammaiguda, Kapra, and Yapral are thoughtfully designed for joyful foundational learning.
            </p>

            {/* Quick stats mini-bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-stone-700">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Child-Proof Safe Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Indoor & Outdoor Sensory Play
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <Clock className="w-4 h-4 text-sky-600" />
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
        <section className="py-16 bg-white border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Ready to Visit a</span> <BrandBadge className="text-[0.78em]" /> <span>Campus?</span>
            </h3>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mb-8">
              Schedule a personalized tour of our classrooms, meet our caring educators, and learn more about our 2026-27 admission process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[46px] rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md transition-colors text-center cursor-pointer"
              >
                <span>Fill Admission Form</span>
              </Link>
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 min-h-[46px] rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors gap-2 text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
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
