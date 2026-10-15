import { motion } from "framer-motion";
import { Sparkles, Palette, ShieldCheck, ChevronDown } from "lucide-react";
import { BrandName } from "./BrandName";

export default function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF7E8] via-[#FFF0D4] to-[#FFE8C8] pt-24 sm:pt-28 pb-10 select-none"
    >
      {/* =========================================================
          BACKGROUND LAYER 1: Rich Multi-Color Atmospheric Glows
          - Warm sunshine yellow, soft orange, peach, and cream
          - Splashes of pastel green, sky blue, coral pink, lavender
          ========================================================= */}

      {/* Sunshine & Warm Peach Radiant Glow (Top-Left) */}
      <div
        className="absolute -top-24 -left-20 w-[28rem] sm:w-[38rem] h-[28rem] sm:h-[38rem] rounded-full bg-gradient-to-br from-amber-300/45 via-orange-300/35 to-rose-200/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Sky Blue & Mint Creative Bloom (Top-Right behind Photo) */}
      <div
        className="absolute -top-12 -right-16 w-[28rem] sm:w-[40rem] h-[28rem] sm:h-[40rem] rounded-full bg-gradient-to-bl from-sky-300/40 via-cyan-200/35 to-emerald-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Soft Coral & Pastel Lavender Hearth (Bottom-Center) */}
      <div
        className="absolute -bottom-20 left-1/3 -translate-x-1/2 w-[30rem] sm:w-[44rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-tr from-pink-300/25 via-purple-200/20 to-amber-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Pastel Mint Breeze (Bottom-Left) */}
      <div
        className="absolute bottom-6 -left-12 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-300/25 via-teal-200/20 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Readability Shield: Luminous Cream/Ivory Area Behind Left Headline & Paragraph */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 w-full sm:w-[620px] lg:w-[680px] h-[520px] rounded-[3rem] bg-gradient-to-r from-white/90 via-white/75 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* =========================================================
          BACKGROUND LAYER 2: Whimsical Preschool Decorative Elements
          - Puffy soft clouds, playful stars, pastel bubbles & paths
          ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">

        {/* Pastel Rainbow Arc (Echoing the classroom rainbow in illustration) */}
        <div className="absolute -top-10 right-4 sm:right-20 lg:right-44 w-72 sm:w-96 h-36 sm:h-48 opacity-40 pointer-events-none">
          <svg viewBox="0 0 320 160" fill="none" className="w-full h-full">
            <path d="M20,150 A140,140 0 0,1 300,150" stroke="#FB7185" strokeWidth="9" strokeLinecap="round" />
            <path d="M35,150 A125,125 0 0,1 285,150" stroke="#FBBF24" strokeWidth="9" strokeLinecap="round" />
            <path d="M50,150 A110,110 0 0,1 270,150" stroke="#4ADE80" strokeWidth="9" strokeLinecap="round" />
            <path d="M65,150 A95,95 0 0,1 255,150" stroke="#38BDF8" strokeWidth="9" strokeLinecap="round" />
            <path d="M80,150 A80,80 0 0,1 240,150" stroke="#C084FC" strokeWidth="9" strokeLinecap="round" />
          </svg>
        </div>

        {/* Soft Puffy Cloud 1 (Top Left) */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-12 lg:left-16 animate-float opacity-85">
          <svg className="w-16 h-10 sm:w-22 sm:h-14 drop-shadow-[0_4px_12px_rgba(251,146,60,0.15)]" viewBox="0 0 100 60" fill="none">
            <path
              d="M25 45 H75 C84 45 90 39 90 31 C90 24 84 18 77 18 C76 11 70 5 62 5 C56 5 50 9 47 14 C44 11 39 9 34 9 C24 9 16 17 16 27 C10 28 6 34 6 40 C6 47 11 45 25 45 Z"
              fill="#FFFFFF"
            />
            <path
              d="M25 45 H75 C82 45 87 41 89 36 C80 43 65 44 47 43 C32 42 20 44 12 39 C14 43 19 45 25 45 Z"
              fill="#FED7AA"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Soft Puffy Cloud 2 (Top Right near Badge) */}
        <div className="hidden sm:block absolute top-14 sm:top-16 right-8 sm:right-28 animate-float-delayed opacity-80">
          <svg className="w-14 h-9 sm:w-18 sm:h-11 drop-shadow-[0_4px_12px_rgba(56,189,248,0.18)]" viewBox="0 0 100 60" fill="none">
            <path
              d="M25 45 H75 C84 45 90 39 90 31 C90 24 84 18 77 18 C76 11 70 5 62 5 C56 5 50 9 47 14 C44 11 39 9 34 9 C24 9 16 17 16 27 C10 28 6 34 6 40 C6 47 11 45 25 45 Z"
              fill="#FFFFFF"
            />
            <path
              d="M25 45 H75 C82 45 87 41 89 36 C80 43 65 44 47 43 C32 42 20 44 12 39 C14 43 19 45 25 45 Z"
              fill="#BAE6FD"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Whimsical Flight Dashed Trail */}
        <div className="hidden md:block absolute top-28 left-36 w-64 h-32 opacity-35">
          <svg viewBox="0 0 240 120" fill="none" className="w-full h-full">
            <path
              d="M10 80 C60 20, 140 110, 200 40 C220 20, 235 30, 230 45 C220 60, 205 50, 215 35"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Playful Floating Glassmorphic Bubbles */}
        {/* Bubble 1: Lavender (Top Left) */}
        <div className="absolute top-36 left-8 sm:left-24 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-purple-300/40 via-pink-200/30 to-white/70 border border-white/60 shadow-xs backdrop-blur-xs animate-float" />

        {/* Bubble 2: Sky Blue (Mid Right) */}
        <div className="absolute top-1/2 right-6 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-sky-300/45 via-cyan-100/35 to-white/70 border border-white/70 shadow-xs backdrop-blur-xs animate-float-delayed" />

        {/* Bubble 3: Sunshine Amber (Bottom Left) */}
        <div className="absolute bottom-24 left-10 sm:left-28 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-300/45 via-yellow-100/40 to-white/70 border border-white/60 shadow-xs backdrop-blur-xs animate-sway" />

        {/* Bubble 4: Mint Green (Top Center) */}
        <div className="hidden lg:block absolute top-24 left-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-300/40 via-teal-100/30 to-white/70 border border-white/60 shadow-xs backdrop-blur-xs animate-float" />

        {/* Floating Sparkle Stars */}
        {/* Gold 4-point star near Top Left */}
        <div className="absolute top-16 left-1/4 animate-pulse-subtle text-amber-500/80">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </div>

        {/* Coral pink star near Top Right */}
        <div className="absolute top-28 right-1/3 animate-sway text-rose-400/80">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </div>

        {/* Cyan star near Bottom Right Photo */}
        <div className="absolute bottom-16 right-10 sm:right-24 animate-float text-sky-400/80">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </div>

        {/* Emerald sparkle near Bottom Left */}
        <div className="absolute bottom-28 left-6 sm:left-20 animate-float-delayed text-emerald-500/70">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </div>

        {/* Playful Soft Geometric Wooden-Block Motifs (Edges only) */}
        {/* Soft rounded pastel triangle (Bottom Right edge) */}
        <div className="hidden md:block absolute bottom-8 right-8 rotate-12 opacity-40">
          <svg className="w-8 h-8 text-amber-400" viewBox="0 0 40 40" fill="currentColor">
            <polygon points="20,4 38,36 2,36" />
          </svg>
        </div>

        {/* Soft rounded pastel ring (Top Right edge) */}
        <div className="hidden lg:block absolute top-12 right-12 opacity-35">
          <div className="w-10 h-10 rounded-full border-4 border-dashed border-sky-400 animate-spin [animation-duration:25s]" />
        </div>

        {/* =========================================================
            BACKGROUND LAYER 3: Rolling Gentle Preschool Hills at Bottom
            - Soft flowing pastel curves connecting to CorePhilosophy
            ========================================================= */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24 pointer-events-none"
          viewBox="0 0 1440 90"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Back wave: Warm Sunshine Peach / Pink gradient */}
          <path
            d="M0,35 C280,70 540,15 820,45 C1100,75 1300,20 1440,40 L1440,90 L0,90 Z"
            fill="url(#hero-hill-gradient-1)"
            opacity="0.55"
          />
          {/* Front wave: Soft Mint / Sky Blue / Warm Cream blend */}
          <path
            d="M0,55 C360,25 720,70 1080,40 C1260,25 1380,50 1440,45 L1440,90 L0,90 Z"
            fill="url(#hero-hill-gradient-2)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="hero-hill-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#FED7AA" />
              <stop offset="70%" stopColor="#FBCFE8" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </linearGradient>
            <linearGradient id="hero-hill-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9F0" />
              <stop offset="30%" stopColor="#FEF3C7" />
              <stop offset="65%" stopColor="#DCFCE7" />
              <stop offset="100%" stopColor="#FFF9F0" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Bold Headline & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border-2 border-emerald-300 text-stone-800 text-xs sm:text-sm font-extrabold shadow-2xs mb-4 sm:mb-5"
            >
              <BrandName className="text-sm sm:text-base" />
              <span className="tracking-wide">PRESCHOOL</span>
              <span className="hidden sm:inline-block text-[#00A651] font-bold">• DAMMAIGUDA, KAPRA & YAPRAL</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-[clamp(1.65rem,4.2vw,3.35rem)] text-[#3D1A0D] tracking-tight leading-[1.18]"
            >
              Play School & Early Learning
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#00A651] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent filter drop-shadow-xs">
                For Bright, Happy Kids ✨
              </span>
            </motion.h1>

            {/* Squiggle flourish */}
            <div className="hidden lg:block w-64 h-3 mt-2 text-[#00A651] opacity-80">
              <svg viewBox="0 0 260 12" fill="none" className="w-full h-full">
                <path d="M2 9C50 3 100 11 150 5C200 -1 230 11 258 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            {/* Preschool Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-6 text-sm sm:text-lg text-[#5A2E1B]/85 font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              At <BrandName isInline className="text-[0.88em]" />, play-based learning, creative activities, and a nurturing environment help young children build confidence, curiosity, and strong foundational skills.
            </motion.p>
          </div>

          {/* RIGHT COLUMN: Harmoniously Aligned Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Halo Glow */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-amber-400/30 via-orange-300/25 to-pink-300/25 rounded-[2.5rem] transform rotate-1 blur-sm"
                aria-hidden="true"
              />

              {/* Main Photo Frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white group">
                <img
                  src="/images/rich_preschool_hero.jpg"
                  alt="Joyful preschool children at Chocolate Kids"
                  className="w-full h-72 sm:h-[360px] md:h-[380px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#451A03]/60 via-transparent to-transparent pointer-events-none" />

                {/* In-Frame Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-white text-xs font-black uppercase tracking-wider mb-1 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Joy of Early Childhood</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white/95 leading-snug drop-shadow-xs">
                    Building blocks of curiosity, creativity & lifelong joy
                  </p>
                </div>
              </div>

              {/* Badge 1: Creative Learning (Top Right - Neatly aligned) */}
              <div className="absolute -top-3 right-0 sm:-right-3 bg-white/95 backdrop-blur-md p-1.5 sm:p-3 rounded-xl shadow-lg border border-amber-200/90 flex items-center gap-1.5 sm:gap-2.5 max-w-[150px] sm:max-w-[200px]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-2xs shrink-0">
                  <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                    Creative Arts
                  </span>
                  <span className="text-[10px] sm:text-xs font-black text-[#5A2E1B] block leading-tight">
                    Art, Music & Dance
                  </span>
                </div>
              </div>

              {/* Badge 2: Safe Haven (Bottom Left - Neatly aligned) */}
              <div className="absolute -bottom-3 left-0 sm:-left-3 bg-white/95 backdrop-blur-md p-1.5 sm:p-3 rounded-xl shadow-lg border border-emerald-200/90 flex items-center gap-1.5 sm:gap-2.5 max-w-[150px] sm:max-w-[200px]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-2xs shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-[#16A34A] uppercase tracking-wider block">
                    Safe & Nurturing
                  </span>
                  <span className="text-[10px] sm:text-xs font-black text-[#5A2E1B] block leading-tight">
                    Child-First Campus
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 w-full mt-2 flex justify-center pb-2">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          aria-label="Scroll to discover our story"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A2E1B] bg-white/90 hover:bg-white px-4 py-1.5 rounded-full border border-amber-200/80 shadow-2xs hover:shadow-xs transition-all group"
        >
          <span>Explore Our School</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#F59E0B]" />
        </a>
      </div>
    </section>
  );
}
