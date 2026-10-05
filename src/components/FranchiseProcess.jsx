import { FileText, PhoneCall, MapPin, CheckCircle2, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { franchiseSteps } from "../data";
import { highlightBrand } from "../utils/brandHelper";

export default function FranchiseProcess({ showCta = true, title = "Start Your Chocolate Kids Journey", subtitle = "A structured, transparent roadmap from initial inquiry to your school's festive opening day." }) {
  const iconMap = {
    FileText,
    PhoneCall,
    MapPin,
    CheckCircle2,
    GraduationCap,
    Rocket,
  };

  return (
    <section id="franchise-journey" className="py-20 bg-stone-50/70 relative overflow-hidden border-t border-amber-100/70">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
            <span>Step-by-Step Pathway</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            {typeof title === "string" ? highlightBrand(title) : title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Timeline Grid (6 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {franchiseSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <div
                key={step.step}
                className="relative p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                {/* Step Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-amber-600/30 group-hover:text-amber-600 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-600 text-amber-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Micro Step indicator footer */}
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-400">
                  <span>Phase 0{Math.floor(index / 2) + 1}</span>
                  <span className="text-amber-600">Step {step.step} of 06</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link if enabled */}
        {showCta && (
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 sm:px-6 rounded-3xl bg-amber-100/60 border border-amber-200">
              <span className="text-xs sm:text-sm font-bold text-stone-800">
                Ready to begin with Step 01? Submit your details in under 2 minutes:
              </span>
              <Link
                to="/franchise#enquiry"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-amber-800 hover:bg-amber-900 shadow-md transition-colors"
              >
                <span>Submit Your Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
