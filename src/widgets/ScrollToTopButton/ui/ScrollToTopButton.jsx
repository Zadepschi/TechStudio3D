import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ScrollToTopButton.module.scss";

export const ScrollToTopButton = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) return;
  }, [location.pathname, location.hash]);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.scrollToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};