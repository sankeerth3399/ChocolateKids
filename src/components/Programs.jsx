import { Link } from "react-router-dom";
import { Sun, Puzzle, Palette, BookOpen, Users, Activity, Check } from "lucide-react";
import { programs } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function Programs() {
  const iconMap = {
    Sun,
    Puzzle,
    Palette,
    BookOpen,
    Users,
    Activity,
  };

  return (
    <section id="programs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/90 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Puzzle className="w-3.5 h-3.5 text-orange-700" />
            <span>Learning Dimensions</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span>Learning Dimensions at</span> <BrandBadge className="text-[0.72em]" />
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            A balanced curriculum designed to support your child's natural growth across cognitive, creative, linguistic, social, and physical domains.
          </p>
        </div>

        {/* 6 Program / Learning Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((prog) => {
            const Icon = iconMap[prog.icon] || Sun;
            return (
              <div
                key={prog.id}
                className="group relative p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${prog.accent}`}
                />

                <div>
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${prog.bgSoft} border ${prog.borderSoft} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${prog.textTone}`} />
                    </div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Preschool Pillar
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading font-bold text-xl text-stone-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">
                    {prog.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-5 font-normal">
                    {prog.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-2 pt-4 border-t border-stone-100">
                    {prog.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
                  <span>Enquire For This Age Group</span>
                  <Link to="/admissions" className="hover:underline">
                    Apply →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 italic max-w-xl mx-auto">
            * Note: These categories outline our overarching early learning approach at <BrandBadge isInline className="text-[0.85em] not-italic" />. Detailed age group criteria and batch timings are shared during campus visits.
          </p>
        </div>

      </div>
    </section>
  );
}
