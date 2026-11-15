import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown, BookOpen, Building2, Images, Palette, CalendarCheck } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";
import useScrollLock from "../hooks/useScrollLock";

/* About Us submenu: one distinct icon and accent per item */
const aboutMenu = [
  {
    to: "/about",
    title: "About Us",
    desc: "Philosophy & Vision",
    Icon: BookOpen,
    tile: "bg-[#C51F45] text-white",
  },
  {
    to: "/facilities",
    title: "Facilities",
    desc: "Smart Rooms & Play Area",
    Icon: Building2,
    tile: "bg-[#174EA6] text-white",
  },
  {
    to: "/activities",
    title: "Activities",
    desc: "Play, Art & Discovery",
    Icon: Palette,
    tile: "bg-[#F26A21] text-white",
  },
  {
    to: "/gallery",
    title: "Gallery",
    desc: "Events & Moments",
    Icon: Images,
    tile: "bg-[#087F83] text-white",
  },
];

/* Desktop navigation pill states (one source of truth, no per-link hover rules) */
const navBase =
  "inline-flex items-center gap-1 px-4 py-2.5 rounded-xl border text-xs xl:text-sm tracking-wide whitespace-nowrap cursor-pointer transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C45B]";
const navIdle =
  "font-semibold text-[#142B4A] border-transparent hover:bg-[#FFE2A3] hover:text-[#922B4B] hover:border-[#F2C45B] hover:shadow-sm";
const navActive =
  "font-bold text-[#C51F45] bg-[#FCE8B2] border-[#F2C45B]/60 shadow-[inset_0_-3px_0_#FFBD16]";
const navOpen = "font-semibold text-[#922B4B] bg-[#FFE2A3] border-[#F2C45B] shadow-sm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();

  // Dropdowns remember the page they were opened on, so they close by themselves after navigation
  const [aboutOpenAt, setAboutOpenAt] = useState(null);
  const [mobileAboutAt, setMobileAboutAt] = useState(null);
  const aboutDropdownOpen = aboutOpenAt === location.pathname;
  const mobileAboutOpen = mobileAboutAt === location.pathname;
  const toggleAt = (setter) => (next) =>
    setter((current) => {
      const open = typeof next === "function" ? next(current === location.pathname) : next;
      return open ? location.pathname : null;
    });
  const setAboutDropdownOpen = toggleAt(setAboutOpenAt);
  const setMobileAboutOpen = toggleAt(setMobileAboutAt);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setAboutOpenAt(null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useScrollLock(mobileMenuOpen);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  // About Us dropdown: close on outside click, Escape, and route change
  useEffect(() => {
    if (!aboutDropdownOpen) return;
    const onPointerDown = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpenAt(null);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setAboutOpenAt(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [aboutDropdownOpen]);

  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about" || location.pathname === "/facilities" || location.pathname === "/gallery" || location.pathname === "/activities";
  const isAdmissionsActive = location.pathname === "/admissions";
  const isProgramsActive = location.pathname === "/academics";
  const isSchoolsActive = location.pathname.startsWith("/branches");
  const isFranchiseActive = location.pathname === "/franchise";
  const isContactActive = location.pathname === "/contact";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-gradient-to-r from-[#FFFDF8] via-[#FFF8E8] to-[#FFE6A3] ${scrolled
          ? "shadow-[0_10px_30px_-14px_rgba(20,43,74,0.30)] py-2"
          : "shadow-[0_1px_0_rgba(20,43,74,0.06)] py-3 sm:py-3.5"
          }`}
      >
        {/* Playful decorations: clipped in their own layer so dropdowns can still overflow the header */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* rainbow, bottom-left edge */}
          <svg className="hidden sm:block absolute -left-5 -bottom-1 w-24 h-auto opacity-90" viewBox="0 0 120 60" fill="none">
            <path d="M0 60C0 27 27 0 60 0s60 27 60 60" stroke="#F04463" strokeWidth="7" opacity=".55" />
            <path d="M10 60C10 32 32 10 60 10s50 22 50 50" stroke="#FFBD16" strokeWidth="7" opacity=".7" />
            <path d="M20 60c0-22 18-40 40-40s40 18 40 40" stroke="#16834A" strokeWidth="7" opacity=".55" />
            <path d="M30 60c0-16 14-30 30-30s30 14 30 30" stroke="#174EA6" strokeWidth="7" opacity=".5" />
          </svg>
          {/* clouds */}
          <svg className="hidden md:block absolute left-[34%] top-1 w-16 opacity-80" viewBox="0 0 64 28" fill="#fff">
            <path d="M10 26a9 9 0 010-18 12 12 0 0122-3 10 10 0 0122 6 8 8 0 010 15z" />
          </svg>
          <svg className="hidden lg:block absolute left-[52%] bottom-1 w-12 opacity-70" viewBox="0 0 64 28" fill="#fff">
            <path d="M10 26a9 9 0 010-18 12 12 0 0122-3 10 10 0 0122 6 8 8 0 010 15z" />
          </svg>
          {/* paper plane with dashed trail */}
          <svg className="hidden lg:block absolute left-[30%] top-1.5 w-28 opacity-90" viewBox="0 0 120 50" fill="none">
            <path d="M2 44c18 6 30-4 26-12-3-7-13-4-10 3 3 6 22 4 40-12" stroke="#F5B000" strokeWidth="1.6" strokeDasharray="4 4" strokeLinecap="round" />
            <path d="M62 22l44-14-14 34-12-10-12 8 2-14z" fill="#FFBD16" />
            <path d="M62 22l44-14-30 24z" fill="#F5A800" />
          </svg>
          {/* small sun, right edge */}
          <svg className="hidden sm:block absolute right-2 top-1.5 w-10 sm:w-12" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="8" fill="#FFBD16" />
            <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" stroke="#FFBD16" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {/* soft yellow shape, bottom-right */}
          <svg className="hidden sm:block absolute right-0 bottom-0 w-24 sm:w-32 h-auto" viewBox="0 0 130 40" fill="#FFBD16" opacity=".55">
            <path d="M0 40c20-2 22-16 44-20s34 8 52-6 22-12 34-14v40z" />
          </svg>
        </div>

        {/* Bottom accent: yellow to orange to burgundy */}
        <div
          className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FFBD16] via-[#F26A21] to-[#C51F45]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-h-[44px] group focus:outline-none focus:ring-2 focus:ring-[#142B4A] rounded-lg p-0.5 sm:p-1"
            >
              <img
                src="/logo-sm.webp"
                width="149"
                height="96"
                alt="Chocolate Kids Preschool Logo"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-start justify-center leading-none">
                <BrandBadge className="text-[clamp(1.1rem,2.8vw,2.15rem)] leading-none select-none tracking-normal" />
                <span className="text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-black tracking-[0.15em] uppercase text-[#142B4A] leading-tight ml-0.5 mt-0.5">
                  Innovative Learning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Home | About Us ▾ | Our Schools | Programs | Franchise | Contact */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {/* Home */}
              <Link
                to="/"
                onClick={() => {
                  closeMenu();
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
                className={`${navBase} ${isHomeActive ? navActive : navIdle}`}
              >
                Home
              </Link>

              {/* About Us: click-driven dropdown (no hover dependency) */}
              <div className="relative" ref={aboutRef}>
                <button
                  type="button"
                  onClick={() => setAboutDropdownOpen((o) => !o)}
                  className={`${navBase} ${isAboutActive ? navActive : aboutDropdownOpen ? navOpen : navIdle}`}
                  aria-expanded={aboutDropdownOpen}
                  aria-haspopup="menu"
                  aria-controls="about-dropdown"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${aboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel: always mounted so it fades without jumping */}
                <div
                  id="about-dropdown"
                  role="menu"
                  className={`absolute top-full left-0 mt-3 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-[#E8E0D4] shadow-[0_22px_44px_-18px_rgba(23,36,58,0.32)] p-2 z-50 transition-all duration-200 ease-out ${aboutDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-1.5 invisible pointer-events-none"
                    }`}
                >
                  <span className="absolute -top-1.5 left-8 w-3 h-3 rotate-45 bg-white border-l border-t border-[#E8E0D4]" aria-hidden="true" />
                  {aboutMenu.map(({ to, title, desc, Icon, tile }) => {
                    const active = location.pathname === to;
                    return (
                      <Link
                        key={to}
                        to={to}
                        role="menuitem"
                        tabIndex={aboutDropdownOpen ? 0 : -1}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBD16] ${active ? "bg-[#FCE8B2]" : "hover:bg-[#FFF1CC]"}`}
                      >
                        {active && <span className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-full bg-[#FFBD16]" aria-hidden="true" />}
                        <div className={`w-11 h-11 rounded-xl ${tile} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5`}>
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0 leading-tight">
                          <div className={`font-semibold text-[15px] transition-colors duration-200 ${active ? "text-[#C51F45]" : "text-[#142B4A] group-hover:text-[#922B4B]"}`}>
                            {title}
                          </div>
                          <div className="mt-0.5 text-xs text-[#64748B]">{desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Our Schools */}
              <Link
                to="/branches"
                onClick={closeMenu}
                className={`${navBase} ${isSchoolsActive ? navActive : navIdle}`}
              >
                Our Schools
              </Link>

              {/* Programs */}
              <Link
                to="/academics"
                onClick={closeMenu}
                className={`${navBase} ${isProgramsActive ? navActive : navIdle}`}
              >
                Programs
              </Link>

              {/* Admissions */}
              <Link
                to="/admissions"
                onClick={closeMenu}
                className={`hidden xl:inline-block px-2.5 xl:px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isAdmissionsActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
              >
                Admissions
              </Link>

              {/* Franchise */}
              <Link
                to="/franchise"
                onClick={closeMenu}
                className={`${navBase} ${isFranchiseActive ? navActive : navIdle}`}
              >
                Franchise
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`${navBase} ${isContactActive ? navActive : navIdle}`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-amber-800 hover:bg-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
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
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[85vw] sm:max-w-xs bg-white transition-[transform,visibility,box-shadow] duration-300 ease-out transform lg:hidden flex flex-col justify-between overflow-y-auto ${mobileMenuOpen ? "translate-x-0 visible shadow-2xl" : "translate-x-full invisible shadow-none"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className="flex items-center gap-2 min-h-[44px] group focus:outline-none"
            >
              <img
                src="/logo-sm.webp"
                width="149"
                height="96"
                alt="Chocolate Kids Logo"
                className="h-8 sm:h-9 w-auto"
              />
              <div className="flex flex-col items-start justify-center leading-none">
                <BrandBadge className="text-xl sm:text-2xl leading-none select-none" />
                <span className="text-[8px] sm:text-[9px] font-black tracking-[0.14em] uppercase text-[#142B4A] leading-tight ml-0.5 mt-0.5">
                  Innovative Learning
                </span>
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-5 sm:mt-6 flex flex-col gap-1.5">
            {/* Home */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-all ${isHomeActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Home
            </Link>

            {/* About Us Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen((o) => !o)}
                aria-expanded={mobileAboutOpen}
                aria-controls="about-accordion"
                className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl text-base font-bold flex items-center justify-between transition-colors ${isAboutActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                  }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180 text-[#142B4A]" : "text-stone-500"
                    }`}
                />
              </button>

              <div
                id="about-accordion"
                className={`grid transition-all duration-300 ease-out ${mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="ml-4 pl-3 border-l-2 border-[#FFBD16]/60 flex flex-col gap-1 mt-1 mb-2">
                    {aboutMenu.map(({ to, title, desc, Icon, tile }) => {
                      const active = location.pathname === to;
                      return (
                        <Link
                          key={to}
                          to={to}
                          onClick={closeMenu}
                          tabIndex={mobileAboutOpen ? 0 : -1}
                          aria-current={active ? "page" : undefined}
                          className={`px-3 py-2.5 min-h-[52px] rounded-xl flex items-center gap-3 transition-colors ${active ? "bg-[#FCE8B2] text-[#C51F45]" : "text-[#142B4A] hover:bg-[#FFE2A3] active:bg-[#FFE2A3]"}`}
                        >
                          <div className={`w-10 h-10 rounded-lg ${tile} flex items-center justify-center shrink-0`}>
                            <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                          </div>
                          <div className="min-w-0 leading-tight">
                            <div className="text-sm font-semibold">{title}</div>
                            <div className="text-[11px] text-[#64748B] mt-0.5">{desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Schools */}
            <Link
              to="/branches"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isSchoolsActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Our Schools
            </Link>

            {/* Programs */}
            <Link
              to="/academics"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isProgramsActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Programs
            </Link>

            {/* Admissions */}
            <Link
              to="/admissions"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isAdmissionsActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Admissions
            </Link>

            {/* Franchise */}
            <Link
              to="/franchise"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isFranchiseActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Franchise
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isContactActive ? "bg-[#FCE8B2] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFE2A3] hover:text-[#922B4B] active:bg-[#FFE2A3]"
                }`}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-stone-200 flex flex-col gap-3">
            {/* Orange Enquire Now Button */}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new CustomEvent("open-admission-modal"));
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[46px] rounded-full text-sm sm:text-base font-bold tracking-wide text-[#142B4A] bg-[#FFBD16] hover:bg-[#FFCB45] shadow-md transition-all cursor-pointer text-center"
            >
              <span>Schedule a Visit</span>
              <CalendarCheck className="w-4 h-4" />
            </button>

            <a
              href={schoolInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${schoolInfo.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-600 shrink-0" />
              <span>Call: {schoolInfo.phone}</span>
            </a>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-amber-50/60 border-t border-amber-100 text-center">
          <p className="text-xs text-stone-600 font-semibold">
            Dammaiguda, Kapra & Yapral, Hyderabad
          </p>
        </div>
      </div>
    </>
  );
}

