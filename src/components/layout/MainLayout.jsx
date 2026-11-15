import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppButton";
import StickyBottomDualBar from "../StickyBottomDualBar";
import AdmissionModalLoader from "./AdmissionModalLoader";
import ScrollToTop from "../ScrollToTop";
import PageFallback from "../common/PageFallback";
import { prefetchRoute } from "../../routes";

// Animation features are fetched after first paint instead of shipping in the main bundle.
const loadMotionFeatures = () => import("../../motionFeatures.js").then((mod) => mod.default);

/** Walk up from an event target to the nearest internal link and warm its route chunk. */
const prefetchFromEvent = (event) => {
  const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (link) prefetchRoute(link.getAttribute("href"));
};

/**
 * Persistent shell: header, footer, floating actions and the admission modal are mounted once and
 * survive route changes, so navigating only swaps the page inside <Outlet />.
 */
export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <div
        className="min-h-screen flex flex-col overflow-x-clip bg-[#FFFDF8] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900"
        onMouseOver={prefetchFromEvent}
        onFocus={prefetchFromEvent}
        onTouchStart={prefetchFromEvent}
      >
        <ScrollToTop />
        <Navbar />

        <div className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Outlet />
          </Suspense>
        </div>

        <Footer />
        {/* The Franchise page has its own WhatsApp calls to action */}
        {pathname !== "/franchise" && <WhatsAppButton />}
        <StickyBottomDualBar />
        <AdmissionModalLoader />
      </div>
    </LazyMotion>
  );
}
