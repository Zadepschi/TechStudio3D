import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

export function ProductCard({ product }) {
  const p = product;

  return (
    <article className={styles.card}>
      <div className={styles.cardGlow} />

      <div className={styles.badges}>
        {p.tag ? <span className={styles.badgeTop}>{p.tag}</span> : <span />}
        {p.isNew ? <span className={styles.badgeNew}>NEW</span> : <span />}
      </div>

      <div className={styles.imageArea}>
        <div className={styles.imageFrame}>
          {p.image ? (
            <img
              src={p.image}
              alt={p.title ?? "Product"}
              className={styles.productImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.noImage}>No image</div>
          )}
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{p.title}</h3>


        <p className={styles.cardSub}>
          {p.subtitle ? p.subtitle : p.caliber ? `Caliber: ${p.caliber}` : ""}
        </p>

        <div className={styles.cardActions}>
          <Link to={`/products/${p.slug}`} className={styles.cta}>
            View Product <span className={styles.arrow}>→</span>
          </Link>


        </div>
      </div>
    </article>
  );
}