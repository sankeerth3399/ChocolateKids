import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { BrandBadge } from "../utils/brandHelper";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      <main>
        {/* Page Hero Banner */}
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-4 bg-[#FFF4DF]">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#FFBD16]/25 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-[#FFBD16]/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#C51F45] mb-5">
              <span>Campus Visual Memories</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#142B4A] leading-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
              <span>Moments at</span> <BrandBadge className="text-[0.75em]" />
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536174] max-w-2xl mx-auto leading-relaxed">
              Explore our complete repository of authentic photographs capturing joyous smiles, educational field trips, cultural celebrations, and proud foundational achievements.
            </p>
          </div>
        </section>

        {/* Full Gallery with Category Filtering */}
        <Gallery />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
