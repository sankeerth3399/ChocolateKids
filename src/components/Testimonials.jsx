import React, { useState } from "react";
import { MessageSquare, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { highlightBrand } from "../utils/brandHelper";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Excellent environment and caring teachers. My child loves going to school every day — he wakes up excited and comes home with new stories!",
      name: "Ravi Kumar",
      relation: "Parent of Aarav · Grade 1",
      initials: "RK",
      rating: 5,
      // Pink theme (exact match to card 1)
      cardBg: "bg-[#FFF0F5]",
      border: "border-[#FFE2EC]",
      starColor: "text-[#FB7185] fill-[#FB7185]",
      quoteColor: "text-[#FB7185]/20",
      avatarBg: "bg-[#FB7185]",
    },
    {
      id: 2,
      quote:
        "Safe campus and strong learning structure. We have seen a clear improvement in confidence and communication skills in just a few months.",
      name: "Sneha Reddy",
      relation: "Parent of Nitya · Nursery",
      initials: "SR",
      rating: 5,
      // Sky Blue theme (exact match to card 2)
      cardBg: "bg-[#F0F9FF]",
      border: "border-[#E0F2FE]",
      starColor: "text-[#0EA5E9] fill-[#0EA5E9]",
      quoteColor: "text-[#0EA5E9]/20",
      avatarBg: "bg-[#0EA5E9]",
    },
    {
      id: 3,
      quote:
        "Balanced curriculum, friendly staff, and a warm approach to early childhood learning. Couldn't ask for a better place for our little one.",
      name: "Anita Sharma",
      relation: "Parent of Vihaan · LKG",
      initials: "AS",
      rating: 5,
      // Mint Green theme (exact match to card 3)
      cardBg: "bg-[#F0FDF4]",
      border: "border-[#DCFCE7]",
      starColor: "text-[#10B981] fill-[#10B981]",
      quoteColor: "text-[#10B981]/20",
      avatarBg: "bg-[#10B981]",
    },
    {
      id: 4,
      quote:
        "The teachers shower genuine love and personalized attention on every single child. Phonics, art, and stage activities built our daughter's joy and speaking confidence.",
      name: "Vikram & Madhavi",
      relation: "Parents of Ananya · UKG",
      initials: "VM",
      rating: 5,
      // Soft Lavender / Purple theme
      cardBg: "bg-[#FAF5FF]",
      border: "border-[#F3E8FF]",
      starColor: "text-[#A855F7] fill-[#A855F7]",
      quoteColor: "text-[#A855F7]/20",
      avatarBg: "bg-[#A855F7]",
    },
    {
      id: 5,
      quote:
        "The hygiene standards and female van attendants gave us complete peace of mind. Truly a nurturing second home for preschool children in Hyderabad!",
      name: "Dr. K. Srinivas",
      relation: "Parent of Reyansh · Play Group",
      initials: "KS",
      rating: 5,
      // Soft Amber / Gold theme
      cardBg: "bg-[#FFFBEB]",
      border: "border-[#FEF3C7]",
      starColor: "text-[#F59E0B] fill-[#F59E0B]",
      quoteColor: "text-[#F59E0B]/20",
      avatarBg: "bg-[#F59E0B]",
    },
  ];

  // Total pages calculation for 3 cards visible at a time on desktop
  const maxIndex = testimonials.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Get visible slice of 3 items (with looping)
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % testimonials.length;
      list.push(testimonials[idx]);
    }
    return list;
  };

  const visibleCards = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Pill Badge: Parent Voices */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-purple-200/90 bg-[#FAF7FD] text-[#9333EA] text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>Parent Voices</span>
          </div>

          {/* Heading: Happy Parents, Happy Kids */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            <span className="text-[#FF5B89]">Happy Parents, </span>
            <span className="text-[#02A6E9]">Happy Kids</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            Don't just take our word for it — hear from the families who trust us every day.
          </p>
        </div>

        {/* Carousel Container with Side Arrow Buttons */}
        <div className="relative">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-black hover:scale-105 transition-all cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-black hover:scale-105 transition-all cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 items-stretch">
            {visibleCards.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`p-7 sm:p-8 rounded-[28px] ${item.cardBg} ${item.border} border shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group`}
              >
                {/* Decorative Quotation Mark in Top Right */}
                <div
                  className={`absolute top-5 right-6 text-6xl font-serif font-black select-none pointer-events-none leading-none ${item.quoteColor}`}
                  aria-hidden="true"
                >
                  “
                </div>

                <div>
                  {/* 5 Solid Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${item.starColor}`} />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    "{highlightBrand(item.quote)}"
                  </p>
                </div>

                {/* Author Info Row with Circular Initials Avatar */}
                <div className="flex items-center gap-3 pt-3">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      {item.relation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators at Bottom */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-7 h-2 rounded-full bg-[#FF5B89]"
                    : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
