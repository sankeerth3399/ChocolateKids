import { useEffect } from "react";

/**
 * Lets a mouse drag-scroll any ".card-rail" (touch and trackpads already scroll natively).
 * One set of document listeners serves every rail. A drag never counts as a click on a card.
 */
export default function useRailDrag() {
  useEffect(() => {
    let rail = null;
    let startX = 0;
    let startLeft = 0;
    let moved = false;
    let swallowClick = false;

    const onDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      const target = e.target.closest?.(".card-rail");
      if (!target) return;
      rail = target;
      startX = e.clientX;
      startLeft = target.scrollLeft;
      moved = false;
    };
    const onMove = (e) => {
      if (!rail) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        rail.classList.add("is-dragging");
        try {
          rail.setPointerCapture(e.pointerId);
        } catch {
          /* pointer already released */
        }
      }
      if (moved) rail.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!rail) return;
      if (moved) {
        rail.classList.remove("is-dragging");
        swallowClick = true;
        setTimeout(() => (swallowClick = false), 0);
      }
      rail = null;
    };
    const onClick = (e) => {
      if (!swallowClick) return;
      e.preventDefault();
      e.stopPropagation();
      swallowClick = false;
    };
    // Browsers start a native "drag image" on card photos, which would cancel the scroll drag.
    const onDragStart = (e) => {
      if (e.target.closest?.(".card-rail")) e.preventDefault();
    };

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
    document.addEventListener("click", onClick, true);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);
}
