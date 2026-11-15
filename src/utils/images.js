/**
 * Smaller copies of a photo live next to the original as "<name>-360.webp" / "<name>-960.webp".
 * Cards and thumbnails use them; the full-size file is used for the lightbox and very dense screens.
 */
export const variant = (src, width) => src.replace(/\.webp$/, `-${width}.webp`);

/** srcSet for a card image: 960w copy, or the 1280w original when the screen needs more pixels. */
export const cardSrcSet = (src) => `${variant(src, 960)} 960w, ${src} 1280w`;
