import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import AdmissionsCTA from "../components/AdmissionsCTA";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";
import { Users, Heart, Award, Shield, Sparkles } from "lucide-react";
import { schoolPhilosophy } from "../data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-amber-100/60 to-transparent py-14 sm:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/70 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span>About Our School</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
              Learning Today. Growing Tomorrow.
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              At <BrandBadge isInline className="text-[0.88em]" />, we believe every child arrives with an innate spark of wonder. Our mission is to nurture that curiosity into lasting confidence through love, play, and thoughtful early education.
            </p>
          </div>
        </section>

        {/* Detailed Philosophy & Visual Storytelling */}
        <About />

        {/* Deep Dive into Pillars & Commitments */}
        <section className="py-16 bg-white border-t border-amber-100/60 relative overflow-hidden">
          {/* Brand Logo Watermark - Large Centered Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.12} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900">
                Our Commitments to Parents & Children
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base">
                Four foundational promises that guide daily care, classroom routines, and child safety across both campuses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                  Supporting Families
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Delivering a high standard of preschool education to develop and improve each child's quality of life while supporting parents.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                  Individual Respect
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Respecting each child as an individual and taking their unique personality, learning pace, and emotional needs into careful account.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                  Trained & Sensitive Staff
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Ensuring all teachers and caregivers are rigorously recruited, trained, and supervised in gentle child psychology and early safety.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                  Safe & Friendly Space
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Providing a clean, healthy, and emotionally supportive atmosphere where laughter, friendships, and early learning thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <WhyChooseUs />

        {/* Admissions CTA */}
        <AdmissionsCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
