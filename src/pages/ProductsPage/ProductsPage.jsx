import { useState } from "react";
import cls from "./ProductsPage.module.scss";

import { mockProducts } from "@/entities/Product";
import { TABS, SORTS } from "@/features/ProductFilters/Model/filters.config";
import { RequestQuoteButton, RequestQuoteModal } from "@/features/RequestQuote";
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
          <h1 className={cls.title}>PRODUCTS</h1>
          <p className={cls.subtitle}>
            Choose your caliber.
            <br />
            <span className={cls.subtitleDim}>
              Precision-made inert training rounds for <b>dry fire practice</b>.
            </span>
          </p>
        </header>

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

        <section className={cls.bottomCta}>
          <p className={cls.bottomText}>
            Training facility / Distributor? Request wholesale pricing.
          </p>

          <RequestQuoteButton onClick={openQuote} />
        </section>
      </div>

      <RequestQuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />
    </div>
  );
}