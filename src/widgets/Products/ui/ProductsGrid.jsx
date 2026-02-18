import { ProductCard } from "@/entities/Product";
import styles from "./ProductsGrid.module.scss";

export function ProductsGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
