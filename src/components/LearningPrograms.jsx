import { BookOpen, Check, ArrowRight, Sparkles } from "lucide-react";
import { academicPrograms } from "../data";
import BrandWatermark from "./BrandWatermark";

export default function LearningPrograms() {
  return (
    <section id="academics" className="py-20 bg-white relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="left" size="xl" opacity={0.04} rotate={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Preschool Curriculum</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Our Learning Programs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Age-appropriate, engaging preschool stages tailored to nurture early curiosity, confidence, creativity, and foundational learning.
          </p>
        </div>

        {/* 4 Academic Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl bg-[#FFFDF9] border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Photo Top Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-amber-50">
                <img
                  src={prog.image}
                  alt={`${prog.level} activities at Chocolate Kids`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                
                {/* Age Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-stone-800 shadow-xs backdrop-blur-xs">
                    {prog.age}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                    {prog.tagline}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white">
                    {prog.level}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal">
                    {prog.description}
                  </p>

                  {/* Learning Focus */}
                  <div className="mb-4 p-3 rounded-xl bg-amber-50/70 border border-amber-100 text-xs">
                    <span className="font-bold text-amber-950 block mb-1">Learning Focus:</span>
                    <span className="text-stone-600 leading-snug">{prog.learningFocus}</span>
                  </div>

                  {/* Key Activities List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-stone-700 block">Engaging Activities:</span>
                    {prog.activities.map((act) => (
                      <div key={act} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-stone-100">
                  <a
                    href="#admissions"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("admissions");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-amber-900 bg-amber-100/80 hover:bg-amber-200 border border-amber-200 transition-colors"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
