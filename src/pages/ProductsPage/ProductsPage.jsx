import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import cls from "./ProductsPage.module.scss";

import img9mm from "@/shared/assets/productsImages/9mm.webp";
import img12ga from "@/shared/assets/productsImages/12ga.webp";
import img223 from "@/shared/assets/productsImages/223.webp";
import img308 from "@/shared/assets/productsImages/308win.webp";

// ✅ ЗАМЕНИ НА СВОЙ КОМПОНЕНТ ФОРМЫ (путь/имя экспорта)
import { RequestQuoteForm } from "@/features/RequestQuote";
// либо пример: import RequestQuoteForm from "@/shared/ui/form/RequestQuoteForm";

const TABS = [
  { key: "all", label: "All" },
  { key: "rifles", label: "Rifles" },
  { key: "ar", label: "AR Platform" },
  { key: "handgun", label: "Handgun" },
  { key: "revolver", label: "Revolver" },
];

const SORTS = [
  { key: "popular", label: "Sort: Popular" },
  { key: "new", label: "Sort: New" },
  { key: "priceAsc", label: "Sort: Price ↑" },
  { key: "priceDesc", label: "Sort: Price ↓" },
];

// 14 карточек (slug нужен для /products/:slug)
// amazonUrl: сюда потом подставишь реальные ссылки
const PRODUCTS = [
  {
    slug: "p-308",
    title: ".308 WINCHESTER",
    subtitle: "Dry Fire Training",
    image: img308,
    category: "rifles",
    popular: 98,
    price: 49,
    isNew: true,
    tag: "MOST POPULAR",
    amazonUrl: "", // <- вставишь ссылку
  },
  {
    slug: "p-223",
    title: ".223 REMINGTON",
    subtitle: "AR-15 Compatible",
    image: img223,
    category: "ar",
    popular: 92,
    price: 39,
    isNew: true,
    amazonUrl: "",
  },
  {
    slug: "p-9mm",
    title: "9mm LUGER",
    subtitle: "Handgun Training",
    image: img9mm,
    category: "handgun",
    popular: 95,
    price: 35,
    isNew: true,
    amazonUrl: "",
  },
  {
    slug: "p-12ga",
    title: "12 GAUGE",
    subtitle: "Shotgun Dummy Rounds",
    image: img12ga,
    category: "rifles",
    popular: 74,
    price: 31,
    isNew: false,
    amazonUrl: "",
  },

  // Остальные пока без картинок — можно позже добавить.
  // Чтобы карточки выглядели нормально, дадим fallback image (например img9mm).
  { slug: "p-40sw-a", title: ".40 S&W", subtitle: "Pistol Snap Caps", image: img9mm, isNew: false, category: "handgun", popular: 78, price: 27, amazonUrl: "" },
  { slug: "p-45acp-a", title: ".45 ACP", subtitle: "Dry Fire Training", image: img12ga, isNew: false, category: "handgun", popular: 88, price: 33, amazonUrl: "" },
  { slug: "p-12ga-a", title: "12 GAUGE", subtitle: "Shotgun Dummy Rounds", image: img12ga, isNew: false, category: "rifles", popular: 74, price: 31, amazonUrl: "" },
  { slug: "p-357", title: ".357 MAGNUM", subtitle: "Revolver Basics", image: img308, isNew: false, category: "revolver", popular: 80, price: 32, amazonUrl: "" },

  { slug: "p-40sw-b", title: ".40 S&W", subtitle: "Pistol Snap Caps", image: img223, isNew: false, category: "handgun", popular: 70, price: 25, amazonUrl: "" },
  { slug: "p-45acp-b", title: ".45 ACP", subtitle: "Dry Fire Training", image: img308, isNew: false, category: "handgun", popular: 84, price: 34, amazonUrl: "" },
  { slug: "p-12ga-b", title: "12 GAUGE", subtitle: "Shotgun Dummy Rounds", image: img12ga, isNew: false, category: "rifles", popular: 73, price: 30, amazonUrl: "" },
  { slug: "p-ar-kit", title: "AR KIT", subtitle: "Platform Essentials", image: img223, isNew: true, category: "ar", popular: 86, price: 44, amazonUrl: "" },

  { slug: "p-rifle-kit", title: "RIFLE KIT", subtitle: "Practice Pack", image: img308, isNew: false, category: "rifles", popular: 77, price: 42, amazonUrl: "" },
  { slug: "p-handgun-kit", title: "HANDGUN KIT", subtitle: "Starter Bundle", image: img9mm, isNew: true, category: "handgun", popular: 90, price: 46, amazonUrl: "" },
];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(12);

  // ✅ модалка формы
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = PRODUCTS.filter((p) => {
      const matchesTab = tab === "all" ? true : p.category === tab;
      const matchesQ = q ? (p.title + " " + p.subtitle).toLowerCase().includes(q) : true;
      return matchesTab && matchesQ;
    });

    switch (sort) {
      case "new":
        list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "popular":
      default:
        list = [...list].sort((a, b) => b.popular - a.popular);
        break;
    }

    return list;
  }, [query, tab, sort]);

  const shown = filtered.slice(0, visibleCount);
  const canShowMore = visibleCount < filtered.length;

  const closeQuote = () => setIsQuoteOpen(false);

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
            <span className={cls.searchIcon} aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(12);
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
                  setVisibleCount(12);
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
                setVisibleCount(12);
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

                {/* IMAGE (large) */}
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

                    {/* ✅ Amazon button: ссылка из amazonUrl */}
                    {p.amazonUrl ? (
                      <a
                        className={cls.amazonBtn}
                        href={p.amazonUrl}
                        target="_blank"
                        rel="noreferrer"
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
                onClick={() => setVisibleCount((v) => Math.min(v + 12, filtered.length))}
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

      {/* ✅ MODAL WITH FORM */}
      {isQuoteOpen && (
        <div className={cls.modalOverlay} onClick={closeQuote} role="dialog" aria-modal="true">
          <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
            <div className={cls.modalHeader}>
              <div className={cls.modalTitle}>Request Quote</div>
              <button type="button" className={cls.modalClose} onClick={closeQuote} aria-label="Close">
                ✕
              </button>
            </div>

            {/* ТВОЯ ФОРМА */}
            <RequestQuoteForm onSuccess={closeQuote} />
          </div>
        </div>
      )}
    </div>
  );
}