import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Branches from "../components/Branches";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";

export default function BranchesPage() {
  useEffect(() => {
    document.title = "Our Schools | Chocolate Kids Preschool Branches in Hyderabad";
  }, []);

  return (
    <main>
      
      {/* ==================================================
          1. PAGE HERO: OUR SCHOOLS INTRODUCTION
         ================================================== */}
      <PageHero
        eyebrow="Our Schools • Hyderabad"
        icon={MapPin}
        title={
        <>
          <span>Our Schools at</span> <BrandBadge className="text-[0.72em]" />
        </>
      }
        extra={
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#536174]">

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DCC9] text-[#536174]">
              <ShieldCheck className="w-4 h-4 text-[#D6B56D]" />
              Child-Proof Safe Infrastructure
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DCC9] text-[#536174]">
              Indoor & Outdoor Sensory Play
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DCC9] text-[#536174]">
              <Clock className="w-4 h-4 text-[#D6B56D]" />
              Morning & Extended Timings
            </span>
        </div>
      }
      >
        Explore our branches and discover a welcoming learning environment for your child. Our child-safe campuses in Dammaiguda, Kapra, and Yapral are thoughtfully designed for joyful foundational learning.
      </PageHero>

      {/* ==================================================
          2. VISIT OUR BRANCHES COMPONENT
          (ONE UNIFIED RENDERED SECTION IN THE ENTIRE WEBSITE)
         ================================================== */}
      <Branches />

      {/* ==================================================
          5. ADMISSIONS CTA FOR PARENTS
         ================================================== */}
      <section className="py-16 sm:py-24 bg-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-4xl text-[#142B4A] mb-4 leading-tight">
            Ready to Visit a <span className="text-[#C51F45]">Chocolate Kids</span> Campus?
          </h3>
          <p className="text-base sm:text-lg text-[#536174] max-w-xl mx-auto mb-9 leading-relaxed">
            Schedule a personalized tour of our classrooms, meet our caring educators, and learn more about our admission process.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button as={Link} to="/admissions" variant="accent" className="w-full sm:w-auto">
              <span>Fill Admission Form</span>
            </Button>
            <Button as="a" variant="whatsapp" className="w-full sm:w-auto" href={schoolInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
