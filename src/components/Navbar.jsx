import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown, BookOpen, Building2, Images, Palette, CalendarCheck } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

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

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // About Us dropdown: close on outside click, Escape, and route change
  useEffect(() => {
    if (!aboutDropdownOpen) return;
    const onPointerDown = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutDropdownOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setAboutDropdownOpen(false);
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

  useEffect(() => {
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-[0_10px_30px_-14px_rgba(23,59,115,0.28)] py-2"
          : "bg-white shadow-[0_1px_0_rgba(23,59,115,0.08)] py-3 sm:py-3.5"
          }`}
      >
        {/* Brand-colour accent strip */}
        <div
          className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FFBD16] via-[#F26A21] to-[#C51F45]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
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
              className="flex items-center gap-2 sm:gap-2.5 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#142B4A] rounded-lg p-0.5 sm:p-1"
            >
              <img
                src="/logo.png"
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
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3.5">
              {/* Home */}
              <Link
                to="/"
                onClick={() => {
                  closeMenu();
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
                className={`px-3 xl:px-4 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isHomeActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
              >
                Home
              </Link>

              {/* About Us: click-driven dropdown (no hover dependency) */}
              <div className="relative" ref={aboutRef}>
                <button
                  type="button"
                  onClick={() => setAboutDropdownOpen((o) => !o)}
                  className={`flex items-center gap-1 text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap py-1.5 px-3 rounded-md cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBD16] ${isAboutActive
                      ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                      : aboutDropdownOpen
                        ? "text-[#C51F45]"
                        : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                    }`}
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
                        className={`relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBD16] ${active ? "bg-[#FFFDF8]" : "hover:bg-[#FFFDF8]"}`}
                      >
                        {active && <span className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-full bg-[#FFBD16]" aria-hidden="true" />}
                        <div className={`w-11 h-11 rounded-xl ${tile} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5`}>
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0 leading-tight">
                          <div className={`font-semibold text-[15px] transition-colors duration-200 ${active ? "text-[#C51F45]" : "text-[#142B4A] group-hover:text-[#C51F45]"}`}>
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
                className={`px-2.5 xl:px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isSchoolsActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
              >
                Our Schools
              </Link>

              {/* Programs */}
              <Link
                to="/academics"
                onClick={closeMenu}
                className={`px-2.5 xl:px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isProgramsActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
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
                className={`px-2.5 xl:px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isFranchiseActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
              >
                Franchise
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`px-2.5 xl:px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${isContactActive
                    ? "text-[#C51F45] shadow-[inset_0_-2px_0_#FFBD16]"
                    : "text-[#142B4A] hover:text-[#C51F45] hover:shadow-[inset_0_-2px_0_rgba(255,200,61,0.9)]"
                  }`}
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
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[85vw] sm:max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out transform lg:hidden flex flex-col justify-between overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
              className="flex items-center gap-2 group focus:outline-none"
            >
              <img
                src="/logo.png"
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
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-all ${isHomeActive ? "bg-[#FFF4DF] text-[#142B4A]" : "text-stone-700 hover:bg-[#FFF4DF]/60"
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
                className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl text-base font-bold flex items-center justify-between transition-colors ${isAboutActive ? "bg-[#FFF4DF] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFF4DF]/60"
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
                          className={`px-3 py-2.5 min-h-[52px] rounded-xl flex items-center gap-3 transition-colors ${active ? "bg-[#FFFDF8] text-[#C51F45]" : "text-[#142B4A] hover:bg-[#FFFDF8]"}`}
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
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isSchoolsActive ? "bg-[#FFF4DF] text-[#142B4A]" : "text-stone-700 hover:bg-[#FFF4DF]/60 hover:text-[#142B4A]"
                }`}
            >
              Our Schools
            </Link>

            {/* Programs */}
            <Link
              to="/academics"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isProgramsActive ? "bg-[#FFF4DF] text-[#142B4A]" : "text-stone-700 hover:bg-[#FFF4DF]/60 hover:text-[#142B4A]"
                }`}
            >
              Programs
            </Link>

            {/* Admissions */}
            <Link
              to="/admissions"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isAdmissionsActive ? "bg-[#FFF4DF] text-[#C51F45]" : "text-stone-700 hover:bg-[#FFF4DF]/60 hover:text-[#142B4A]"
                }`}
            >
              Admissions
            </Link>

            {/* Franchise */}
            <Link
              to="/franchise"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isFranchiseActive ? "bg-[#FFF4DF] text-[#142B4A]" : "text-stone-700 hover:bg-[#FFF4DF]/60 hover:text-[#142B4A]"
                }`}
            >
              Franchise
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-base font-bold transition-colors ${isContactActive ? "bg-[#FFF4DF] text-[#142B4A]" : "text-stone-700 hover:bg-[#FFF4DF]/60 hover:text-[#142B4A]"
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

