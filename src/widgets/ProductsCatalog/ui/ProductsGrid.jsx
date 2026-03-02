import { ProductCard } from "@/entities/Product/ui/ProductCard";

export function ProductsGrid({
  products,
  canShowMore,
  onShowMore,

  sectionClassName,
  gridClassName,
  moreWrapClassName,
  moreBtnClassName,
  arrowClassName,
  moreHintClassName,
}) {
  return (
    <section className={sectionClassName}>
      <div className={gridClassName}>
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <div className={moreWrapClassName}>
        {canShowMore ? (
          <button type="button" className={moreBtnClassName} onClick={onShowMore}>
            View More <span className={arrowClassName}>→</span>
          </button>
        ) : (
          <div className={moreHintClassName}>No more items.</div>
        )}
      </div>
    </section>
  );
}