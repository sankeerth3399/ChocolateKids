import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Contact from "../components/Contact";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-amber-100/60 to-transparent py-14 sm:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/70 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
              <span>Contact</span> <BrandBadge className="text-[0.75em]" />
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
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
