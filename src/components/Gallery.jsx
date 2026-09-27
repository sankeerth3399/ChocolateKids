import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon, Eye } from "lucide-react";
import { galleryImages } from "../data";
import BrandWatermark from "./BrandWatermark";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { label: "All", filterKey: "All" },
    { label: "Activities", filterKey: "Children's Activities" },
    { label: "Celebrations", filterKey: "School Celebrations" },
    { label: "Field Trips", filterKey: "Educational Visits" },
    { label: "Cultural Events", filterKey: "Cultural Events" },
    { label: "School Life", filterKey: "School Memories" },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => {
          if (activeCategory === "Children's Activities") return img.category === "Children's Activities";
          if (activeCategory === "School Celebrations") return img.category === "School Celebrations" || img.category === "Special Days";
          if (activeCategory === "Educational Visits") return img.category === "Educational Visits";
          if (activeCategory === "Cultural Events") return img.category === "Cultural Events";
          if (activeCategory === "School Memories") return img.category === "School Memories";
          return img.category === activeCategory;
        });

  // When "All" is active, display 16 initially unless user toggles showAll
  const displayLimit = activeCategory === "All" && !showAll ? 16 : filteredImages.length;
  const displayedImages = filteredImages.slice(0, displayLimit);

  const openLightbox = (indexInFiltered) => {
    setLightboxIndex(indexInFiltered);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-20 bg-[#FFFDF9] relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="top-left" size="lg" opacity={0.038} rotate={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>School Life & Memories</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Moments at Chocolate Kids
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Genuinely captured moments of educational visits, cultural festivals, sensory learning days, and proud childhood milestones.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((catObj) => {
            const count =
              catObj.filterKey === "All"
                ? galleryImages.length
                : galleryImages.filter((img) => {
                    if (catObj.filterKey === "Children's Activities") return img.category === "Children's Activities";
                    if (catObj.filterKey === "School Celebrations") return img.category === "School Celebrations" || img.category === "Special Days";
                    if (catObj.filterKey === "Educational Visits") return img.category === "Educational Visits";
                    if (catObj.filterKey === "Cultural Events") return img.category === "Cultural Events";
                    if (catObj.filterKey === "School Memories") return img.category === "School Memories";
                    return img.category === catObj.filterKey;
                  }).length;

            return (
              <button
                key={catObj.label}
                onClick={() => {
                  setActiveCategory(catObj.filterKey);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === catObj.filterKey
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <span>{catObj.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                    activeCategory === catObj.filterKey ? "bg-amber-700 text-white" : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid: 4 cols Desktop, 2-3 cols Tablet, 1-2 cols Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedImages.map((image, idx) => {
            // Find index in filteredImages for lightbox
            const filteredIdx = filteredImages.findIndex((item) => item.id === image.id);

            return (
              <div
                key={image.id}
                onClick={() => openLightbox(filteredIdx >= 0 ? filteredIdx : idx)}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/90 bg-white flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Image frame - aspect-[4/5] with object-contain to never cut off children's faces */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50/30 flex items-center justify-center p-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-stone-800 shadow-sm border border-stone-200/70">
                      {image.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl m-2 pointer-events-none">
                    <span className="p-3 rounded-full bg-white/95 text-amber-800 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Card Caption Information */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1 border-t border-stone-100">
                  <div>
                    <h3 className="font-heading font-bold text-stone-900 text-sm leading-snug group-hover:text-amber-800 transition-colors line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                      {image.description || image.alt}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-700 font-semibold">
                    <span>Click to enlarge</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More / Show All Button for "All" view */}
        {activeCategory === "All" && filteredImages.length > 16 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>
                {showAll
                  ? "Show Fewer Photos"
                  : `Show All ${filteredImages.length} Photographs`}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Main Content Container */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
            {/* The Image itself with aspect ratio preserved and contained */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/50 p-1">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-[88vw] object-contain mx-auto rounded-xl"
              />
            </div>

            {/* Caption, Category and Counter */}
            <div className="mt-3 sm:mt-4 text-center text-white px-4">
              <div className="inline-block px-3 py-0.5 rounded-full bg-amber-500 text-stone-900 text-xs font-bold uppercase tracking-wider mb-1.5">
                {filteredImages[lightboxIndex].category}
              </div>
              <h4 className="font-heading font-bold text-base sm:text-xl text-amber-200 leading-snug">
                {filteredImages[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl mx-auto leading-relaxed">
                {filteredImages[lightboxIndex].description || filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-[11px] text-stone-400 mt-1.5 font-medium">
                Image {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
