export function ProductTabs({
  value,
  onChange,
  tabs,
  className,
  tabClassName,
  tabActiveClassName,
}) {
  return (
    <div className={className} role="tablist" aria-label="Categories">
      {tabs.map((t) => {
        const isActive = value === t.key;

        return (
          <button
            key={t.key}
            type="button"
            className={`${tabClassName || ""} ${isActive ? tabActiveClassName || "" : ""}`}
            onClick={() => onChange(t.key)}
            role="tab"
            aria-selected={isActive}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}