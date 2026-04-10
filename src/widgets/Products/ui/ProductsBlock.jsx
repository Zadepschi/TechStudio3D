import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "@/entities/Product";
import { Typography } from "@/shared/ui/Typography"; // поправь путь под свой проект
import { ProductsGrid } from "./ProductsGrid";
import styles from "./ProductsBlock.module.scss";

export function ProductsBlock() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (mounted) setItems(data);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const previewItems = useMemo(() => items.slice(0, 4), [items]);

  return (
    <section className={styles.section} id="products">
      <div className={styles.header}>
        <div>
          <Typography
            variant="h2"
            as="h2"
            className={styles.title}
          >
            Products
          </Typography>

          <Typography
            variant="body16"
            as="p"
            className={styles.subtitle}
          >
            Inert dummy training rounds for training, educational, and display
            purposes only.
          </Typography>
        </div>

        <Link
          className={styles.viewAll}
          to="/products"
          aria-label="View all products"
        >
          View all
        </Link>
      </div>

      {loading ? (
        <Typography
          variant="body16"
          as="div"
          className={styles.loading}
        >
          Loading products…
        </Typography>
      ) : (
        <ProductsGrid products={previewItems} />
      )}
    </section>
  );
}