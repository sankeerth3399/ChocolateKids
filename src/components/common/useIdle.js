import { useEffect } from "react";

/** Run a callback once the browser is idle (falls back to a timer). Used to warm lazy chunks. */
export default function useIdle(callback, timeout = 2500) {
  useEffect(() => {
    const schedule = window.requestIdleCallback || ((cb) => window.setTimeout(cb, timeout));
    const cancel = window.cancelIdleCallback || window.clearTimeout;
    const handle = schedule(callback);
    return () => cancel(handle);
    // callback is intentionally a one-shot warm-up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
