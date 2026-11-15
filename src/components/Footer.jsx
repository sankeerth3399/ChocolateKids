import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { schoolInfo } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

const CAMPUSES = [
  { name: "Dammaiguda Campus", address: "H.No. 11-1/66, Sai Priya Colony, Dammaiguda, Hyd - 083.", to: "/branches/dammaiguda", img: "/images/campuses/dammaiguda.webp" },
  { name: "Kapra / Yellareddyguda Campus", address: "Shalivahana Colony, Near Anurag Line, KAPRA, Hyd - 062.", to: "/branches/kapra-yellareddyguda", img: "/images/campuses/yellareddyguda.webp" },
  { name: "Yapral Branch", address: "5-8-48/5, Raghava Kalyan Estates, Beside Pochamma Temple, Shaili Garden, Yapral, Hyderabad - 500087", to: "/branches/yapral", img: "/images/campuses/yapral.webp" },
];

export default function Footer() {
  return (
    <footer className="text-[#24364B] pt-12 sm:pt-20 pb-28 sm:pb-14 border-t border-[#D6B56D]/60 relative overflow-hidden bg-[#FFF4DF]">
      {/* Brand Logo Watermark - Visible but Elegant */}
      <BrandWatermark position="bottom-right" size="lg" opacity={0.06} rotate={-6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#E3DACB]">

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
                  src="/logo-sm.webp"
                  width="149"
                  height="96"
                  alt="Chocolate Kids Preschool Logo"
                  className="h-11 w-auto"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <BrandBadge className="text-2xl sm:text-3xl lg:text-3xl leading-none select-none" />
                <span className="text-[10px] sm:text-xs font-bold text-[#C51F45] uppercase tracking-widest block ml-1 mt-1">
                  Innovative Learning
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#536174] leading-relaxed font-normal">
              A child-centered, friendly and safe haven where little minds grow, learn, and shine. Focused on foundational curiosity, gentle care, and active experiential learning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full bg-[#C51F45] hover:bg-[#9E1836] text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#C51F45]" />
                <span>WhatsApp Helpline</span>
              </a>
              <a
                href={`tel:${schoolInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full bg-white hover:bg-[#FFFDF8] ring-1 ring-[#E8E0D4] text-[#142B4A] text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C51F45]" />
                <span>{schoolInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: For Parents (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#142B4A] pb-3 border-b border-[#D6B56D]/50">
              For Parents
            </h3>
            <ul className="space-y-0 lg:space-y-2.5 text-sm">
              <li>
                <Link
                  to="/academics"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Learning Programs (Play–UKG)
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Sensory & Play Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Child-Safe Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="inline-flex items-center gap-1.5 min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  <span>Find a Branch Near You</span>
                  <ArrowRight className="w-3 h-3 text-[#C51F45]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 font-bold text-[#C51F45] hover:text-[#9E1836] transition-colors"
                >
                  Admissions Enquiry →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Franchise Partners (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#142B4A] pb-3 border-b border-[#D6B56D]/50">
              For Franchise Partners
            </h3>
            <ul className="space-y-0 lg:space-y-2.5 text-sm">
              <li>
                <Link
                  to="/franchise"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Franchise Opportunity
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#benefits"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Franchise Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#requirements"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Franchise Process
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#franchise-faq"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 text-[#536174] hover:text-[#C51F45] transition-colors"
                >
                  Franchise FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise#enquiry-form"
                  className="inline-flex items-center min-h-[44px] lg:min-h-0 font-bold text-[#C51F45] hover:text-[#9E1836] transition-colors"
                >
                  Franchise Enquiry →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Locations & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#142B4A] pb-3 border-b border-[#D6B56D]/50">
              Campus Locations
            </h3>

            <div className="space-y-3 text-xs">
              {CAMPUSES.map((c) => (
                <div
                  key={c.to}
                  className="group relative overflow-hidden isolate p-4 rounded-xl bg-white border border-[#E8E0D4] hover:border-[#D6B56D] shadow-sm transition-colors"
                >
                  <img
                    src={c.img}
                    alt=""
                    aria-hidden="true"
                    width="800"
                    height="440"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-20 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/25" />
                  <span className="font-bold text-[#142B4A] block mb-0.5">{c.name}</span>
                  <p className="text-[#3f4f63] leading-snug break-words-safe max-w-[85%]">{c.address}</p>
                  <Link
                    to={c.to}
                    className="inline-flex items-center min-h-[44px] text-xs font-semibold text-[#C51F45] hover:underline"
                  >
                    View Campus Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quick links + contact strip */}
        <div className="py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#E3DACB]">
          <nav aria-label="Footer quick links" className="flex flex-wrap gap-x-6 gap-y-0 lg:gap-y-2 text-sm text-[#536174]">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Programs", "/academics"],
              ["Activities", "/activities"],
              ["Facilities", "/facilities"],
              ["Gallery", "/gallery"],
              ["Branches", "/branches"],
              ["Admissions", "/admissions"],
              ["Franchise", "/franchise"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => {
                  if (window.location.pathname === to) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] lg:min-h-0 hover:text-[#C51F45] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-0 text-sm text-[#536174]">
            <a href={`mailto:${schoolInfo.email}`} className="inline-flex items-center gap-2 min-h-[44px] hover:text-[#C51F45] transition-colors break-all">
              <Mail className="w-4 h-4 text-[#C51F45] shrink-0" />
              <span>{schoolInfo.email}</span>
            </a>
            <a href={`tel:${schoolInfo.phone}`} className="inline-flex items-center gap-2 min-h-[44px] hover:text-[#C51F45] transition-colors">
              <Phone className="w-4 h-4 text-[#C51F45] shrink-0" />
              <span>{schoolInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {schoolInfo.copyrightYear} <BrandBadge isInline className="text-xs" />. All Rights Reserved.
          </div>

          <div className="text-[#64748B]">
            Innovative Learning Preschool • Dammaiguda, Kapra & Yapral, Hyderabad
          </div>
        </div>

      </div>
    </footer>
  );
}
