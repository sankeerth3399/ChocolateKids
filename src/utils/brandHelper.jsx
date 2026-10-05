import React from "react";

/**
 * BrandBadge renders "CHOCOLATE KIDS" in the exact logo style:
 * White bubbly uppercase letters with red lining / red contoured badge (#EE3338).
 */
export function BrandBadge({ className = "", isInline = false }) {
  return (
    <span className={`brand-logo-badge ${isInline ? "brand-logo-badge-inline" : ""} ${className}`}>
      <span className="cap-letter">C</span>HOCOLATE&nbsp;<span className="cap-letter">K</span>IDS
    </span>
  );
}

/**
 * Utility to highlight any occurrence of "Chocolate Kids" in the logo style (white text with red lining)
 */
export function highlightBrand(text, customClass = "") {
  if (!text || typeof text !== "string") return text;
  
  const regex = /(Chocolate\s+Kids)/gi;
  const parts = text.split(regex);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (part.toLowerCase() === "chocolate kids") {
      return (
        <span key={index} className={`brand-logo-badge brand-logo-badge-inline ${customClass}`}>
          <span className="cap-letter">C</span>HOCOLATE&nbsp;<span className="cap-letter">K</span>IDS
        </span>
      );
    }
    return part;
  });
}

export default highlightBrand;
