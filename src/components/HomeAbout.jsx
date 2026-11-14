import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { schoolPhilosophy } from "../data";

export default function HomeAbout() {
  return (
    <section id="about" className="py-14 sm:py-20 overflow-hidden bg-[#FFF4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Organic image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative max-w-lg mx-auto lg:mx-0 w-full"
          >
            <span className="absolute left-0 sm:-left-6 bottom-4 w-28 h-40 sm:w-36 sm:h-52 rounded-[2rem] bg-[#174EA6]" aria-hidden="true" />
            <svg className="absolute -top-5 left-0 sm:-left-6 w-12 h-12 text-[#FFBD16]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 42C10 31 5 24 5 16c0-6 4.5-10 10-10 4 0 7 2 9 6 2-4 5-6 9-6 5.5 0 10 4 10 10 0 8-5 15-19 26z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
            </svg>
            <div className="relative overflow-hidden shadow-xl shadow-[#142B4A]/15 rounded-[58%_42%_52%_48%/48%_56%_44%_52%] aspect-[5/4] bg-[#F9DDE3]">
              <img
                src="/images/Chocolate_Kids_Enhanced_06.jpg"
                alt="Chocolate Kids children celebrating together in front of the Chocolate Kids wall"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <span className="absolute right-0 sm:-right-3 bottom-6 w-4 h-4 rounded-full bg-[#16834A]" aria-hidden="true" />
            <span className="absolute right-2 sm:-right-6 bottom-14 w-2.5 h-2.5 rounded-full bg-[#F26A21]" aria-hidden="true" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C51F45]">About Us</span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#142B4A] leading-tight">
              More Than Just a Preschool
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#536174] leading-relaxed">{schoolPhilosophy.primaryStatement}</p>
            <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">{schoolPhilosophy.secondaryStatement}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#142B4A] text-[#142B4A] text-sm sm:text-base font-bold hover:bg-[#142B4A] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
