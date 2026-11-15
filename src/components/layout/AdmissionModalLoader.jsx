import { lazy, Suspense, useEffect, useState } from "react";
import useIdle from "../common/useIdle";

const loadModal = () => import("../AdmissionModal");
const AdmissionModal = lazy(loadModal);

/**
 * Listens for the site-wide "open-admission-modal" event. The modal code is only mounted after the
 * first request (and fetched in idle time beforehand), so it stays out of the initial bundle.
 */
export default function AdmissionModalLoader() {
  const [state, setState] = useState({ mounted: false, open: false });

  useIdle(loadModal);

  useEffect(() => {
    const open = () => setState({ mounted: true, open: true });
    window.addEventListener("open-admission-modal", open);
    return () => window.removeEventListener("open-admission-modal", open);
  }, []);

  if (!state.mounted) return null;

  return (
    <Suspense fallback={null}>
      <AdmissionModal isOpen={state.open} onClose={() => setState((s) => ({ ...s, open: false }))} />
    </Suspense>
  );
}
