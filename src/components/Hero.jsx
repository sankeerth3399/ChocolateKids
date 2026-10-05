import { motion } from "framer-motion";
import { Sparkles, Palette, ShieldCheck, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFF3E3] pt-24 sm:pt-28 pb-8 select-none"
    >
      {/* Subtle Polka-Dot Whimsical Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#F59E0B 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Radiant Rich Color Orbs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/30 via-orange-200/20 to-rose-200/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-sky-300/25 via-indigo-100/20 to-pink-200/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

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
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A651] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#00A651]" />
              <span className="tracking-wide">CHILD-FIRST EARLY LEARNING</span>
              <span className="hidden sm:inline-block text-[#00A651] font-bold">• DAMMAIGUDA & KAPRA</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] text-[#3D1A0D] tracking-tight leading-[1.15]"
            >
              Play School & Early Learning
              <span className="block mt-2 bg-gradient-to-r from-[#00A651] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent filter drop-shadow-xs">
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
              className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#5A2E1B]/85 font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Play-based learning, creative activities, and a nurturing environment where young children build confidence, curiosity, and strong foundational skills.
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
                  className="w-full h-80 sm:h-[380px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
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
              <div className="absolute -top-3 -right-2 sm:-right-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-lg border border-amber-200/90 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-2xs">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                    Creative Arts
                  </span>
                  <span className="text-xs font-black text-[#5A2E1B] block">
                    Art, Music & Dance
                  </span>
                </div>
              </div>

              {/* Badge 2: Safe Haven (Bottom Left - Neatly aligned) */}
              <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-lg border border-emerald-200/90 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-[#16A34A] uppercase tracking-wider block">
                    Safe & Nurturing
                  </span>
                  <span className="text-xs font-black text-[#5A2E1B] block">
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
