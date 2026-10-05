import { Sparkles, Calendar, Heart, Flag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

export default function EventsSection() {
  const celebrationTimeline = [
    {
      id: "independence",
      title: "Patriotic Independence Day Recital",
      occasion: "National Pride & History",
      icon: Flag,
      badge: "Patriotic Milestone",
      image: "/images/independence-day-celebration-hd.png",
      description: "Young learners dressed as freedom fighters including Bhagat Singh and Jhansi Ki Rani, presenting patriotic speeches and tricolor flags.",
      dateLabel: "August 15 Celebration",
    },
    {
      id: "krishna",
      title: "Sri Krishna Janmashtami & Dahi Handi",
      occasion: "Cultural Heritage & Joy",
      icon: Star,
      badge: "Traditional Festivity",
      image: "/images/krishna-janmashtami-grand-group.jpg",
      description: "Toddlers adorned in colorful peacock-feather turbans, golden flutes, and traditional dhoti outfits celebrating the festival with joyous stage group photos.",
      dateLabel: "Janmashtami Gala",
    },
    {
      id: "friendship",
      title: "Friendship Day & Emotional Bonding",
      occasion: "Empathy & Peer Love",
      icon: Heart,
      badge: "Heartfelt Bonds",
      image: "/images/friendship-day-celebration.jpg",
      description: "Tying friendship bands, sharing handmade greeting cards, and celebrating the warmth of early childhood companionship.",
      dateLabel: "Friendship Week",
    },
    {
      id: "goshala",
      title: "Educational Field Visit to Shree Aaiji Goshala",
      occasion: "Experiential Community Learning",
      icon: Sparkles,
      badge: "Community Field Excursion",
      image: "/images/cow-shelter-group-hd.png",
      description: "A memorable outdoor excursion where children interacted respectfully with gentle cows and calves under the guidance of devoted educators.",
      dateLabel: "Nature Excursion",
    },
  ];

  return (
    <section id="events" className="py-20 sm:py-24 bg-[#FFFDF9] relative overflow-hidden">
      {/* Brand Logo Watermark - Large Centered Watermark */}
      <BrandWatermark position="center" size="xl" opacity={0.11} />

      {/* Soft Ambient Background Dots */}
      <div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-950 text-xs font-black uppercase tracking-wider mb-3.5 border border-rose-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>ANNUAL FESTIVALS & TRADITIONS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Moments We Celebrate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Festivals at <BrandBadge isInline className="text-[0.88em]" /> are vibrant journeys into culture, heritage, and values. Real costumes, stage recitals, and precious smiles make each milestone unforgettable.
          </p>
        </div>

        {/* ==================================================
            VISUAL TIMELINE / STORY WALL
           ================================================== */}
        <div className="relative">
          
          {/* Central Timeline Spine Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-0.5 bg-gradient-to-b from-amber-300 via-rose-300 to-amber-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {celebrationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Photo Side */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:pr-8" : "lg:col-start-7 lg:pl-8"}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group transform hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-64 sm:h-76 overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Top Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-xs font-black bg-white/95 text-stone-900 shadow-xs">
                            {item.badge}
                          </span>
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                            {item.dateLabel}
                          </span>
                          <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story Description Side */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:col-start-7 lg:pl-8" : "lg:col-start-1 lg:row-start-1 lg:pr-8"}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow relative">
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shadow-2xs">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider text-rose-700">
                          {item.occasion}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-xl sm:text-2xl text-stone-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-800">
                          Authentic <BrandBadge isInline className="text-[0.82em]" /> Memory
                        </span>
                        <Link
                          to="/events"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-amber-700 transition-colors"
                        >
                          <span>Explore Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA to Events Page */}
        <div className="mt-16 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 shadow-2xs hover:shadow-xs transition-all duration-200"
          >
            <span>View All Annual Events & Festivals</span>
            <ArrowRight className="w-4 h-4 text-amber-700" />
          </Link>
        </div>

      </div>
    </section>
  );
}
