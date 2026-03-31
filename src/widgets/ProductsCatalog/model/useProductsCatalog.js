import { useMemo, useState } from "react";

export function useProductsCatalog(products) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = products.filter((p) => {
      const matchesTab =
        tab === "all"
          ? true
          : Array.isArray(p.category)
            ? p.category.includes(tab)
            : p.category === tab;

      const matchesQuery = q
        ? `${p.title ?? ""} ${p.subtitle ?? ""}`.toLowerCase().includes(q)
        : true;

      return matchesTab && matchesQuery;
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

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filtered.length));
  };

  const resetVisible = () => {
    setVisibleCount(12);
  };

  return {
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
  };
}