import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cls from "./ProductsPage.module.scss";

import { mockProducts } from "@/entities/Product";
import { RequestQuoteForm } from "@/features/RequestQuote";

// ✅ ТУТ ИМПОРТ (выбери один из двух вариантов)
// import { TABS, SORTS } from "@/features/productFilters/model/filters.config";
import { TABS, SORTS } from "@/features/ProductFilters/Model/filters.config";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(12);

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const products = mockProducts;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = products.filter((p) => {
      const matchesTab = tab === "all" ? true : p.category === tab;
      const matchesQ = q
        ? `${p.title ?? ""} ${p.subtitle ?? ""}`.toLowerCase().includes(q)
        : true;

      return matchesTab && matchesQ;
    });

    switch (sort) {
      case "new":
        list = [...list].sort(
          (a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew))
        );
        break;
      case "priceAsc":
        list = [...list].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "popular":
      default:
        list = [...list].sort((a, b) => (b.popular ?? 0) - (a.popular ?? 0));
        break;
    }

    return list;
  }, [products, query, tab, sort]);

  const shown = filtered.slice(0, visibleCount);
  const canShowMore = visibleCount < filtered.length;

  const resetVisible = () => setVisibleCount(12);
  const closeQuote = () => setIsQuoteOpen(false);

  // блокируем скролл фона, пока модалка открыта
  useEffect(() => {
    if (!isQuoteOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isQuoteOpen]);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        {/* HERO */}
        <header className={cls.hero}>
          <div className={cls.heroTopLine} />
          <h1 className={cls.title}>PRODUCTS</h1>
          <p className={cls.subtitle}>
            Choose your caliber.
            <br />
            <span className={cls.subtitleDim}>
              Precision-made inert training rounds for <b>dry fire practice</b>.
            </span>
          </p>
        </header>

        {/* CONTROLS */}
        <section className={cls.controls}>
          <div className={cls.searchWrap}>
            <span className={cls.searchIcon} aria-hidden="true">
              ⌕
            </span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                resetVisible();
              }}
              className={cls.search}
              placeholder="Search caliber..."
            />
          </div>

          <div className={cls.tabs} role="tablist" aria-label="Categories">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`${cls.tab} ${tab === t.key ? cls.tabActive : ""}`}
                onClick={() => {
                  setTab(t.key);
                  resetVisible();
                }}
                role="tab"
                aria-selected={tab === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className={cls.sortWrap}>
            <select
              className={cls.sort}
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                resetVisible();
              }}
              aria-label="Sort"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* GRID */}
        <section className={cls.gridSection}>
          <div className={cls.grid}>
            {shown.map((p) => (
              <article key={p.slug} className={cls.card}>
                <div className={cls.cardGlow} />

                <div className={cls.badges}>
                  {p.tag ? <span className={cls.badgeTop}>{p.tag}</span> : <span />}
                  {p.isNew ? <span className={cls.badgeNew}>NEW</span> : <span />}
                </div>

                <div className={cls.imageArea}>
                  <div className={cls.imageFrame}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className={cls.productImage}
                        loading="lazy"
                      />
                    ) : (
                      <div className={cls.noImage}>No image</div>
                    )}
                  </div>
                </div>

                <div className={cls.cardBody}>
                  <h3 className={cls.cardTitle}>{p.title}</h3>
                  <p className={cls.cardSub}>{p.subtitle}</p>

                  <div className={cls.cardActions}>
                    <Link to={`/products/${p.slug}`} className={cls.cta}>
                      View Product <span className={cls.arrow}>→</span>
                    </Link>

                    {p.amazonUrl ? (
                      <a
                        className={cls.amazonBtn}
                        href={p.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Amazon <span className={cls.arrow}>→</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className={`${cls.amazonBtn} ${cls.amazonBtnDisabled}`}
                        title="Добавь amazonUrl для этого товара"
                        onClick={() => {}}
                      >
                        Amazon <span className={cls.arrow}>→</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={cls.moreWrap}>
            {canShowMore ? (
              <button
                type="button"
                className={cls.moreBtn}
                onClick={() =>
                  setVisibleCount((v) => Math.min(v + 12, filtered.length))
                }
              >
                View More <span className={cls.arrow}>→</span>
              </button>
            ) : (
              <div className={cls.moreHint}>No more items.</div>
            )}
          </div>
        </section>

        {/* FOOT CTA */}
        <section className={cls.bottomCta}>
          <p className={cls.bottomText}>
            Training facility / Distributor? Request wholesale pricing.
          </p>

          <button
            type="button"
            className={cls.quoteBtn}
            onClick={() => setIsQuoteOpen(true)}
          >
            Request Quote
          </button>
        </section>
      </div>

      {/* MODAL WITH FORM */}
      {isQuoteOpen && (
        <div
          className={cls.modalOverlay}
          onClick={closeQuote}
          role="dialog"
          aria-modal="true"
        >
          <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
            <div className={cls.modalHeader}>
              <div className={cls.modalTitle}>Request Quote</div>
              <button
                type="button"
                className={cls.modalClose}
                onClick={closeQuote}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={cls.modalBody}>
              <RequestQuoteForm onSuccess={closeQuote} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}