import { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { franchiseFAQs, schoolInfo } from "../data";
import { highlightBrand, BrandBadge } from "../utils/brandHelper";

export default function FranchiseFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="franchise-faq" className="py-20 bg-stone-50/60 border-t border-amber-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Franchise Partner FAQs
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Clear, transparent answers to help you evaluate the <BrandBadge isInline className="text-[0.85em]" /> preschool partnership.
          </p>
        </div>

        {/* 10 FAQs Accordion */}
        <div className="space-y-3.5">
          {franchiseFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-stone-200/90 bg-white overflow-hidden transition-all duration-200 shadow-2xs hover:border-amber-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    <span className="text-amber-600 mr-2 font-mono text-sm sm:text-base">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                    </span>
                    {highlightBrand(faq.q)}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-amber-100 text-amber-800 rotate-180" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{highlightBrand(faq.a)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-base text-stone-900">
              Have another question not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Speak directly with our franchise coordinator for clear guidance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${schoolInfo.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-amber-950 bg-white border border-amber-300 hover:bg-amber-100 transition-colors shadow-2xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>{schoolInfo.phoneFormatted || schoolInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(
                "Hello Chocolate Kids Team, I have a few specific questions regarding the franchise opportunity."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
