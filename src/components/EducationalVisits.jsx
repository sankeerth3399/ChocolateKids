import { Compass, CheckCircle2, Heart, Sparkles, MapPin } from "lucide-react";
import { educationalVisitsData } from "../data";

export default function EducationalVisits() {
  const { heading, tagline, description, benefits, featuredVisit, secondaryVisit } = educationalVisitsData;

  return (
    <section id="educational-visits" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>{tagline}</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Featured Educational Visit: Goshala Cow Shelter Visit */}
        <div className="rounded-3xl bg-[#FFFDF9] border border-amber-200/80 shadow-md p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: 3 Real Photos Grid */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Banner Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-amber-50 group">
                <img
                  src={featuredVisit.image}
                  alt={featuredVisit.title}
                  className="w-full h-72 sm:h-80 object-cover object-bottom group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{featuredVisit.location}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                    {featuredVisit.title}
                  </h3>
                </div>
              </div>

              {/* 2 Supporting Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xs border-2 border-white bg-white group">
                  <img
                    src={featuredVisit.secondaryImage}
                    alt="Children touching and learning about calves"
                    className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-2 bg-white text-center">
                    <span className="text-[11px] font-bold text-stone-800 block">Stroking Calves</span>
                    <span className="text-[10px] text-stone-500">Gentle Interaction</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xs border-2 border-white bg-white group">
                  <img
                    src={featuredVisit.thirdImage}
                    alt="Children gathering green hay and feeding cows"
                    className="w-full h-40 sm:h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-2 bg-white text-center">
                    <span className="text-[11px] font-bold text-stone-800 block">Feeding Green Hay</span>
                    <span className="text-[10px] text-stone-500">Kindness in Action</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Educational Values & Philosophy */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                  Animal Empathy & Nature
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-3">
                  Why Educational Visits Matter at Chocolate Kids
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {featuredVisit.description}
                </p>
              </div>

              {/* The 5 Key Reasons from Prompt */}
              <div className="space-y-3.5 pt-2">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">
                        {b.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed font-normal">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secondary Helper Visit Mention */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-sky-950 block">{secondaryVisit.title}</span>
                  <p className="text-stone-600 mt-1 leading-relaxed">{secondaryVisit.description}</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
