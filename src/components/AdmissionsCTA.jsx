import { ArrowRight, Compass, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolInfo } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandName } from "./BrandName";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 sm:py-24 bg-[#F59E0B] text-white relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="center" size="lg" opacity={0.10} />

      {/* Decorative Illustrated Soft Blobs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#5A2E1B]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Storybook Icons */}
      <div className="absolute top-10 left-12 opacity-30 hidden lg:block animate-float">
        <Sparkles className="w-10 h-10 text-white" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-30 hidden lg:block animate-float-delayed">
        <Heart className="w-10 h-10 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider mb-5 border border-white/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>ADMISSIONS OPEN 2026-27 • PLAY GROUP TO UKG</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span>Let Their Adventure Begin at</span> <BrandName variant="badge" className="text-[0.72em]" />
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-xl text-white/95 leading-relaxed font-semibold max-w-2xl mx-auto">
            Give your child a joyful environment to learn, explore, create and grow.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-[30px] text-base font-black text-[#5A2E1B] bg-white hover:bg-[#FFF9F0] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Admissions</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>

            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", "#admissions");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[30px] text-base font-bold text-white bg-black/15 hover:bg-black/25 border border-white/40 backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Quick Inquiry Form</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-amber-100/90 font-medium">
            Personal campus tours available Monday to Saturday at Dammaiguda, Kapra, and Yapral branches.
          </div>

        </div>
      </div>
    </section>
  );
}
