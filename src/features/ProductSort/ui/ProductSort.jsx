import styles from "./ProductSort.module.scss";

export function ProductSort({
  value,
  onChange,
  options = [],
  ariaLabel = "Sort",
  wrapClassName = "",
  selectClassName = "",
}) {
  return (
    <div className={`${styles.sortWrap} ${wrapClassName}`}>
      <select
        className={`${styles.sortSelect} ${selectClassName}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
      >
        {options.map((s) => (
          <option key={s.key} value={s.key}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}