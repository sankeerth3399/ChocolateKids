import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Megaphone,
  MapPin,
  Clock,
  Heart,
  Users,
  Layout,
  Puzzle,
  ChevronDown,
  HelpCircle,
  Info,
  Send,
  FileText,
  PhoneCall,
  Rocket,
  Palette,
  Sprout
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FranchiseHero from "../components/FranchiseHero";
import FranchiseForm from "../components/FranchiseForm";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge, highlightBrand } from "../utils/brandHelper";
import { 
  schoolInfo, 
  franchiseBenefits, 
  supportJourney, 
  whoCanPartner, 
  franchiseSpecs, 
  franchiseInvestmentAreas, 
  franchiseSteps, 
  franchiseFAQs,
  branches
} from "../data";

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Chocolate Kids Franchise | Preschool Franchise Opportunity";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore the Chocolate Kids Preschool Franchise Opportunity. Partner with an established early education brand with proven curriculum, comprehensive training, setup guidance, and child-safe infrastructure support.";
  }, []);

  const franchiseMsg = "Hello Chocolate Kids Team, I am interested in the franchise opportunity. Please share the franchise details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`;

  const iconMap = {
    Award,
    Sparkles,
    GraduationCap,
    BookOpen,
    Megaphone,
    ShieldCheck,
    Heart,
    Users,
    Layout,
    Puzzle,
    MapPin,
    CheckCircle2,
    FileText,
    PhoneCall,
    Rocket,
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main>
        {/* ==================================================
            CHAPTER 1: THE PARTNERSHIP (IMMERSIVE WALLPAPER HERO)
           ================================================== */}
        <FranchiseHero onScrollToSection={scrollToSection} />

        {/* ==================================================
            SECTION 10: FRANCHISE INTRODUCTION ("WHY CHOCOLATE KIDS?")
           ================================================== */}
        {/* ==================================================
            CHAPTER 2: THE VISION ("WHY CHOCOLATE KIDS?")
           ================================================== */}
        <section 
          id="why-chocolate-kids" 
          className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#FFFDF9] border-b border-amber-200/60 overflow-hidden"
        >
          {/* Layer 1 & 2: Atmospheric Glows & Organic Ambient Shapes */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-orange-200/25 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-100/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Layer 3: Subtle Educational Watermark Elements */}
          <div className="absolute top-16 right-16 opacity-30 hidden lg:block animate-float" aria-hidden="true">
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>
          <div className="absolute bottom-16 left-12 opacity-30 hidden lg:block animate-float-delayed" aria-hidden="true">
            <Sprout className="w-8 h-8 text-emerald-600" />
          </div>

          {/* Official Brand Logo Watermark - Prominent Centered Watermark */}
          <BrandWatermark position="center" size="xl" opacity={0.13} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Arched Storybook Visual Scene */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Organic Soft Backlight Behind Frame */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 via-orange-200/30 to-amber-100/40 rounded-t-[7rem] sm:rounded-t-[9rem] rounded-b-[3rem] blur-2xl transform -rotate-1 scale-102 pointer-events-none" />

                  {/* Arched Framed Storybook Illustration */}
                  <div className="relative rounded-t-[6rem] sm:rounded-t-[8rem] rounded-b-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/95 ring-1 ring-amber-200/80 bg-amber-50 group">
                    <img
                      src="/images/why-chocolate-kids-visual.jpg"
                      alt="Early education leaders and franchise partner collaborating on preschool curriculum and blueprints"
                      className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Soft Bottom Gradient for Text Protection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />

                    {/* Top In-Scene Pill */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/95 text-amber-950 shadow-sm border border-amber-200/80 backdrop-blur-xs">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        <span>Curriculum & Co-Creation</span>
                      </span>
                    </div>

                    {/* Bottom In-Scene Educational Philosophy Caption */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[11px] uppercase tracking-wider mb-1.5 shadow-2xs">
                        Educational Vision
                      </span>
                      <h4 className="font-heading font-bold text-lg sm:text-xl text-white drop-shadow-xs">
                        A Culture of Wonder, Warmth & Discovery
                      </h4>
                      <p className="text-xs text-stone-200 mt-1 leading-relaxed font-normal">
                        Every campus is thoughtfully planned to nurture children's innate curiosity through playful guidance and caring educators.
                      </p>
                    </div>
                  </div>

                  {/* Floating Growth Metaphor Badge */}
                  <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-amber-200 flex items-center gap-3 animate-float hidden sm:flex">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Sprout className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-black text-amber-950">Growing Together</span>
                      <span className="text-[10px] text-amber-800/80 font-medium">Curriculum • Care • Trust</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Philosophy & Floating Benefits */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Chapter 2 • Brand & Educational Philosophy</span>
                  </div>

                  <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-[1.12] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span>Why Choose</span>{" "}
                    <BrandBadge className="text-[0.72em]" />
                    <span>?</span>
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                    At <BrandBadge isInline className="text-[0.85em]" />, early education is far more than routine memorization—it is a foundation of wonder, emotional confidence, and active discovery. We empower young children through child-centric, play-based methodologies that families genuinely love and respect.
                  </p>
                </div>

                {/* 4 Floating Information Elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {/* Benefit 1 */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-amber-200/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                          <Heart className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                          Child-Centric Learning
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        Every daily rhythm is crafted around the child's natural curiosity, comfort, and developmental pace.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-amber-200/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                          <Palette className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                          Activity-Based Education
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        Sensory discovery, clay sculpting, color days, and rhythmic expression that turn learning into lived joy.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-amber-200/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                          Safe & Welcoming Spaces
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        Child-proof, thoughtfully ventilated spaces designed with gentle textures and vigilant hygiene protocols.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-amber-200/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                          Strong Parent Engagement
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        Transparent daily communication, high satisfaction, and warm family participation in campus life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Growth Ecosystem Callout */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/90 via-white/85 to-emerald-50/60 border border-amber-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Sprout className="w-4.5 h-4.5 text-emerald-600" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-stone-700 leading-snug">
                    <strong className="text-amber-950 font-bold">Growing Together: </strong>
                    Nurturing early childhood curiosity into lasting academic, emotional, and social confidence.
                  </p>
                </div>

                {/* Transition Statement & Prominent Franchise CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection("benefits")}
                    className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm font-black text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/40 cursor-pointer"
                  >
                    <span>Explore Franchise Benefits</span>
                    <ArrowRight className="w-4 h-4 text-amber-200" />
                  </button>

                  <span className="text-xs sm:text-sm font-semibold text-stone-600">
                    Bring this learning experience to your community.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 11: "WHY BECOME A CHOCOLATE KIDS FRANCHISE PARTNER?"
            (8 BENEFIT CARDS)
           ================================================== */}
        <section id="benefits" className="py-20 bg-stone-50/70 border-b border-amber-100/70 relative overflow-hidden">
          {/* Official Brand Logo Watermark - Prominent Centered Watermark */}
          <BrandWatermark position="center" size="xl" opacity={0.14} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <Award className="w-3.5 h-3.5 text-amber-800" />
                <span>Chapter 3 • The Opportunity</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                More Than a Franchise. A Chance to Shape Young Futures.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Everything required to establish and operate an inspiring early learning center with professional backing.
              </p>
            </div>

            {/* 8 Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {franchiseBenefits.map((item) => {
                const Icon = iconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-amber-100/90 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {highlightBrand(item.desc)}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-amber-800">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section CTA (Section 23: After benefits) */}
            <div className="text-center">
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md hover:shadow-lg transition-colors cursor-pointer"
              >
                <span>Become a Franchise Partner</span>
                <ArrowRight className="w-4 h-4 text-amber-950" />
              </button>
            </div>

          </div>
        </section>

        {/* ==================================================
            SECTION 13: WHAT WE CAN SUPPORT (JOURNEY-STYLE LAYOUT)
           ================================================== */}
        <section className="py-20 bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
                <span>Chapter 4 • The Support</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Support Designed Around Your Journey
              </h2>
              <p className="mt-4 text-stone-300 text-base leading-relaxed">
                From initial site selection to daily classroom operations, <BrandBadge isInline className="text-[0.85em]" /> provides realistic, experienced support at every phase.
              </p>
            </div>

            {/* 7-Stage Horizontal / Vertical Pathway */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-14">
              {supportJourney.map((step) => {
                const Icon = iconMap[step.icon] || CheckCircle2;
                return (
                  <div
                    key={step.stage}
                    className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-amber-300">
                          {step.stage}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                        {step.name}
                      </span>
                      <h3 className="font-heading font-bold text-sm text-white mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-stone-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section CTA (Section 23: After support) */}
            <div className="text-center">
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg transition-colors cursor-pointer"
              >
                <span>Discuss Your Opportunity</span>
                <ArrowRight className="w-4 h-4 text-amber-950" />
              </button>
            </div>

          </div>
        </section>

        {/* ==================================================
            SECTION 14: WHO CAN BECOME A FRANCHISE PARTNER?
           ================================================== */}
        <section className="py-20 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5 text-amber-800" />
                <span>Partner Profile</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Could You Be Our Next Franchise Partner?
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                This opportunity is ideal for educators, entrepreneurs, and community leaders who share our commitment to child welfare and early developmental joy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoCanPartner.map((partner) => {
                const Icon = iconMap[partner.icon] || Heart;
                return (
                  <div
                    key={partner.title}
                    className="p-7 rounded-3xl bg-[#FFFDF9] border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                        {partner.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {highlightBrand(partner.desc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 15 & 16: REQUIREMENTS & UNDERSTAND THE OPPORTUNITY
           ================================================== */}
        <section id="requirements" className="py-20 bg-stone-50/70 border-b border-amber-100/70 relative overflow-hidden">
          <BrandWatermark position="center" size="lg" opacity={0.12} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
            
            {/* Section 15: What Does It Take to Start? */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
                  <Info className="w-3.5 h-3.5 text-amber-800" />
                  <span>Chapter 5 • The Setup</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                  What Does It Take to Start?
                </h2>
                <p className="mt-2 text-stone-600 text-sm sm:text-base">
                  Essential parameters for planning a successful <BrandBadge isInline className="text-[0.85em]" /> preschool campus.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Space Requirement</span>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">1,500 – 2,500+ Sq. Ft.</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Ground floor preferred with dedicated outdoor play zone, natural ventilation, and safe access.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Location Requirement</span>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">Residential Catchment</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Accessible residential neighborhood or gated community hub with safe pick-up/drop-off.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Setup Timeline</span>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">45 – 60 Days</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    From site finalization to classroom readiness, teacher training, and inaugural launch.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 16: Understand the Opportunity */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-lg">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                  Financial Planning
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
                  Understand the Opportunity
                </h3>
                <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
                  We believe in transparent, honest budgeting without speculative ROI or revenue guarantees. We guide potential partners through the fundamental cost centers of a reputable preschool:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {franchiseInvestmentAreas.map((area) => (
                  <div key={area.title} className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <h4 className="font-bold text-sm text-stone-900 mb-1">{area.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{highlightBrand(area.desc)}</p>
                  </div>
                ))}
              </div>

              {/* Section CTA (Section 23: After requirements) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-100">
                <div>
                  <h4 className="font-heading font-bold text-base text-stone-900">
                    Ready to evaluate site-specific investment details?
                  </h4>
                  <p className="text-xs text-stone-500">
                    Our team provides official prospectus and individualized cost guidance upon inquiry.
                  </p>
                </div>

                <button
                  onClick={() => scrollToSection("enquiry-form")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold text-white bg-amber-700 hover:bg-amber-800 transition-colors cursor-pointer"
                >
                  <span>Request Franchise Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            SECTION 17: FRANCHISE JOURNEY (6-STEP TIMELINE)
           ================================================== */}
        <section className="py-20 bg-white border-b border-stone-100 relative overflow-hidden">
          <BrandWatermark position="center" size="lg" opacity={0.11} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <span>Chapter 6 • Roadmap to Launch</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
                <span>Your</span> <BrandBadge className="text-[0.72em]" /> <span>Franchise Journey</span>
              </h2>
              <p className="mt-4 text-base text-stone-600 leading-relaxed font-normal">
                A clear, professional sequence from your initial inquiry to welcoming your first preschool students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {franchiseSteps.map((step) => {
                const Icon = iconMap[step.icon] || CheckCircle2;
                return (
                  <div
                    key={step.step}
                    className="p-7 rounded-3xl bg-[#FFFDF9] border border-stone-200/90 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading font-black text-3xl text-amber-600/30">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {highlightBrand(step.desc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            CHAPTER 7: THE CONVERSATION (FRANCHISE ENQUIRY FORM)
           ================================================== */}
        <section id="enquiry-form" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/40 to-white relative overflow-hidden">
          <BrandWatermark position="center" size="lg" opacity={0.12} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
                <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                <span>Chapter 7 • The Conversation</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Let's Build Something Meaningful Together.
              </h2>
              <p className="mt-3 text-base text-stone-600 max-w-xl mx-auto">
                Submit your details below. Our franchise team will review your application and reach out to schedule an introductory conversation.
              </p>
            </div>

            <FranchiseForm />
          </div>
        </section>

        {/* ==================================================
            SECTION 20: FRANCHISE FAQ (11 QUESTIONS)
           ================================================== */}
        <section id="franchise-faq" className="py-20 bg-white border-b border-stone-100 relative overflow-hidden">
          <BrandWatermark position="center" size="lg" opacity={0.10} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Transparency & Clarity</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Franchise Partner FAQs
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                Transparent answers to common questions about starting and managing a <BrandBadge isInline className="text-[0.85em]" /> preschool.
              </p>
            </div>

            <div className="space-y-3.5">
              {franchiseFAQs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-stone-200/90 bg-white overflow-hidden transition-all duration-200 shadow-2xs hover:border-amber-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-base sm:text-lg text-stone-900 leading-snug">
                        <span className="text-amber-600 mr-2 font-mono text-sm sm:text-base">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                        </span>
                        {highlightBrand(faq.q)}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-amber-100 text-amber-800 rotate-180" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        <p>{highlightBrand(faq.a)}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Section CTA (After FAQ) */}
            <div className="mt-12 p-6 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-base text-stone-900">
                  Have another question not covered here?
                </h4>
                <p className="text-xs sm:text-sm text-stone-600">
                  Speak directly with our franchise team for clear guidance.
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Talk to Our Franchise Team</span>
              </a>
            </div>

          </div>
        </section>

        {/* ==================================================
            SECTION 23: BOTTOM FRANCHISE CTA
           ================================================== */}
        <section className="py-16 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
              <span>Ready to Build Your</span> <BrandBadge className="text-[0.72em]" /> <span>Preschool?</span>
            </h3>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join hands with a respected preschool brand and create an early learning haven in your community.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="px-8 py-3.5 rounded-full text-sm font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg transition-colors cursor-pointer"
              >
                <span>Start Your Franchise Journey</span>
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Talk to Our Franchise Team</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
