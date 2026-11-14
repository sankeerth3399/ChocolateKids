import { Puzzle, Compass, Palette, Users, Activity, MessageSquare } from "lucide-react";
import { learningApproach } from "../data";
import { highlightBrand } from "../utils/brandHelper";

const iconMap = {
  Puzzle,
  Compass,
  Palette,
  Users,
  Activity,
  MessageSquare,
};

/*
 * One coordinated accent per card (icon, tint and hover border).
 * Order follows the six learning categories in data.js.
 */
const accents = [
  // Play-Based Learning
  { icon: "text-[#922B4B]", tile: "bg-[#F7E3E9]", border: "border-[#922B4B]/15", hover: "hover:border-[#922B4B]/45", bar: "bg-[#922B4B]", glow: "hover:shadow-[#922B4B]/15" },
  // Experiential Learning
  { icon: "text-[#087E83]", tile: "bg-[#DDF1EF]", border: "border-[#087E83]/15", hover: "hover:border-[#087E83]/45", bar: "bg-[#087E83]", glow: "hover:shadow-[#087E83]/15" },
  // Creative Learning
  { icon: "text-[#AD7824]", tile: "bg-[#F6EBD1]", border: "border-[#AD7824]/20", hover: "hover:border-[#AD7824]/50", bar: "bg-[#AD7824]", glow: "hover:shadow-[#AD7824]/15" },
  // Social Learning
  { icon: "text-[#31549A]", tile: "bg-[#E3EAF8]", border: "border-[#31549A]/15", hover: "hover:border-[#31549A]/45", bar: "bg-[#31549A]", glow: "hover:shadow-[#31549A]/15" },
  // Physical Development
  { icon: "text-[#237653]", tile: "bg-[#DDEFE5]", border: "border-[#237653]/15", hover: "hover:border-[#237653]/45", bar: "bg-[#237653]", glow: "hover:shadow-[#237653]/15" },
  // Communication Skills
  { icon: "text-[#C45A35]", tile: "bg-[#F8E5DC]", border: "border-[#C45A35]/15", hover: "hover:border-[#C45A35]/45", bar: "bg-[#C45A35]", glow: "hover:shadow-[#C45A35]/15" },
];

export default function LearningApproach() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#98702D] mb-4">
            <span className="h-px w-8 bg-[#D6B56D]" />
            <Compass className="w-3.5 h-3.5" />
            <span>Holistic Methodology</span>
            <span className="h-px w-8 bg-[#D6B56D]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17243A] leading-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#536174] leading-relaxed">
            Our multi-dimensional pedagogy fosters genuine childhood wonder through purposeful play, hands-on experiential discovery, creative expression, and vital life skills.
          </p>
        </div>

        {/* Six equal cards: 3 x 2 on desktop, 2 columns on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 sm:gap-6">
          {learningApproach.map((item, index) => {
            const Icon = iconMap[item.icon] || Puzzle;
            const accent = accents[index % accents.length];
            return (
              <div
                key={item.title}
                className={`accent-card group relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border ${accent.border} ${accent.hover} shadow-sm hover:shadow-lg ${accent.glow} hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] ${accent.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <div
                  className={`w-12 h-12 rounded-xl ${accent.tile} ${accent.icon} flex items-center justify-center shrink-0 mb-5 transition-transform duration-300 group-hover:-translate-y-0.5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-[#17243A] text-lg leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#536174] leading-relaxed">
                  {highlightBrand(item.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
