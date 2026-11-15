import { useEffect } from "react";

let activeLocks = 0;
let previousOverflow = "";

/**
 * Lock page scrolling while `locked` is true (menus, modals, lightboxes). Reference-counted so two
 * overlays open at once don't unlock each other, and the original overflow value is restored.
 */
export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    if (activeLocks === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    activeLocks += 1;
    return () => {
      activeLocks -= 1;
      if (activeLocks === 0) document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
