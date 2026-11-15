/**
 * Header banner shared by every inner page: small label, big heading, intro text and an optional
 * extra row (chips, buttons). Pass the heading as a node so it can include the brand lettering.
 */
export default function PageHero({ eyebrow, icon: Icon, title, children, extra }) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-4 bg-[#FFF4DF]">
      <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#FFBD16]/25 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-[#FFBD16]/20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#C51F45] mb-5">
            {Icon && <Icon className="w-3.5 h-3.5 text-[#C51F45]" />}
            <span>{eyebrow}</span>
          </div>
        )}

        <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#142B4A] leading-tight flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
          {title}
        </h1>

        {children && (
          <p className="mt-4 text-base sm:text-lg text-[#536174] max-w-2xl mx-auto leading-relaxed">{children}</p>
        )}

        {extra}
      </div>
    </section>
  );
}
