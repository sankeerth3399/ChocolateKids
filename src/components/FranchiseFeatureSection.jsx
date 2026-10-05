import { Award, Sparkles, GraduationCap, BookOpen, Megaphone, ShieldCheck, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { franchiseBenefits } from "../data";
import { highlightBrand, BrandBadge } from "../utils/brandHelper";

export default function FranchiseFeatureSection() {
  const iconMap = {
    Award,
    Sparkles,
    GraduationCap,
    BookOpen,
    Megaphone,
    ShieldCheck,
  };

  return (
    <section id="franchise-opportunity" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/60 to-white relative overflow-hidden border-t border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
            <Briefcase className="w-3.5 h-3.5 text-amber-800" />
            <span>Franchise Opportunity</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>Own a</span> <BrandBadge className="text-2xl sm:text-3xl lg:text-4xl px-3 py-1" /> <span>Preschool</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Turn your passion for education into a professionally supported preschool venture. Partner with an established brand dedicated to joyful learning, safety, and community trust.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {franchiseBenefits.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-stone-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {highlightBrand(item.desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              Ready to take the next step?
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white flex flex-wrap items-center gap-2">
              <span>Discover How to Partner With</span> <BrandBadge className="text-lg sm:text-2xl px-3 py-1" />
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Get our comprehensive franchise prospectus, requirements, and investment overview today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/franchise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-colors shadow-lg"
            >
              <span>Explore Franchise Details</span>
              <ArrowRight className="w-4 h-4 text-amber-950" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
