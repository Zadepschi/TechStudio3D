export function ProductSort({
  value,
  onChange,
  options,
  ariaLabel = "Sort",
  wrapClassName,
  selectClassName,
}) {
  return (
    <div className={wrapClassName}>
      <select
        className={selectClassName}
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