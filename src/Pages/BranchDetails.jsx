import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  BookOpen 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { branches, schoolInfo, programs, galleryImages } from "../data";

export default function BranchDetails() {
  const { branchId, slug } = useParams();
  const lookup = branchId || slug;

  const branch = branches.find(
    (item) =>
      item.slug === lookup ||
      item.slug.startsWith(lookup) ||
      lookup.startsWith(item.slug.split("-")[0]) ||
      String(item.id) === lookup
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (branch) {
      document.title = `${branch.name} | Chocolate Kids Preschool Hyderabad`;
    }
  }, [branch]);

  if (!branch) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto my-auto text-center px-4 py-32">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            !
          </div>
          <h1 className="font-heading font-extrabold text-2xl text-stone-900 mb-2">
            Branch Not Found
          </h1>
          <p className="text-stone-600 text-sm mb-6">
            We couldn't locate the campus you are looking for. Please choose one of our official branches.
          </p>
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Branches Directory</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherBranch = branches.find((item) => item.id !== branch.id);
  const branchPhotos = galleryImages.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        
        {/* ==================================================
            1. BRANCH HERO BANNER
           ================================================== */}
        <section className="bg-gradient-to-b from-amber-100/60 via-amber-50/40 to-[#FFFDF9] py-12 sm:py-16 border-b border-amber-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/branches"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950 mb-6 bg-white/90 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Branches Directory</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white uppercase tracking-wider shadow-2xs">
                    {branch.branchNo}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-200">
                    {branch.location}
                  </span>
                </div>

                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight mb-4">
                  {branch.name}
                </h1>

                <div className="flex items-start gap-2.5 text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-stone-700 text-xs sm:text-sm mb-6">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{branch.workingHours || "Mon – Fri: 8:30 AM – 1:30 PM | Sat: 9:00 AM – 12:00 PM"}</span>
                </div>

                <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
                  {branch.description}
                </p>

                {/* Main CTAs: Enquire About This Branch & Get Directions */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Chocolate Kids, I would like to enquire about admissions at ${branch.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-amber-200" />
                    <span>Enquire About This Branch</span>
                  </a>

                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-2xs transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-amber-600" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-stone-500" />
                    <span>Call: {branch.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right: Branch Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 group">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white/95 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                    <span className="font-semibold text-stone-900">{branch.name} Campus</span>
                    <span className="text-emerald-700 font-bold">✓ Child-Proof Safe Facility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            2. AVAILABLE PROGRAMS AT THIS CAMPUS
           ================================================== */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-800" />
              <span>Academic Offerings</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
              Programs Available at {branch.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mb-3">
                    Preschool Level
                  </span>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-1.5">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            3. CAMPUS HIGHLIGHTS & CARE STANDARDS
           ================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
              Campus Highlights & Care Standards
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              Designed around early childhood safety, active play, clean hygiene, and joyful discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branch.highlights.map((hl, idx) => (
              <div
                key={hl}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-stone-900 mb-1">
                    {hl}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Compliant with Chocolate Kids preschool safety and hygiene guidelines.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            4. CAMPUS PHOTO MOMENTS
           ================================================== */}
        <section className="py-14 bg-stone-50 border-t border-amber-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="font-heading font-bold text-2xl text-stone-900">
                  Campus Life in Action
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Real photographs of students engaged in activities, celebrations, and learning.
                </p>
              </div>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
              >
                <span>View Full School Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {branchPhotos.map((photo) => (
                <div key={photo.id} className="h-40 rounded-2xl overflow-hidden bg-white shadow-2xs group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            5. LOCATION & DIRECTIONS MAP BOX
           ================================================== */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                Plan Your Campus Tour
              </span>
              <h3 className="font-heading font-bold text-2xl text-stone-900 mb-2">
                Come and Experience {branch.name}
              </h3>
              <p className="text-sm text-stone-700 max-w-lg mb-4">
                Walk through classrooms, meet our sensitive educators, and see how little children thrive in our care.
              </p>
              <div className="text-xs text-stone-600 font-medium">
                📍 {branch.address}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={branch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-amber-600 hover:bg-amber-700 shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              {otherBranch && (
                <Link
                  to={`/branches/${otherBranch.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 transition-colors"
                >
                  <span>View {otherBranch.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ==================================================
            6. ADMISSION ENQUIRY CTA
           ================================================== */}
        <section className="py-12 max-w-3xl mx-auto text-center px-4">
          <h3 className="font-heading font-bold text-2xl text-stone-900 mb-2">
            Ready to Enroll Your Child at {branch.name}?
          </h3>
          <p className="text-sm text-stone-600 mb-6">
            Send an admission enquiry or chat with our team on WhatsApp for fee details, age eligibility, and campus visit timings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/#admissions"
              className="px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md"
            >
              Fill Admission Form
            </Link>
            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                `Hello Chocolate Kids, I would like to request admission details for ${branch.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
