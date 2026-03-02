import cls from "./ProductFilters.module.scss";

import { TABS, SORTS } from "../Model/filters.config";

export const ProductFilters = ({
  
  query,
  setQuery,
  tab,
  setTab,
  sort,
  setSort,
  resetVisible,
}) => {
    console.log("ProductFilters rendered");
  console.log("cls:", cls);
  return (
    <section className={cls.controls}>
      {/* SEARCH */}
      <div className={cls.searchWrap}>
        <span className={cls.searchIcon} aria-hidden="true">⌕</span>
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

      {/* TABS */}
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

      {/* SORT */}
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
  );
};