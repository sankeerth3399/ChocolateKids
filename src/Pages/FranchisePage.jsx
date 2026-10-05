import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  ArrowDown,
  CheckCircle2, 
  Check,
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Megaphone,
  MapPin,
  Heart,
  Users,
  Lightbulb,
  TrendingUp,
  Package,
  Layers,
  Monitor,
  Palette,
  ChevronDown,
  HelpCircle,
  BookCheck
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FranchiseHero from "../components/FranchiseHero";
import FranchiseOpportunityWidget from "../components/FranchiseOpportunityWidget";
import FranchiseForm from "../components/FranchiseForm";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge, highlightBrand } from "../utils/brandHelper";
import { 
  schoolInfo, 
  franchiseSupportItems, 
  franchiseMaterialsList, 
  franchiseFAQs 
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
    metaDesc.content = "Explore the Chocolate Kids Preschool Franchise Opportunity. Partner with a trusted brand in early childhood education. Proven curriculum, complete support, low to moderate investment, and high returns with long-term growth.";
  }, []);

  const franchiseWaMsg = "Hello Chocolate Kids, I am interested in the Chocolate Kids franchise opportunity. Please share the details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseWaMsg)}`;

  const iconMap = {
    GraduationCap,
    Lightbulb,
    Users,
    TrendingUp,
    MapPin,
    Heart,
    ShieldCheck,
    BookOpen,
    Megaphone,
    Award,
    Sparkles,
    CheckCircle2,
    Package,
    Layers,
    Monitor,
    Palette
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
      <Navbar />

      <main>
        {/* ==================================================
            1. FRANCHISE HERO
            - Eyebrow badge
            - Heading: "Franchise Opportunity"
            - Supporting heading: "Join the Chocolate Kids Family"
            - Supporting text: "Be a part of a trusted brand in early childhood education and help build brighter futures, one child at a time."
            - Strong CTA: [ ENQUIRE ABOUT FRANCHISE ], Secondary: [ WHATSAPP US ]
            - Centered, uncropped official supplied banner
           ================================================== */}
        <FranchiseHero onScrollToSection={scrollToSection} />

        {/* ==================================================
            CHOCOLATE KIDS FRANCHISE OPPORTUNITY
            ONE LARGE UNIFIED PREMIUM INTERACTIVE WIDGET
           ================================================== */}
        <FranchiseOpportunityWidget onScrollToSection={scrollToSection} />

        {/* ==================================================
            10. FRANCHISE SUPPORT
            - Highlighting support mentioned in the supplied material:
              - Training (Teacher training program, staff training, professional skill development)
              - Operations (Operational manual, complete setup guidance)
              - Marketing assistance (Approved branding, enrollment support)
              - Setup guidance
              - Operational manual
              - Ongoing mentorship
              - Staff training
              - Teacher training
              - Curriculum and learning materials
           ================================================== */}
        <section id="franchise-support" className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-amber-200/60 relative overflow-hidden">
          {/* Centered Transparent Brand Logo Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.12} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 border border-amber-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
                <span>Partner Enablement</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Complete Support for Your Success!
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Hands-on guidance and structured institutional frameworks to help you launch and manage your campus with total peace of mind.
              </p>
            </div>

            {/* Support Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Pillar 1: Training & Staff Development */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                  Teacher & Staff Training
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Teacher Training Program, Staff Training & Development, Professional Training & Development, and School Staff Development Program.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Teacher Training Program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Staff Capacity Building Training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Team Training & Development</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Setup Guidance & Operational Manual */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                  Setup & Operational Manual
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Complete setup guidance for classroom planning, frosted glass branding, child safety norms, and a comprehensive operational manual.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Complete Setup Guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Operational Manual & Checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Frosted Glass Branding Setup</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Curriculum & Learning Materials */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#FF5B89] flex items-center justify-center mb-5">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                  Curriculum & Learning Materials
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Full early childhood curriculum, learning materials, digital learning screen, soft toy collection, and wooden educational materials.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Curriculum & Learning Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Wooden Educational Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Digital Learning Screen</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4: Marketing Assistance */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                  Marketing Assistance
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Approved marketing support, brand identity & logo use, local parent outreach collaterals, and admissions campaign assistance.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Brand Identity & Logo Use</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Marketing Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Admissions Drive Collaterals</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 5: Ongoing Mentorship */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                  Ongoing Mentorship
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Continuous operational guidance, pedagogy upgrades, center performance mentorship, and legal registration support.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ongoing Mentorship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Operations Assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Legal Registration Guidance</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 6: Dedicated Helpline & Communication */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-stone-900 mb-2">
                    Direct Partner Helpline
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Speak directly with our dedicated franchise team for any clarifications, property evaluations, or setup inquiries.
                  </p>
                  <p className="text-sm font-black text-amber-950">
                    Call: {schoolInfo.phone}
                  </p>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            11. FRANCHISE MATERIALS VISUAL SECTION
            - Visually introducing the materials shown in the official banner:
              - Teacher training manual
              - Curriculum guide
              - Branded merchandise & Bags
              - Educational & Activity materials
              - Soft toys & Wooden learning resources
           ================================================== */}
        <section id="franchise-materials" className="py-20 sm:py-28 bg-stone-50/70 border-b border-amber-200/60 relative overflow-hidden">
          {/* Centered Logo Watermark */}
          <BrandWatermark position="center" size="xl" opacity={0.12} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 border border-amber-200 shadow-2xs">
                <Palette className="w-3.5 h-3.5 text-amber-800" />
                <span>Kit & Material Showcase</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Franchise Learning & Operational Materials
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                As displayed in our official franchise banner, every branch is equipped with standardized, child-safe curriculum guides, manuals, merchandise, and sensorial kits.
              </p>
            </div>

            {/* 4 Visual Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Material 1: Teacher Training Manual */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    Official Manual
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 mt-2.5 mb-2">
                    Teacher Training Manual
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Step-by-step classroom choreography, phonics routines, circle-time guides, and daily lesson plans for educators.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standardized Pedagogy</span>
                </div>
              </div>

              {/* Material 2: Curriculum Guide */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#FF5B89] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5B89] bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                    Academic Syllabus
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 mt-2.5 mb-2">
                    Curriculum Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Complete year-round early childhood framework covering Play Group, Nursery, PP-1 / LKG, and PP-2 / UKG milestones.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Age-Graded Modules</span>
                </div>
              </div>

              {/* Material 3: Branded Merchandise & Bags */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                    Official Merch
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 mt-2.5 mb-2">
                    Branded Merchandise & Bags
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Official Chocolate Kids polo shirts, premium school bags, stainless steel tumblers, branded folders, and stationery.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consistent Brand Identity</span>
                </div>
              </div>

              {/* Material 4: Soft Toys & Wooden Materials */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Sensory Resources
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 mt-2.5 mb-2">
                    Soft Toys & Wooden Materials
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Soft toy collection, child-safe wooden educational materials, tactile manipulatives, and wooden activity puzzles.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tactile & Sensory Play</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            9. COMPLETE SUPPORT MESSAGE (STRONG VISUAL CTA)
            - "Everything you need to start, succeed and grow!"
            - "Complete Support for Your Success!"
            - Large typography, soft gradient, logo watermark
            - WhatsApp CTA, Franchise Enquiry CTA
           ================================================== */}
        <section className="py-20 sm:py-24 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white relative overflow-hidden">
          {/* Centered Logo Watermark */}
          <BrandWatermark position="center" size="xl" opacity={0.15} className="filter invert" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Everything You Need to Start, Succeed and Grow!</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Complete Support for Your Success!
            </h2>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Be a part of our growing family! Let's build a brighter future together with a trusted early education preschool brand.
            </p>

            {/* Helpline Callout */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-amber-300 font-mono text-xl sm:text-2xl font-black">
              <Phone className="w-6 h-6 text-amber-400" />
              <a href="tel:9515869889" className="hover:underline">
                9515869889
              </a>
            </div>

            {/* Strategic CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("enquiry-form")}
                className="px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <span>Explore Franchise Opportunity</span>
                <ArrowDown className="w-4 h-4 text-amber-950" />
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm shadow-md transition-all flex items-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Talk to Our Franchise Team</span>
              </a>

              <a
                href="tel:9515869889"
                className="px-6 py-4 rounded-full text-sm sm:text-base font-bold text-stone-300 hover:text-white bg-transparent hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call 9515869889</span>
              </a>
            </div>

          </div>
        </section>

        {/* ==================================================
            13 & 14. FRANCHISE ENQUIRY FORM & WHATSAPP FLOW
            - Name, Phone, Email, City, Preferred Location, Investment Range, Experience, Message
            - Open WhatsApp prefilled on submit
           ================================================== */}
        <section id="enquiry-form" className="py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF9] via-amber-50/40 to-white relative overflow-hidden">
          {/* Centered Transparent Brand Logo Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.12} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
                <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                <span>Franchise Application</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Submit Your Franchise Enquiry
              </h2>
              <p className="mt-3 text-base text-stone-600 max-w-xl mx-auto">
                Fill out the form below. Once submitted, our team will connect directly on WhatsApp to guide you through site selection and partnership terms.
              </p>
            </div>

            <FranchiseForm />

          </div>
        </section>

        {/* ==================================================
            FAQ SECTION (TRANSPARENCY & CLARITY)
           ================================================== */}
        <section id="franchise-faq" className="py-20 bg-stone-50/80 border-t border-stone-200/80 relative overflow-hidden">
          <BrandWatermark position="center" size="lg" opacity={0.10} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Transparency & Clarity</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Franchise Partner FAQs
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                Clear answers to common questions about starting and managing a <BrandBadge isInline className="text-[0.85em]" /> preschool.
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

            {/* Quick Contact Bar below FAQ */}
            <div className="mt-12 p-6 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-base text-stone-900">
                  Have another question not covered here?
                </h4>
                <p className="text-xs sm:text-sm text-stone-600">
                  Speak directly with our franchise team: <a href="tel:9515869889" className="font-bold text-amber-900 hover:underline">9515869889</a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:9515869889"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 transition-colors shrink-0"
                >
                  <Phone className="w-4 h-4 text-stone-600" />
                  <span>Call 9515869889</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
