import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ProductGallery.module.scss";

export function ProductGallery({ images = [], title = "" }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const clampIndex = (i) => {
    if (!safeImages.length) return 0;
    return (i + safeImages.length) % safeImages.length;
  };

  const goPrev = () => setActiveIndex((i) => clampIndex(i - 1));
  const goNext = () => setActiveIndex((i) => clampIndex(i + 1));

  // клавиатура для обычного слайдера (НЕ fullscreen)
  useEffect(() => {
    const onKey = (e) => {
      if (isLightboxOpen) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen]);

  if (!safeImages.length) {
    return <div className={styles.empty}>No images</div>;
  }

  const activeSrc = safeImages[activeIndex];

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.main}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            className={styles.mainImageBtn}
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Open image fullscreen"
          >
            <img
              className={styles.mainImage}
              src={activeSrc}
              alt={`${title} — image ${activeIndex + 1}`}
            />
          </button>

          <button
            type="button"
            className={styles.navBtn}
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className={styles.thumbs}>
          {safeImages.map((src, idx) => (
            <button
              key={idx}
              className={`${styles.thumbBtn} ${
                idx === activeIndex ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <img className={styles.thumbImg} src={src} alt="" />
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={safeImages}
          startIndex={activeIndex}
          title={title}
          onClose={() => setIsLightboxOpen(false)}
          onChangeIndex={(i) => setActiveIndex(i)}
        />
      )}
    </>
  );
}

function Lightbox({ images, startIndex, title, onClose, onChangeIndex }) {
  const [index, setIndex] = useState(startIndex);

  const clampIndex = (i) => (i + images.length) % images.length;
  const goPrev = () => setIndex((i) => clampIndex(i - 1));
  const goNext = () => setIndex((i) => clampIndex(i + 1));

  // sync to parent
  useEffect(() => {
    onChangeIndex(index);
  }, [index, onChangeIndex]);

  // блокируем скролл страницы
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // swipe
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    if (Math.abs(dy) > Math.abs(dx)) return;

    const threshold = 50;
    if (dx > threshold) goPrev();
    if (dx < -threshold) goNext();
  };

  return (
    <div
      className={styles.lbOverlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className={styles.lbClose} onClick={onClose}>
        ✕
      </button>

      <button className={styles.lbNav} onClick={goPrev}>
        ‹
      </button>

      <figure
        className={styles.lbFigure}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          className={styles.lbImage}
          src={images[index]}
          alt={`${title} fullscreen`}
          draggable={false}
        />
        <figcaption className={styles.lbCaption}>
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button className={styles.lbNav} onClick={goNext}>
        ›
      </button>
    </div>
  );
}