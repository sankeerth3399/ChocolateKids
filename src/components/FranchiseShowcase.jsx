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
  emerald: { solid: "bg-[#174EA6]", soft: "from-[#EAF2FF]", ring: "ring-[#7FA8E8]", text: "text-[#174EA6]", glow: "shadow-blue-200/60" },
  rose: { solid: "bg-[#C51F45]", soft: "from-[#FEF1F4]", ring: "ring-[#EE7F98]", text: "text-[#C51F45]", glow: "shadow-rose-200/60" },
  sky: { solid: "bg-[#F26A21]", soft: "from-[#FFF1E6]", ring: "ring-[#FF9A55]", text: "text-[#F26A21]", glow: "shadow-orange-200/60" },
  amber: { solid: "bg-[#16834A]", soft: "from-[#EAF7EF]", ring: "ring-[#66BC8E]", text: "text-[#16834A]", glow: "shadow-emerald-200/60" },
  purple: { solid: "bg-[#7439B5]", soft: "from-[#F4EEFB]", ring: "ring-[#AE86DB]", text: "text-[#7439B5]", glow: "shadow-purple-200/60" },
  teal: { solid: "bg-[#087F83]", soft: "from-[#E6F5F5]", ring: "ring-[#4FB6B9]", text: "text-[#087F83]", glow: "shadow-teal-200/60" },
};

const materialIcons = [BookOpen, Layers, Shirt, Package];
const materialTints = [
  "bg-[#C51F45] text-white",
  "bg-[#174EA6] text-white",
  "bg-[#F26A21] text-white",
  "bg-[#16834A] text-white",
];
const materialBars = ["bg-[#C51F45]", "bg-[#174EA6]", "bg-[#F26A21]", "bg-[#16834A]"];
const materialPhotos = [
  { src: "/images/franchise/manual.jpg", pos: "left 40%", alt: "Three Chocolate Kids teachers in maroon uniforms reading the Teacher Training Manual together" },
  { src: "/images/franchise/guide.jpg", pos: "left 40%", alt: "The colourful Curriculum Guide beside stacked books, crayons, alphabet blocks and an open activity book" },
  { src: "/images/franchise/merch.jpg", pos: "left 40%", alt: "Branded Chocolate Kids school uniforms, backpack, water bottle, cap, lunch box and teddy bear" },
  { src: "/images/franchise/toys.jpg", pos: "left 40%", alt: "Plush soft toys with wooden puzzles, stacking rings, number board and an abacus" },
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

/* One photo per "Why Franchise with Us" card, in the same order as the data */
const whyPhotos = [
  { src: "/images/franchise/trusted.jpg", pos: "center 40%", alt: "A bright, colourful Chocolate Kids preschool building with a landscaped garden" },
  { src: "/images/franchise/curriculum.jpg", pos: "center 40%", alt: "A stack of colourful books labelled Early Learning, Life Skills, Creativity, Values and Ethics, and Holistic Development beside a globe and alphabet blocks" },
  { src: "/images/franchise/support.jpg", pos: "center 40%", alt: "A laptop, headphones and a checklist reading Training, Setup Guidance, Operations Support and Marketing Support" },
  { src: "/images/franchise/demand.jpg", pos: "center 50%", alt: "Colourful rising building blocks with a red upward arrow showing growth" },
  { src: "/images/franchise/investment.jpg", pos: "center 50%", alt: "A young plant growing from stacked coins beside a wooden house marked with the rupee symbol" },
  { src: "/images/franchise/impact.jpg", pos: "center 55%", alt: "Three smiling children in Chocolate Kids uniforms planting a young sapling together" },
];

export default function FranchiseShowcase() {
  return (
    <>
      {/* ==================================================
          1. WHY FRANCHISE WITH US?
         ================================================== */}
      <section
        id="franchise-opportunity-widget"
        className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-[#FFFDF8]"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D6B56D]/20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#142B4A]/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#C51F45]/10 blur-3xl pointer-events-none" aria-hidden="true" />
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
            {whyFranchiseWithUs.map((card, idx) => {
              const Icon = whyIcons[card.icon] || Star;
              const p = whyPalette[card.color] || whyPalette.amber;
              const photo = whyPhotos[idx % whyPhotos.length];
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E8DCC9] shadow-sm hover:shadow-xl transition-shadow duration-300 min-w-0"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#FFF4DF]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: photo.pos }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className={`absolute inset-x-0 bottom-0 h-1.5 ${p.solid}`} aria-hidden="true" />
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 font-mono text-xs font-bold text-[#142B4A] shadow-sm">
                      {card.num}
                    </span>
                  </div>

                  <div className="relative flex flex-col flex-1 px-6 pb-6 pt-9">
                    <span
                      className={`absolute -top-7 left-6 w-14 h-14 rounded-2xl ${p.solid} text-white ring-4 ring-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5`}
                    >
                      <Icon className="w-7 h-7" />
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#142B4A] leading-snug">{card.title}</h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#536174] leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          2. FRANCHISE KIT: INCLUDES + ALSO INCLUDES
         ================================================== */}
      <section id="franchise-support" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-[#FFFDF8]">
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
              className="relative flex flex-col rounded-3xl bg-white ring-1 ring-[#E8DCC9] shadow-md p-5 sm:p-8 min-w-0"
            >
              <div className="-mt-9 sm:-mt-11 mb-6 self-start">
                <span className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-gradient-to-r from-[#174EA6] to-[#4668B0] px-5 py-2.5 font-heading font-bold text-lg sm:text-2xl text-white shadow-lg -rotate-1">
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
              className="relative flex flex-col rounded-3xl bg-white ring-1 ring-[#E8DCC9] shadow-md p-5 sm:p-8 min-w-0"
            >
              <div className="-mt-9 sm:-mt-11 mb-6 self-start">
                <span className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-gradient-to-r from-[#C51F45] to-[#A83A59] px-5 py-2.5 font-heading font-bold text-lg sm:text-2xl text-white shadow-lg -rotate-1">
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
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[#FFF4DF]">
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
              const photo = materialPhotos[i % materialPhotos.length];
              return (
                <motion.div
                  key={m.name}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E8DCC9] shadow-sm hover:shadow-xl transition-shadow duration-300 min-w-0"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#FFF4DF]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: photo.pos }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className={`absolute inset-x-0 bottom-0 h-1.5 ${materialBars[i % materialBars.length]}`} aria-hidden="true" />
                  </div>

                  <div className="relative flex flex-col flex-1 px-5 pb-6 pt-9">
                    <div className={`absolute -top-7 left-5 w-14 h-14 rounded-2xl ring-4 ring-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 ${materialTints[i % materialTints.length]}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF4DF] text-[#142B4A] border border-[#E8DCC9] mb-3">
                      {m.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#142B4A] leading-snug mb-2">{m.name}</h3>
                    <p className="text-sm text-[#536174] leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
