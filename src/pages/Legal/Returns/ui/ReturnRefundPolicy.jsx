import styles from "./ReturnRefundPolicy.module.scss";
import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography";
import {
  RETURN_REFUND_CONTACT,
  RETURN_REFUND_EFFECTIVE_DATE,
  RETURN_REFUND_SECTIONS,
} from "../lib/return-refund-policy.data";

export const ReturnRefundPolicy = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <Typography className={styles.badge}>
          RETURN / REFUND POLICY
        </Typography>

        <Typography variant="h1" className={styles.title}>
          Return / Refund Policy
        </Typography>

        <Typography className={styles.subtitle}>
          Effective Date: {RETURN_REFUND_EFFECTIVE_DATE}
        </Typography>
      </div>

      <div className={styles.card}>
        <Stack direction="column" gap="0">
          {RETURN_REFUND_SECTIONS.map((section) => (
            <section key={section.title} className={styles.section}>
              <Typography variant="h3" className={styles.sectionTitle}>
                {section.title}
              </Typography>

              {section.content?.map((text, index) => (
                <Typography key={index} className={styles.text}>
                  {text}
                </Typography>
              ))}

              {section.list?.length ? (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.footer?.map((text, index) => (
                <Typography key={index} className={styles.sectionSubtitle}>
                  {text}
                </Typography>
              ))}

              {section.title === "8. Contact Information" ? (
                <div className={styles.contactBox}>
                  <Typography
                    variant="body14"
                    as="p"
                    font="lato"
                    noMargin
                    className={styles.contactText}
                  >
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${RETURN_REFUND_CONTACT.email}`}
                      className={styles.link}
                    >
                      {RETURN_REFUND_CONTACT.email}
                    </a>
                  </Typography>

                  <Typography
                    variant="body14"
                    as="p"
                    font="lato"
                    noMargin
                    className={styles.contactText}
                  >
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${RETURN_REFUND_CONTACT.phoneHref}`}
                      className={styles.link}
                    >
                      {RETURN_REFUND_CONTACT.phoneLabel}
                    </a>
                  </Typography>
                </div>
              ) : null}
            </section>
          ))}
        </Stack>
      </div>
    </section>
  );
};