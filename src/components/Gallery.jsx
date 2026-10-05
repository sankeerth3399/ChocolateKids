import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Camera, 
  Layers, 
  Download,
  Eye,
  ZoomIn
} from "lucide-react";
import { galleryImages } from "../data";
import BrandWatermark from "./BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const thumbnailStripRef = useRef(null);

  const filteredImages = galleryImages;

  // Display initial 12 photos for an ultra-fast, clean layout, toggleable with Show All
  const initialLimit = 12;
  const displayedImages = !showAll ? filteredImages.slice(0, initialLimit) : filteredImages;

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

  // Scroll active thumbnail into view inside the lightbox
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[lightboxIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [lightboxIndex]);

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
    <section id="gallery" className="py-20 sm:py-28 bg-[#FFF9F0] relative overflow-hidden">
      {/* Brand Logo Watermark */}
      <BrandWatermark position="center" size="lg" opacity={0.08} />

      {/* Soft background accents */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FFF0DD]/50 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#DFF3FA]/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#5A2E1B] text-xs font-extrabold uppercase tracking-wider mb-3.5 border border-amber-200/80 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>CAMPUS MEMORIES & MOMENTS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-[#5A2E1B] tracking-tight leading-tight flex flex-wrap items-center justify-center gap-2">
            <span>Moments at</span> <BrandBadge className="text-2xl sm:text-4xl lg:text-5xl px-3 py-1" />
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A2E1B]/80 leading-relaxed font-medium">
            Genuinely captured moments of educational visits, festive celebrations, creative days, and childhood milestones.
          </p>
        </div>

        {/* ==================================================
            MODERN PHOTO-FIRST CARD GRID (Visual & Engaging)
           ================================================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {displayedImages.map((image, idx) => {
              const filteredIdx = filteredImages.findIndex((item) => item.id === image.id);
              const clickIdx = filteredIdx >= 0 ? filteredIdx : idx;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (idx % 8) * 0.04 }}
                  key={image.id}
                  onClick={() => openLightbox(clickIdx)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-amber-200/70 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Photo Frame Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A2E1B]/85 via-[#5A2E1B]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Floating Category Tag */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-white/95 text-[#5A2E1B] shadow-2xs backdrop-blur-xs border border-amber-100">
                        {image.category}
                      </span>
                    </div>

                    {/* Floating Zoom Action Button on Hover */}
                    <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <span className="w-8 h-8 rounded-full bg-white/95 text-[#5A2E1B] shadow-sm flex items-center justify-center backdrop-blur-xs">
                        <ZoomIn className="w-4 h-4 text-[#F59E0B]" />
                      </span>
                    </div>

                    {/* Bottom In-Image Caption on Hover */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-xs font-bold text-white leading-snug line-clamp-1 drop-shadow-xs">
                        {image.title}
                      </p>
                      <span className="text-[10px] text-amber-200 font-semibold flex items-center gap-1 mt-0.5">
                        <Eye className="w-3 h-3" /> Click to view full photo
                      </span>
                    </div>
                  </div>

                  {/* Clean Bottom Label Bar */}
                  <div className="p-3.5 bg-white flex items-center justify-between border-t border-amber-100/60">
                    <h3 className="font-heading font-extrabold text-sm text-[#5A2E1B] group-hover:text-[#F59E0B] transition-colors truncate">
                      {image.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#F59E0B] shrink-0 ml-2">
                      View →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredImages.length > initialLimit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[30px] text-sm font-extrabold text-[#5A2E1B] bg-white hover:bg-[#FFF0DD] border-2 border-amber-200 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>
                {showAll
                  ? `Show Fewer Photos`
                  : `Explore All ${filteredImages.length} Photographs`}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* ==================================================
          RE-ENGINEERED IMMERSIVE STORYBOOK LIGHTBOX
         ================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#1A0E08]/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Top Lightbox Navigation Header */}
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-20 pb-2">
              <div className="flex items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs font-extrabold border border-white/15">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F59E0B] text-white text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
                  {filteredImages[lightboxIndex].category}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] flex items-center gap-1.5"
                aria-label="Close photo preview"
                title="Close (Esc)"
              >
                <span className="text-xs font-bold hidden sm:inline-block">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Stage: Image + Navigation Arrows */}
            <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto min-h-0 py-2">
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-1 sm:left-4 z-30 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transform hover:scale-108 active:scale-95"
                aria-label="Previous image"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* The Active Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[60vh] sm:max-h-[66vh] max-w-[92vw] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40"
              >
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-1 sm:right-4 z-30 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transform hover:scale-108 active:scale-95"
                aria-label="Next image"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Bottom Panel: Title, Description & Thumbnail Filmstrip */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-20 pt-2">
              {/* Photo Title & Description */}
              <div className="text-center text-white px-4 mb-3 max-w-2xl">
                <h4 className="font-heading font-black text-base sm:text-xl text-[#FFF9F0] leading-snug">
                  {filteredImages[lightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                  {filteredImages[lightboxIndex].description || filteredImages[lightboxIndex].alt}
                </p>
              </div>

              {/* Interactive Thumbnail Filmstrip */}
              <div 
                ref={thumbnailStripRef}
                className="w-full flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-1 px-2 no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {filteredImages.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setLightboxIndex(tIdx)}
                    className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      tIdx === lightboxIndex
                        ? "border-[#F59E0B] scale-105 shadow-md shadow-[#F59E0B]/30"
                        : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"
                    }`}
                    title={thumb.title}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
