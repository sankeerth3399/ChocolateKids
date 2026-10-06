import { Link, useLocation } from "react-router-dom";
import { Sparkles, Briefcase } from "lucide-react";

export default function StickyBottomDualBar({ onOpenAdmission }) {
  const location = useLocation();
  const isFranchise = location.pathname === "/franchise";

  const handleEnrolClick = (e) => {
    e.preventDefault();
    if (onOpenAdmission) {
      onOpenAdmission();
    } else {
      window.dispatchEvent(new CustomEvent("open-admission-modal"));
    }
  };

  return (
    <div 
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] pointer-events-auto"
      role="region"
      aria-label="Quick action admissions and franchise"
    >
      <div className="bg-white/95 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-stone-200/90 shadow-lg shadow-stone-900/15 flex items-center gap-1 sm:gap-2">
        {/* Red Button: Enrol Your Child (Opens Admission Popup) */}
        <button
          type="button"
          onClick={handleEnrolClick}
          className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#C11C38] hover:bg-[#A81730] shadow-xs hover:shadow-sm transition-all duration-200 transform hover:scale-102 active:scale-98 cursor-pointer shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
          <span>Enrol Your Child</span>
        </button>

        {/* Blue Button: Become a Partner (Goes to Franchise) */}
        {isFranchise ? (
          <a
            href="#franchise-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("franchise-form") || document.getElementById("apply");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#194B9E] hover:bg-[#143D82] shadow-xs hover:shadow-sm transition-all duration-200 transform hover:scale-102 active:scale-98 cursor-pointer shrink-0"
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-200 shrink-0" />
            <span>Become a Partner</span>
          </a>
        ) : (
          <Link
            to="/franchise"
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#194B9E] hover:bg-[#143D82] shadow-xs hover:shadow-sm transition-all duration-200 transform hover:scale-102 active:scale-98 cursor-pointer shrink-0"
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-200 shrink-0" />
            <span>Become a Partner</span>
          </Link>
        )}
      </div>
    </div>
  );
}
