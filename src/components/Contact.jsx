import React from "react";
import { Phone, Mail, MessageCircle, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolInfo, branches } from "../data";
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
          <div className="p-7 rounded-3xl bg-[#FFF9F0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
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
          <div className="p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
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
          <div className="p-7 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
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
            Campus Locations & Branches Section (All 3 Branches)
           ================================================== */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Campus Locations</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
              Visit Our Branches
            </h3>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm">
              Personal campus tours available Monday to Saturday across all three campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {branches.map((branch) => (
              <div
                key={`contact-branch-${branch.id}`}
                className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-200/80 text-amber-950">
                      {branch.branchNo}
                    </span>
                    <span className="text-xs font-bold text-stone-500">
                      {branch.location}
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-xl text-stone-900 mb-2">
                    {branch.name}
                  </h4>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="font-medium whitespace-pre-line">{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800 mb-5">
                    <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>+91 {branch.phone}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-100 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-stone-800 bg-white border border-stone-200 hover:bg-stone-100 transition-colors"
                      title={`Call ${branch.name}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-stone-700" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/91${branch.phone}?text=${encodeURIComponent(
                        `Hello Chocolate Kids, I would like to enquire about your ${branch.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                      title={`WhatsApp ${branch.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-2xs"
                      title="Open Google Maps Directions"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>
                    <Link
                      to={`/branches/${branch.slug}`}
                      className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
