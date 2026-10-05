import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown, Sparkles, Building2, Image as ImageIcon, MapPin } from "lucide-react";
import { schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about" || location.pathname === "/facilities" || location.pathname === "/gallery";
  const isProgramsActive = location.pathname === "/academics";
  const isSchoolsActive = location.pathname.startsWith("/branches");
  const isFranchiseActive = location.pathname === "/franchise";
  const isContactActive = location.pathname === "/contact";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-stone-200"
          : "bg-white/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3 border-b border-stone-200"
          }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#00A651] rounded-lg p-1"
            >
              <img
                src="/logo.png"
                alt="Chocolate Kids Preschool Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-start gap-0.5">
                <BrandBadge className="text-xs sm:text-sm px-2.5 py-0.5" />
                <span className="text-[10px] font-black tracking-wider uppercase text-[#16A34A] ml-1">
                  Innovative Learning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Home | About Us ▾ | Our Schools | Programs | Franchise | Contact */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4">
              {/* Home */}
              <Link
                to="/"
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${isHomeActive
                    ? "bg-[#EAF8EC] text-[#00A651]"
                    : "text-[#1E293B] hover:text-[#00A651] hover:bg-[#EAF8EC]/70"
                  }`}
              >
                Home
              </Link>

              {/* About Us ▾ with Facilities and Gallery */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-bold transition-colors py-1.5 px-3 rounded-full cursor-pointer hover:bg-stone-50 ${isAboutActive
                      ? "bg-[#EAF8EC] text-[#00A651]"
                      : aboutDropdownOpen
                        ? "text-[#00A651]"
                        : "text-[#1E293B] hover:text-[#00A651]"
                    }`}
                  aria-expanded={aboutDropdownOpen}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180 text-[#00A651]" : isAboutActive ? "text-[#00A651]" : "text-[#1E293B]"
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-2xl shadow-xl border border-stone-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/about"
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EAF8EC] hover:text-[#00A651] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00A651] flex items-center justify-center group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-[#00A651]">About Us</div>
                        <div className="text-[11px] text-stone-500 font-medium">Philosophy & Vision</div>
                      </div>
                    </Link>

                    <Link
                      to="/facilities"
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EAF8EC] hover:text-[#00A651] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-[#00A651]">Facilities</div>
                        <div className="text-[11px] text-stone-500 font-medium">Smart Rooms & Play Area</div>
                      </div>
                    </Link>

                    <Link
                      to="/gallery"
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EAF8EC] hover:text-[#00A651] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-[#00A651]">Gallery</div>
                        <div className="text-[11px] text-stone-500 font-medium">Events & Moments</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Schools */}
              <Link
                to="/branches"
                onClick={closeMenu}
                className={`px-3.5 py-1.5 rounded-full text-sm font-bold transition-all ${isSchoolsActive
                    ? "bg-[#EAF8EC] text-[#00A651]"
                    : "text-[#1E293B] hover:text-[#00A651] hover:bg-[#EAF8EC]/70"
                  }`}
              >
                Our Schools
              </Link>

              {/* Programs */}
              <Link
                to="/academics"
                onClick={closeMenu}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${isProgramsActive
                    ? "bg-[#EAF8EC] text-[#00A651]"
                    : "text-[#1E293B] hover:text-[#00A651] hover:bg-[#EAF8EC]/70"
                  }`}
              >
                Programs
              </Link>

              {/* Franchise */}
              <Link
                to="/franchise"
                onClick={closeMenu}
                className={`px-3.5 py-1.5 rounded-full text-sm font-bold transition-all ${isFranchiseActive
                    ? "bg-[#EAF8EC] text-[#00A651]"
                    : "text-[#1E293B] hover:text-[#00A651] hover:bg-[#EAF8EC]/70"
                  }`}
              >
                Franchise
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`px-3.5 py-1.5 rounded-full text-sm font-bold transition-all ${isContactActive
                    ? "bg-[#EAF8EC] text-[#00A651]"
                    : "text-[#1E293B] hover:text-[#00A651] hover:bg-[#EAF8EC]/70"
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Element: Enquire Now Button (Orange with dark border & 3D shadow) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-admission-modal"))}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-2xl text-sm font-extrabold text-white bg-[#FF7A00] hover:bg-[#F37000] border-2 border-[#1E293B] shadow-[3px_4px_0px_#1E293B] hover:shadow-[1px_2px_0px_#1E293B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer shrink-0"
              >
                <span>Enquire Now</span>
              </button>
            </div>

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
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out transform lg:hidden flex flex-col justify-between overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
              <BrandBadge className="text-xs px-2.5 py-0.5" />
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
            {/* Home */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                window.scrollTo(0, 0);
              }}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-all ${isHomeActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60"
                }`}
            >
              Home
            </Link>

            {/* About Us Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full px-4 py-2.5 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${isAboutActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60"
                  }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-[#00A651]" : "text-stone-500"
                    }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="ml-4 pl-3 border-l-2 border-emerald-200 flex flex-col gap-1 mt-1 mb-2">
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#00A651] hover:bg-emerald-50 flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#00A651]" />
                    <span>About Us</span>
                  </Link>

                  <Link
                    to="/facilities"
                    onClick={closeMenu}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#00A651] hover:bg-emerald-50 flex items-center gap-2"
                  >
                    <Building2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Facilities</span>
                  </Link>

                  <Link
                    to="/gallery"
                    onClick={closeMenu}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#00A651] hover:bg-emerald-50 flex items-center gap-2"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-purple-600" />
                    <span>Gallery</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Our Schools */}
            <Link
              to="/branches"
              onClick={closeMenu}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${isSchoolsActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60 hover:text-[#00A651]"
                }`}
            >
              Our Schools
            </Link>

            {/* Programs */}
            <Link
              to="/academics"
              onClick={closeMenu}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${isProgramsActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60 hover:text-[#00A651]"
                }`}
            >
              Programs
            </Link>

            {/* Franchise */}
            <Link
              to="/franchise"
              onClick={closeMenu}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${isFranchiseActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60 hover:text-[#00A651]"
                }`}
            >
              Franchise
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${isContactActive ? "bg-[#EAF8EC] text-[#00A651]" : "text-stone-700 hover:bg-[#EAF8EC]/60 hover:text-[#00A651]"
                }`}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-stone-200 flex flex-col gap-3">
            {/* Orange Enquire Now Button */}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new CustomEvent("open-admission-modal"));
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-2xl text-base font-extrabold text-white bg-[#FF7A00] hover:bg-[#F37000] border-2 border-[#1E293B] shadow-[3px_4px_0px_#1E293B] active:shadow-[1px_2px_0px_#1E293B] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer text-center"
            >
              <span>Enquire Now</span>
            </button>

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

