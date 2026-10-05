import React from "react";

/**
 * BrandName renders the visible "ChocolateKids" brand name
 * using the exact visual branding style of the original ChocolateKids logo:
 * - Playful, hand-drawn, child-friendly display font ('Sour Gummy', 'Chewy', 'DynaPuff')
 * - Individual letters with thick red outer stroke (#E52427)
 * - Crisp white letter interiors
 * - NO pill / rounded rectangle background
 * - Renders "ChocolateKids" by default (or custom children/text when provided)
 */
export function BrandName({
  variant = "brand", // "brand" (default: white with individual red stroke) | "solid" (solid crimson)
  isInline = false,
  className = "",
  children,
  as: Component = "span",
  ...props
}) {
  let baseClass = "chocolatekids-brand";
  if (variant === "solid" || variant === "text") {
    baseClass = "chocolatekids-brand-solid";
  }

  const inlineClass = isInline ? "chocolatekids-brand-inline" : "";
  const combinedClass = `${baseClass} ${inlineClass} ${className}`.trim();

  // If children are provided (e.g. custom text or "Chocolate Kids" where space is specifically required),
  // render that content. Otherwise default to "ChocolateKids" as explicitly requested.
  const content = children !== undefined ? children : "ChocolateKids";

  return (
    <Component className={combinedClass} translate="no" {...props}>
      {content}
    </Component>
  );
}

export default BrandName;
