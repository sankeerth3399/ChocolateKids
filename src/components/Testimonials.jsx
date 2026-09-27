import { Star, MessageCircle, Heart, Quote } from "lucide-react";
import { parentTestimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative border-t border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-700" />
            <span>Parent Experiences</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            What Parents Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Reflections from parents on the warm care, confidence building, and joyful learning experiences their children enjoy at Chocolate Kids.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {parentTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#FFFDF9] border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-amber-200/80 absolute top-6 right-6 select-none pointer-events-none group-hover:text-amber-300 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm leading-relaxed mb-6 font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-amber-100/80">
                <h4 className="font-heading font-bold text-stone-900 text-base">
                  {item.name}
                </h4>
                <div className="text-xs font-semibold text-amber-700 mt-0.5">
                  {item.relation}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  {item.program}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on parent feedback */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-400 italic">
            * Representative feedback from parent community surveys and annual parent-teacher meetings.
          </p>
        </div>

      </div>
    </section>
  );
}
