import styles from "./ProductSpecs.module.scss";

export function ProductSpecs({ specs }) {
  if (!specs) return null;

  return (
    <section className={styles.specs}>
      <h2 className={styles.h2}>Specifications</h2>

      <ul className={styles.list}>
        {specs.caliber ? (
          <li>
            <b>Caliber:</b> {specs.caliber}
          </li>
        ) : null}

        {specs.platform ? (
          <li>
            <b>Platform:</b> {specs.platform}
          </li>
        ) : null}

        {specs.material ? (
          <li>
            <b>Material:</b> {specs.material}
          </li>
        ) : null}

        {specs.color ? (
          <li>
            <b>Color:</b> {specs.color}
          </li>
        ) : null}

        {specs.inert ? (
          <li>
            <b>Inert:</b> {specs.inert}
          </li>
        ) : null}

      </ul>
    </section>
  );
}