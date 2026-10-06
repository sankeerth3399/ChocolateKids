import React from "react";
import { Phone, MapPin, ArrowRight, Navigation, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { branches, schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function Branches() {
  return (
    <section id="branches" className="py-16 sm:py-24 bg-[#FFFCF7] relative overflow-hidden">
      {/* Background Playful Road Ribbon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-80"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grey road ribbon base */}
          <path
            d="M-50 260 C 250 320, 480 180, 720 250 C 960 320, 1180 190, 1500 270"
            stroke="#E2E8F0"
            strokeWidth="32"
            strokeLinecap="round"
          />
          {/* White dashed centerline */}
          <path
            d="M-50 260 C 250 320, 480 180, 720 250 C 960 320, 1180 190, 1500 270"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="12 12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left max-w-3xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#FDA4AF] bg-[#FFF1F2] text-[#F43F5E] text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-2xs">
            Visit Our Branches
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight flex flex-wrap items-center gap-2.5">
            <span className="text-[#FF5B89]">Visit Our Branches</span> • <BrandBadge className="text-[0.72em]" />
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Explore our child-safe, vibrant preschool campuses across Hyderabad. Visit a campus near you to experience our joyful early education environment.
          </p>
        </div>

        {/* 3 Branches Grid: Desktop 3 cards / Tablet 2 cards / Mobile 1 card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full hover:-translate-y-1"
            >
              {/* Photo Header with Badge & Overlay */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${branch.slug === "yapral" ? "object-top" : "object-center"}`}
                  loading="lazy"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badge: Branch No & Campus */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500 text-white shadow-xs">
                    {branch.branchNo}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/90 text-slate-800 backdrop-blur-xs shadow-2xs">
                    {branch.badge}
                  </span>
                </div>

                {/* Campus Name at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest block mb-0.5">
                    CHOCOLATE KIDS
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white tracking-wide drop-shadow-sm leading-tight">
                    {branch.campusTitle}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location Icon & Branch Name Header */}
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/70">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#FF5B89]">
                        CHOCOLATE KIDS
                      </div>
                      <h4 className="font-heading font-black text-base sm:text-lg text-stone-900 leading-tight">
                        {branch.campusTitle}
                      </h4>
                    </div>
                  </div>

                  {/* Complete Exact Address */}
                  <div className="bg-[#FFFDF9] rounded-2xl p-3 sm:p-4 border border-amber-100/90 text-xs sm:text-sm text-stone-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    <p className="whitespace-pre-line font-medium text-stone-800">
                      {branch.displayAddress || branch.address}
                    </p>
                  </div>
                </div>

                {/* Action Buttons: Call, WhatsApp, Get Directions, View Campus */}
                <div className="pt-3 sm:pt-4 border-t border-stone-100 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Call button */}
                    <a
                      href="tel:9515869889"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2.5 sm:px-3 min-h-[40px] rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer text-center"
                      title={`Call ${branch.name}`}
                      aria-label={`Call ${branch.name}`}
                    >
                      <Phone className="w-4 h-4 text-stone-700" />
                      <span>Call</span>
                    </a>

                    {/* WhatsApp button */}
                    <a
                      href="https://wa.me/919515869889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                      title={`WhatsApp ${branch.name}`}
                      aria-label={`WhatsApp ${branch.name}`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Get Directions button */}
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-2xs transition-colors cursor-pointer"
                      title={`Get Directions to ${branch.name}`}
                      aria-label={`Get Directions to ${branch.name}`}
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>

                    {/* View Campus Link */}
                    <Link
                      to={`/branches/${branch.slug}`}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                    >
                      <span>View Campus</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Campus Finder Link */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/branches"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 min-h-[46px] rounded-full text-xs sm:text-sm font-extrabold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#FF5B89]" />
            <span>Explore All Campus Locations & Facilities</span>
            <ArrowRight className="w-4 h-4 text-stone-500" />
          </Link>
        </div>

      </div>
    </section>
  );
}
