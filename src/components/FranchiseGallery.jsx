import { Sparkles, ArrowRight, Eye, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandBadge } from "../utils/brandHelper";

export default function FranchiseGallery() {
  const showcaseItems = [
    {
      title: "Vibrant Classroom Learning",
      tag: "Classrooms & Learning",
      src: "/images/cow-shelter-group-hd.png",
      desc: "Warm, engaging learning spaces equipped with child-safe furniture and manipulative learning materials.",
    },
    {
      title: "Sensory & Color Discovery",
      tag: "Activities",
      src: "/images/blue-colour-day-group.jpg",
      desc: "Hands-on theme days like Blue Day that ignite visual recognition and creative excitement.",
    },
    {
      title: "Cultural & Festive Celebrations",
      tag: "Celebrations & Events",
      src: "/images/krishna-janmashtami-traditional.jpg",
      desc: "Rich festival celebrations celebrating diversity, traditions, and active community participation.",
    },
    {
      title: "Experiential Educational Visits",
      tag: "Educational Visits",
      src: "/images/cow-shelter-banner-group.jpg",
      desc: "Field excursions like goshala and community visits that cultivate empathy and real-world awareness.",
    },
    {
      title: "Hands-on Clay & Craft Sculpting",
      tag: "Creative Learning",
      src: "/images/ganesh-chaturthi-clay-sculpting.jpg",
      desc: "Tactile natural clay sculpting developing fine motor control, patience, and artistic pride.",
    },
    {
      title: "Music, Rhythm & Stage Confidence",
      tag: "Performances",
      src: "/images/blue-colour-day-pompoms.jpg",
      desc: "Group cheering, songs, and stage routines that nurture self-expression and poise in young children.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-amber-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-200">
              <Camera className="w-3.5 h-3.5 text-amber-800" />
              <span>Campus Visual Tour</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Experience the</span> <BrandBadge className="text-[0.72em]" /> <span>Environment</span>
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
              See what you will build as a franchise partner — happy classrooms, safe infrastructure, creative activities, and joyful celebrations that earn parent trust every single day.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors shadow-2xs"
            >
              <span>Explore Our School</span>
              <ArrowRight className="w-4 h-4 text-amber-800" />
            </Link>
          </div>
        </div>

        {/* Real Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Photo Frame */}
              <div className="relative h-64 overflow-hidden bg-amber-50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-stone-800 shadow-sm border border-stone-200/80">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
