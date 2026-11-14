import { motion } from "framer-motion";
import { Heart, ShieldCheck, Palette, Sprout } from "lucide-react";

/* Wording is taken from the existing Chocolate Kids content (About, Why Choose Us). */
const benefits = [
  {
    title: "Caring Teachers",
    desc: "Sensitive and responsive educators who nurture each child's unique personality and pace.",
    Icon: Heart,
    circle: "bg-gradient-to-br from-[#E24E70] to-[#C51F45] shadow-[#C51F45]/30",
  },
  {
    title: "Safe Learning Environment",
    desc: "A clean, healthy, comfortable and safe environment where every child feels valued.",
    Icon: ShieldCheck,
    circle: "bg-gradient-to-br from-[#26A168] to-[#16834A] shadow-[#16834A]/30",
  },
  {
    title: "Creative Learning",
    desc: "Art, music, storytelling and imaginative play that turn every day into discovery.",
    Icon: Palette,
    circle: "bg-gradient-to-br from-[#FF8A4C] to-[#F26A21] shadow-[#F26A21]/30",
  },
  {
    title: "Holistic Child Development",
    desc: "Balanced support for academic, social, emotional and physical growth.",
    Icon: Sprout,
    circle: "bg-gradient-to-br from-[#9457CF] to-[#7439B5] shadow-[#7439B5]/30",
  },
];

export default function HomeBenefits() {
  return (
    <section className="py-14 sm:py-20 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8">
          {benefits.map(({ title, desc, Icon, circle }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${circle} text-white flex items-center justify-center shadow-lg ring-4 ring-white`}>
                <Icon className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 font-heading font-semibold text-lg sm:text-xl text-[#142B4A]">{title}</h3>
              <p className="mt-2 text-sm sm:text-[15px] text-[#536174] leading-relaxed max-w-[15rem]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
