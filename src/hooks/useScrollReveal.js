import { useEffect } from "react";

/**
 * Global scroll-reveal. Any element marked with `data-reveal` starts hidden and
 * animates in the first time it enters the viewport (see the reveal rules in
 * index.css). Stagger a group by setting `--reveal-delay` inline.
 *
 * A MutationObserver picks up nodes added later (tab switches, route changes),
 * so components only need the attribute — no wiring per section.
 */
function useScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target); // reveal once, then stop watching
        });
      },
      // fire as the element's leading edge passes 88% of the viewport height —
      // edge-based rather than ratio-based, so elements taller than the
      // viewport still trigger
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    const observe = (root) => {
      if (root.nodeType !== 1) return;
      if (root.hasAttribute("data-reveal")) io.observe(root);
      root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    };

    observe(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(observe));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default useScrollReveal;
