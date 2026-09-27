import { Puzzle, Compass, Palette, Users, Activity, MessageSquare, Sparkles } from "lucide-react";
import { learningApproach } from "../data";

export default function LearningApproach() {
  const iconMap = {
    Puzzle,
    Compass,
    Palette,
    Users,
    Activity,
    MessageSquare,
  };

  return (
    <section className="py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Holistic Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Our multi-dimensional pedagogy fosters genuine childhood wonder through purposeful play, hands-on experiential discovery, creative expression, and vital life skills.
          </p>
        </div>

        {/* Split Section: Left Visual Anchor + Right 6 Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Anchor Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 group">
              <img
                src="/images/clay-ganesha-craft-activity.jpg"
                alt="Chocolate Kids children engaged in tactile clay sculpting learning"
                className="w-full h-96 sm:h-[450px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Experiential & Tactile
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  Tactile Sensory Discovery
                </h4>
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  Sculpting with natural clay on leaves, children explore 3D forms, finger dexterity, and cultural appreciation firsthand.
                </p>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-2xl shadow-lg border border-amber-200 hidden sm:flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <div className="text-xs font-bold text-stone-900">
                100% Hands-On Discovery
              </div>
            </div>
          </div>

          {/* Right Column: 6 Feature Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningApproach.map((item) => {
              const Icon = iconMap[item.icon] || Puzzle;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-10 h-10 rounded-xl ${item.colorBg} flex items-center justify-center ${item.colorIcon} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
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
