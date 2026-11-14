import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";
import BrandWatermark from "./BrandWatermark";

const ease = [0.22, 1, 0.36, 1];

export default function FranchiseHero({ onScrollToSection }) {
  const franchiseMsg = "Hello Chocolate Kids, I am interested in the Chocolate Kids franchise opportunity. Please share the details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`;

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const chips = ["Trusted Brand", "Proven Curriculum", "Complete Support", "Low to Moderate Investment"];

  return (
    <section
      id="franchise-hero"
      className="relative isolate overflow-hidden flex items-center justify-center pt-32 sm:pt-40 pb-24 sm:pb-32 bg-gradient-to-br from-[#111827] via-[#17243A] to-[#5E152E]"
    >
      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#D6B56D]/15 blur-3xl -z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 right-0 w-[36rem] h-[36rem] rounded-full bg-[#801D3A]/40 blur-3xl -z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.07] -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(214,181,109,1) 1px, transparent 1px), linear-gradient(90deg, rgba(214,181,109,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <BrandWatermark position="center" size="xl" opacity={0.05} className="filter invert" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#D6B56D]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#D6B56D]">
              Partner With Us
            </span>
            <span className="h-px w-8 bg-[#D6B56D]" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-[clamp(2.4rem,6vw,4.6rem)] text-white leading-[1.08]"
          >
            Franchise <span className="italic font-medium text-[#D6B56D]">Opportunity</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-heading font-medium text-xl sm:text-3xl text-white/95 flex items-center justify-center gap-x-2.5 gap-y-1 flex-wrap"
          >
            <span>Join the</span> <BrandBadge className="text-[0.78em]" /> <span>Family</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Be a part of a trusted brand in early childhood education and help build brighter futures, one child at a time.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="px-3.5 py-1.5 rounded-full border border-[#D6B56D]/40 text-[11px] sm:text-xs font-medium tracking-wide text-[#E0C98A]"
              >
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <button
              type="button"
              onClick={() => handleScroll("enquiry-form")}
              className="px-8 py-3.5 min-h-[46px] rounded-md text-sm font-semibold tracking-wide text-[#111827] bg-[#D6B56D] hover:bg-[#E0C98A] shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Enquire About Franchise</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 min-h-[46px] rounded-md text-sm font-semibold tracking-wide text-white border border-[#D6B56D]/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#D6B56D]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${schoolInfo.phone}`}
              className="px-7 py-3.5 min-h-[46px] rounded-md text-sm font-semibold tracking-wide text-white hover:text-[#D6B56D] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D6B56D]" />
              <span>{schoolInfo.phone}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-14 text-[#FAF8F3]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,50 C360,10 720,70 1080,30 C1260,12 1380,40 1440,36 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
