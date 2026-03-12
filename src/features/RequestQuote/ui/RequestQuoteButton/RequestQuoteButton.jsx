import styles from "./RequestQuoteButton.module.scss";

export function RequestQuoteButton({
  onClick,
  className = "",
  children = "Request Quote",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}