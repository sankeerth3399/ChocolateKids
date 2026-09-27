import { Layout, Smile, Palette, BookOpen, ShieldCheck, Car, Sparkles } from "lucide-react";
import { facilitiesData } from "../data";
import BrandWatermark from "./BrandWatermark";

export default function Facilities() {
  const iconMap = {
    Layout,
    Smile,
    Palette,
    BookOpen,
    ShieldCheck,
    Car,
  };

  return (
    <section id="facilities" className="py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-amber-100/50">
      {/* Brand Logo Watermark - Centered */}
      <BrandWatermark position="center" size="lg" opacity={0.11} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/90 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>Infrastructure & Care</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Our Campus Facilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Thoughtfully planned preschool environments prioritizing child safety, joyful play, hygienic comfort, and active learning across both our campuses.
          </p>
        </div>

        {/* Facilities 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((fac) => {
            const Icon = iconMap[fac.icon] || ShieldCheck;
            return (
              <div
                key={fac.id}
                className="rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between group"
              >
                {/* Facility Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-black/10" />

                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-stone-800 shadow-xs backdrop-blur-xs">
                      {fac.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-white leading-snug">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                {/* Facility Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {fac.desc}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-500">
                    <span>Available at both branches</span>
                    <span className="text-emerald-700 font-bold">✓ Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
