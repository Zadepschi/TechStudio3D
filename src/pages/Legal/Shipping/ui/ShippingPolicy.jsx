import styles from "./ShippingPolicy.module.scss";
import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography";
import {
  SHIPPING_EFFECTIVE_DATE,
  SHIPPING_SECTIONS,
  SHIPPING_CONTACT,
} from "../lib/shipping-policy.data";

export const ShippingPolicy = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <Typography className={styles.badge}>
          SHIPPING POLICY
        </Typography>

        <Typography className={styles.title}>
          Shipping Policy
        </Typography>

        <Typography className={styles.subtitle}>
          Effective Date: {SHIPPING_EFFECTIVE_DATE}
        </Typography>
      </div>

      <div className={styles.card}>
        {SHIPPING_SECTIONS.map((section) => (
          <div key={section.title} className={styles.section}>
            <Typography className={styles.sectionTitle}>
              {section.title}
            </Typography>

            {section.content?.map((text, i) => (
              <Typography key={i} className={styles.text}>
                {text}
              </Typography>
            ))}

            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.footer?.map((text, i) => (
              <Typography key={i} className={styles.text}>
                {text}
              </Typography>
            ))}

            {section.title === "7. Contact Information" && (
              <div className={styles.contactBox}>
                <Typography className={styles.contactText}>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${SHIPPING_CONTACT.email}`}
                    className={styles.link}
                  >
                    {SHIPPING_CONTACT.email}
                  </a>
                </Typography>

                <Typography className={styles.contactText}>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${SHIPPING_CONTACT.phoneHref}`}
                    className={styles.link}
                  >
                    {SHIPPING_CONTACT.phoneLabel}
                  </a>
                </Typography>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};