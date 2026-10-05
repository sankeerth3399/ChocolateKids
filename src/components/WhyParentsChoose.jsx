import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Palette,
  Activity,
  Heart,
  MapPin,
  BookOpen,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Phone
} from "lucide-react";
import { BrandBadge } from "../utils/brandHelper";

export default function WhyParentsChoose() {
  const pillars = [
    {
      title: "Activity-Based & Montessori",
      subtitle: "Learning through hands-on discovery and sensory exploration",
      icon: Brain,
      emoji: "🧩",
      bgTint: "bg-[#FFF0DD]",
      accentColor: "text-[#D97706]",
      borderColor: "border-amber-200/90",
      badge: "HANDS-ON LEARNING",
      link: "#academics",
      linkText: "View Curriculum →",
      highlights: ["Sensory texture bins", "Montessori manipulative toys", "Cognitive reasoning games"]
    },
    {
      title: "Smart Audio-Visual Classes",
      subtitle: "Interactive digital boards, phonics audio & animated storytelling",
      icon: Palette,
      emoji: "💻",
      bgTint: "bg-[#EAF8EC]",
      accentColor: "text-[#00A651]",
      borderColor: "border-emerald-200/90",
      badge: "SMART CLASSROOMS",
      link: "#facilities",
      linkText: "See Smart Facilities →",
      highlights: ["Interactive digital screens", "Jolly Phonics audio immersion", "Animated rhymes & rhythm"]
    },
    {
      title: "Language & Stage Confidence",
      subtitle: "Public poise, show-and-tell, and creative self-expression",
      icon: Activity,
      emoji: "🎤",
      bgTint: "bg-[#DFF3FA]",
      accentColor: "text-[#0284C7]",
      borderColor: "border-sky-200/90",
      badge: "STAGE POISE",
      link: "#activities",
      linkText: "Explore Activities →",
      highlights: ["Public show-and-tell", "Role play & drama enactments", "Rich expressive vocabulary"]
    },
    {
      title: "360° Safety & Caring Mentors",
      subtitle: "100% CCTV, child-safe furniture & loving 1:10 caregiver ratio",
      icon: Heart,
      emoji: "🛡️",
      bgTint: "bg-[#FDF2F8]",
      accentColor: "text-[#DB2777]",
      borderColor: "border-rose-200/90",
      badge: "CHILD SAFETY",
      link: "#facilities",
      linkText: "Safety Standards →",
      highlights: ["100% CCTV monitored", "Pediatric emergency protocol", "Loving female caregivers"]
    }
  ];

  const quickNav = [
    { label: "Programs by Age", target: "#academics", icon: BookOpen },
    { label: "Our 2 Campuses", target: "/branches", isPage: true, icon: MapPin },
    { label: "Daily Activities", target: "#activities", icon: Palette },
    { label: "Smart Facilities", target: "#facilities", icon: ShieldCheck },
    { label: "Admissions 2026–27", target: "#admissions", icon: Sparkles },
    { label: "Direct Phone Help", target: "#contact", icon: Phone },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FBFDFB] to-[#FFF9F0] border-b-2 border-emerald-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header: Pallavi Kidz Style Child-First Philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF8EC] text-[#00A651] text-xs font-black uppercase tracking-wider mb-4 border border-[#00A651]/30 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00A651]" />
            <span>CHILD-FIRST PHILOSOPHY • PALLAVI KIDZ-GRADE EXCELLENCE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#3D1A0D] tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>Why Parents Choose</span> <BrandBadge className="text-2xl sm:text-3xl lg:text-4xl px-3 py-1" />
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A2E1B]/80 font-medium leading-relaxed">
            Every child is a unique learner. Just as a note becomes a melody with the right rhythm, our caring mentors help children discover their fullest capabilities through joyful, activity-based discovery.
          </p>
        </div>

        {/* 4 Core Pillars for Parents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-[#FFF9F0]/60 hover:bg-[#FFF9F0] border ${item.borderColor} shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bgTint} flex items-center justify-center text-xl shadow-2xs`}>
                    <span>{item.emoji}</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A2E1B]/50">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-[#5A2E1B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A2E1B]/75 leading-relaxed font-medium">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-100/70">
                <a
                  href={item.link}
                  className={`inline-flex items-center gap-1 text-xs font-bold ${item.accentColor} hover:underline`}
                >
                  <span>{item.linkText}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Parent Navigation Strip: Answer immediate parent questions */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-[#FFF9F0] border border-amber-200/60 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-extrabold text-[#5A2E1B] block">
                Quick Answers for Parents:
              </span>
              <span className="text-[11px] text-[#5A2E1B]/70 font-medium">
                Jump directly to the section you are looking for:
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {quickNav.map((nav) => {
                if (nav.isPage) {
                  return (
                    <Link
                      key={nav.label}
                      to={nav.target}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#5A2E1B] bg-white hover:bg-[#FFF0DD] border border-amber-200/80 shadow-2xs transition-colors"
                    >
                      <nav.icon className="w-3 h-3 text-[#F59E0B]" />
                      <span>{nav.label}</span>
                    </Link>
                  );
                }

                return (
                  <a
                    key={nav.label}
                    href={nav.target}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#5A2E1B] bg-white hover:bg-[#FFF0DD] border border-amber-200/80 shadow-2xs transition-colors"
                  >
                    <nav.icon className="w-3 h-3 text-[#F59E0B]" />
                    <span>{nav.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
