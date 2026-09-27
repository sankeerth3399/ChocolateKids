import { Sparkles, ShieldCheck, GraduationCap, HeartHandshake } from "lucide-react";
import { quickHighlights } from "../data";

export default function QuickHighlights() {
  const iconMap = {
    Sparkles,
    ShieldCheck,
    GraduationCap,
    HeartHandshake,
  };

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {quickHighlights.map((item, idx) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <div
              key={item.title}
              className={`p-6 rounded-2xl ${item.colorBg} border ${item.colorBorder} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center border border-white/80 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${item.colorIcon}`} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border border-white text-stone-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className={`font-heading font-extrabold text-lg ${item.colorText} mb-2 leading-snug`}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
