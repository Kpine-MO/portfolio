import { useEffect } from "react";

/**
 * Writes page scroll progress (0 → 1) to `--scroll-progress` on <html>, used by
 * the reading-progress bar in App.css.
 */
function useScrollProgress() {
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      doc.style.setProperty("--scroll-progress", progress.toFixed(4));
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

export default useScrollProgress;
