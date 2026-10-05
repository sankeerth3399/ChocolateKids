import { 
  Heart, 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Layout, 
  Puzzle, 
  Sparkles, 
  GraduationCap, 
  Megaphone, 
  ArrowRight,
  Info
} from "lucide-react";
import { whoCanPartner, franchiseSpecs, franchiseInvestmentAreas } from "../data";
import { BrandBadge, highlightBrand } from "../utils/brandHelper";

export default function FranchiseRequirements({ onOpenForm }) {
  const iconMap = {
    Heart,
    Briefcase,
    MapPin,
    ShieldCheck,
    Users,
    Layout,
    Puzzle,
    Sparkles,
    GraduationCap,
    Megaphone,
  };

  const handleScrollToForm = (e) => {
    if (onOpenForm) {
      onOpenForm();
      return;
    }
    const formElem = document.getElementById("franchise-form") || document.getElementById("enquiry");
    if (formElem) {
      e.preventDefault();
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="requirements" className="space-y-20 py-16">
      
      {/* SECTION 6: IS CHOCOLATE KIDS FRANCHISE RIGHT FOR YOU? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
            <span>Partner Profile</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Is</span> <BrandBadge className="text-[0.72em]" /> <span>Franchise Right For You?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            We partner with individuals and families who care deeply about children’s safety, character development, and academic joy in their neighborhoods.
          </p>
        </div>

        {/* 5 Partner Qualification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whoCanPartner.map((item) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {highlightBrand(item.desc)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Quick Specifications Card (Editable Data Fields) */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-amber-900">
                <Info className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  Campus Parameters (Editable)
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex flex-col">
                  <span className="font-bold text-stone-900">Minimum Space Required:</span>
                  <span className="text-stone-600">{franchiseSpecs.minSpace}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-stone-900">Investment Range:</span>
                  <span className="text-stone-600">{franchiseSpecs.investment}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-stone-900">Location Requirement:</span>
                  <span className="text-stone-600">{franchiseSpecs.location}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-stone-900">Franchise Fee:</span>
                  <span className="text-stone-600">{franchiseSpecs.franchiseFee}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-stone-900">Expected Setup Timeline:</span>
                  <span className="text-stone-600">{franchiseSpecs.timeline}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FRANCHISE INVESTMENT SECTION - YOUR OPPORTUNITY TO BUILD FOR THE FUTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl relative z-10 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Investment Evaluation</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Your Opportunity to Build for the Future
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              We believe in honest, transparent preschool business planning. We do not provide speculative ROI promises or unsupported revenue claims. Instead, we assist prospective partners in rigorously budgeting and evaluating the core building blocks of a high-quality preschool:
            </p>
          </div>

          {/* Investment Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-12">
            {franchiseInvestmentAreas.map((area) => {
              const Icon = iconMap[area.icon] || Layout;
              return (
                <div
                  key={area.title}
                  className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal">
                      {highlightBrand(area.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Ready to review a detailed investment prospectus?
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Our franchise coordinators will walk you through site-specific cost estimates.
              </p>
            </div>

            <a
              href="#franchise-form"
              onClick={handleScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-colors shadow-lg cursor-pointer"
            >
              <span>Request Franchise Details</span>
              <ArrowRight className="w-4 h-4 text-amber-950" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
