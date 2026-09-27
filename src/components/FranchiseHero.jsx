import { motion } from "framer-motion";
import { 
  Briefcase, 
  Sparkles, 
  Handshake, 
  BookOpen, 
  Building2, 
  Sprout, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown,
  Star
} from "lucide-react";
import { schoolInfo } from "../data";

export default function FranchiseHero({ onScrollToSection }) {
  const franchiseMsg = "Hello Chocolate Kids Team, I am interested in the franchise opportunity. Please share the franchise details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`;

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="franchise-hero"
      className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 pb-0 select-none"
      style={{
        backgroundImage: "url('/images/franchise-hero-wallpaper.jpg')",
        backgroundPosition: "center 32%",
      }}
    >
      {/* 
        Subtle Top Atmospheric Sky Gradient & Text Glow Filter
        Keeps the storybook wallpaper 100% visible while ensuring perfect typographic legibility 
      */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/18 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Soft Radial Backlight behind the central headline for organic blending */}
      <div 
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-4xl h-[440px] bg-gradient-to-r from-amber-100/50 via-white/70 to-orange-100/50 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true" 
      />

      {/* ==================================================
          FLOATING IN-SCENE BUSINESS & EDUCATION ELEMENTS
          Gentle, slow micro-animations (float, sway)
         ================================================== */}
      
      {/* Floating Element 1: Partnership & Trust (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-28 left-4 sm:left-10 lg:left-16 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-md border border-amber-200/80 shadow-sm animate-float"
      >
        <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-2xs">
          <Handshake className="w-3.5 h-3.5" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-black text-amber-950 tracking-wide">🤝 Partnership</span>
          <span className="text-[10px] text-amber-800/80 font-medium">Collaborative Growth</span>
        </div>
      </motion.div>

      {/* Floating Element 2: Proven Pedagogy (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-28 right-4 sm:right-10 lg:right-16 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-md border border-sky-200/80 shadow-sm animate-float-delayed"
      >
        <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shadow-2xs">
          <BookOpen className="w-3.5 h-3.5" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-black text-sky-950 tracking-wide">📚 Pedagogy</span>
          <span className="text-[10px] text-sky-800/80 font-medium">Play-Based Curriculum</span>
        </div>
      </motion.div>

      {/* Floating Element 3: Campus Architecture (Mid Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/2 right-3 sm:right-8 lg:right-14 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/70 shadow-xs animate-sway"
      >
        <Building2 className="w-3.5 h-3.5 text-orange-600" />
        <span className="text-xs font-bold text-stone-900">🏫 Turnkey Campus Design</span>
      </motion.div>

      {/* Floating Element 4: Community Growth (Mid Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="absolute top-1/2 left-3 sm:left-8 lg:left-14 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/70 shadow-xs animate-float"
      >
        <Sprout className="w-3.5 h-3.5 text-emerald-600" />
        <span className="text-xs font-bold text-emerald-950">🌱 Lifelong Community Value</span>
      </motion.div>

      {/* Subtle In-Scene Floating Sparkles in the Sky */}
      <div className="absolute top-36 left-1/4 animate-pulse opacity-70 pointer-events-none hidden lg:block" aria-hidden="true">
        <Star className="w-4 h-4 text-amber-500 fill-amber-300" />
      </div>
      <div className="absolute top-44 right-1/4 animate-pulse opacity-70 pointer-events-none hidden lg:block" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-orange-400" />
      </div>

      {/* ==================================================
          CENTRAL STORYBOOK HERO CONTENT
          Integrated directly into the wallpaper environment
         ================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-6 my-auto">
        
        {/* Curated Partnership Eyebrow Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-extrabold shadow-sm mb-4 sm:mb-6"
        >
          <Briefcase className="w-4 h-4 text-amber-700" />
          <span className="tracking-wide">CHOCOLATE KIDS FRANCHISE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-amber-800 font-bold hidden sm:inline">PRESCHOOL PARTNERSHIP</span>
        </motion.div>

        {/* Primary Storybook Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-[70px] text-stone-900 tracking-tight leading-[1.1] sm:leading-[1.12] storybook-glow"
        >
          Build the Future of Early Learning With{" "}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 drop-shadow-xs">
            Chocolate Kids
          </span>
        </motion.h1>

        {/* Supporting Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-stone-700 font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-xs"
        >
          Partner with Chocolate Kids to bring a joyful, engaging and quality-focused preschool experience to families in your community.
        </motion.p>

        {/* 4 In-Scene Value Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-stone-800"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-amber-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Educational Framework
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-amber-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Training & Guidance
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-amber-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Marketing Support
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-amber-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Operational Support
          </span>
        </motion.div>

        {/* Primary & Secondary Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA: "Enquire About Franchise" */}
          <button
            type="button"
            onClick={() => handleScroll("enquiry-form")}
            className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-black text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/40 cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-amber-200" />
            <span>Enquire About Franchise</span>
          </button>

          {/* Secondary CTA: "Explore the Opportunity" */}
          <button
            type="button"
            onClick={() => handleScroll("why-chocolate-kids")}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-stone-900 bg-white/90 hover:bg-white border-2 border-amber-300/90 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <span>Explore the Opportunity</span>
            <ArrowRight className="w-4 h-4 text-amber-700" />
          </button>

          {/* Third Optional CTA: "WhatsApp Enquiry" */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-emerald-950 bg-emerald-50/95 hover:bg-emerald-100 border-2 border-emerald-300/80 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>
        </motion.div>

        {/* In-Scene Audience Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white/75 backdrop-blur-xs px-4 py-1 rounded-full border border-amber-200/70"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span>Designed for passionate educators, entrepreneurs and community builders</span>
        </motion.div>
      </div>

      {/* ==================================================
          BOTTOM SCENE ANCHOR & ORGANIC WAVE SCROLL TRANSITION
          Blends the wallpaper seamlessly into the next section
         ================================================== */}
      <div className="relative z-10 w-full mt-auto">
        {/* Playful Scroll Down Prompt */}
        <div className="flex justify-center pb-2">
          <button
            type="button"
            onClick={() => handleScroll("why-chocolate-kids")}
            aria-label="Scroll to discover franchise details"
            className="flex flex-col items-center gap-1 text-[11px] font-extrabold text-stone-800/80 hover:text-amber-900 transition-colors bg-white/80 backdrop-blur-xs px-3.5 py-1 rounded-full border border-white/60 shadow-2xs group cursor-pointer"
          >
            <span>Explore The Partnership Opportunity</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-amber-700" />
          </button>
        </div>

        {/* Artistic Scalloped Wave SVG Divider */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]" aria-hidden="true">
          <svg
            className="relative block w-full h-12 sm:h-16 lg:h-20 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C150,80 350,-40 500,45 C650,110 900,10 1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
