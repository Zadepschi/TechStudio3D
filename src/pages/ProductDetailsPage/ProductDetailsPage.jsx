// ProductDetailsPage.jsx
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { mockProducts } from "@/entities/Product/Model";
import { ProductGallery } from "@/widgets/ProductGallery";
import styles from "./ProductDetailsPage.module.scss";

export default function ProductDetailsPage() {
  const { slug } = useParams();

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

  const whatsappLink =
    product.contacts?.whatsapp ||
    "https://wa.me/15550001111?text=" +
      encodeURIComponent(`Hello! I want a quote for ${product.title}.`);

  const { specs, benefits, whatsIncluded, description } = product;

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
          {specs ? (
            <section className={styles.specs}>
              <h2 className={styles.h2}>Specifications</h2>

              <ul className={styles.list}>
                {specs.caliber ? (
                  <li>
                    <b>Caliber:</b> {specs.caliber}
                  </li>
                ) : null}
                {specs.platform ? (
                  <li>
                    <b>Platform:</b> {specs.platform}
                  </li>
                ) : null}
                {specs.material ? (
                  <li>
                    <b>Material:</b> {specs.material}
                  </li>
                ) : null}
                {specs.color ? (
                  <li>
                    <b>Color:</b> {specs.color}
                  </li>
                ) : null}
                {specs.inert ? (
                  <li>
                    <b>Inert:</b> {specs.inert}
                  </li>
                ) : null}
                {specs.packOptions?.length ? (
                  <li>
                    <b>Pack options:</b> {specs.packOptions.join(", ")}
                  </li>
                ) : null}
              </ul>
            </section>
          ) : null}

          <div className={styles.actions}>
            <button className={styles.primaryBtn} type="button">
              Request a Quote
            </button>

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
        {(description || benefits?.length) && (
          <section className={styles.section}>
            <h2 className={styles.h2}>Description</h2>

            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}

            {benefits?.length ? (
              <ul className={styles.bullets}>
                {benefits.slice(0, 5).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </section>
        )}

        {whatsIncluded?.length ? (
          <section className={styles.section}>
            <h2 className={styles.h2}>What’s included</h2>
            <ul className={styles.bullets}>
              {whatsIncluded.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
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