import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Award, Users, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolPhilosophy } from "../data";

export default function About() {
  const philosophyHighlights = [
    {
      title: "Friendly, Clean & Safe Haven",
      desc: "A clean, healthy, comfortable and safe environment where children are stimulated, challenged, and physically protected.",
      icon: Shield,
      accent: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      title: "Discovery Linked with Joy",
      desc: "Enjoyment, fun and achievement are linked with real discovery—from science to art and early sensory exploration.",
      icon: Sparkles,
      accent: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      title: "Individual Attention & Warmth",
      desc: "Sensitive and responsive educators who nurture each child's unique personality and developmental pace.",
      icon: Heart,
      accent: "text-rose-700",
      bg: "bg-rose-50",
      border: "border-rose-200",
    },
    {
      title: "Early Foundations for Life",
      desc: "Cultivating social confidence, polite empathy, verbal fluency, and boundless imagination for future school success.",
      icon: BookOpen,
      accent: "text-sky-700",
      bg: "bg-sky-50",
      border: "border-sky-200",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative Storybook Background Elements */}
      <div 
        className="absolute top-10 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-950 text-xs font-black uppercase tracking-wider mb-3.5 border border-amber-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>WELCOME TO CHOCOLATE KIDS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Growing Curious Minds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            At Chocolate Kids, childhood is celebrated as a magical chapter of exploration. We combine child-led play, structured curiosity, and warm individual attention.
          </p>
        </div>

        {/* Editorial Storybook Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Editorial Overlapping Photo Composition (Storybook Scrapbook) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative pastel backdrop shape */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-amber-200/50 via-orange-100/40 to-sky-200/40 rounded-[2.5rem] transform -rotate-1 blur-xs -z-10"
                aria-hidden="true"
              />

              {/* Main Large Photograph */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <img
                  src="/images/cow-shelter-group-hd.png"
                  alt="Chocolate Kids students with banner at Shree Aaiji Goshala educational visit"
                  className="w-full h-80 sm:h-96 object-cover object-bottom group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[10px] uppercase tracking-wider inline-block mb-1">
                    Hands-On Discovery
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/95">
                    Real community visits, compassionate learning & group wonder
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Polaroid-Style Photograph (Tilted) */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-8 -right-3 sm:-right-8 w-48 sm:w-56 p-2.5 sm:p-3 bg-white rounded-2xl shadow-2xl border-2 border-stone-200/80 transform rotate-3 z-20 group cursor-pointer"
              >
                <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden bg-amber-50">
                  <img
                    src="/images/blue-colour-day-celebration.jpg"
                    alt="Blue Colour Day celebration at Chocolate Kids"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-[9px] font-bold">
                    Theme Day
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-bold text-stone-800 block">Blue Colour Day</span>
                  <span className="text-[10px] text-stone-500">Sensory exploration</span>
                </div>
              </motion.div>

              {/* Floating Storybook Badge Sticker */}
              <div className="absolute -top-5 -left-4 sm:-left-6 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200 flex items-center gap-2 animate-float">
                <span className="text-lg">🌱</span>
                <div>
                  <div className="text-[11px] font-black text-amber-950">Trusted Since 2012</div>
                  <div className="text-[9px] text-stone-500">Loving Preschool Havens</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Editorial Narrative + Educational Pillars */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            
            {/* Storybook Narrative Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/70 border border-amber-200/70 shadow-2xs relative">
              <span className="text-5xl text-amber-300/80 font-serif leading-none absolute top-3 right-4 select-none">
                “
              </span>
              <h3 className="font-heading font-black text-xl text-amber-950 mb-2">
                A Loving Sanctuary Where Childhood Shines
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {schoolPhilosophy.primaryStatement}
              </p>
              <div className="mt-3 pt-3 border-t border-amber-200/50">
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {schoolPhilosophy.secondaryStatement}
                </p>
              </div>
            </div>

            {/* 4 Storybook Pillar Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {philosophyHighlights.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-4 rounded-2xl bg-white border ${pillar.border} shadow-2xs hover:shadow-md transition-all duration-200`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className={`w-8 h-8 rounded-xl ${pillar.bg} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${pillar.accent}`} />
                      </div>
                      <h4 className="font-heading font-bold text-stone-900 text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <span>Read Full Story About Us</span>
                <span className="text-amber-700">→</span>
              </Link>
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Our Learning Approach</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
