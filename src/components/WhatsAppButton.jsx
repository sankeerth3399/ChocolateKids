import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { schoolInfo } from "../data";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const isFranchise = location.pathname === "/franchise";
  const defaultMsg = isFranchise
    ? "Hello Chocolate Kids Team, I am interested in the franchise opportunity. Please share the franchise details."
    : "Hello Chocolate Kids Team, I would like to enquire about preschool admissions for my child.";

  const label = isFranchise ? "Talk to Franchise Team" : "Chat on WhatsApp";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <aside
      aria-label={label}
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-2"
    >
      {/* Pill label on hover */}
      <span
        role="tooltip"
        className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 text-white text-xs font-semibold shadow-xl border border-white/10 transition-all duration-300 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span>{label}</span>
      </span>

      {/* Floating WhatsApp Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center gap-2 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label={`${label} (opens in new tab)`}
        title={label}
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 shrink-0" />
      </a>
    </aside>
  );
}
