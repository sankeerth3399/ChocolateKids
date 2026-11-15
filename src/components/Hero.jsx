import { Link } from "react-router-dom";

/*
 * The hero is the supplied banner image (1774 x 887). The headline, copy and the two
 * buttons are painted into the picture, so nothing is re-typed here. Transparent,
 * accessible hit areas sit exactly over the two painted buttons.
 *
 *  - md and up: the complete banner at its natural proportions.
 *  - below md: the SAME image is shown as two crops stacked vertically, so the painted
 *    headline and buttons are never cut off and stay large enough to read and tap:
 *      1. text + buttons crop (left part of the banner)
 *      2. children crop (right part of the banner)
 *
 * Source-pixel boxes of the painted buttons:
 *   Explore Our Schools : x 67-430,  y 621-696
 *   Schedule a Visit    : x 455-773, y 621-696
 */
const SRC_W = 1774;
const SRC_H = 887;
const BUTTONS = {
  explore: { x: 67, y: 621, w: 363, h: 75, label: "Explore Our Schools" },
  visit: { x: 455, y: 621, w: 318, h: 75, label: "Schedule a Visit" },
};

/* Mobile crops (source pixels) */
const TEXT_CROP = { x: 40, y: 150, w: 780, h: 580 };
const KIDS_CROP = { x: 780, y: 0, w: 994, h: 800 };

const ALT =
  "Chocolate Kids Preschool: Play, Learn and Grow with Chocolate Kids. Building brighter futures, one child at a time through joyful learning, creative exploration, and holistic development. Smiling children in a bright classroom.";

const hitClass =
  "absolute rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#142B4A] focus-visible:ring-offset-2 hover:bg-white/10 transition-colors";

/* Hit area in % of the container, grown to at least 44px tall and centred on the painted button */
const hit = (b, crop) => {
  const left = ((b.x - crop.x) / crop.w) * 100;
  const w = (b.w / crop.w) * 100;
  const top = ((b.y - crop.y) / crop.h) * 100;
  const h = (b.h / crop.h) * 100;
  return {
    left: `${left}%`,
    width: `${w}%`,
    height: `max(44px, ${h}%)`,
    top: `calc(${top + h / 2}% - max(22px, ${h / 2}%))`,
  };
};

const hitFull = (b) => hit(b, { x: 0, y: 0, w: SRC_W, h: SRC_H });

/* A cropped window onto the banner. Image is positioned in % so it scales with the container. */
function Crop({ crop, children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: `${crop.w} / ${crop.h}` }}>
      <img
        src="/images/home-hero-banner.jpg"
        alt=""
        aria-hidden="true"
        width={SRC_W}
        height={SRC_H}
        draggable="false"
        className="absolute max-w-none select-none"
        style={{
          width: `${(SRC_W / crop.w) * 100}%`,
          left: `${-(crop.x / crop.w) * 100}%`,
          top: `${-(crop.y / crop.h) * 100}%`,
        }}
      />
      {children}
    </div>
  );
}

export default function Hero() {
  const openVisit = () => window.dispatchEvent(new CustomEvent("open-admission-modal"));

  const controls = (styleFor) => (
    <>
      <Link to="/branches" aria-label={BUTTONS.explore.label} className={hitClass} style={styleFor(BUTTONS.explore)} />
      <button type="button" onClick={openVisit} aria-label={BUTTONS.visit.label} className={hitClass} style={styleFor(BUTTONS.visit)} />
    </>
  );

  return (
    <section id="home" className="relative w-full bg-white pt-[68px] sm:pt-[78px] md:pt-[86px]">
      <h1 className="sr-only">Play, Learn &amp; Grow with Chocolate Kids. Building brighter futures, one child at a time.</h1>

      {/* Phones: two crops of the same banner, stacked */}
      <div className="md:hidden bg-[#FFFDF8]" role="img" aria-label={ALT}>
        <Crop crop={TEXT_CROP}>{controls((b) => hit(b, TEXT_CROP))}</Crop>
        <Crop crop={KIDS_CROP} className="rounded-b-[1.75rem]" />
      </div>

      {/* Tablet and desktop: the complete banner at its natural proportions */}
      <div className="relative hidden md:block w-full">
        <img
          src="/images/home-hero-banner.jpg"
          alt={ALT}
          width={SRC_W}
          height={SRC_H}
          className="block w-full h-auto select-none"
          loading="eager"
          fetchPriority="high"
          draggable="false"
        />
        {controls(hitFull)}
      </div>
    </section>
  );
}
