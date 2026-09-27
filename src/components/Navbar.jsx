import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ArrowRight, MapPin, Briefcase } from "lucide-react";
import { schoolInfo } from "../data";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleEnquireClick = (e) => {
    closeMenu();
    if (location.pathname === "/") {
      e.preventDefault();
      if (onOpenEnquiry) {
        onOpenEnquiry();
      } else {
        const el = document.getElementById("admissions");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", "#admissions");
        }
      }
    }
  };

  const handleNavClick = (e, item) => {
    closeMenu();
    if (item.href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = item.href.replace("/#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/#home", page: "/" },
    { name: "About Us", href: "/#about", page: "/about" },
    { name: "Academics", href: "/#academics", page: "/academics" },
    { name: "Activities", href: "/#activities", page: "/activities" },
    { name: "Gallery", href: "/#gallery", page: "/gallery" },
    { name: "Events", href: "/#events", page: "/events" },
    { name: "Facilities", href: "/#facilities", page: "/facilities" },
    { name: "Branches", href: "/branches", page: "/branches", isPage: true },
    { name: "Admissions", href: "/#admissions", page: "/admissions" },
    { name: "Franchise", href: "/franchise", page: "/franchise", highlight: true, isPage: true },
    { name: "Contact", href: "/#contact", page: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-md py-2 border-b border-amber-200/80"
            : location.pathname === "/"
              ? "bg-white/40 md:bg-white/20 backdrop-blur-md py-3.5 border-b border-white/30"
              : "bg-white/95 md:bg-white/90 backdrop-blur-md py-3.5 border-b border-amber-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  const hero = document.getElementById("home");
                  if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
                  else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }
                closeMenu();
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
            >
              <img
                src="/logo.png"
                alt="Chocolate Kids Preschool Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-amber-950 leading-none">
                  Chocolate <span className="text-amber-600">Kids</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-emerald-700 mt-0.5">
                  Innovative Learning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - All 11 Links in Exact Specified Sequence */}
            <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
              {navLinks.map((item) => {
                if (item.highlight) {
                  return (
                    <Link
                      key={item.name}
                      to={item.page}
                      onClick={closeMenu}
                      className="px-2.5 py-1.5 rounded-full text-xs font-black text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 shadow-2xs transition-all duration-200 ml-1 flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                      <span>{item.name}</span>
                    </Link>
                  );
                }

                if (item.isPage) {
                  return (
                    <Link
                      key={item.name}
                      to={item.page}
                      onClick={closeMenu}
                      className="px-2 2xl:px-2.5 py-1.5 rounded-full text-xs 2xl:text-[13px] font-bold text-stone-700 hover:text-amber-900 hover:bg-amber-50/90 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="px-2 2xl:px-2.5 py-1.5 rounded-full text-xs 2xl:text-[13px] font-bold text-stone-700 hover:text-amber-900 hover:bg-amber-50/90 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons (Parent & Admissions Focused) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors border border-amber-200/80"
                title="Call Chocolate Kids"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>{schoolInfo.phoneFormatted || schoolInfo.phone}</span>
              </a>

              {/* Admissions CTA Button */}
              <a
                href={location.pathname === "/" ? "#admissions" : "/#admissions"}
                onClick={handleEnquireClick}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-amber-400/40 cursor-pointer"
              >
                <span>Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-stone-700 hover:text-amber-800 hover:bg-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs xl:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out transform xl:hidden flex flex-col justify-between overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Chocolate Kids Logo"
                className="h-9 w-auto"
              />
              <span className="font-heading font-bold text-lg text-amber-950">
                Chocolate <span className="text-amber-600">Kids</span>
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((item) => {
              if (item.highlight) {
                return (
                  <Link
                    key={item.name}
                    to="/franchise"
                    onClick={closeMenu}
                    className="px-4 py-2.5 rounded-xl text-base font-extrabold text-amber-950 bg-amber-100 border border-amber-300 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-amber-800" />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-200 text-amber-950">
                      Opportunity
                    </span>
                  </Link>
                );
              }

              if (item.isPage) {
                return (
                  <Link
                    key={item.name}
                    to={item.page}
                    onClick={closeMenu}
                    className="px-4 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:text-amber-800 hover:bg-amber-50 active:bg-amber-100 transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {item.name === "Branches" && (
                      <MapPin className="w-4 h-4 text-amber-600" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-stone-700 hover:text-amber-800 hover:bg-amber-50 active:bg-amber-100 transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col gap-3">
            <a
              href={location.pathname === "/" ? "#admissions" : "/#admissions"}
              onClick={handleEnquireClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md"
            >
              <span>Admissions Enquiry 2026-27</span>
              <ArrowRight className="w-4 h-4 text-amber-200" />
            </a>

            <Link
              to="/branches"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Find Nearest Campus</span>
            </Link>

            <a
              href={schoolInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${schoolInfo.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-600" />
              <span>Call: {schoolInfo.phone}</span>
            </a>
          </div>
        </div>

        <div className="p-4 bg-amber-50/60 border-t border-amber-100 text-center">
          <p className="text-xs text-stone-500 font-medium">
            Sai Priya Colony & Shalivahana Colony, Hyd
          </p>
        </div>
      </div>
    </>
  );
}
