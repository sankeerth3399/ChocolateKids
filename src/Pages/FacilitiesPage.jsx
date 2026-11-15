import Facilities from "../components/Facilities";
import AdmissionsCTA from "../components/AdmissionsCTA";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";

export default function FacilitiesPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Campus Infrastructure & Care"
        icon={ShieldCheck}
        title={
        <>
          <span>Campus Facilities at</span> <BrandBadge className="text-[0.75em]" />
        </>
      }
      >
        Safe, vibrant, and thoughtfully designed preschool campuses where little ones explore, play, and learn with absolute safety and comfort.
      </PageHero>

      {/* 6 Facilities Cards with Real Photos */}
      <Facilities />

      {/* Safety & Hygiene Protocol Detail */}
      <section className="py-16 border-t border-[#E8DCC9] bg-[#FFFDF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-2">
                Our Uncompromising Safety & Hygiene Standards
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm">
                Parent peace of mind is our highest priority across our Dammaiguda, Kapra, and Yapral campuses.
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
  );
}
