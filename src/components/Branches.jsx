import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, ExternalLink, X, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { branches, schoolInfo } from "../data";

export default function Branches() {
  const [selectedCampus, setSelectedCampus] = useState(null);

  // 4 Campuses / Zones modeled after the Pallavi Kidz multi-campus showcase
  const campuses = [
    {
      id: "dammaiguda",
      name: "Dammaiguda",
      badge: "Main Campus",
      image: "/images/rich_preschool_hero.jpg",
      address: "H.No. 11-1/66, Sai Priya Colony, Dammaiguda, Hyderabad - 500 083",
      phone: "9515869889",
      email: "chocolatekids1@gmail.com",
      link: "/branches/dammaiguda",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Priya+Colony+Dammaiguda+Hyderabad",
      timings: "8:30 AM – 1:30 PM",
      features: ["Spacious Classrooms", "Indoor Play Zone", "CCTV Monitored", "RO Drinking Water"],
    },
    {
      id: "kapra",
      name: "Kapra",
      badge: "Branch Campus",
      image: "/images/blue-colour-day-celebration.jpg",
      address: "P. No. 46, 47, Shalivahana Colony, Near Anurag Line, Yellareddyguda, KAPRA, HYD - 062",
      phone: "9515869889",
      email: "chocolatekids1@gmail.com",
      link: "/branches/kapra-yellareddyguda",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Shalivahana+Colony+Kapra+Hyderabad",
      timings: "8:30 AM – 1:30 PM",
      features: ["Activity Studio", "Outdoor Turf Area", "Phonics Corner", "Safe Drop-off Zone"],
    },
    {
      id: "as-rao-nagar",
      name: "AS Rao Nagar",
      badge: "Transit & Daycare Hub",
      image: "/images/school-van-safety-care.jpg",
      address: "Adjacent to Kapra & Sainikpuri Main Corridor, Hyderabad - 500 062",
      phone: "9515869889",
      email: "chocolatekids1@gmail.com",
      link: "/branches/kapra-yellareddyguda",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=AS+Rao+Nagar+Kapra+Hyderabad",
      timings: "8:30 AM – 6:00 PM (Extended)",
      features: ["GPS School Van Route", "Attendant Accompanied", "Extended Daycare", "Early Learning Hub"],
    },
    {
      id: "sainikpuri",
      name: "Sainikpuri",
      badge: "Admissions & Transit Zone",
      image: "/images/Chocolate_Kids_Enhanced_02.jpg",
      address: "Vayupuri - Sainikpuri Residential Cluster, Secunderabad / Hyderabad",
      phone: "9515869889",
      email: "chocolatekids1@gmail.com",
      link: "/branches/dammaiguda",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sainikpuri+Hyderabad",
      timings: "8:30 AM – 1:30 PM",
      features: ["Direct Doorstep Transit", "Parent Liaison Desk", "Playgroup & Nursery", "Curriculum Aligned"],
    },
  ];

  return (
    <section id="branches" className="py-16 sm:py-24 bg-[#FFFCF7] relative overflow-hidden">
      {/* Background Playful Road Ribbon (exact match to reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-80"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grey road ribbon base */}
          <path
            d="M-50 260 C 250 320, 480 180, 720 250 C 960 320, 1180 190, 1500 270"
            stroke="#E2E8F0"
            strokeWidth="32"
            strokeLinecap="round"
          />
          {/* White dashed centerline */}
          <path
            d="M-50 260 C 250 320, 480 180, 720 250 C 960 320, 1180 190, 1500 270"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="12 12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Left-aligned as in reference) */}
        <div className="mb-10 sm:mb-12">
          {/* Pill Badge: Our Campuses */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-[#FDA4AF] bg-[#FFF1F2] text-[#F43F5E] text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-2xs">
            Our Campuses
          </div>

          {/* Heading: Explore Our Campuses */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            <span className="text-[#FF5B89]">Explore </span>
            <span className="text-[#02A6E9]">Our Campuses</span>
          </h2>
        </div>

        {/* 4 Campuses Row (Exact match to reference cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-start">
          {campuses.map((campus) => (
            <div key={campus.id} className="flex flex-col group">
              {/* Photo Card with Rounded Corners & Dark Gradient Overlay */}
              <div className="relative w-full aspect-[3/3.8] rounded-3xl overflow-hidden bg-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1.5 border border-slate-100">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Dark Vignette / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Optional Top Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/90 text-slate-800 backdrop-blur-xs shadow-2xs">
                    {campus.badge}
                  </span>
                </div>

                {/* Campus Name at Bottom Left */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <h3 className="font-heading font-black text-2xl sm:text-[26px] text-white tracking-wide drop-shadow-sm leading-tight">
                    {campus.name}
                  </h3>
                </div>
              </div>

              {/* Action Buttons underneath (Phone, Mail, View Campus) */}
              <div className="flex items-center gap-2 mt-4 w-full px-0.5">
                {/* Circular Phone Button */}
                <a
                  href={`tel:${campus.phone}`}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#02A6E9] hover:text-[#02A6E9] flex items-center justify-center text-slate-700 transition-all shrink-0 cursor-pointer"
                  title={`Call ${campus.name} campus`}
                  aria-label={`Call ${campus.name} campus`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Circular Mail Button */}
                <a
                  href={`mailto:${campus.email}?subject=Admission Enquiry - ${campus.name} Campus`}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#FF5B89] hover:text-[#FF5B89] flex items-center justify-center text-slate-700 transition-all shrink-0 cursor-pointer"
                  title={`Email ${campus.name} campus`}
                  aria-label={`Email ${campus.name} campus`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Pill View Campus Button */}
                <Link
                  to={campus.link}
                  className="flex-1 h-11 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-800 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer"
                >
                  View Campus
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Campus Finder Link */}
        <div className="mt-12 text-center">
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-xs transition-all"
          >
            <MapPin className="w-4 h-4 text-[#FF5B89]" />
            <span>View All Campus Locations & Route Maps</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>

      </div>
    </section>
  );
}
