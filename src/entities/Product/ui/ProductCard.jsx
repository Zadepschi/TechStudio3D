import styles from "./ProductCard.module.scss";

export function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p> Caliber: {product.caliber}</p>
    </div>
  );
}
