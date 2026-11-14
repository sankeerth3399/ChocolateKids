import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Contact from "../components/Contact";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main>
        {/* Page Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#FAF8F3] to-[#FAF8F3] border-b border-[#EAE3D9] pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-4">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#D6B56D]/25 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-[#922B4B]/10 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#922B4B] mb-5">
              <Phone className="w-3.5 h-3.5 text-[#922B4B]" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#17243A] leading-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
              <span>Contact</span> <BrandBadge className="text-[0.75em]" />
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536174] max-w-2xl mx-auto leading-relaxed">
              We welcome parents to visit our campuses, tour our classrooms, meet our caring educators, and discuss their child's early education needs.
            </p>
          </div>
        </section>

        {/* Contact Details & Direct Enquiry Form */}
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
