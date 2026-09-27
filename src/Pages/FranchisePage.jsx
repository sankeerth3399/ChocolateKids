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
  Rocket
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FranchiseForm from "../components/FranchiseForm";
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

      <main className="pt-24 sm:pt-28">
        
        {/* ==================================================
            SECTION 9: FRANCHISE HERO SECTION
           ================================================== */}
        <section className="relative bg-gradient-to-b from-amber-100/70 via-amber-50/50 to-[#FFFDF9] py-16 sm:py-24 border-b border-amber-200/60 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Heading, Value Proposition & CTAs */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950 mb-6 bg-white/90 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Preschool Home</span>
                </Link>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-300">
                  <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                  <span>Preschool Franchise Opportunity</span>
                </div>

                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.12]">
                  Build the Future of Early Learning With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600">
                    Chocolate Kids
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                  Explore the opportunity to become a Chocolate Kids franchise partner and bring a joyful, engaging and quality-focused preschool experience to families in your community.
                </p>

                {/* Trust markers */}
                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-stone-700">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Structured Educational Approach
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Staff Training & Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Curriculum & Marketing Support
                  </span>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                  <button
                    onClick={() => scrollToSection("enquiry-form")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Enquire About Franchise</span>
                    <ArrowRight className="w-4 h-4 text-amber-200" />
                  </button>

                  <button
                    onClick={() => scrollToSection("why-chocolate-kids")}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Explore the Opportunity</span>
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

                <div className="mt-4 text-xs font-semibold text-stone-500">
                  Designed for passionate educators, entrepreneurs and business partners.
                </div>
              </div>

              {/* Right Column: High Quality Real Chocolate Kids Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 group">
                    <img
                      src="/images/cow-shelter-group-hd.png"
                      alt="Chocolate Kids Preschool community gathering with staff and children"
                      className="w-full h-80 sm:h-[450px] object-cover object-bottom group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[11px] uppercase tracking-wider mb-1.5">
                        Authentic Preschool Experience
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white">
                        Inspiring Happy Learning Every Day
                      </h4>
                      <p className="text-xs text-stone-200 mt-1">
                        Build a preschool environment that earns the love of children and trust of parents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 10: FRANCHISE INTRODUCTION ("WHY CHOCOLATE KIDS?")
           ================================================== */}
        <section id="why-chocolate-kids" className="py-20 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left: Real Photo Anchor */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-50 group">
                  <img
                    src="/images/cow-shelter-banner-group.jpg"
                    alt="Chocolate Kids official celebration banner and students in uniform"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                      Established Preschool Brand
                    </span>
                    <h4 className="font-heading font-extrabold text-xl text-white">
                      A Culture of Warmth, Safety & Discovery
                    </h4>
                    <p className="text-xs text-white/90 leading-relaxed mt-1">
                      Our established campuses in Dammaiguda & Kapra showcase the joyful atmosphere, vibrant activities, and parent trust you can create in your city.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Editorial Philosophy */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Brand & Educational Philosophy</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
                    Why Chocolate Kids?
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                    At Chocolate Kids, preschool is more than memorization—it is a foundation of wonder, emotional confidence, and active discovery. We empower children through play-based methodologies that parents truly respect.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="font-bold text-sm text-stone-900 mb-1">Child-Centric Learning</h3>
                    <p className="text-xs text-stone-500">Every routine is designed around the child's natural curiosity and comfort.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="font-bold text-sm text-stone-900 mb-1">Activity-Based Education</h3>
                    <p className="text-xs text-stone-500">Sensory bins, clay sculpting, color discovery, and musical movement.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="font-bold text-sm text-stone-900 mb-1">Safe & Welcoming Spaces</h3>
                    <p className="text-xs text-stone-500">Clean, child-proof, well-ventilated classrooms with sensitive caregivers.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="font-bold text-sm text-stone-900 mb-1">Strong Parent Engagement</h3>
                    <p className="text-xs text-stone-500">Transparent daily communication and high satisfaction across communities.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 group"
                  >
                    <span>Discover our comprehensive franchise benefits</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 11: "WHY BECOME A CHOCOLATE KIDS FRANCHISE PARTNER?"
            (8 BENEFIT CARDS)
           ================================================== */}
        <section id="benefits" className="py-20 bg-stone-50/70 border-b border-amber-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <Award className="w-3.5 h-3.5 text-amber-800" />
                <span>Partner Support System</span>
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
                        {item.desc}
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
                <span>End-to-End Partnership</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Support Designed Around Your Journey
              </h2>
              <p className="mt-4 text-stone-300 text-base leading-relaxed">
                From initial site selection to daily classroom operations, Chocolate Kids provides realistic, experienced support at every phase.
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
                        {partner.desc}
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
        <section id="requirements" className="py-20 bg-stone-50/70 border-b border-amber-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section 15: What Does It Take to Start? */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
                  <Info className="w-3.5 h-3.5 text-amber-800" />
                  <span>Key Parameters (Editable)</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                  What Does It Take to Start?
                </h2>
                <p className="mt-2 text-stone-600 text-sm sm:text-base">
                  Essential parameters for planning a successful Chocolate Kids preschool campus.
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
                    <p className="text-xs text-stone-600 leading-relaxed">{area.desc}</p>
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
        <section className="py-20 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <span>Roadmap to Launch</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Your Chocolate Kids Franchise Journey
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
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 20: FRANCHISE FAQ (11 QUESTIONS)
           ================================================== */}
        <section id="franchise-faq" className="py-20 bg-white border-b border-stone-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Franchise Partner FAQs
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                Transparent answers to common questions about starting and managing a Chocolate Kids preschool.
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
                        {faq.q}
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
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Section CTA (Section 23: After FAQ) */}
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
            SECTION 21 & 22: FRANCHISE ENQUIRY FORM & WHATSAPP
           ================================================== */}
        <section id="enquiry-form" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/40 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
                <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                <span>Application Process</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Start Your Chocolate Kids Franchise Journey
              </h2>
              <p className="mt-3 text-base text-stone-600 max-w-xl mx-auto">
                Submit your details below. Our franchise team will review your application and reach out to schedule an introductory conversation.
              </p>
            </div>

            <FranchiseForm />
          </div>
        </section>

        {/* ==================================================
            SECTION 23: BOTTOM FRANCHISE CTA
           ================================================== */}
        <section className="py-16 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Ready to Build Your Chocolate Kids Preschool?
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
