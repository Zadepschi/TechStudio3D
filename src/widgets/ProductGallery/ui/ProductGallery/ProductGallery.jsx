import { useEffect, useMemo, useState } from "react";
import styles from "./ProductGallery.module.scss";
import { Lightbox } from "../Lightbox/Lightbox";

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
        <div className={styles.main}>
          <button type="button" className={styles.navBtn} onClick={goPrev} aria-label="Previous image">
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
              draggable={false}
            />
          </button>

          <button type="button" className={styles.navBtn} onClick={goNext} aria-label="Next image">
            ›
          </button>
        </div>

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
                <img className={styles.thumbImg} src={src} alt="" loading="lazy" />
              </button>
            );
          })}
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