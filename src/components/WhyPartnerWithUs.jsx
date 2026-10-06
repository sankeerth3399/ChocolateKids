import { CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { whyPartnerWithUs, schoolInfo } from "../data";
import { BrandBadge } from "../utils/brandHelper";

export default function WhyPartnerWithUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Real Photograph with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background border */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-amber-200 via-orange-100 to-emerald-200 rounded-3xl transform -rotate-1 blur-xs -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 group">
                <img
                  src="/images/cow-shelter-banner-group.jpg"
                  alt="Chocolate Kids official celebration banner and students in uniform"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white font-bold text-xs uppercase tracking-wider mb-2">
                    Established Campus Trust
                  </span>
                  <h4 className="font-heading font-extrabold text-xl text-white">
                    Authentic Community Goodwill
                  </h4>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">
                    Our Dammaiguda, Kapra & Yapral campuses showcase the loving atmosphere, vibrant activities, and parent trust you can build in your city.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-2 sm:-right-5 glass-card p-3 sm:p-4 rounded-2xl shadow-xl border border-amber-200 flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-1rem)]">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-stone-900">Proven Preschool Model</div>
                  <div className="text-[11px] text-stone-500">Child-First & Support-Oriented</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Benefits Checklist & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Mutual Growth & Trust</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight flex flex-wrap items-center gap-2">
                <span>Why Partner With</span> <BrandBadge className="text-3xl sm:text-4xl lg:text-5xl" /><span>?</span>
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                Starting a preschool is a deeply rewarding venture. As a <BrandBadge isInline className="text-base" /> partner, you receive the full backing of our curriculum, brand assets, and operational experience to build a thriving early childhood center.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {whyPartnerWithUs.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-stone-800 leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                to="/franchise#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:to-orange-700 shadow-md transition-colors"
              >
                <span>Request Franchise Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Chocolate Kids Team, I would like to request details about the preschool franchise opportunity."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                <span>Talk to Franchise Team</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
