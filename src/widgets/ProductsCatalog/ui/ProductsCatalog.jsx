import { ProductSearch } from "@/features/ProductSearch";
import { ProductTabs } from "@/features/ProductTabs";
import { ProductSort } from "@/features/ProductSort";

export function ProductsControls({
  query,
  onQueryChange,

  tab,
  onTabChange,

  sort,
  onSortChange,

  tabs,
  sorts,

  onAnyChange,

  // классы из ProductsPage.module.scss
  sectionClassName,

  searchWrapClassName,
  searchIconClassName,
  searchInputClassName,

  tabsClassName,
  tabClassName,
  tabActiveClassName,

  sortWrapClassName,
  sortSelectClassName,
}) {
  return (
    <section className={sectionClassName}>
      <ProductSearch
        value={query}
        onChange={(next) => {
          onQueryChange(next);
          onAnyChange?.();
        }}
        wrapClassName={searchWrapClassName}
        iconClassName={searchIconClassName}
        className={searchInputClassName}
        placeholder="Search caliber..."
      />

      <ProductTabs
        value={tab}
        onChange={(next) => {
          onTabChange(next);
          onAnyChange?.();
        }}
        tabs={tabs}
        className={tabsClassName}
        tabClassName={tabClassName}
        tabActiveClassName={tabActiveClassName}
      />

      <ProductSort
        value={sort}
        onChange={(next) => {
          onSortChange(next);
          onAnyChange?.();
        }}
        options={sorts}
        wrapClassName={sortWrapClassName}
        selectClassName={sortSelectClassName}
        ariaLabel="Sort"
      />
    </section>
  );
}