import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  ArrowRight, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  MessageCircle, 
  ExternalLink 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { branches, schoolInfo } from "../data";

export default function BranchesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Branches | Chocolate Kids Preschool Locations in Hyderabad";
  }, []);

  const filteredBranches = branches.filter((branch) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      branch.name.toLowerCase().includes(term) ||
      branch.location.toLowerCase().includes(term) ||
      branch.address.toLowerCase().includes(term);

    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "dammaiguda") return matchesSearch && branch.slug.includes("dammaiguda");
    if (selectedFilter === "kapra") return matchesSearch && branch.slug.includes("kapra");
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        
        {/* ==================================================
            1. PAGE HERO: FIND A CHOCOLATE KIDS BRANCH NEAR YOU
           ================================================== */}
        <section className="relative bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-[#FFFDF9] py-16 sm:py-20 border-b border-amber-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>Campus Locations • Hyderabad</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight max-w-4xl mx-auto">
              Find a Chocolate Kids Branch Near You
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore our branches and discover a welcoming learning environment for your child. Our child-safe campuses in Dammaiguda and Kapra are thoughtfully designed for joyful foundational learning.
            </p>

            {/* Quick stats mini-bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-stone-700">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Child-Proof Safe Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Indoor & Outdoor Sensory Play
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs">
                <Clock className="w-4 h-4 text-sky-600" />
                Morning & Extended Timings
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================
            2. SEARCH & FILTER SECTION
           ================================================== */}
        <section className="py-8 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by neighborhood, road or colony..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-200 bg-stone-50/50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shrink-0 ${
                    selectedFilter === "all"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  All Campuses ({branches.length})
                </button>
                <button
                  onClick={() => setSelectedFilter("dammaiguda")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shrink-0 ${
                    selectedFilter === "dammaiguda"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  Dammaiguda Campus
                </button>
                <button
                  onClick={() => setSelectedFilter("kapra")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shrink-0 ${
                    selectedFilter === "kapra"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  Kapra / Yellareddyguda
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            3. BRANCH DIRECTORY (CARDS WITH COMPLETE INFO)
           ================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBranches.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-lg mx-auto">
              <MapPin className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                No matching branch found
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                We couldn't find a branch matching "{searchTerm}". Please try a different search or view all branches.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilter("all");
                }}
                className="px-5 py-2.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold hover:bg-amber-200 transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredBranches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Branch Image & Badge Header */}
                  <div>
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-amber-50">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white uppercase tracking-wider shadow-md">
                          {branch.branchNo}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                          {branch.location}
                        </span>
                        <h2 className="font-heading font-extrabold text-2xl text-white">
                          {branch.name}
                        </h2>
                      </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-6 sm:p-8 space-y-5">
                      <p className="text-sm text-stone-600 leading-relaxed font-normal">
                        {branch.description}
                      </p>

                      {/* Info List: Address, Phone, Hours, Email */}
                      <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700 border-t border-stone-100">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{branch.address}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{branch.workingHours || "Mon – Fri: 8:30 AM – 1:30 PM | Sat: 9:00 AM – 12:00 PM"}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs">
                          <a
                            href={`tel:${branch.phone}`}
                            className="inline-flex items-center gap-1.5 font-bold text-stone-800 hover:text-amber-700"
                          >
                            <Phone className="w-3.5 h-3.5 text-amber-600" />
                            <span>{branch.phone}</span>
                          </a>
                          <a
                            href={`mailto:${branch.email}`}
                            className="inline-flex items-center gap-1.5 font-bold text-stone-800 hover:text-amber-700"
                          >
                            <Mail className="w-3.5 h-3.5 text-amber-600" />
                            <span>{branch.email}</span>
                          </a>
                        </div>
                      </div>

                      {/* Available Programs Badges */}
                      <div className="pt-2 border-t border-stone-100">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-2">
                          Available Programs
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(branch.availablePrograms || ["Play Group", "Nursery", "LKG", "UKG"]).map((prog) => (
                            <span
                              key={prog}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200"
                            >
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights checklist */}
                      <div className="pt-2">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-2">
                          Campus Care Features
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                          {branch.highlights.slice(0, 4).map((hl) => (
                            <div key={hl} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Action Buttons */}
                  <div className="p-6 sm:px-8 sm:pb-8 pt-0 flex flex-wrap items-center gap-2.5">
                    <Link
                      to={`/branches/${branch.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-amber-700 hover:bg-amber-800 shadow-sm transition-colors text-center"
                    >
                      <span>View Branch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                      title="Open Google Maps Directions"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-700" />
                      <span>Get Directions</span>
                    </a>

                    <a
                      href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Chocolate Kids, I would like to enquire about your ${branch.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Contact</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>

        {/* ==================================================
            4. MAP & DIRECTIONS SECTION
           ================================================== */}
        <section className="py-16 bg-stone-50 border-t border-amber-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
                <Navigation className="w-3.5 h-3.5 text-amber-700" />
                <span>Google Maps & Navigation</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Visit Our Preschool Campuses
              </h2>
              <p className="mt-2 text-stone-600 text-sm sm:text-base">
                Both campuses are conveniently located in quiet, residential neighborhoods with safe pick-up and drop-off zones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {branches.map((branch) => (
                <div
                  key={`map-${branch.id}`}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-amber-100 text-amber-950">
                        {branch.branchNo}
                      </span>
                      <span className="text-xs font-bold text-stone-500">
                        {branch.location}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      📍 {branch.address}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-stone-100">
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    <Link
                      to={`/branches/${branch.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                    >
                      <span>View Branch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            5. ADMISSIONS CTA FOR PARENTS
           ================================================== */}
        <section className="py-16 bg-white border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-3">
              Ready to Visit a Chocolate Kids Campus?
            </h3>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mb-8">
              Schedule a personalized tour of our classrooms, meet our caring educators, and learn more about our 2026-27 admission process.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#admissions"
                className="px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md transition-colors"
              >
                <span>Fill Admission Form</span>
              </Link>
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
