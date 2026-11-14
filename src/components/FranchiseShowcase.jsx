import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Users, TrendingUp, MapPin, Heart, CheckCircle2, BookOpen, Package, Layers, Shirt, Award, Gift, Star } from "lucide-react";
import {
  whyFranchiseWithUs,
  franchiseKitIncludes,
  franchiseAlsoIncludes,
  franchiseMaterialsList,
} from "../data";
import BrandWatermark from "./BrandWatermark";

const whyIcons = { GraduationCap, Lightbulb, Users, TrendingUp, MapPin, Heart };

/* Literal class names so Tailwind can see them. Colours follow the franchise poster. */
const whyPalette = {
  emerald: { solid: "bg-[#17243A]", soft: "from-[#F2F5FA]", ring: "ring-[#C3CEE0]", text: "text-[#17243A]", glow: "shadow-slate-300/50" },
  rose: { solid: "bg-[#801D3A]", soft: "from-[#FBF1F3]", ring: "ring-[#ECBFC9]", text: "text-[#801D3A]", glow: "shadow-rose-200/60" },
  sky: { solid: "bg-[#C29A45]", soft: "from-[#FBF8EF]", ring: "ring-[#EBDBAE]", text: "text-[#85632A]", glow: "shadow-amber-200/60" },
  amber: { solid: "bg-[#17243A]", soft: "from-[#F2F5FA]", ring: "ring-[#C3CEE0]", text: "text-[#17243A]", glow: "shadow-slate-300/50" },
  purple: { solid: "bg-[#801D3A]", soft: "from-[#FBF1F3]", ring: "ring-[#ECBFC9]", text: "text-[#801D3A]", glow: "shadow-rose-200/60" },
  teal: { solid: "bg-[#C29A45]", soft: "from-[#FBF8EF]", ring: "ring-[#EBDBAE]", text: "text-[#85632A]", glow: "shadow-amber-200/60" },
};

const materialIcons = [BookOpen, Layers, Shirt, Package];
const materialTints = [
  "bg-[#E1E7F0] text-[#22334F]",
  "bg-[#F5EDD7] text-[#85632A]",
  "bg-rose-100 text-rose-600",
  "bg-amber-100 text-amber-700",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function SectionHeading({ eyebrow, icon: Icon, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-950 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm ring-1 ring-amber-200">
        <Icon className="w-3.5 h-3.5 text-amber-600" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-lg text-stone-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function CheckList({ items, tone }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 min-w-0">
          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tone}`} />
          <span className="text-sm sm:text-[15px] font-semibold text-stone-800 leading-snug break-words">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function FranchiseShowcase() {
  return (
    <>
      {/* ==================================================
          1. WHY FRANCHISE WITH US?
         ================================================== */}
      <section
        id="franchise-opportunity-widget"
        className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F0E9DD] via-[#FAF8F3] to-[#FAF8F3]"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D6B56D]/20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#17243A]/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#801D3A]/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <BrandWatermark position="center" size="xl" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Philosophy banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="mx-auto mb-12 sm:mb-16 max-w-4xl text-center"
          >
            <p className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              <span className="text-blue-700">Play</span>
              <span className="text-red-500 mx-2 sm:mx-3">•</span>
              <span className="text-blue-700">Learn</span>
              <span className="text-amber-500 mx-2 sm:mx-3">•</span>
              <span className="text-blue-700">Grow</span>
            </p>
            <p className="mt-3 inline-block font-heading font-extrabold text-base sm:text-2xl text-blue-800 border-b-4 border-red-500 pb-1">
              Building brighter futures, one child at a time!
            </p>
          </motion.div>

          <SectionHeading
            eyebrow="Why Franchise With Us?"
            icon={Award}
            title="Six Reasons Partners Choose Chocolate Kids"
            subtitle="A trusted brand, a proven curriculum and complete support, built for long-term growth."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {whyFranchiseWithUs.map((card) => {
              const Icon = whyIcons[card.icon] || Star;
              const p = whyPalette[card.color] || whyPalette.amber;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col items-center text-center rounded-3xl bg-gradient-to-b ${p.soft} to-white ring-1 ${p.ring} shadow-lg ${p.glow} px-5 pt-12 pb-7 sm:px-7 mt-8 min-w-0`}
                >
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full ${p.solid} text-white flex items-center justify-center shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </span>
                  <span className="absolute top-3 right-4 font-mono text-xs font-black text-stone-300">
                    {card.num}
                  </span>
                  <h3 className={`font-heading font-bold text-lg sm:text-xl text-stone-900 leading-snug`}>
                    {card.title}
                  </h3>
                  <span className={`mt-2 mb-3 h-1 w-10 rounded-full ${p.solid}`} />
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          2. FRANCHISE KIT: INCLUDES + ALSO INCLUDES
         ================================================== */}
      <section id="franchise-support" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-[#FAF8F3]">
        <BrandWatermark position="center" size="lg" opacity={0.08} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Complete Support"
            icon={Gift}
            title="Everything You Need to Start, Succeed and Grow!"
            subtitle="Your franchise kit comes ready with branding, training, materials and guidance, so you can open with confidence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Franchise Kit Includes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative flex flex-col rounded-3xl bg-gradient-to-br from-[#F2F5FA] via-white to-[#FAF8F3] ring-1 ring-[#C3CEE0] shadow-xl shadow-slate-200 p-5 sm:p-8 min-w-0"
            >
              <div className="-mt-9 sm:-mt-11 mb-6 self-start">
                <span className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-gradient-to-r from-[#17243A] to-[#2B4066] px-5 py-2.5 font-heading font-bold text-lg sm:text-2xl text-white shadow-lg -rotate-1">
                  Franchise Kit Includes
                </span>
              </div>
              <CheckList items={franchiseKitIncludes} tone="text-[#C29A45]" />
              <div className="mt-auto pt-7">
                <p className="inline-block font-heading font-extrabold italic text-base sm:text-lg text-red-600 border-b-2 border-red-300 pb-0.5 -rotate-1">
                  Everything you need to start, succeed and grow!
                </p>
              </div>
            </motion.div>

            {/* Also Includes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative flex flex-col rounded-3xl bg-gradient-to-br from-[#FBF1F3] via-white to-[#FAF8F3] ring-1 ring-[#ECBFC9] shadow-xl shadow-rose-100 p-5 sm:p-8 min-w-0"
            >
              <div className="-mt-9 sm:-mt-11 mb-6 self-start">
                <span className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-gradient-to-r from-[#801D3A] to-[#A83A59] px-5 py-2.5 font-heading font-bold text-lg sm:text-2xl text-white shadow-lg -rotate-1">
                  Also Includes
                </span>
              </div>
              <CheckList items={franchiseAlsoIncludes} tone="text-[#C29A45]" />
              <div className="mt-auto pt-7 flex justify-end">
                <span className="inline-block max-w-full text-center rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2.5 font-heading font-bold text-sm sm:text-base text-white shadow-lg rotate-2">
                  Complete Support for Your Success!
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. STARTER MATERIALS
         ================================================== */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F3] via-[#FFF5E1] to-[#FAF8F3]">
        <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Starter Materials"
            icon={Package}
            title="Branded Materials Delivered to Your Campus"
            subtitle="Manuals, guides, apparel and learning kits, all in Chocolate Kids branding."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {franchiseMaterialsList.map((m, i) => {
              const Icon = materialIcons[i % materialIcons.length];
              return (
                <motion.div
                  key={m.name}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="flex flex-col rounded-3xl bg-white ring-1 ring-stone-200 shadow-md hover:shadow-xl transition-shadow p-6 min-w-0"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${materialTints[i % materialTints.length]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="self-start text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 mb-3">
                    {m.badge}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-stone-900 leading-snug mb-2">{m.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{m.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
