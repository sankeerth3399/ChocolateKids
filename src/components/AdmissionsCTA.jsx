import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandWatermark from "./BrandWatermark";
import { BrandName } from "./BrandName";
import ConnectCTA from "./ConnectCTA";

export default function AdmissionsCTA({ showQuickInquiry, showConnect = false }) {
  const location = useLocation();
  const shouldShowQuickInquiry =
    showQuickInquiry !== undefined ? showQuickInquiry : location.pathname !== "/";

  return (
    <section className="py-20 sm:py-24 bg-[#FFFDF8] border-y border-[#E8DCC9] relative overflow-hidden">
      <BrandWatermark position="center" size="lg" opacity={0.06} />

      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFBD16]/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#FFBD16]/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#FFBD16]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.26em] text-[#C51F45] text-center">
              Admissions Open 2026-27 · Play Group to UKG
            </span>
            <span className="h-px w-8 bg-[#FFBD16]" />
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#142B4A] leading-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Let Their Adventure Begin at</span> <BrandName variant="badge" className="text-[0.72em]" />
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#536174] leading-relaxed">
            Give your child a joyful environment to learn, explore, create and grow.
          </p>

          <div
            className={`mt-9 sm:mt-10 flex items-center justify-center ${
              shouldShowQuickInquiry ? "flex-col sm:flex-row gap-4" : ""
            }`}
          >
            <Link
              to="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 min-h-[46px] rounded-full text-sm sm:text-base font-bold text-[#142B4A] bg-[#FFBD16] hover:bg-[#FFCB45] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {shouldShowQuickInquiry && (
              <a
                href="#admissions"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("admissions");
                  if (target) {
                    target.scrollIntoView({ behavior: "auto", block: "start" });
                  } else {
                    window.dispatchEvent(new CustomEvent("open-admission-modal"));
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 min-h-[46px] rounded-full text-sm sm:text-base font-bold text-[#174EA6] bg-white border-2 border-[#174EA6] hover:bg-[#174EA6] hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Quick Inquiry Form</span>
              </a>
            )}
          </div>

          <p className="mt-7 text-xs sm:text-sm text-[#536174]">
            Personal campus tours available Monday to Saturday at Dammaiguda, Kapra, and Yapral branches.
          </p>

          {showConnect && (
            <div className="mt-8 sm:mt-10 flex justify-center">
              <ConnectCTA />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
