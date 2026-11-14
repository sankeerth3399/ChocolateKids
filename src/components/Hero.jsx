import { Link } from "react-router-dom";

/*
 * The hero is the supplied banner image (1774 x 887). The logo, headline, copy and the two
 * buttons are part of the picture, so nothing is re-typed here. Transparent, accessible
 * hit areas sit exactly over the two painted buttons so they stay clickable.
 *
 * Source-pixel boxes of the painted buttons:
 *   Explore Our Schools : x 67-430,  y 621-696
 *   Schedule a Visit    : x 455-773, y 621-696
 */
const SRC_W = 1774;
const SRC_H = 887;
const BUTTONS = {
  explore: { x: 67, y: 621, w: 363, h: 75 },
  visit: { x: 455, y: 621, w: 318, h: 75 },
};

const pct = (b) => ({
  left: `${(b.x / SRC_W) * 100}%`,
  top: `${(b.y / SRC_H) * 100}%`,
  width: `${(b.w / SRC_W) * 100}%`,
  height: `${(b.h / SRC_H) * 100}%`,
});

/* Below lg the image is shown at a fixed height, anchored left; 1 source px = k css px */
const px = (b) => ({
  left: `calc(var(--k) * ${b.x})`,
  top: `calc(var(--k) * ${b.y})`,
  width: `calc(var(--k) * ${b.w})`,
  height: `calc(var(--k) * ${b.h})`,
});

const hitClass =
  "absolute rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#142B4A] focus-visible:ring-offset-2 hover:bg-white/10 transition-colors";

export default function Hero() {
  const openVisit = () => window.dispatchEvent(new CustomEvent("open-admission-modal"));

  const links = (style) => (
    <>
      <Link to="/branches" aria-label="Explore Our Schools" className={hitClass} style={style(BUTTONS.explore)} />
      <button type="button" onClick={openVisit} aria-label="Schedule a Visit" className={hitClass} style={style(BUTTONS.visit)} />
    </>
  );

  return (
    <section id="home" className="relative w-full bg-white pt-[78px] sm:pt-[86px]">
      <h1 className="sr-only">Play, Learn &amp; Grow with Chocolate Kids. Building brighter futures, one child at a time.</h1>

      {/* Phones and tablets: fixed height crop anchored left so the text stays readable */}
      <div
        className="relative lg:hidden h-[440px] sm:h-[480px] overflow-hidden [--hero-h:440px] sm:[--hero-h:480px]"
        style={{ "--k": "calc(var(--hero-h) / 887)" }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/home-hero-banner.jpg"
            alt="Chocolate Kids Preschool: Play, Learn and Grow with Chocolate Kids. Building brighter futures, one child at a time through joyful learning, creative exploration, and holistic development. Smiling children in a bright classroom."
            width={SRC_W}
            height={SRC_H}
            className="h-full w-auto max-w-none object-cover object-left select-none"
            loading="eager"
            fetchPriority="high"
            draggable="false"
          />
          {links(px)}
        </div>
      </div>

      {/* Desktop: the complete banner at its natural proportions */}
      <div className="relative hidden lg:block w-full">
        <img
          src="/images/home-hero-banner.jpg"
          alt="Chocolate Kids Preschool: Play, Learn and Grow with Chocolate Kids. Building brighter futures, one child at a time through joyful learning, creative exploration, and holistic development. Smiling children in a bright classroom."
          width={SRC_W}
          height={SRC_H}
          className="block w-full h-auto select-none"
          loading="eager"
          fetchPriority="high"
          draggable="false"
        />
        {links(pct)}
      </div>
    </section>
  );
}
