import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mockProducts } from "@/entities/Product/Model";
import { ProductSpecs } from "@/entities/Product/ui/ProductSpecs/ProductSpecs";
import { ProductDescription } from "@/entities/Product/ui/ProductDescription/ProductDescription";
import { ProductGallery } from "@/widgets/ProductGallery";
import { RequestQuoteButton, RequestQuoteModal } from "@/features/RequestQuote";
import { TABS } from "@/features/ProductFilters/Model/filters.config";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";
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
        <Helmet>
          <title>Product not found</title>
          <meta
            name="description"
            content="Requested product was not found."
          />
          <meta property="og:title" content="Product not found" />
          <meta
            property="og:description"
            content="Requested product was not found."
          />
        </Helmet>

        <h1>Product not found</h1>
        <p>Slug: {slug}</p>
        <Link to="/products">← Back</Link>
      </div>
    );
  }

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const whatsappPhone = product.contacts?.phone || "+1 (669) 224-9627";
  const whatsappMessage =
    product.contacts?.whatsappMessage ||
    `Hello! I want a quote for ${product.title}.`;

  const { specs, benefits, description } = product;
  const formattedCategory = formatCategory(product.category);

  const pageTitle = product.seo?.title || `${product.title} | Products`;
  const pageDescription =
    product.seo?.description ||
    description ||
    `Explore specifications, features, and quote request options for ${product.title}.`;

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        {product.images?.[0] ? (
          <meta property="og:image" content={product.images[0]} />
        ) : null}
      </Helmet>

      <Link className={styles.back} to="/products">
        ← Back to products
      </Link>

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>{product.title}</h1>

        <div className={styles.meta}>
          <Meta label="Category" value={formattedCategory} />
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

            <WhatsAppLink
              phone={whatsappPhone}
              message={whatsappMessage}
              className={styles.secondaryBtn}
              ariaLabel={`WhatsApp about ${product.title}`}
            >
              WhatsApp
            </WhatsAppLink>
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

function formatCategory(category) {
  if (!category) return "";

  const categories = Array.isArray(category) ? category : [category];

  return categories
    .map((key) => getCategoryLabel(key))
    .join(" / ");
}

function getCategoryLabel(key) {
  return TABS.find((tab) => tab.key === key)?.label || key;
}