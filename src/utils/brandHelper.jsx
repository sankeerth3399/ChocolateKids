import React from "react";
import { BrandName } from "../components/BrandName";

export { BrandName };

/**
 * BrandBadge / BrandName alias for backward compatibility.
 * All brand occurrences use the centralized .chocolatekids-brand styling:
 * White letters with thick red contour stroke around each individual character.
 * NO PILL. NO RECTANGLE.
 */
export function BrandBadge({ className = "", isInline = false, variant = "brand", children, ...props }) {
  return (
    <BrandName
      variant={variant}
      isInline={isInline}
      className={className}
      {...props}
    >
      {children}
    </BrandName>
  );
}

/**
 * Utility to highlight ANY occurrence of "ChocolateKids" or "Chocolate Kids"
 * in the exact visual branding style as the logo.
 * Preserves the original casing/spacing of the source text if provided,
 * while applying the exact white-with-red-contour letterform styling.
 */
export function highlightBrand(text, customClass = "", variant = "brand") {
  if (!text || typeof text !== "string") return text;
  
  // Matches "ChocolateKids" or "Chocolate Kids" in any case
  const regex = /(Chocolate\s*Kids)/gi;
  const parts = text.split(regex);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (part.toLowerCase().replace(/\s+/g, "") === "chocolatekids") {
      const hasSpace = /\s+/.test(part);
      const displayText = hasSpace ? "Chocolate Kids" : "ChocolateKids";
      return (
        <BrandName
          key={index}
          variant={variant}
          isInline={true}
          className={customClass}
        >
          {displayText}
        </BrandName>
      );
    }
    return part;
  });
}

export default highlightBrand;
