import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  MapPin, 
  Heart, 
  Check, 
  CheckCircle2, 
  Package, 
  Layers, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  ArrowDown
} from "lucide-react";
import { 
  schoolInfo, 
  whyFranchiseWithUs, 
  franchiseKitIncludes, 
  franchiseAlsoIncludes 
} from "../data";
import BrandWatermark from "./BrandWatermark";

export default function FranchiseOpportunityWidget({ onScrollToSection }) {
  const franchiseWaMsg = "Hello Chocolate Kids, I am interested in the Chocolate Kids franchise opportunity. Please share the details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseWaMsg)}`;

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const iconMap = {
    GraduationCap,
    Lightbulb,
    Users,
    TrendingUp,
    MapPin,
    Heart,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section 
      id="franchise-opportunity-widget" 
      className="py-14 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#FFFDF9] relative overflow-hidden"
    >
      {/* Ambient Backlight Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-200/30 via-rose-100/30 to-orange-200/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            ONE LARGE UNIFIED FRANCHISE OPPORTUNITY BANNER / WIDGET
           ================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border-2 sm:border-4 border-amber-200/90 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* Subtle Centered Logo Watermark */}
          <BrandWatermark position="center" size="xl" opacity={0.07} />

          {/* ==================================================
              1. TOP HEADER SECTION
              - Official Logo
              - "FRANCHISE OPPORTUNITY" Banner Headline
              - "Join the Chocolate Kids Family"
              - "Play • Learn • Grow" Philosophy
             ================================================== */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Chocolate Kids Logo */}
            <motion.div variants={itemVariants} className="flex justify-center mb-3">
              <img 
                src="/logo.png" 
                alt="Chocolate Kids Innovative Learning" 
                className="h-14 sm:h-20 object-contain drop-shadow-xs"
              />
            </motion.div>

            {/* Franchise Opportunity Headline Pill */}
            <motion.div variants={itemVariants} className="mb-2">
              <div className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white font-heading font-black text-2xl sm:text-3xl lg:text-4xl shadow-lg uppercase tracking-tight transform -rotate-1 border border-red-400/50">
                Franchise Opportunity
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.h3 
              variants={itemVariants}
              className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-stone-900 mt-2"
            >
              Join the <span className="text-[#FF5B89]">Chocolate Kids</span> Family
            </motion.h3>

            <motion.p 
              variants={itemVariants}
              className="text-xs sm:text-sm lg:text-base text-stone-600 font-medium max-w-xl mx-auto mt-1"
            >
              Be a part of a trusted brand in early childhood education!
            </motion.p>

            {/* Philosophy Banner Pill */}
            <motion.div 
              variants={itemVariants}
              className="mt-5 inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-amber-50 border border-amber-200 text-amber-950 font-bold text-xs sm:text-sm shadow-2xs"
            >
              <div className="flex items-center gap-1.5 text-amber-800 font-black tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Play • Learn • Grow</span>
              </div>
              <span className="hidden sm:inline text-amber-300">•</span>
              <span className="text-stone-700 font-semibold">
                Building brighter futures, one child at a time!
              </span>
            </motion.div>

          </div>

          {/* ==================================================
              SUBTLE INTERNAL DIVIDER 1
             ================================================== */}
          <div className="relative z-10 border-t border-amber-200/80 my-8 sm:my-10" />

          {/* ==================================================
              2. WHY FRANCHISE WITH US?
              - 6 Interactive Benefit Tiles
             ================================================== */}
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2 border border-amber-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-800" />
                <span>Why Franchise With Us?</span>
              </div>
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Institutional Advantages for Partner Success
              </h4>
            </div>

            {/* 6 Interactive Tiles (3 columns on desktop, 2 on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {whyFranchiseWithUs.map((card) => {
                const IconComponent = iconMap[card.icon] || Sparkles;
                return (
                  <motion.div
                    key={card.title}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4, 
                      boxShadow: "0 14px 20px -4px rgba(0, 0, 0, 0.07)" 
                    }}
                    className="p-5 rounded-2xl bg-stone-50/70 hover:bg-white border border-stone-200/90 hover:border-amber-300 shadow-2xs transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-black text-amber-700 bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-200">
                          {card.num}
                        </span>
                        <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h5 className="font-heading font-black text-base sm:text-lg text-stone-900 mb-1.5 group-hover:text-amber-900 transition-colors">
                        {card.title}
                      </h5>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        "{card.desc}"
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-amber-800">
                      <span>Franchise Benefit</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ==================================================
              SUBTLE INTERNAL DIVIDER 2
             ================================================== */}
          <div className="relative z-10 border-t border-amber-200/80 my-8 sm:my-10" />

          {/* ==================================================
              3. FRANCHISE KIT INCLUDES & ALSO INCLUDES
              - Side-by-side 2-column layout inside the unified widget
              - 8 Kit offerings + 10 Additional offerings
             ================================================== */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Subsection: Franchise Kit Includes (8 items) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xl text-stone-900">
                        Franchise Kit Includes
                      </h4>
                      <p className="text-xs text-stone-500 font-medium">
                        8 core institutional deliverables
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-black text-[11px] uppercase tracking-wider">
                    Core Kit
                  </span>
                </div>

                {/* 8 Items - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {franchiseKitIncludes.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-white border border-emerald-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-stone-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-200/60 text-xs font-semibold text-emerald-900 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Standardized turnkey learning & operations kit</span>
              </div>
            </div>

            {/* Right Subsection: Also Includes (10 items) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-rose-50/50 border border-rose-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-[#FF5B89] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4 text-[#FF5B89]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xl text-stone-900">
                        Also Includes
                      </h4>
                      <p className="text-xs text-stone-500 font-medium">
                        10 campus setup & staff development assets
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-black text-[11px] uppercase tracking-wider">
                    Extended
                  </span>
                </div>

                {/* 10 Items - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {franchiseAlsoIncludes.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-white border border-rose-200/90 shadow-2xs hover:border-rose-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-rose-100 text-[#FF5B89] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF5B89] group-hover:text-white transition-colors">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-stone-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-200/60 text-xs font-semibold text-rose-900 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#FF5B89] shrink-0" />
                <span>Complete support for your ongoing success!</span>
              </div>
            </div>

          </div>

          {/* ==================================================
              SUBTLE INTERNAL DIVIDER 3
             ================================================== */}
          <div className="relative z-10 border-t border-amber-200/80 my-8 sm:my-10" />

          {/* ==================================================
              4. SUPPORT MESSAGE CALLOUT BANNER
              - "Everything you need to start, succeed and grow!"
              - "Complete Support for Your Success!"
             ================================================== */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-5 sm:p-6 text-white text-center shadow-md">
            <h4 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Everything you need to start, succeed and grow!
            </h4>
            <p className="text-xs sm:text-sm text-amber-100 font-semibold mt-1">
              Complete Support for Your Success!
            </p>
          </div>

          {/* ==================================================
              5. CONTACT & CALL TO ACTION FOOTER BAR
              - "Be a Part of Our Growing Family!"
              - "Let's build a brighter future together."
              - Phone number 9515869889
              - CTA Buttons (Enquire & WhatsApp)
             ================================================== */}
          <div className="relative z-10 mt-6 pt-6 border-t border-stone-200/80 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            
            {/* Left: Message & Contact */}
            <div>
              <span className="text-xs font-black tracking-widest text-[#FF5B89] uppercase block mb-0.5">
                Join Chocolate Kids
              </span>
              <h4 className="font-heading font-black text-lg sm:text-xl text-stone-900">
                Be a Part of Our Growing Family!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Let's build a brighter future together.
              </p>
            </div>

            {/* Center: Official Contact Helpline */}
            <a
              href={`tel:${schoolInfo.phone}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-mono text-lg sm:text-xl font-black transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-700" />
              <span>{schoolInfo.phone}</span>
            </a>

            {/* Right: Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleScroll("enquiry-form")}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Enquire About Franchise</span>
                <ArrowDown className="w-3.5 h-3.5 text-amber-200" />
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
