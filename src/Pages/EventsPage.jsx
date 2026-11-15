import EventsSection from "../components/EventsSection";
import EducationalVisits from "../components/EducationalVisits";
import AdmissionsCTA from "../components/AdmissionsCTA";
import { Calendar } from "lucide-react";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";

export default function EventsPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="School Events & Excursions"
        icon={Calendar}
        title="Celebrations & Special Moments"
      >
        From joyful cultural festivals and patriotic flag hoistings to real-world educational excursions at the Goshala, discover how <BrandBadge isInline className="text-[0.88em]" /> turns celebrations into meaningful learning.
      </PageHero>

      {/* Celebrations & Events Grid */}
      <EventsSection />

      {/* Educational Visits & Excursions */}
      <EducationalVisits />

      {/* Admissions CTA */}
      <AdmissionsCTA />
    </main>
  );
}
