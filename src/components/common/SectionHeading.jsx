/**
 * Section title block: label, heading and optional subtitle.
 *  - variant "label": plain uppercase burgundy label
 *  - variant "pill":  white pill label with an icon
 */
export default function SectionHeading({ eyebrow, icon: Icon, title, subtitle, variant = "label", className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 ${className}`}>
      {eyebrow &&
        (variant === "pill" ? (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-950 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm ring-1 ring-amber-200">
            {Icon && <Icon className="w-3.5 h-3.5 text-amber-600" />}
            <span>{eyebrow}</span>
          </div>
        ) : (
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C51F45]">{eyebrow}</span>
        ))}
      <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#142B4A] leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-[#536174] leading-relaxed">{subtitle}</p>}
    </div>
  );
}
