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

  // клавиатура для слайдера (когда НЕ fullscreen)
  useEffect(() => {
    const onKey = (e) => {
      if (isLightboxOpen) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightboxOpen, safeImages.length]);

  if (!safeImages.length) {
    return <div className={styles.empty}>No images</div>;
  }

  const activeSrc = safeImages[activeIndex];

  return (
    <>
      <div className={styles.gallery}>
        {/* MAIN */}
        <div className={styles.main}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Previous image"
            onClick={goPrev}
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
              loading="eager"
            />
          </button>

          <button
            type="button"
            className={styles.navBtn}
            aria-label="Next image"
            onClick={goNext}
          >
            ›
          </button>
        </div>

        {/* THUMBS */}
        <div className={styles.thumbs} role="list" aria-label="Product images">
          {safeImages.map((src, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                role="listitem"
                className={`${styles.thumbBtn} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show image ${idx + 1}`}
                aria-current={isActive ? "true" : "false"}
              >
                <img
                  className={styles.thumbImg}
                  src={src}
                  alt=""
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={safeImages}
          title={title}
          startIndex={activeIndex}
          onClose={() => setIsLightboxOpen(false)}
          onChangeIndex={(idx) => setActiveIndex(idx)}
        />
      )}
    </>
  );
}

function Lightbox({ images, title, startIndex, onClose, onChangeIndex }) {
  const [index, setIndex] = useState(startIndex);
  const overlayRef = useRef(null);

  const clampIndex = (i) => (i + images.length) % images.length;
  const goPrev = () => setIndex((i) => clampIndex(i - 1));
  const goNext = () => setIndex((i) => clampIndex(i + 1));

  // sync to parent
  useEffect(() => {
    onChangeIndex(index);
  }, [index, onChangeIndex]);

  // focus + esc + arrows
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    overlayRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const src = images[index];

  return (
    <div
      className={styles.lbOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      tabIndex={-1}
      ref={overlayRef}
      onMouseDown={(e) => {
        // закрыть по клику на фон
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className={styles.lbClose}
        aria-label="Close"
        onClick={onClose}
      >
        ✕
      </button>

      <button
        type="button"
        className={styles.lbNav}
        aria-label="Previous"
        onClick={goPrev}
      >
        ‹
      </button>

      <figure className={styles.lbFigure}>
        <img
          className={styles.lbImage}
          src={src}
          alt={`${title} — image ${index + 1} fullscreen`}
        />
        <figcaption className={styles.lbCaption}>
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        className={styles.lbNav}
        aria-label="Next"
        onClick={goNext}
      >
        ›
      </button>
    </div>
  );
}