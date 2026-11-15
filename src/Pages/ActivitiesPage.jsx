import Activities from "../components/Activities";
import AdmissionsCTA from "../components/AdmissionsCTA";
import BrandWatermark from "../components/BrandWatermark";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";
import { Palette, Music, BookOpen, Smile } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Experiential Preschool Life"
        title="Learning Through Fun & Activities"
      >
        Every day at <BrandBadge isInline className="text-[0.88em]" /> is infused with active exploration. From tactile clay crafting and sensory color days to music dance and storytelling circles, childhood curiosity is celebrated at every step.
      </PageHero>

      {/* Real Activities Grid & Category Filter */}
      <Activities />

      {/* 4 Pillars of Early Activity */}
      <section className="py-16 border-t border-[#E8DCC9] relative overflow-hidden bg-[#FFFDF8]">
        {/* Brand Logo Watermark - Centered Watermark */}
        <BrandWatermark position="center" size="lg" opacity={0.12} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900">
              Core Domains of Daily Preschool Activities
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              How our educators design each activity to develop sensory, physical, artistic, and social capacities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <Palette className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Art & Sensory Craft
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Sculpting with natural clay, finger painting, tearing & pasting, and tactile textures that build fine motor hand dexterity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <Music className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Music & Body Rhythm
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pom-pom choreography, monsoon umbrella dances, action nursery rhymes, and percussion rhythm that instill physical coordination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
              <BookOpen className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Puppetry & Story Drama
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Character dress-up, dialogue repetition, and moral folktales that kindle expressive phonics and bilingual communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100">
              <Smile className="w-8 h-8 text-rose-600 mb-3" />
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Peer Play & Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Friendship band exchanges, turn-taking block towers, and collaborative circle games that build lifelong social warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <AdmissionsCTA />
    </main>
  );
}
