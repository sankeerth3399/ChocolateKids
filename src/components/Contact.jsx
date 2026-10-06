import React from "react";
import { Phone, Mail, MessageCircle, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolInfo } from "../data";
import BrandWatermark from "./BrandWatermark";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="center" size="lg" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0DD] text-[#5A2E1B] text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200/80 shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#5A2E1B] tracking-tight">
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A2E1B]/80 leading-relaxed font-medium">
            Have questions about admissions, daily routines, or visiting our campuses? Get in touch with our friendly admissions desk.
          </p>
        </div>

        {/* 3 Quick Action Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Direct Phone */}
          <div className="p-5 sm:p-7 rounded-3xl bg-[#FFF9F0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0DD] text-[#F59E0B] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#5A2E1B] mb-1">
                Call Us Directly
              </h3>
              <p className="text-xs text-[#5A2E1B]/75 mb-4">
                Direct phone line for quick admission inquiries & campus visit slots.
              </p>
              <div className="text-lg font-extrabold text-[#5A2E1B] font-mono">
                +91 95158 69889
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-[30px] text-sm font-extrabold text-white bg-[#F59E0B] hover:bg-[#D97706] transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-5 sm:p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-200/70 text-emerald-900 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Instant chat assistance with pre-filled enquiry and quick responses.
              </p>
              <div className="text-lg font-extrabold text-emerald-950 font-mono">
                +91 {schoolInfo.phone}
              </div>
            </div>
            <div className="mt-6">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="p-5 sm:p-7 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-200/80 text-stone-800 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                Send an Email
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                For formal enquiries, records, and detailed partnership correspondence.
              </p>
              <div className="text-sm font-bold text-stone-900 break-all">
                {schoolInfo.email}
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`mailto:${schoolInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-stone-800 bg-stone-200 hover:bg-stone-300 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>
            </div>
          </div>

        </div>

        {/* ==================================================
            Campus Locations Gateway (Links to Our Schools Page)
           ================================================== */}
        <div className="pt-10 border-t border-stone-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-amber-200/80 shadow-xs max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Campus Locations</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 leading-tight">
                Explore Our Schools
              </h3>
              <p className="mt-1 text-stone-600 text-xs sm:text-sm">
                View campus addresses, photos & directions for Dammaiguda, Kapra & Yapral.
              </p>
            </div>
            <Link
              to="/branches"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full text-xs sm:text-sm font-extrabold text-white bg-amber-600 hover:bg-amber-700 shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer text-center"
            >
              <span>View Our Schools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
