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
