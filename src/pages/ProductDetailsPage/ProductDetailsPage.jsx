import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mockProducts } from "@/entities/Product/Model";
import { ProductSpecs } from "@/entities/Product/ui/ProductSpecs/ProductSpecs";
import { ProductDescription } from "@/entities/Product/ui/ProductDescription/ProductDescription";
import { ProductGallery } from "@/widgets/ProductGallery";
import { RequestQuoteButton, RequestQuoteModal } from "@/features/RequestQuote";
import styles from "./ProductDetailsPage.module.scss";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const product = useMemo(
    () => mockProducts.find((item) => item.slug === slug),
    [slug]
  );

  if (!product) {
    return (
      <div className={styles.wrap}>
        <h1>Product not found</h1>
        <p>Slug: {slug}</p>
        <Link to="/products">← Back</Link>
      </div>
    );
  }

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const whatsappLink =
    product.contacts?.whatsapp ||
    "https://wa.me/15550001111?text=" +
      encodeURIComponent(`Hello! I want a quote for ${product.title}.`);

  const { specs, benefits, description } = product;

  return (
    <div className={styles.wrap}>
      <Link className={styles.back} to="/products">
        ← Back to products
      </Link>

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>{product.title}</h1>

        <div className={styles.meta}>
          <Meta label="Category" value={product.category} />
        </div>
      </div>

      <div className={styles.top}>
        <div className={styles.left}>
          <ProductGallery images={product.images} title={product.title} />
        </div>

        <div className={styles.right}>
          <ProductSpecs specs={specs} />

          <div className={styles.actions}>
            <RequestQuoteButton onClick={openQuote} />

            <a
              className={styles.secondaryBtn}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <ProductDescription
          description={description}
          benefits={benefits}
        />
      </div>

      <RequestQuoteModal
        isOpen={isQuoteOpen}
        onClose={closeQuote}
      />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className={styles.metaCard}>
      <div className={styles.metaLabel}>{label}</div>
      <div className={styles.metaValue}>{value}</div>
    </div>
  );
}