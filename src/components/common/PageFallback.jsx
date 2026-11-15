/** Shown only if a page chunk takes a moment to arrive; fades in late so quick loads never flash it. */
export default function PageFallback() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-[30vh]" role="status" aria-live="polite">
      <span className="page-fallback-spinner w-9 h-9 rounded-full border-4 border-[#FFE2A3] border-t-[#C51F45] animate-spin" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
