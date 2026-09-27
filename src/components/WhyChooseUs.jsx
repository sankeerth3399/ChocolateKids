import { Smile, Sparkles, Palette, Puzzle, ShieldCheck, GraduationCap } from "lucide-react";
import { whyChooseUs } from "../data";

export default function WhyChooseUs() {
  const iconMap = {
    Smile,
    Sparkles,
    Palette,
    Puzzle,
    ShieldCheck,
    GraduationCap,
  };

  return (
    <section className="py-20 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Educational Philosophy</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Why Choose Chocolate Kids?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Where your child's well-being, creative joy, and foundational confidence always come first.
          </p>
        </div>

        {/* Split Layout: Left Photograph + Right Checklist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real School Photograph with Floating Badge */}
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

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-2xl shadow-xl border border-amber-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-stone-900">Child-First Approach</div>
                  <div className="text-[11px] text-stone-500">Care, Safety & Happiness</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Structured Cards (01 to 06) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-start relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-extrabold text-base text-amber-600/70 bg-amber-50 px-2.5 py-0.5 rounded-md">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-stone-900 text-base leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
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
