import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Palette, 
  BookOpen, 
  Music, 
  Sprout, 
  Heart, 
  Smile, 
  ArrowRight, 
  Compass, 
  Star,
  ChevronDown
} from "lucide-react";

export default function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToAdmissions = (e) => {
    e.preventDefault();
    const elem = document.getElementById("admissions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 pb-0 select-none"
      style={{
        backgroundImage: "url('/images/storybook-hero-wallpaper.jpg')",
        backgroundPosition: "center 38%",
      }}
    >
      {/* 
        Subtle Top Atmospheric Sky Gradient & Text Glow Filter
        Keeps background 100% visible while ensuring perfect typographic legibility 
      */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Soft Radial Backlight behind the central headline for organic blending */}
      <div 
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[420px] bg-gradient-to-r from-amber-100/40 via-white/65 to-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* ==================================================
          FLOATING IN-SCENE EDUCATIONAL ELEMENTS & ICONS
          Gentle, slow micro-animations (2-4 seconds)
         ================================================== */}
      
      {/* Floating Element 1: Creativity & Art (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-28 left-4 sm:left-12 lg:left-20 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-md border border-amber-200/70 shadow-sm animate-float"
      >
        <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-2xs">
          <Palette className="w-3.5 h-3.5" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-black text-amber-950 tracking-wide">🎨 Creativity</span>
          <span className="text-[10px] text-amber-800/80 font-medium">Art & Hands-on Wonder</span>
        </div>
      </motion.div>

      {/* Floating Element 2: Phonics & Learning (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-28 right-4 sm:right-12 lg:right-20 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-md border border-sky-200/70 shadow-sm animate-float-delayed"
      >
        <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shadow-2xs">
          <BookOpen className="w-3.5 h-3.5" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-black text-sky-950 tracking-wide">📚 Learning</span>
          <span className="text-[10px] text-sky-800/80 font-medium">Phonics & Early Books</span>
        </div>
      </motion.div>

      {/* Floating Element 3: Music & Rhythm (Mid Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/2 right-3 sm:right-8 lg:right-16 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200/60 shadow-xs animate-sway"
      >
        <Music className="w-3.5 h-3.5 text-purple-600" />
        <span className="text-xs font-bold text-purple-900">🎵 Music & Dance</span>
      </motion.div>

      {/* Floating Element 4: Growth & Curiosity (Mid Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="absolute top-1/2 left-3 sm:left-8 lg:left-16 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/60 shadow-xs animate-float"
      >
        <Sprout className="w-3.5 h-3.5 text-emerald-600" />
        <span className="text-xs font-bold text-emerald-900">🌱 Natural Growth</span>
      </motion.div>

      {/* Whimsical Floating Tiny Stars / Sparkles in the Sky */}
      <div className="absolute top-36 left-1/4 animate-pulse opacity-70 pointer-events-none hidden lg:block" aria-hidden="true">
        <Star className="w-4 h-4 text-amber-500 fill-amber-300" />
      </div>
      <div className="absolute top-44 right-1/4 animate-pulse opacity-70 pointer-events-none hidden lg:block" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-orange-400" />
      </div>

      {/* ==================================================
          CENTRAL STORYBOOK HERO CONTENT
          Blends organically with the sky & rainbow
         ================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-6 my-auto">
        
        {/* Curated Storybook Eyebrow Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-extrabold shadow-sm mb-4 sm:mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="tracking-wide">CHOCOLATE KIDS PRESCHOOL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-amber-800 font-bold hidden sm:inline">INNOVATIVE LEARNING</span>
        </motion.div>

        {/* Primary Storybook Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-stone-900 tracking-tight leading-[1.08] sm:leading-[1.1] storybook-glow"
        >
          Where Little Minds{" "}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 drop-shadow-xs">
            Grow, Learn & Shine
          </span>
        </motion.h1>

        {/* Supporting Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-stone-700 font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-xs"
        >
          A joyful beginning to a lifetime of learning, discovery and growth.
        </motion.p>

        {/* In-Scene Playful Ribbon Text: "Play • Learn • Explore" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-3 flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-widest"
        >
          <span>Play</span>
          <span className="text-amber-500">•</span>
          <span>Learn</span>
          <span className="text-amber-500">•</span>
          <span>Explore</span>
          <span className="text-amber-500">•</span>
          <span>Create</span>
        </motion.div>

        {/* Primary Storybook CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA: "Explore Our World" */}
          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-black text-white bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/40 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-100" />
            <span>Explore Our World</span>
          </a>

          {/* Secondary CTA: "Admissions" */}
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-stone-900 bg-white/90 hover:bg-white border-2 border-amber-300/90 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <span>Admissions</span>
            <ArrowRight className="w-4 h-4 text-amber-700" />
          </Link>
        </motion.div>

        {/* In-Scene Campus Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white/70 backdrop-blur-xs px-3.5 py-1 rounded-full border border-amber-200/60"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Admissions Open 2026-27 • Dammaiguda & Kapra Campuses</span>
        </motion.div>
      </div>

      {/* ==================================================
          BOTTOM SCENE ANCHOR & CLOUD SCROLL TRANSITION
          Seamlessly blends the wallpaper into the About section
         ================================================== */}
      <div className="relative z-10 w-full mt-auto">
        {/* Playful Scroll Down Prompt */}
        <div className="flex justify-center pb-2">
          <a
            href="#about"
            onClick={handleScrollToAbout}
            aria-label="Scroll to discover more"
            className="flex flex-col items-center gap-1 text-[11px] font-extrabold text-stone-800/80 hover:text-amber-900 transition-colors bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-white/60 shadow-2xs group"
          >
            <span>Step Inside Our World</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-amber-700" />
          </a>
        </div>

        {/* Artistic Scalloped Cloud / Organic Wave SVG Divider */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]" aria-hidden="true">
          <svg
            className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#FFFDF9]"
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
