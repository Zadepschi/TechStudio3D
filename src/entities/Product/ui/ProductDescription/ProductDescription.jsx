import styles from "./ProductDescription.module.scss";

export function ProductDescription({ description, benefits }) {
  if (!description && !benefits?.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Description</h2>

      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}

      {benefits?.length ? (
        <ul className={styles.bullets}>
          {benefits.slice(0, 5).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}