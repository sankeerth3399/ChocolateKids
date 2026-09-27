import { Heart, Briefcase, ArrowRight, BookOpen, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AudienceSplit() {
  return (
    <section className="py-12 bg-white relative border-b border-amber-100/60 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pathway 1: For Parents */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-50/90 via-[#FFFDF9] to-orange-50/60 border border-amber-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-200/80 text-amber-950 uppercase tracking-wider">
                  For Parents
                </span>
                <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-3 leading-snug">
                Looking for a Preschool for Your Child?
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal mb-6">
                Discover a warm, joyful, and safe early learning haven where curious minds thrive through playful discovery, loving care, and strong foundational habits.
              </p>

              {/* Step links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <a href="#academics" className="p-2.5 rounded-xl bg-white border border-amber-100 text-center hover:bg-amber-100/60 transition-colors">
                  <span className="text-[11px] font-bold text-stone-800 block">Academics</span>
                  <span className="text-[10px] text-stone-500">Play–UKG</span>
                </a>
                <a href="#activities" className="p-2.5 rounded-xl bg-white border border-amber-100 text-center hover:bg-amber-100/60 transition-colors">
                  <span className="text-[11px] font-bold text-stone-800 block">Activities</span>
                  <span className="text-[10px] text-stone-500">Sensory Play</span>
                </a>
                <a href="#gallery" className="p-2.5 rounded-xl bg-white border border-amber-100 text-center hover:bg-amber-100/60 transition-colors">
                  <span className="text-[11px] font-bold text-stone-800 block">Gallery</span>
                  <span className="text-[10px] text-stone-500">Real Photos</span>
                </a>
                <a href="#admissions" className="p-2.5 rounded-xl bg-white border border-amber-100 text-center hover:bg-amber-100/60 transition-colors">
                  <span className="text-[11px] font-bold text-stone-800 block">Admissions</span>
                  <span className="text-[10px] text-stone-500">2026-27</span>
                </a>
              </div>
            </div>

            <div>
              <a
                href="#admissions"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors shadow-xs"
              >
                <span>Explore Preschool Admissions</span>
                <ChevronRight className="w-4 h-4 text-amber-700" />
              </a>
            </div>
          </div>

          {/* Pathway 2: For Entrepreneurs & Educators */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 uppercase tracking-wider">
                  For Entrepreneurs & Educators
                </span>
                <Briefcase className="w-5 h-5 text-amber-300" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-snug">
                Want to Start a Preschool in Your Area?
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-normal mb-6">
                Turn your passion for education into a professionally supported preschool venture. Partner with Chocolate Kids for proven curriculum, complete setup guidance, and training.
              </p>

              {/* Step links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <Link to="/franchise#benefits" className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-colors">
                  <span className="text-[11px] font-bold text-amber-200 block">Benefits</span>
                  <span className="text-[10px] text-stone-400">Full Support</span>
                </Link>
                <Link to="/franchise#requirements" className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-colors">
                  <span className="text-[11px] font-bold text-amber-200 block">Space & Specs</span>
                  <span className="text-[10px] text-stone-400">1.5k–2.5k Sq Ft</span>
                </Link>
                <Link to="/franchise#journey" className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-colors">
                  <span className="text-[11px] font-bold text-amber-200 block">Process</span>
                  <span className="text-[10px] text-stone-400">6 Steps</span>
                </Link>
                <Link to="/franchise#enquiry" className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-colors">
                  <span className="text-[11px] font-bold text-amber-200 block">Enquire</span>
                  <span className="text-[10px] text-stone-400">Apply Now</span>
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              <Link
                to="/franchise"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-colors shadow-lg"
              >
                <span>Start Your Franchise Journey</span>
                <ArrowRight className="w-4 h-4 text-amber-950" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
