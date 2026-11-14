import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, ShieldCheck, ChevronDown, ArrowRight } from "lucide-react";
import { BrandName } from "./BrandName";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#FAF8F3] to-[#F3EEE5] pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      {/* Atmosphere: soft gold and burgundy light */}
      <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-[#D6B56D]/25 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 right-0 w-[36rem] h-[36rem] rounded-full bg-[#922B4B]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,36,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(23,36,58,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: editorial headline */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="hidden sm:block h-px w-10 bg-[#D6B56D]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#922B4B] text-center">
                Preschool · Dammaiguda · Kapra · Yapral
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="font-heading font-bold text-[clamp(2.1rem,5.2vw,4.1rem)] text-[#17243A] leading-[1.1]"
            >
              Play School &amp; Early Learning
              <span className="block mt-2 italic font-medium text-[#922B4B]">For Bright, Happy Kids</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-6 text-base sm:text-lg text-[#536174] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              At <BrandName isInline className="text-[0.88em]" />, play-based learning, creative activities, and a nurturing environment help young children build confidence, curiosity, and strong foundational skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#922B4B] text-white text-sm font-semibold tracking-wide shadow-md hover:bg-[#7A2140] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/franchise"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-[#D6B56D] text-[#17243A] text-sm font-semibold tracking-wide hover:bg-[#D6B56D]/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Franchise Enquiry</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: framed photograph with refined info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-xl border border-[#D6B56D]/60" aria-hidden="true" />
              <div className="relative rounded-xl overflow-hidden shadow-xl group bg-[#F3EEE5]">
                <img
                  src="/images/rich_preschool_hero.jpg"
                  alt="Joyful preschool children at Chocolate Kids"
                  className="w-full h-80 sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-12 left-5 right-5 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B56D]">
                    Joy of Early Childhood
                  </span>
                  <p className="mt-1 font-heading text-lg leading-snug">
                    Building blocks of curiosity, creativity &amp; lifelong joy
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 right-2 sm:-right-5 bg-white p-3 rounded-lg shadow-xl flex items-center gap-3 max-w-[11rem]">
                <div className="w-9 h-9 rounded-md bg-[#17243A] text-[#D6B56D] flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-semibold text-[#922B4B] uppercase tracking-wider block">Creative Arts</span>
                  <span className="text-xs font-semibold text-[#17243A] block leading-tight">Art, Music &amp; Dance</span>
                </div>
              </div>

              <div className="absolute -bottom-6 left-2 sm:-left-5 bg-white p-3 rounded-lg shadow-xl hidden sm:flex items-center gap-3 max-w-[11rem]">
                <div className="w-9 h-9 rounded-md bg-[#922B4B] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-semibold text-[#922B4B] uppercase tracking-wider block">Safe &amp; Nurturing</span>
                  <span className="text-xs font-semibold text-[#17243A] block leading-tight">Child-First Campus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          aria-label="Scroll to discover our story"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#64748B] hover:text-[#922B4B] transition-colors"
        >
          <span>Explore Our School</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
