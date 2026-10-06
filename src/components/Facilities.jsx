import React, { useState } from "react";
import { Sparkles, ShieldCheck, Palette, HeartHandshake, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { facilitiesData } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function Facilities() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Whimsical curved dotted pastel paths in the background (similar to reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-60"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pastel Pink dotted trail */}
          <path
            d="M-50 420 C 200 480, 250 240, 500 280 C 750 320, 850 180, 1100 210 C 1280 230, 1400 360, 1500 380"
            stroke="#F472B6"
            strokeWidth="2.5"
            strokeDasharray="8 8"
          />
          {/* Pastel Blue dotted trail */}
          <path
            d="M-40 280 C 180 220, 360 440, 680 390 C 950 350, 1150 480, 1480 340"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeDasharray="8 8"
          />
          {/* Pastel Purple dotted trail */}
          <path
            d="M100 120 C 350 160, 550 90, 800 140 C 1050 190, 1250 110, 1480 180"
            stroke="#C084FC"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          {/* Pastel Yellow / Gold dotted trail leading from rocket */}
          <path
            d="M1380 70 C 1220 120, 1050 90, 880 150 C 700 220, 480 300, 200 330"
            stroke="#FDE047"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Playful Floating Decorative Dots */}
          <circle cx="280" cy="460" r="4.5" fill="#F472B6" />
          <circle cx="720" cy="110" r="4.5" fill="#38BDF8" />
          <circle cx="1020" cy="430" r="4" fill="#A855F7" />
          <circle cx="1290" cy="220" r="5" fill="#FBBF24" />
          <circle cx="450" cy="210" r="3.5" fill="#34D399" />
        </svg>

        {/* Floating Rocket Icon on Top Right (exact match to screenshot) */}
        <div className="absolute top-8 sm:top-10 right-6 sm:right-16 lg:right-28 animate-pulse pointer-events-none">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 transform rotate-12 drop-shadow-md"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Rocket Exhaust Flame */}
            <path
              d="M18 46 L10 54 C13 51, 15 50, 18 51 C19 48, 20 46, 21 43 Z"
              fill="#F97316"
            />
            <path
              d="M16 48 L12 52 C14 50, 15 50, 17 50 Z"
              fill="#FACC15"
            />
            {/* Rocket Body */}
            <path
              d="M48 16 C38 12, 27 21, 23 27 L37 41 C43 37, 52 26, 48 16 Z"
              fill="#E2E8F0"
              stroke="#94A3B8"
              strokeWidth="2"
            />
            {/* Nose Cone */}
            <path
              d="M48 16 C45 13, 40 14, 38 16 L48 26 C50 24, 51 19, 48 16 Z"
              fill="#FB7185"
            />
            {/* Porthole Window */}
            <circle cx="36" cy="28" r="4.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="37" cy="27" r="1.5" fill="#FFFFFF" />
            {/* Left Fin */}
            <path
              d="M23 27 L15 28 C16 34, 21 37, 24 37 L23 27 Z"
              fill="#F43F5E"
            />
            {/* Right Fin */}
            <path
              d="M37 41 L36 49 C42 48, 45 43, 45 40 L37 41 Z"
              fill="#F43F5E"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-purple-200/90 bg-[#FBF7FE] text-[#9333EA] text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-2xs">
            <span>Campus Amenities</span>
          </div>

          {/* Heading: What We Offer */}
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[#FF5B89]">Facilities at</span> <BrandBadge className="text-[0.72em]" />
          </h2>
        </div>

        {/* The 4 Geometric Shape Cards (Exact match to reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* 1. SMART CLASSROOMS - Tilted Dashed Pink Rectangle */}
          <div className="flex flex-col items-center group">
            {/* Tilted frame */}
            <div className="w-full max-w-[270px] sm:max-w-none transform -rotate-[5deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="p-2 sm:p-2.5 bg-white rounded-2xl border-[3.5px] border-dashed border-[#F472B6] shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/structured_learning_hero.jpg"
                    alt="Smart Classrooms"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Label and description */}
            <div className="mt-6 text-center max-w-[260px]">
              <h3 className="font-heading font-black text-slate-800 text-lg sm:text-xl">
                Smart Classrooms
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Interactive boards, digital tools, and modern learning aids that foster active engagement.
              </p>
            </div>
          </div>

          {/* 2. LIBRARY & READING CORNER - Dashed Purple Circle */}
          <div className="flex flex-col items-center group">
            {/* Circular frame */}
            <div className="w-[230px] sm:w-[240px] aspect-square rounded-full p-2 sm:p-2.5 bg-white border-[3.5px] border-dashed border-[#A855F7] shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                <img
                  src="/photos/kids_reading_corner.jpg"
                  alt="Library & Reading Corner"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Label and description */}
            <div className="mt-6 text-center max-w-[260px]">
              <h3 className="font-heading font-black text-slate-800 text-lg sm:text-xl">
                Library & Reading Corner
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                A calm, curated space full of books, stories, and imagination — cultivating a lifelong love for reading.
              </p>
            </div>
          </div>

          {/* 3. SPORTS & PLAY AREA - Tilted Dashed Cyan/Blue Rectangle */}
          <div className="flex flex-col items-center group">
            {/* Tilted frame */}
            <div className="w-full max-w-[270px] sm:max-w-none transform -rotate-[4deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="p-2 sm:p-2.5 bg-white rounded-2xl border-[3.5px] border-dashed border-[#38BDF8] shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/photos/sports_parade.jpg"
                    alt="Sports & Play Area"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Label and description */}
            <div className="mt-6 text-center max-w-[260px]">
              <h3 className="font-heading font-black text-slate-800 text-lg sm:text-xl">
                Sports & Play Area
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Safe, spacious outdoor zones designed for joyful movement, gross motor play, and team coordination.
              </p>
            </div>
          </div>

          {/* 4. TRANSPORT FACILITY - Dashed Green Triangle */}
          <div className="flex flex-col items-center group">
            {/* Triangle frame with SVG clip and dashed stroke */}
            <div className="w-full max-w-[250px] sm:max-w-[260px] aspect-[4/3.8] group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 280 260" className="w-full h-full overflow-visible drop-shadow-sm group-hover:drop-shadow-md transition-all">
                <defs>
                  <clipPath id="triangle-photo-clip">
                    <polygon points="140,24 22,244 258,244" />
                  </clipPath>
                </defs>
                {/* White frame base */}
                <polygon points="140,14 12,254 268,254" fill="#ffffff" />
                {/* School bus / van image */}
                <image
                  href="/images/school-van-safety-care.jpg"
                  x="16"
                  y="16"
                  width="248"
                  height="234"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#triangle-photo-clip)"
                />
                {/* Dashed green triangle stroke */}
                <polygon
                  points="140,8 6,260 274,260"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="3.5"
                  strokeDasharray="9 7"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Label and description */}
            <div className="mt-6 text-center max-w-[260px]">
              <h3 className="font-heading font-black text-slate-800 text-lg sm:text-xl">
                Transport Facility
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Reliable, GPS-tracked buses with trained female attendants ensuring a safe, comfortable daily journey.
              </p>
            </div>
          </div>

        </div>

        {/* Optional Expandable Button to View Full Campus Facilities */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-colors shadow-2xs cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "Explore All Campus Facilities & Safety Standards"}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
        </div>

        {/* Expanded 6 Facilities Detailed Grid */}
        {showAll && (
          <div className="mt-12 pt-10 border-t border-slate-100 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Complete Campus Infrastructure & Hygiene
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Designed specifically for toddlers and kindergarteners across our Dammaiguda, Kapra and Yapral centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilitiesData.map((fac) => (
                <div
                  key={fac.id}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold border border-emerald-100">
                      ✓
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                        {fac.badge}
                      </span>
                      <h4 className="font-heading font-bold text-slate-900 text-base leading-snug">
                        {fac.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {fac.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>Dammaiguda, Kapra & Yapral</span>
                    <span className="text-emerald-600 font-bold">100% Supervised</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
