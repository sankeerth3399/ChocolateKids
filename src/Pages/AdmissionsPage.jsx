import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AdmissionForm from "../components/AdmissionForm";
import { Link } from "react-router-dom";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";
import { Sparkles, Calendar, CheckCircle2, FileText, Users, HelpCircle, MapPin, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  const steps = [
    {
      num: "01",
      title: "Online / Phone Enquiry",
      desc: "Submit your details via our enquiry form or call our admissions helpline at 95158 69889 to initiate contact.",
    },
    {
      num: "02",
      title: "Campus Visit & Teacher Interaction",
      desc: "Visit our Dammaiguda, Kapra, or Yapral campus with your child to observe the friendly environment and interact with our educators.",
    },
    {
      num: "03",
      title: "Enrollment & Registration",
      desc: "Complete the simple admission form with child birth certificate copy and passport photos to secure your child's batch.",
    },
    {
      num: "04",
      title: "Welcome Kit & Orientation",
      desc: (
        <>
          Receive the <BrandBadge isInline className="text-[0.85em]" /> welcome pack, uniform guidance, and parent orientation details for a joyful first school day.
        </>
      ),
    },
  ];

  const faqs = [
    {
      q: "What is the age criteria for Play Group and Nursery?",
      a: "Play Group welcomes children from 1.5 to 2.5 years of age. Nursery welcomes children between 2.5 and 3.5 years of age. Our educators guide each placement based on developmental readiness.",
    },
    {
      q: "What are the school timings?",
      a: "Our core morning preschool session runs from 8:30 AM to 1:00 PM, Monday through Saturday. Extended daycare options can be discussed during campus visits.",
    },
    {
      q: "Is safe transportation available?",
      a: "Yes! Dedicated school vans with careful drivers and female attendants provide safe, door-to-door pick and drop across surrounding residential localities.",
    },
    {
      q: "Do you assist with toilet training?",
      a: "Absolutely. Our caregivers and staff are extremely patient and gently support children in establishing regular, hygienic bathroom routines without pressure.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-amber-100/60 to-transparent py-14 sm:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/70 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Admissions Open for Academic Year 2026-27</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight">
              Give Your Child a Joyful Start
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Begin your child's learning journey with <BrandBadge isInline className="text-[0.88em]" />. Admissions are currently open across Play Group, Nursery, LKG, and UKG at our Dammaiguda, Kapra, and Yapral campuses.
            </p>
          </div>
        </section>

        {/* 4 Step Admission Process */}
        <section className="py-12 bg-white border-y border-amber-100/60 relative overflow-hidden">
          {/* Brand Logo Watermark - Large Centered Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.11} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl text-stone-900 mb-2">
                Simple 4-Step Admission Process
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Transparent and friendly enrollment designed to make joining our preschool seamless for parents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-stone-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading font-extrabold text-2xl text-amber-600 mb-2 block">
                      {st.num}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validated Admission Form */}
        <AdmissionForm />

        {/* Campus Locations Gateway */}
        <div className="py-12 bg-white text-center border-t border-amber-100/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Campus Tours & Locations
                </span>
                <p className="text-sm sm:text-base font-heading font-bold text-stone-900">
                  Admissions Open at Dammaiguda, Kapra & Yapral
                </p>
              </div>
              <Link
                to="/branches"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full text-xs sm:text-sm font-extrabold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs shrink-0 cursor-pointer"
              >
                <span>View Our Schools</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Parent FAQs */}
        <section className="py-16 bg-white border-t border-amber-100/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl text-stone-900">
                Common Admission Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#FFFDF9] border border-stone-200/80 shadow-xs"
                >
                  <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
