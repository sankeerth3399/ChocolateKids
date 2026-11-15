import Gallery from "../components/Gallery";
import { BrandBadge } from "../utils/brandHelper";
import PageHero from "../components/common/PageHero";

export default function GalleryPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Campus Visual Memories"
        title={
        <>
          <span>Moments at</span> <BrandBadge className="text-[0.75em]" />
        </>
      }
      >
        Explore our complete repository of authentic photographs capturing joyous smiles, educational field trips, cultural celebrations, and proud foundational achievements.
      </PageHero>

      {/* Full Gallery with Category Filtering */}
      <Gallery />
    </main>
  );
}
