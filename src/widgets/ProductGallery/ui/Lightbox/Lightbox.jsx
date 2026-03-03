import { useEffect, useRef, useState } from "react";
import styles from "./Lightbox.module.scss";

export function Lightbox({ images, startIndex, title, onClose, onChangeIndex }) {
  const [index, setIndex] = useState(startIndex);

  const imgRef = useRef(null);
  const captionRef = useRef(null);

  const clampIndex = (i) => (i + images.length) % images.length;
  const goPrev = () => setIndex((i) => clampIndex(i - 1));
  const goNext = () => setIndex((i) => clampIndex(i + 1));

  useEffect(() => {
    onChangeIndex(index);
  }, [index, onChangeIndex]);

  // scroll lock без "прыжков"
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  // swipe
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const onTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e) => {
    const t = e.changedTouches?.[0];
    if (!t) return;

    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    if (Math.abs(dy) > Math.abs(dx)) return;

    const threshold = 50;
    if (dx > threshold) goPrev();
    if (dx < -threshold) goNext();
  };

  const handleOverlayClick = (e) => {
    const img = imgRef.current;
    const cap = captionRef.current;

    if (img && (e.target === img || img.contains(e.target))) return;
    if (cap && (e.target === cap || cap.contains(e.target))) return;

    onClose();
  };

  return (
    <div
      className={styles.lbOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={handleOverlayClick}
    >
      <button
        type="button"
        className={styles.lbClose}
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>

      <button
        type="button"
        className={styles.lbNav}
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
      >
        ‹
      </button>

      <figure className={styles.lbFigure} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img
          ref={imgRef}
          className={styles.lbImage}
          src={images[index]}
          alt={`${title} — image ${index + 1} fullscreen`}
          draggable={false}
        />

        <figcaption ref={captionRef} className={styles.lbCaption}>
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        className={styles.lbNav}
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
      >
        ›
      </button>
    </div>
  );
}