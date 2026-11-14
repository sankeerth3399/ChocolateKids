import { Smile, Palette, Puzzle, ShieldCheck, GraduationCap, Star } from "lucide-react";
import { whyChooseUs } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

export default function WhyChooseUs({ showPhoto = true }) {
  const iconMap = {
    Smile,
    Sparkles: Star,
    Palette,
    Puzzle,
    ShieldCheck,
    GraduationCap,
  };

  const accents = [
    { card: "bg-white border-[#E8DCC9]", tile: "bg-[#C51F45] text-white", num: "bg-[#C51F45] text-white" },
    { card: "bg-white border-[#E8DCC9]", tile: "bg-[#F26A21] text-white", num: "bg-[#F26A21] text-white" },
    { card: "bg-white border-[#E8DCC9]", tile: "bg-[#174EA6] text-white", num: "bg-[#174EA6] text-white" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#FFF4DF]">
      {/* Brand Logo Watermark - Large Centered Page Focal Point */}
      <BrandWatermark position="center" size="xl" opacity={0.13} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Educational Philosophy</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>Why Choose</span> <BrandBadge className="text-2xl sm:text-4xl lg:text-5xl" /><span>?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Where your child's well-being, creative joy, and foundational confidence always come first.
          </p>
        </div>

        {/* Split Layout: Left Photograph + Right Checklist Cards */}
        <div className={`grid grid-cols-1 gap-12 items-center ${showPhoto ? "lg:grid-cols-12" : ""}`}>
          
          {showPhoto && (
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background border */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-amber-200 via-orange-100 to-emerald-200 rounded-3xl transform -rotate-1 blur-xs -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 group">
                <img
                  src="/images/independence-day-celebration-hd.png"
                  alt="Chocolate Kids students presenting speech with national flag with confidence"
                  className="w-full h-96 sm:h-[440px] object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                    Stage Poise & Confidence
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Confidence & Lifelong Expression
                  </h4>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">
                    Nurturing public speaking, expressive confidence, and cultural pride from early preschool years.
                  </p>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Right Column: 6 Structured Cards (01 to 06) */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${showPhoto ? "lg:col-span-7" : "lg:grid-cols-3"}`}>
            {whyChooseUs.map((item, idx) => {
              const accent = accents[idx % 3];
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${accent.card} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start relative group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl ${accent.tile} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-heading font-semibold text-sm ${accent.num} px-2.5 py-0.5 rounded-md`}>
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[#142B4A] text-lg leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#536174] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
