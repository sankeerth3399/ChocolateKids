import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, MessageCircle, Send, Sparkles } from "lucide-react";
import { schoolInfo } from "../data";

export default function StickyFranchiseBar({ onOpenEnquiry }) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const franchiseMsg = "Hello Chocolate Kids Team, I am interested in the preschool franchise opportunity. Please share the franchise details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseMsg)}`;

  const handleEnquireClick = (e) => {
    if (location.pathname === "/franchise") {
      const el = document.getElementById("franchise-form");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (onOpenEnquiry) {
      e.preventDefault();
      onOpenEnquiry();
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* 1. Desktop Subtle Floating Pill (Bottom Left) */}
      <aside
        aria-label="Franchise Quick Link"
        className="fixed bottom-6 left-6 z-40 hidden md:block transition-all duration-300 transform translate-y-0"
      >
        <Link
          to="/franchise"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold text-amber-950 bg-white/95 hover:bg-white border-2 border-amber-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-md group"
        >
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
          <span>Become a Franchise Partner</span>
          <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
        </Link>
      </aside>

      {/* 2. Mobile Bottom Sticky Action Bar */}
      <aside
        aria-label="Mobile Action Bar"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200 shadow-2xl px-4 py-2.5"
      >
        <div className="flex items-center gap-3 max-w-md mx-auto">
          {/* Enquire Now Button */}
          <Link
            to={location.pathname === "/franchise" ? "#franchise-form" : "/franchise#enquiry"}
            onClick={handleEnquireClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 shadow-md active:scale-98 transition-transform"
          >
            <Send className="w-3.5 h-3.5 text-amber-200" />
            <span>Enquire Now</span>
          </Link>

          {/* WhatsApp Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold text-white bg-emerald-600 shadow-md active:scale-98 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
