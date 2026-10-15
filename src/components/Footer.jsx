import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { schoolInfo, branches } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

export default function Footer() {
  const navLinks = [
    { name: "Home", page: "/" },
    { name: "About Us", page: "/about" },
    { name: "Academics", page: "/academics" },
    { name: "Activities", page: "/activities" },
    { name: "Gallery", page: "/gallery" },
    { name: "Events", page: "/events" },
    { name: "Facilities", page: "/facilities" },
    { name: "Branches", page: "/branches" },
    { name: "Admissions", page: "/admissions" },
    { name: "Franchise", page: "/franchise" },
    { name: "Contact", page: "/contact" },
  ];

  return (
    <footer className="bg-[#0B3D2E] text-stone-200 pt-16 pb-24 sm:pb-14 border-t-4 border-[#00A651] relative overflow-hidden">
      {/* Brand Logo Watermark - Visible but Elegant */}
      <BrandWatermark position="bottom-right" size="lg" opacity={0.08} rotate={-6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">

          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="p-1.5 rounded-xl bg-white shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Chocolate Kids Preschool Logo"
                  className="h-11 w-auto"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <BrandBadge className="text-2xl sm:text-3xl lg:text-3xl leading-none select-none" />
                <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest block ml-1 mt-1">
                  Innovative Learning
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              A child-centered, friendly and safe haven where little minds grow, learn, and shine. Focused on foundational curiosity, gentle care, and active experiential learning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700/90 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>WhatsApp Helpline</span>
              </a>
              <a
                href={`tel:${schoolInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{schoolInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: For Parents (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              For Parents
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/academics"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Learning Programs (Play–UKG)
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Sensory & Play Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Child-Safe Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Find a Branch Near You</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="font-bold text-amber-400 hover:text-amber-300 transition-colors inline-block"
                >
                  Admissions Enquiry 2026-27 →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Franchise Partners (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              For Franchise Partners
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/franchise"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Franchise Opportunity
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#benefits"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Franchise Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#requirements"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Franchise Process
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#franchise-faq"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Franchise FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#enquiry-form"
                  className="font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Franchise Enquiry →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Locations & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Campus Locations
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <span className="font-bold text-white block mb-0.5">
                  Dammaiguda Campus
                </span>
                <p className="text-stone-400 leading-snug break-words-safe">
                  H.No. 11-1/66, Sai Priya Colony, Dammaiguda, Hyd - 083.
                </p>
                <Link
                  to="/branches/dammaiguda"
                  className="text-[11px] text-amber-400 hover:underline mt-1 inline-block"
                >
                  View Campus Details →
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <span className="font-bold text-white block mb-0.5">
                  Kapra / Yellareddyguda Campus
                </span>
                <p className="text-stone-400 leading-snug break-words-safe">
                  Shalivahana Colony, Near Anurag Line, KAPRA, Hyd - 062.
                </p>
                <Link
                  to="/branches/kapra-yellareddyguda"
                  className="text-[11px] text-amber-400 hover:underline mt-1 inline-block"
                >
                  View Campus Details →
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <span className="font-bold text-white block mb-0.5">
                  Yapral Branch
                </span>
                <p className="text-stone-400 leading-snug break-words-safe">
                  5-8-48/5, Raghava Kalyan Estates, Beside Pochamma Temple, Shaili Garden, Yapral, Hyderabad - 500087
                </p>
                <Link
                  to="/branches/yapral"
                  className="text-[11px] text-amber-400 hover:underline mt-1 inline-block"
                >
                  View Campus Details →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Links Navigation Row (Section 26) */}
        <div className="py-6 border-b border-stone-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400">
          <span className="font-bold text-stone-300 uppercase tracking-wider">Quick Navigation:</span>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.page}
              onClick={() => {
                if (window.location.pathname === item.page) {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className="hover:text-amber-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {schoolInfo.copyrightYear} <BrandBadge isInline className="text-xs" />. All Rights Reserved.
          </div>

          <div className="text-stone-500">
            Innovative Learning Preschool • Dammaiguda, Kapra & Yapral, Hyderabad
          </div>
        </div>

      </div>
    </footer>
  );
}
