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
  // Play-Based Learning: burgundy
  { icon: "text-[#801D3A]", tile: "bg-[#F4DDE2]", hover: "hover:border-[#E8B6BE]", bar: "bg-[#801D3A]" },
  // Experiential Learning: teal
  { icon: "text-[#0F766E]", tile: "bg-[#DAF0EE]", hover: "hover:border-[#A9D8D3]", bar: "bg-[#0F766E]" },
  // Creative Learning: warm gold
  { icon: "text-[#98702D]", tile: "bg-[#F3E8CA]", hover: "hover:border-[#E5CC8D]", bar: "bg-[#D6B56D]" },
  // Social Learning: royal blue
  { icon: "text-[#284B9C]", tile: "bg-[#DDE6F7]", hover: "hover:border-[#B6C7EA]", bar: "bg-[#284B9C]" },
  // Physical Development: emerald
  { icon: "text-[#2D6A4F]", tile: "bg-[#DDEDE4]", hover: "hover:border-[#B2D3C1]", bar: "bg-[#2D6A4F]" },
  // Communication Skills: terracotta
  { icon: "text-[#B45A3C]", tile: "bg-[#F6E2D9]", hover: "hover:border-[#E7BBA9]", bar: "bg-[#B45A3C]" },
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
                className={`group relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E8E0D4] ${accent.hover} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 ${accent.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
