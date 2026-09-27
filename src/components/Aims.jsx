import { HeartHandshake, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { schoolCommitments } from "../data";

export default function Aims() {
  const iconMap = {
    HeartHandshake,
    Sparkles,
    GraduationCap,
    ShieldCheck,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our School Commitments</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight uppercase">
            To Meet Our Aims We Are Committed To:
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-normal">
            Four foundational promises that guide every teacher, caregiver, and classroom decision at Chocolate Kids.
          </p>
        </div>

        {/* 4 Premium Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolCommitments.map((commitment) => {
            const Icon = iconMap[commitment.icon] || ShieldCheck;
            return (
              <div
                key={commitment.number}
                className="group relative p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Row: Number & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading font-extrabold text-3xl text-amber-500/80 group-hover:text-amber-600 transition-colors">
                      {commitment.number}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                      {commitment.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/80 group-hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-800 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2 leading-snug">
                    {commitment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {commitment.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Preschool Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
