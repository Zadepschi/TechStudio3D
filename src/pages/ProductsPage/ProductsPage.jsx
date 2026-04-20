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

        <section className={cls.seoIntro}>
          <Typography variant="body14" className={cls.seoIntroText}>
            Bulk snap caps and dummy rounds for dry fire training, distributors,
            retailers, and training facilities across the United States.
          </Typography>
        </section>

        <section
          className={cls.seoExplain}
          aria-labelledby="what-are-snap-caps-heading"
        >
          <Typography
            as="h2"
            variant="h3"
            font="poiretOne"
            className={cls.seoHeading}
            id="what-are-snap-caps-heading"
          >
            What Are Snap Caps and Dummy Rounds?
          </Typography>

          <Typography variant="body14" className={cls.seoText}>
            Snap caps and dummy rounds are inert training cartridges designed for
            safe dry fire practice and firearm handling. Unlike live
            ammunition, they contain no powder or primer, allowing shooters to
            safely train without risk.
          </Typography>

          <Typography variant="body14" className={cls.seoText}>
            At TechStudio3D, we manufacture precision snap caps for a wide range
            of calibers including 9mm, .45 ACP, .308 Winchester, .223
            Remington, and more. Our products are engineered for consistent
            chamber fit, durability, and repeated use.
          </Typography>

          <Typography variant="body14" className={cls.seoText}>
            Snap caps are widely used for dry fire training, trigger control
            improvement, malfunction drills, safety instruction, and firearm
            demonstrations. They are essential tools for shooting ranges,
            instructors, and professional users.
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

        <section className={cls.faq} aria-labelledby="products-faq-heading">
          <Typography
            as="h2"
            variant="h3"
            font="poiretOne"
            className={cls.seoHeading}
            id="products-faq-heading"
          >
            FAQ – Snap Caps & Dummy Rounds
          </Typography>

          <div className={cls.faqList}>
            <div className={cls.faqItem}>
              <Typography as="h3" variant="body16" className={cls.faqQuestion}>
                What calibers of snap caps do you offer?
              </Typography>
              <Typography variant="body14" className={cls.faqAnswer}>
                We offer snap caps and dummy rounds for a wide range of
                calibers including 9mm, .45 ACP, .308 Winchester, .223
                Remington, 12 Gauge, .22 LR, and more.
              </Typography>
            </div>

            <div className={cls.faqItem}>
              <Typography as="h3" variant="body16" className={cls.faqQuestion}>
                Are your snap caps suitable for professional training?
              </Typography>
              <Typography variant="body14" className={cls.faqAnswer}>
                Yes. Our products are designed for shooting ranges, instructors,
                distributors, and training facilities that require durable and
                reliable inert training rounds.
              </Typography>
            </div>

            <div className={cls.faqItem}>
              <Typography as="h3" variant="body16" className={cls.faqQuestion}>
                Do you offer bulk and wholesale orders?
              </Typography>
              <Typography variant="body14" className={cls.faqAnswer}>
                Yes. TechStudio3D supplies bulk snap caps and dummy rounds for
                wholesale buyers, online retailers, and commercial training
                operations across the United States.
              </Typography>
            </div>
          </div>
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