import { useState, useEffect } from "react";
import { Briefcase, MessageCircle, Phone, ChevronDown, HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FranchiseHero from "../components/FranchiseHero";
import FranchiseShowcase from "../components/FranchiseShowcase";
import FranchiseForm from "../components/FranchiseForm";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge, highlightBrand } from "../utils/brandHelper";
import { schoolInfo, franchiseFAQs } from "../data";

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Chocolate Kids Franchise | Preschool Franchise Opportunity";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore the Chocolate Kids Preschool Franchise Opportunity. Partner with a trusted brand in early childhood education. Proven curriculum, complete support, low to moderate investment, and high returns with long-term growth.";
  }, []);

  const franchiseWaMsg = "Hello Chocolate Kids, I am interested in the Chocolate Kids franchise opportunity. Please share the details.";
  const waUrl = `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(franchiseWaMsg)}`;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
      <Navbar />

      <main>
        {/* ==================================================
            1. FRANCHISE HERO
            - Eyebrow badge
            - Heading: "Franchise Opportunity"
            - Supporting heading: "Join the Chocolate Kids Family"
            - Supporting text: "Be a part of a trusted brand in early childhood education and help build brighter futures, one child at a time."
            - Strong CTA: [ ENQUIRE ABOUT FRANCHISE ], Secondary: [ WHATSAPP US ]
            - Centered, uncropped official supplied banner
           ================================================== */}
        <FranchiseHero onScrollToSection={scrollToSection} />

        {/* Why Franchise, Franchise Kit, Starter Materials, Growing Family CTA */}
        <FranchiseShowcase />

        {/* ==================================================
            13 & 14. FRANCHISE ENQUIRY FORM & WHATSAPP FLOW
            - Name, Phone, Email, City, Preferred Location, Investment Range, Experience, Message
            - Open WhatsApp prefilled on submit
           ================================================== */}
        <section id="enquiry-form" className="py-20 sm:py-28 relative overflow-hidden bg-[#FFFDF8]">
          {/* Centered Transparent Brand Logo Watermark */}
          <BrandWatermark position="center" size="lg" opacity={0.12} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
                <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                <span>Franchise Application</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                Submit Your Franchise Enquiry
              </h2>
              <p className="mt-3 text-base text-stone-600 max-w-xl mx-auto">
                Fill out the form below. Once submitted, our team will connect directly on WhatsApp to guide you through site selection and partnership terms.
              </p>
            </div>

            <FranchiseForm />

          </div>
        </section>

        {/* ==================================================
            FAQ SECTION (TRANSPARENCY & CLARITY)
           ================================================== */}
        <section id="franchise-faq" className="py-14 sm:py-16 border-t border-[#E8DCC9] relative overflow-hidden bg-[#FFF4DF]">
          <BrandWatermark position="center" size="lg" opacity={0.10} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Transparency & Clarity</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Franchise Partner FAQs
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
                Clear answers to common questions about starting and managing a <BrandBadge isInline className="text-[0.85em]" /> preschool.
              </p>
            </div>

            {/* Two side-by-side columns on tablet/desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-3 items-start">
              {[franchiseFAQs.slice(0, Math.ceil(franchiseFAQs.length / 2)), franchiseFAQs.slice(Math.ceil(franchiseFAQs.length / 2))].map((column, colIdx) => {
                const offset = colIdx === 0 ? 0 : Math.ceil(franchiseFAQs.length / 2);
                return (
                  <div key={colIdx} className="space-y-3 min-w-0">
                    {column.map((faq, i) => {
                      const index = offset + i;
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={faq.q}
                          className="rounded-2xl border border-stone-200/90 bg-white overflow-hidden transition-all duration-200 shadow-2xs hover:border-amber-300"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? -1 : index)}
                            className="w-full flex items-center justify-between gap-3 p-4 text-left focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className="font-heading font-bold text-sm sm:text-base text-stone-900 leading-snug">
                              <span className="text-amber-600 mr-1.5 font-mono text-xs sm:text-sm">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                              </span>
                              {highlightBrand(faq.q)}
                            </span>
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                isOpen ? "bg-amber-100 text-amber-800 rotate-180" : "bg-stone-100 text-stone-600"
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                              <p>{highlightBrand(faq.a)}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {/* Quick contact card fills the free slot under the last question */}
                    {colIdx === 1 && (
                      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col gap-2.5">
                        <div>
                          <h4 className="font-heading font-bold text-sm sm:text-base text-stone-900 leading-snug">
                            Have another question not covered here?
                          </h4>
                          <p className="text-xs text-stone-600 mt-0.5">
                            Speak directly with our franchise team: <a href="tel:9515869889" className="font-bold text-amber-900 hover:underline">9515869889</a>
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-700" />
                            <span>Chat on WhatsApp</span>
                          </a>
                          <a
                            href="tel:9515869889"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 transition-colors"
                          >
                            <Phone className="w-4 h-4 text-stone-600" />
                            <span>Call 9515869889</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
