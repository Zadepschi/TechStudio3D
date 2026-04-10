import { useState } from "react";
import cls from "./ProductsPage.module.scss";

import { mockProducts } from "@/entities/Product";
import { TABS, SORTS } from "@/features/ProductFilters/Model/filters.config";
import { RequestQuoteButton, RequestQuoteModal } from "@/features/RequestQuote";
import { Typography } from "@/shared/ui/Typography";
import { useProductsCatalog } from "@/widgets/ProductsCatalog/model/useProductsCatalog";
import { ProductsGrid } from "@/widgets/ProductsCatalog/ui/ProductsGrid";
import { ProductsControls } from "@/widgets/ProductsCatalog/ui/ProductsCatalog";

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const {
    query,
    setQuery,
    tab,
    setTab,
    sort,
    setSort,
    shown,
    canShowMore,
    showMore,
    resetVisible,
  } = useProductsCatalog(mockProducts);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <header className={cls.hero}>
          <div className={cls.heroTopLine} />

          <Typography
            as="p"
            variant="body14"
            font="poiretOne"
            className={cls.titleLabel}
          >
            PRODUCTS
          </Typography>

          <Typography variant="h1" font="poiretOne" className={cls.title}>
            Snap Caps & Dummy Rounds
          </Typography>

          <Typography variant="body16" className={cls.subtitle}>
            Choose your caliber.
            <br />
            <span className={cls.subtitleDim}>
              Precision-made inert training rounds for <b>dry fire practice</b>.
            </span>
          </Typography>
        </header>

        {/* Короткий SEO-блок сверху */}
        <section className={cls.seoIntro}>
          <Typography variant="body14" className={cls.seoIntroText}>
            Bulk snap caps and dummy rounds for dry fire training, distributors,
            retailers, and training facilities across the United States.
          </Typography>
        </section>

        <ProductsControls
          query={query}
          onQueryChange={setQuery}
          tab={tab}
          onTabChange={setTab}
          sort={sort}
          onSortChange={setSort}
          tabs={TABS}
          sorts={SORTS}
          onAnyChange={resetVisible}
          sectionClassName={cls.controls}
          searchWrapClassName={cls.searchWrap}
          searchIconClassName={cls.searchIcon}
          searchInputClassName={cls.search}
          tabsClassName={cls.tabs}
          tabClassName={cls.tab}
          tabActiveClassName={cls.tabActive}
          sortWrapClassName={cls.sortWrap}
          sortSelectClassName={cls.sort}
        />

        <ProductsGrid
          products={shown}
          canShowMore={canShowMore}
          onShowMore={showMore}
          sectionClassName={cls.gridSection}
          gridClassName={cls.grid}
          moreWrapClassName={cls.moreWrap}
          moreBtnClassName={cls.moreBtn}
          arrowClassName={cls.arrow}
          moreHintClassName={cls.moreHint}
        />

        {/* Основной SEO-текст вниз страницы */}
        <section
          className={cls.seoContent}
          aria-labelledby="products-seo-heading"
        >
          <Typography
            as="h2"
            variant="h3"
            font="poiretOne"
            className={cls.seoHeading}
            id="products-seo-heading"
          >
            Bulk & Wholesale Snap Caps
          </Typography>

          <Typography variant="body14" className={cls.seoText}>
            TechStudio3D manufactures high-quality snap caps and dummy rounds for
            safe firearm handling and dry fire practice. Our products are built
            for long-term use and supplied in bulk for distributors, shooting
            ranges, training centers, and online retailers.
          </Typography>

          <Typography variant="body14" className={cls.seoText}>
            Available categories include handgun snap caps, rifle dummy rounds,
            shotgun training rounds, and rimfire snap caps. Contact us for
            wholesale pricing and custom orders.
          </Typography>
        </section>

        <section className={cls.bottomCta}>
          <Typography variant="body16" className={cls.bottomText}>
            Training facility / Distributor? Request wholesale pricing.
          </Typography>

          <RequestQuoteButton onClick={openQuote} />
        </section>
      </div>

      <RequestQuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />
    </div>
  );
}