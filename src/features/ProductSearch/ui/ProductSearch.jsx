export function ProductSearch({
  value,
  onChange,
  placeholder = "Search caliber...",
  className,
  wrapClassName,
  iconClassName,
}) {
  return (
    <div className={wrapClassName}>
      <span className={iconClassName} aria-hidden="true">
        ⌕
      </span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
}