import { ProductCard } from "@/entities/Product";
import { Typography } from "@/shared/ui/Typography"; // путь поправь

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
          <button
            type="button"
            className={moreBtnClassName}
            onClick={onShowMore}
          >
            <Typography as="span" variant="body16" noMargin>
              View More
            </Typography>{" "}
            <span className={arrowClassName}>→</span>
          </button>
        ) : (
          <Typography
            as="div"
            variant="body14"
            className={moreHintClassName}
          >
            No more items.
          </Typography>
        )}
      </div>
    </section>
  );
}