import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Music, BookOpen, Sun, Heart, Smile, ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import BrandWatermark from "./BrandWatermark";

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState(0);

  const scrapbookPages = [
    {
      id: "craft",
      title: "Tactile Art & Eco Clay Craft",
      category: "Creative Expression",
      icon: Palette,
      tag: "🎨 Hands-On Art",
      tapeColor: "bg-amber-200/90",
      accent: "text-amber-700",
      polaroidRotate: "-rotate-2",
      image: "/images/clay-ganesha-craft-activity.jpg",
      caption: "Molding eco-friendly clay Ganeshas with joyful hands",
      notes: "Children pinch, roll, and shape natural clay, refining fine-motor skills, hand-eye coordination, and creative pride.",
      sticker: "Little Artists!",
    },
    {
      id: "dance",
      title: "Rhythmic Dance & Joyful Music",
      category: "Movement & Rhythm",
      icon: Music,
      tag: "🎵 Musical Fun",
      tapeColor: "bg-purple-200/90",
      accent: "text-purple-700",
      polaroidRotate: "rotate-2",
      image: "/images/blue-colour-day-dance.jpg",
      caption: "Twirling, dancing and moving to cheerful nursery beats",
      notes: "Expressive physical movement, tempo matching, and group coordination that energize gross motor muscles and uplift every child's spirit.",
      sticker: "Pure Energy!",
    },
    {
      id: "story",
      title: "Storytelling & Confidence on Stage",
      category: "Language & Expression",
      icon: BookOpen,
      tag: "📚 Story Studio",
      tapeColor: "bg-sky-200/90",
      accent: "text-sky-700",
      polaroidRotate: "-rotate-1",
      image: "/images/independence-day-celebration-hd.png",
      caption: "Reciting patriotic poetry dressed as historical heroes",
      notes: "Puppet tales, dress-up enactments, and daily microphone circles where young voices bloom without hesitation or fear.",
      sticker: "Brave Speakers!",
    },
    {
      id: "outdoor",
      title: "Outdoor Adventures & Nature Walks",
      category: "Gross Motor & Discovery",
      icon: Sun,
      tag: "🌱 Nature Wonder",
      tapeColor: "bg-emerald-200/90",
      accent: "text-emerald-700",
      polaroidRotate: "rotate-3",
      image: "/images/cow-shelter-children-walking.jpg",
      caption: "Exploring green farms and walking together under sunny skies",
      notes: "Fresh-air field excursions where children touch real leaves, watch calves play, and learn compassionate environmental curiosity.",
      sticker: "Little Explorers!",
    },
    {
      id: "celebrate",
      title: "Colour Days & Joyful Celebrations",
      category: "Sensory Theme Days",
      icon: Sparkles,
      tag: "✨ Sensory Themes",
      tapeColor: "bg-rose-200/90",
      accent: "text-rose-700",
      polaroidRotate: "-rotate-2",
      image: "/images/blue-colour-day-celebration.jpg",
      caption: "Blue Colour Day immersive sensory discovery with toys & smiles",
      notes: "Visual immersion where entire classrooms turn blue, green, or orange, reinforcing color theory through sensory play.",
      sticker: "Happy Days!",
    },
  ];

  return (
    <section id="activities" className="py-20 sm:py-24 bg-[#FAF6EE] relative overflow-hidden">
      {/* Brand Logo Watermark - Centered with slight right offset */}
      <BrandWatermark position="center-offset-right" size="lg" opacity={0.11} />

      {/* Decorative Scrapbook Paper Texture Highlights */}
      <div 
        className="absolute top-1/2 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 -right-24 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-stone-900 text-xs font-black uppercase tracking-wider mb-3.5 border border-amber-200/80 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>DAILY SCRAPBOOK OF WONDER</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Discover. Create. Explore.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Preschool isn't a desk job. At Chocolate Kids, every day is a colorful collage of art, rhythm, story circles, outdoor discovery, and festive smiles.
          </p>
        </div>

        {/* ==================================================
            SCRAPBOOK NAVIGATION CHAPTER TABS
           ================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {scrapbookPages.map((page, idx) => {
            const Icon = page.icon;
            const isSelected = selectedActivity === idx;
            return (
              <button
                key={page.id}
                onClick={() => setSelectedActivity(idx)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-103"
                    : "bg-white/90 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-amber-100" : page.accent}`} />
                <span>{page.tag}</span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            FEATURED SCRAPBOOK ALBUM COMPOSITION
           ================================================== */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-xl border-2 border-stone-200/80 relative mb-16">
          
          {/* Faux Washi Tape Strips on Scrapbook Corners */}
          <div className="absolute -top-3.5 left-8 w-24 h-7 bg-amber-200/90 rounded-xs transform -rotate-3 shadow-2xs pointer-events-none opacity-80" />
          <div className="absolute -top-3.5 right-8 w-24 h-7 bg-rose-200/90 rounded-xs transform rotate-2 shadow-2xs pointer-events-none opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Polaroid-Style Photograph with Photo Tilt */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div
                key={scrapbookPages[selectedActivity].id}
                initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-[#FFFDF9] p-4 pb-6 rounded-2xl shadow-xl border border-stone-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                {/* Washi Tape on Polaroid Top */}
                <div className={`mx-auto -mt-6 mb-3 w-28 h-6 ${scrapbookPages[selectedActivity].tapeColor} rounded-xs shadow-2xs`} />

                {/* Photo Frame */}
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                  <img
                    src={scrapbookPages[selectedActivity].image}
                    alt={scrapbookPages[selectedActivity].title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-stone-900 text-[11px] font-black shadow-xs">
                    {scrapbookPages[selectedActivity].category}
                  </div>
                </div>

                {/* Handwritten-Style Caption underneath Polaroid */}
                <div className="mt-4 px-2 text-center">
                  <p className="font-heading font-bold text-sm sm:text-base text-stone-800 leading-snug">
                    “{scrapbookPages[selectedActivity].caption}”
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Scrapbook Diary Notes & Little Explorer Sticker */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Category Pill + Sticker */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-200">
                  {scrapbookPages[selectedActivity].tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-200 transform rotate-1 shadow-2xs">
                  ★ {scrapbookPages[selectedActivity].sticker}
                </span>
              </div>

              {/* Activity Headline */}
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 leading-tight">
                {scrapbookPages[selectedActivity].title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {scrapbookPages[selectedActivity].notes}
              </p>

              {/* What Children Gain Pill Highlights */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-amber-950 block">
                  Developmental Value:
                </span>
                <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
                  <li>Enhances sensory perception and tactile curiosity</li>
                  <li>Promotes social bonding with classmates and teachers</li>
                  <li>Builds early self-confidence and joyous memory making</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 transition-all duration-200"
                >
                  <span>Explore Full Activities Album</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-stone-500" />
                  <span>View Photo Gallery</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            SCRAPBOOK MINI-GALLERY OF OTHER MEMORIES
           ================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {scrapbookPages.slice(0, 4).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedActivity(idx)}
              className={`p-3 bg-white rounded-2xl shadow-sm border border-stone-200/80 transform hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer ${
                idx % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <div className="h-32 sm:h-36 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[11px] font-bold text-stone-800 line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-amber-700 font-semibold">
                  Tap to open scrapbook →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
