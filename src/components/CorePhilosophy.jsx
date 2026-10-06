import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smile, BookCheck, Compass, CheckCircle2 } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

export default function CorePhilosophy() {
  return (
    <section 
      id="core-philosophy" 
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#FFFDF9] border-y border-amber-200/70 overflow-hidden"
    >
      {/* Subtle Ambient Backlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      
      {/* Centered Transparent Brand Logo Watermark (0.12 opacity) */}
      <BrandWatermark position="center" size="lg" opacity={0.12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 border border-amber-200 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Our Core Philosophy</span>
        </motion.div>

        {/* Main Philosophy Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight"
        >
          Play • Learn • Grow
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-lg sm:text-xl lg:text-2xl text-amber-800 font-bold max-w-2xl mx-auto font-heading"
        >
          Building brighter futures, one child at a time!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2 text-sm sm:text-base text-stone-600 max-w-xl mx-auto"
        >
          Our holistic early childhood pedagogy nurtures curiosity, joy, and lifelong confidence through experiential discovery.
        </motion.p>

        {/* 3 Visually Distinct Interactive Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 text-left">
          
          {/* Element 1: PLAY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-5 sm:p-8 rounded-3xl bg-white/95 border-2 border-rose-200 shadow-md hover:shadow-xl transition-all group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/60 rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-[#FF5B89] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Smile className="w-7 h-7" />
              </div>
              <span className="text-xs font-black tracking-widest text-[#FF5B89] uppercase block mb-1">
                Foundation 01
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 mb-3">
                PLAY
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Joyful play-based sensory activities, clay exploration, music, and outdoor games that turn every discovery into lived happiness and active curiosity.
              </p>
              <div className="mt-5 pt-4 border-t border-rose-100 flex items-center gap-2 text-xs font-bold text-[#FF5B89]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sensorial & Cognitive Joy</span>
              </div>
            </div>
          </motion.div>

          {/* Element 2: LEARN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-5 sm:p-8 rounded-3xl bg-white/95 border-2 border-amber-300 shadow-md hover:shadow-xl transition-all group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/60 rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-black tracking-widest text-amber-800 uppercase block mb-1">
                Foundation 02
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 mb-3">
                LEARN
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Structured, age-graded phonics, numbers, language milestones, and thematic learning modules taught by thoroughly trained, caring educators.
              </p>
              <div className="mt-5 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-amber-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Holistic & Proven Curriculum</span>
              </div>
            </div>
          </motion.div>

          {/* Element 3: GROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-5 sm:p-8 rounded-3xl bg-white/95 border-2 border-emerald-200 shadow-md hover:shadow-xl transition-all group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/60 rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-black tracking-widest text-emerald-800 uppercase block mb-1">
                Foundation 03
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 mb-3">
                GROW
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Developing emotional confidence, social harmony, ethical values, and school readiness so every child steps into the future bright and prepared.
              </p>
              <div className="mt-5 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Emotional & Social Readiness</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
