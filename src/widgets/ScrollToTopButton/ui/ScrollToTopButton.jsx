import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopButton = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ВАЖНО: если где-то у тебя был автоскролл вверх при смене страницы —
  // он должен НЕ срабатывать, когда есть hash (#contacts/#products)
  useEffect(() => {
    if (location.hash) return;
    // Если у тебя раньше было что-то вроде window.scrollTo(0,0) при смене маршрута,
    // оставь это, но только без hash.
    // window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.22)",
        background: "rgba(0,0,0,0.45)",
        color: "rgba(255,255,255,0.92)",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
      }}
    >
      ↑
    </button>
  );
};