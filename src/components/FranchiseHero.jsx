import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, MessageCircle, Phone, ArrowDown } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function FranchiseHero({ onScrollToSection }) {
  const franchiseMsg = "Hello Chocolate Kids, I am interested in the Chocolate Kids franchise opportunity. Please share the details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`;

  // Subtle parallax for desktop
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 80]);

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="franchise-hero"
      className="relative min-h-[580px] sm:min-h-[740px] lg:min-h-[820px] xl:min-h-[860px] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20"
      style={{
        backgroundColor: "#FAF4EB",
      }}
    >
      {/* ==================================================
          1. STORYBOOK SCHOOL GARDEN BACKGROUND LAYER
          - Full coverage from top to bottom
          - Covers entire hero without white/cream bars
          - Subtle desktop parallax, static on mobile
          - Responsive background position for mobile/tablet/desktop
         ================================================== */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat pointer-events-none -z-0 bg-[center_22%] md:bg-[center_32%]"
        style={{
          backgroundImage: `url("/images/storybook-school-garden.png"), url("/images/Welcome to Our Storybook School Garden(1).png")`,
          y: bgY,
        }}
        aria-hidden="true"
      />

      {/* ==================================================
          2. SOFT TRANSLUCENT READABILITY GLOW
          - Concentrated behind central text area
          - Does NOT darken the background
          - Preserves warm sunlight, green trees, colorful school
          - 10% - 25% opacity feathering
         ================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(255, 253, 248, 0.88) 0%, rgba(255, 250, 242, 0.65) 45%, rgba(255, 255, 255, 0.12) 85%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle top header gradient protection */}
      <div 
        className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FFFDF9]/60 via-[#FFFDF9]/20 to-transparent pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      {/* ==================================================
          3. FOREGROUND FRANCHISE CONTENT
          - Directly over image (no opaque white card)
          - Centered in the visually clean upper-middle area
          - High contrast, crisp typography
         ================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-50/95 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 border border-amber-300/90 shadow-sm backdrop-blur-xs">
              <Briefcase className="w-3.5 h-3.5 text-amber-800" />
              <span>Official Franchise Opportunity</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.14] drop-shadow-xs"
          >
            Franchise Opportunity
          </motion.h1>

          {/* Subtitle with Chocolate Kids Brand Badge */}
          <motion.h2 
            variants={itemVariants}
            className="mt-2.5 font-heading font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#FF5B89] tracking-tight flex items-center justify-center gap-2 flex-wrap drop-shadow-xs"
          >
            <span>Join the</span> <BrandBadge className="text-[0.78em]" /> <span>Family</span>
          </motion.h2>

          {/* Supporting Franchise Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-stone-800 leading-relaxed font-semibold max-w-2xl mx-auto drop-shadow-xs"
          >
            Be a part of a trusted brand in early childhood education and help build brighter futures, one child at a time.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            {/* Primary CTA: Enquire */}
            <button
              type="button"
              onClick={() => handleScroll("enquiry-form")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[46px] rounded-full text-xs sm:text-sm md:text-base font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/40 cursor-pointer flex items-center justify-center gap-2 text-center"
            >
              <span>ENQUIRE ABOUT FRANCHISE</span>
              <ArrowDown className="w-4 h-4 text-amber-200" />
            </button>

            {/* Secondary CTA: WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-7 py-3.5 sm:py-4 min-h-[46px] rounded-full text-xs sm:text-sm md:text-base font-bold text-emerald-950 bg-white/95 hover:bg-emerald-50 border border-emerald-400 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 backdrop-blur-xs transform hover:-translate-y-0.5 text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP US</span>
            </a>

            {/* Helpline CTA: Call */}
            <a
              href={`tel:${schoolInfo.phone}`}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 min-h-[46px] rounded-full text-xs sm:text-sm font-bold text-stone-800 bg-white/95 hover:bg-stone-50 border border-stone-300 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 backdrop-blur-xs transform hover:-translate-y-0.5 text-center"
            >
              <Phone className="w-3.5 h-3.5 text-stone-600" />
              <span>Call: {schoolInfo.phone}</span>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
