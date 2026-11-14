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
  { icon: "text-white", tile: "bg-[#C51F45]", border: "border-[#E8DCC9]", hover: "hover:border-[#C51F45]", bar: "bg-[#C51F45]", glow: "hover:shadow-[#C51F45]/25" },
  // Experiential Learning
  { icon: "text-white", tile: "bg-[#087F83]", border: "border-[#E8DCC9]", hover: "hover:border-[#087F83]", bar: "bg-[#087F83]", glow: "hover:shadow-[#087F83]/25" },
  // Creative Learning
  { icon: "text-white", tile: "bg-[#F26A21]", border: "border-[#E8DCC9]", hover: "hover:border-[#F26A21]", bar: "bg-[#F26A21]", glow: "hover:shadow-[#F26A21]/25" },
  // Social Learning
  { icon: "text-white", tile: "bg-[#174EA6]", border: "border-[#E8DCC9]", hover: "hover:border-[#174EA6]", bar: "bg-[#174EA6]", glow: "hover:shadow-[#174EA6]/25" },
  // Physical Development
  { icon: "text-white", tile: "bg-[#16834A]", border: "border-[#E8DCC9]", hover: "hover:border-[#16834A]", bar: "bg-[#16834A]", glow: "hover:shadow-[#16834A]/25" },
  // Communication Skills
  { icon: "text-white", tile: "bg-[#7439B5]", border: "border-[#E8DCC9]", hover: "hover:border-[#7439B5]", bar: "bg-[#7439B5]", glow: "hover:shadow-[#7439B5]/25" },
];

/* One photo per category (same order as the six learning categories) */
const photos = [
  { src: "/images/learning/play.jpg", pos: "center 30%", alt: "A smiling child building a tall tower of colourful play blocks" },
  { src: "/images/learning/experiential.jpg", pos: "center 28%", alt: "A child in safety goggles and a lab coat holding a flask during a science activity" },
  { src: "/images/learning/creative.jpg", pos: "center 25%", alt: "A smiling girl painting a colourful picture" },
  { src: "/images/learning/social.jpg", pos: "center 35%", alt: "Three laughing children joining hands together" },
  { src: "/images/learning/physical.jpg", pos: "center 40%", alt: "A smiling child crawling through a colourful play tunnel" },
  { src: "/images/learning/communication.jpg", pos: "center 30%", alt: "A child speaking confidently during a Show and Tell activity" },
];

export default function LearningApproach() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B26A00] mb-4">
            <span className="h-px w-8 bg-[#D6B56D]" />
            <Compass className="w-3.5 h-3.5" />
            <span>Holistic Methodology</span>
            <span className="h-px w-8 bg-[#D6B56D]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#142B4A] leading-tight">
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
                className={`accent-card group relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border ${accent.border} ${accent.hover} shadow-sm hover:shadow-xl ${accent.glow} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#E8F2FF]">
                  <img
                    src={photos[index % photos.length].src}
                    alt={photos[index % photos.length].alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: photos[index % photos.length].pos }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute inset-x-0 bottom-0 h-1.5 ${accent.bar}`} aria-hidden="true" />
                </div>

                <div className="relative flex flex-col flex-1 px-6 sm:px-7 pb-6 sm:pb-7 pt-9">
                  <div
                    className={`absolute -top-7 left-6 sm:left-7 w-14 h-14 rounded-2xl ${accent.tile} ${accent.icon} ring-4 ring-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-[#142B4A] text-xl leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#536174] leading-relaxed">
                    {highlightBrand(item.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
