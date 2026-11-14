import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Check, ArrowRight, Smile, Star, Heart, Compass, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { highlightBrand } from "../utils/brandHelper";

export default function LearningPrograms({ showShowcase = true, showSafetyLine = true }) {
  const [activeStageId, setActiveStageId] = useState("playgroup");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    locality: "Dammaiguda Campus",
    grade: "PP2 (Senior KG / UKG)",
  });

  const allStages = [
    {
      id: "playgroup",
      name: "Playgroup",
      dotColor: "bg-[#801D3A]",
      borderActive: "border-[#801D3A]",
      bgActive: "bg-[#F6DEE3]",
      textActive: "text-[#D81B60]",
      badgeBg: "bg-[#801D3A]",
      headline: "Playgroup",
      description: "A gentle, joyful transition from home to preschool centered on sensory exploration, social warmth, and fun daily routines.",
      tags: ["Sensory Play", "Social Discovery", "Loving Care"],
      image: null,
      fallbackBg: "bg-gradient-to-br from-[#801D3A] via-[#F43F7E] to-[#FB923C]",
    },
    {
      id: "nursery",
      name: "Nursery",
      dotColor: "bg-[#2B4066]",
      borderActive: "border-[#2B4066]",
      bgActive: "bg-[#ECFDF5]",
      textActive: "text-[#059669]",
      badgeBg: "bg-[#2B4066]",
      headline: "Nursery",
      description: "Developing expressive speech, phonics curiosity, fine-motor coordination, and self-confidence through interactive story-telling.",
      tags: ["Phonics Fun", "Creative Arts", "Motor Skills"],
      image: "/images/blue-colour-day-celebration.jpg",
    },
    {
      id: "pp1",
      name: "PP1",
      dotColor: "bg-[#2B4066]",
      borderActive: "border-[#2B4066]",
      bgActive: "bg-[#F2F5FA]",
      textActive: "text-[#2B4066]",
      badgeBg: "bg-[#2B4066]",
      headline: "PP1",
      description: "Foundational literacy and numbers combined with hands-on science curiosity, creative expression, and teamwork.",
      tags: ["Early Reading", "Math Concepts", "Curiosity Lab"],
      image: "/photos/play_activity_corner.jpg",
    },
    {
      id: "pp2",
      name: "PP2",
      dotColor: "bg-[#3F5680]",
      borderActive: "border-[#3F5680]",
      bgActive: "bg-[#F5F3FF]",
      textActive: "text-[#7C3AED]",
      badgeBg: "bg-[#3F5680]",
      headline: "PP2",
      description: "School readiness through confidence building, phonics, and early mathematics.",
      tags: ["Structured Learning", "Play-Based", "Certified Teachers"],
      image: "/photos/kids_reading_corner.jpg",
    },
    {
      id: "daycare",
      name: "Day Care",
      dotColor: "bg-[#A83A59]",
      borderActive: "border-[#A83A59]",
      bgActive: "bg-[#FBF1F3]",
      textActive: "text-[#DB2777]",
      badgeBg: "bg-[#A83A59]",
      headline: "Day Care & After School",
      description: "A secure, loving after-school sanctuary with hygienic rest spaces, homework mentoring, and creative recreational play.",
      tags: ["Hygienic Rest", "Homework Support", "Evening Activities"],
      image: "/images/cow-shelter-banner-group.jpg",
    },
  ];

  const stages = allStages;

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    // Send formatted WhatsApp message
    const msg = `*New Admission Enquiry (Programs Page)*%0A%0A*Parent Name:* ${encodeURIComponent(formData.parentName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || "N/A")}%0A*Campus:* ${encodeURIComponent(formData.locality)}%0A*Selected Program:* ${encodeURIComponent(formData.grade)}`;
    window.open(`https://wa.me/919515869889?text=${msg}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div id="academics" className="w-full">
      {/* =========================================================================
          PART 2: INTERACTIVE STAGE EXPLORER - From Playgroup to UKG
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F3] relative overflow-hidden">
        {/* Subtle Watermark */}
        <BrandWatermark position="center" size="xl" opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#801D3A] text-xs font-bold mb-3 shadow-2xs">
              <span>📕</span>
              <span>Our Programs</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl tracking-tight">
              <span className="text-[#801D3A]">From Playgroup </span>
              <span className="text-[#2B4066]">to UKG</span>
            </h2>

            <p className="mt-3 text-stone-600 text-sm sm:text-base font-semibold">
              Tap any program to explore it.
            </p>
          </div>

          {!showShowcase ? (
            /* Compact program cards (no photo showcase): evenly centred rows */
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {stages.map((stage, i) => (
                <div
                  key={stage.id}
                  className={`group relative overflow-hidden flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-3xl bg-gradient-to-br ${stage.bgActive} to-white border-2 ${stage.borderActive} shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7`}
                >
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${stage.dotColor}`} aria-hidden="true" />
                  <span className={`absolute -right-3 -top-4 font-heading font-black text-7xl sm:text-8xl ${stage.textActive} opacity-10 select-none leading-none`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex items-center gap-3 mb-3">
                    <span className={`w-10 h-10 rounded-2xl ${stage.dotColor} text-white font-heading font-black text-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`font-heading font-black text-xl sm:text-2xl ${stage.textActive}`}>{stage.name}</h3>
                  </div>
                  <p className="relative text-sm sm:text-base text-stone-600 leading-relaxed mb-5">{highlightBrand(stage.description)}</p>
                  <div className="relative mt-auto flex flex-wrap gap-2">
                    {stage.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold bg-white shadow-xs border ${stage.borderActive} ${stage.textActive}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Stage Selector Tabs (5 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 justify-center">
              {stages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? `border-2 ${stage.borderActive} ${stage.bgActive} shadow-sm scale-[1.02]`
                        : "bg-white border border-stone-200/90 hover:border-stone-300 hover:bg-stone-50/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${stage.dotColor} shrink-0`} />
                      <div className="flex flex-col">
                        <span className={`font-heading font-black text-base sm:text-lg ${
                          isActive ? stage.textActive : "text-stone-800"
                        }`}>
                          {stage.name}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 shadow-2xs">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Giant Rounded Stage Card (8 cols) */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl min-h-[360px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-end p-4 sm:p-10 lg:p-12 border border-stone-200/80 group">
                {/* Stage Photo with smooth transition (gradient fallback when no photo) */}
                {currentStage.image ? (
                  <img
                    key={currentStage.id}
                    src={currentStage.image}
                    alt={`${currentStage.name} at Chocolate Kids Preschool`}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 animate-in fade-in duration-300"
                  />
                ) : (
                  <div
                    key={currentStage.id}
                    className={`absolute inset-0 ${currentStage.fallbackBg}`}
                    aria-hidden="true"
                  />
                )}

                {/* Dark Gradient Overlay for High Contrast Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />

                {/* Card Content */}
                <div className="relative z-10 text-white max-w-xl">

                  {/* Stage Headline */}
                  <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-2 sm:mb-3">
                    {currentStage.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {highlightBrand(currentStage.description)}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {currentStage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-md border border-white/20 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Action Button inside card */}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, grade: currentStage.headline }));
                      const formSection = document.getElementById("program-enquire-form");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "auto" });
                      } else {
                        window.dispatchEvent(new CustomEvent("open-admission-modal"));
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-extrabold text-white bg-[#17243A] hover:bg-[#0B1220] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>Enquire for {currentStage.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          PART 3: EXPLORE ALL PROGRAMS STRIP & ADMISSIONS FORM (Screenshot 3)
          ========================================================================= */}
      <section id="program-enquire-form" className="py-20 bg-gradient-to-b from-white to-[#FAF8F3] relative overflow-hidden border-t border-stone-200/60">
        {/* Top Centered Pill Button with Doodle Banner Background */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative">
          {/* Whimsical Doodle SVG Band in Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none -translate-y-3">
            <svg viewBox="0 0 600 80" className="w-full max-w-lg h-16 stroke-current text-amber-500 fill-none" strokeWidth="1.5">
              <path d="M10,40 Q50,10 90,40 T170,40 T250,40 T330,40 T410,40 T490,40 T570,40" strokeDasharray="4 4" />
              <rect x="40" y="20" width="30" height="35" rx="4" />
              <circle cx="120" cy="40" r="14" />
              <polygon points="500,20 525,50 475,50" />
            </svg>
          </div>

          <Link
            to="/admissions"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-extrabold text-white bg-[#17243A] hover:bg-[#0F172A] shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore All Programs</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        {/* 2-Column Admissions Open Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & Assurance Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold">
                <span className="w-2 h-2 rounded-full bg-[#17243A] animate-pulse" />
                <span>Admissions Open</span>
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#17243A] tracking-tight leading-tight">
                Ready to Enroll Your Child?
              </h2>

              {/* Subtitle */}
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-medium">
                Fill in the form and our admissions team will guide you through programs, campus options, and enrollment. We typically respond within 2 hours.
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-stone-700 text-sm font-bold">
                    Campuses in Dammaiguda, Kapra & Yapral
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-stone-700 text-sm font-bold">
                    Admissions Helpline: <strong className="text-stone-900">+91 95158 69889</strong>
                  </span>
                </div>

                {showSafetyLine && (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-stone-700 text-sm font-bold">
                    100% CCTV Monitored & Child-First Safety Protocols
                  </span>
                </div>
                )}
              </div>
            </div>

            {/* Right Column: Neo-Brutalist Enquire Now Form Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-[#FFFDF5] border-2 border-[#17243A] shadow-[4px_6px_0px_#17243A] sm:shadow-[6px_8px_0px_#17243A] rounded-3xl p-4 sm:p-8 relative">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#17243A] mb-2">
                  Enquire Now
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-medium mb-6">
                  Get personalized fees, curriculum details & campus visit slot.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#17243A] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-lg text-emerald-950">
                      Enquiry Received Joyfully!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Our admissions counselor is connecting with you on WhatsApp and phone shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#17243A] underline pt-2"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#17243A] focus:border-transparent font-medium"
                      />
                    </div>

                    {/* Phone Number & Email (2 cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-stone-300 bg-stone-100 text-stone-700 text-xs font-extrabold">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            placeholder="9876543210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-r-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#17243A] focus:border-transparent font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="you@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#17243A] focus:border-transparent font-medium"
                        />
                      </div>
                    </div>

                    {/* Locality & Grade (2 cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                          Locality *
                        </label>
                        <select
                          value={formData.locality}
                          onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#17243A] focus:border-transparent font-medium"
                        >
                          <option value="Dammaiguda Campus">Dammaiguda Campus</option>
                          <option value="Kapra / Yellareddyguda Campus">Kapra / Yellareddyguda Campus</option>
                          <option value="Yapral Campus">Yapral Campus</option>
                          <option value="Other Area in Hyderabad">Other Area in Hyderabad</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                          Grade *
                        </label>
                        <select
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#17243A] focus:border-transparent font-medium"
                        >
                          <option value="Playgroup">Playgroup</option>
                          <option value="Nursery">Nursery</option>
                          <option value="PP1">PP1 / LKG</option>
                          <option value="PP2">PP2 / UKG</option>
                          <option value="Day Care">Day Care</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base text-white bg-[#801D3A] hover:bg-[#5E152E] border-2 border-[#17243A] shadow-[3px_4px_0px_#17243A] hover:shadow-[1px_2px_0px_#17243A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
