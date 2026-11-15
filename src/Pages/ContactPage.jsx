import Contact from "../components/Contact";
import { Phone } from "lucide-react";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Get in Touch"
        icon={Phone}
        title={
        <>
          <span>Contact</span> <BrandBadge className="text-[0.75em]" />
        </>
      }
      >
        We welcome parents to visit our campuses, tour our classrooms, meet our caring educators, and discuss their child's early education needs.
      </PageHero>

      {/* Contact Details & Direct Enquiry Form */}
      <Contact />
    </main>
  );
}
