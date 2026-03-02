import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
  const { hash, pathname, search } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const pathChanged = prevPathRef.current !== pathname;
    prevPathRef.current = pathname;

    const getHeader = () =>
      document.querySelector('[data-header="true"]') ||
      document.querySelector("header");

    const isFixedLike = (el) => {
      if (!el) return false;
      const pos = window.getComputedStyle(el).position;
      return pos === "fixed" || pos === "sticky";
    };

    const getOffset = () => {
      const header = getHeader();
      if (!header) return 0;
      if (!isFixedLike(header)) return 0;
      return Math.round(header.getBoundingClientRect().height);
    };

    const scrollToEl = (el) => {
      const offset = getOffset();
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const clearHashFromUrl = () => {
      window.history.replaceState(null, "", pathname + search);
    };

    // ✅ 1) Если есть hash — скроллим к секции
    if (hash) {
      const id = hash.slice(1);

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (!el) return false;

        scrollToEl(el);
        setTimeout(() => scrollToEl(el), 120);
        setTimeout(() => scrollToEl(el), 350);

        // убираем hash, чтобы при F5 не открывалась секция
        setTimeout(clearHashFromUrl, 450);

        return true;
      };

      if (tryScroll()) return;

      const obs = new MutationObserver(() => {
        if (tryScroll()) obs.disconnect();
      });

      obs.observe(document.documentElement, { childList: true, subtree: true });

      const onLoad = () => tryScroll();
      window.addEventListener("load", onLoad, { once: true });

      return () => {
        obs.disconnect();
        window.removeEventListener("load", onLoad);
      };
    }

    // ✅ 2) Если hash НЕТ и путь изменился — скроллим в самый верх
    // (чтобы "View all" всегда открывал Products сверху)
    if (pathChanged) {
      // маленькая задержка, чтобы перетереть возможное "восстановление" позиции
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 0);
    }
  }, [hash, pathname, search]);

  return null;
};