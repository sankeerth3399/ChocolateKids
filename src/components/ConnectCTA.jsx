import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function ConnectCTA() {
  return (
    <section className="bg-[#FFF9F0] py-8 sm:py-10 border-t border-amber-200/60 relative z-10 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-amber-200/80 shadow-xs flex flex-col items-center justify-center gap-3">
          
          {/* Subtle Shaking / Animated CONNECT US Action Button */}
          <Link
            to="/contact"
            className="animate-wiggle-subtle inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-black tracking-wide text-white bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer select-none"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
            <span>CONNECT US</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" />
          </Link>

          {/* Small Supporting Text */}
          <p className="text-xs sm:text-sm font-bold text-[#5A2E1B]/80 leading-relaxed">
            Have questions? We'd love to hear from you!
          </p>

        </div>
      </div>
    </section>
  );
}
