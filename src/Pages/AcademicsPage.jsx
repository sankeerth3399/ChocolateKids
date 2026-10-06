import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import LearningPrograms from "../components/LearningPrograms";
import LearningApproach from "../components/LearningApproach";
import AdmissionsCTA from "../components/AdmissionsCTA";
import AdmissionForm from "../components/AdmissionForm";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";
import { BookOpen, Sparkles, CheckCircle2, Clock, Award } from "lucide-react";

export default function AcademicsPage() {
  const dailyRhythm = [
    {
      time: "8:30 AM – 9:00 AM",
      title: "Warm Welcome & Circle Gathering",
      desc: "Gentle health greetings, prayer rhyme, calendar talk, and settling in with smiles.",
    },
    {
      time: "9:00 AM – 10:00 AM",
      title: "Core Literacy & Phonics Fun",
      desc: "Interactive phonics cards, sound associations, letter tracing, storytelling, and rhythm.",
    },
    {
      time: "10:00 AM – 10:30 AM",
      title: "Nourishment Break & Polite Table Habits",
      desc: "Healthy snack time, washing hands, saying please & thank you, sharing with friends.",
    },
    {
      time: "10:30 AM – 11:30 AM",
      title: "Sensory, Art & Tactile Craft",
      desc: "Natural clay sculpting, color themes, scissor dexterity, puzzle exploration, and building blocks.",
    },
    {
      time: "11:30 AM – 12:30 PM",
      title: "Physical Play & Music Movement",
      desc: "Indoor soft climbing, umbrella dance, rhythmic pom-poms, balancing games, and outdoor fun.",
    },
    {
      time: "12:30 PM – 1:00 PM",
      title: "Reflective Story Circle & Happy Goodbye",
      desc: "Listening to morals, recalling what we discovered today, packing bags, and joyful departures.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <main className="pt-16 sm:pt-20">
        {/* Full Programs Section matching reference design (including Grade 1 & 2) */}
        <LearningPrograms showGrades={true} />


        {/* Learning Beyond the Classroom Philosophy */}
        <LearningApproach />

        {/* Daily Learning Rhythm */}
        <section className="py-16 bg-white border-t border-amber-100/60 relative overflow-hidden">
          {/* Brand Logo Watermark - Centered Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.11} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Daily Experience</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
                <span>A Day in the Life at</span> <BrandBadge className="text-[0.75em]" />
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base">
                Balanced routines crafted to keep young minds engaged, joyful, well-rested, and excited to return each morning.
              </p>
            </div>

            <div className="space-y-4">
              {dailyRhythm.map((slot, index) => (
                <div
                  key={slot.time}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-stone-200/90 hover:border-amber-300 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="sm:w-1/3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block">
                      {slot.time}
                    </span>
                  </div>
                  <div className="sm:w-2/3">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-stone-900 mb-1">
                      {slot.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {slot.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions CTA & Enquiry Form */}
        <AdmissionsCTA />
        <AdmissionForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
