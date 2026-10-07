import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export default function ConnectCTA() {
  return (
    <section className="bg-white py-4 sm:py-6 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#FFFBF2] via-[#FFF3DD] to-[#FFFBF2] border border-amber-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          
          {/* Left: Heading & Supporting Text */}
          <div className="space-y-1 sm:max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-[#5A2E1B] text-xs font-extrabold uppercase tracking-wider mb-1 border border-amber-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Connect With Us</span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#5A2E1B] tracking-tight">
              Have questions? We'd love to hear from you!
            </h3>
            <p className="text-xs sm:text-sm text-[#5A2E1B]/75 font-medium leading-relaxed">
              Inquire about admissions, book a campus tour, or speak with our friendly team.
            </p>
          </div>

          {/* Right: Shaking / Animated CONNECT US Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Link
              to="/contact"
              className="animate-wiggle-subtle w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-black tracking-wide text-white bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer select-none"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span>CONNECT US</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
