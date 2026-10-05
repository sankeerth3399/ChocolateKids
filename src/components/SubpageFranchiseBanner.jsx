import { Link } from "react-router-dom";
import { Briefcase, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { schoolInfo } from "../data";
import { highlightBrand } from "../utils/brandHelper";

export default function SubpageFranchiseBanner({
  badge = "Franchise Opportunity",
  title = "Partner With Chocolate Kids",
  subtitle = "Turn your passion for early childhood learning into a professionally supported preschool venture in your community.",
  ctaText = "Explore Franchise Opportunity",
  accentColor = "amber",
}) {
  const franchiseMsg = "Hello Chocolate Kids Team, I am interested in the preschool franchise opportunity. Please share the franchise details.";

  return (
    <section className="py-14 bg-gradient-to-b from-stone-50/80 to-[#FFFDF9] border-t border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              {typeof title === "string" ? highlightBrand(title) : title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              {typeof subtitle === "string" ? highlightBrand(subtitle) : subtitle}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              to="/franchise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 text-amber-950" />
            </Link>

            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to Franchise Team</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
