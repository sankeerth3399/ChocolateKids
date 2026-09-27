import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Facilities from "../components/Facilities";
import AdmissionsCTA from "../components/AdmissionsCTA";
import { ShieldCheck, Sparkles, CheckCircle2, Car, HeartHandshake } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-amber-100/60 to-transparent py-14 sm:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-200/70 text-sky-950 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
              <span>Campus Infrastructure & Care</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight">
              Our Campus Facilities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Safe, vibrant, and thoughtfully designed preschool campuses where little ones explore, play, and learn with absolute safety and comfort.
            </p>
          </div>
        </section>

        {/* 6 Facilities Cards with Real Photos */}
        <Facilities />

        {/* Safety & Hygiene Protocol Detail */}
        <section className="py-16 bg-white border-t border-amber-100/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-2">
                  Our Uncompromising Safety & Hygiene Standards
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Parent peace of mind is our highest priority across both Dammaiguda and Kapra campuses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Clean, Sanitized Restrooms</span>
                    <span className="text-stone-600">Child-sized toilets, continuous sanitation, and gentle potty-training assistance.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Continuous Teacher Supervision</span>
                    <span className="text-stone-600">No child is ever left unattended in classrooms, activity rooms, or restrooms.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Child-Safe Non-Toxic Materials</span>
                    <span className="text-stone-600">Organic natural clay, edible play dough, rounded furniture edges, and soft flooring.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Dedicated Van Attendants</span>
                    <span className="text-stone-600">Female attendants accompany every van trip to ensure gentle hand-holding during drop-offs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions CTA */}
        <AdmissionsCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
