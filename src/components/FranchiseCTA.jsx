import { ArrowRight, MessageCircle, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function FranchiseCTA() {
  const franchiseMsg = "Hello Chocolate Kids Team, I am interested in the preschool franchise opportunity. Please share the franchise details.";

  return (
    <section id="franchise-cta" className="py-20 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 relative overflow-hidden border-t border-amber-200/60">
      {/* Decorative ambient elements */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full bg-amber-100/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white border border-amber-500/30 shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-900" />
            <span>Preschool Entrepreneurship</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span>Ready to Build a Preschool With</span> <BrandBadge className="text-[0.72em]" /> <span>?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Bring quality early childhood education to your community with complete curriculum backing, setup guidance, teacher training, and marketing support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/franchise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Become a Franchise Partner</span>
              <ArrowRight className="w-4 h-4 text-amber-950" />
            </Link>

            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to Franchise Team</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-amber-300 block mb-0.5">Child-Centered Concept</span>
              <span className="text-[11px] text-stone-300">Play-based curriculum and safe environment standard</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-amber-300 block mb-0.5">Comprehensive Guidance</span>
              <span className="text-[11px] text-stone-300">Teacher training support & campus setup assistance</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-amber-300 block mb-0.5">Community Trust</span>
              <span className="text-[11px] text-stone-300">Positive parent goodwill and authentic early education</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
