import styles from "./TermsAndConditions.module.scss";
import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography";
import {
  TERMS_CONTACT,
  TERMS_EFFECTIVE_DATE,
  TERMS_SECTIONS,
} from "../lib/terms-and-conditions.data";

export const TermsAndConditions = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <Typography className={styles.badge}>Legal</Typography>

        <Typography variant="h1" className={styles.title}>
          Terms & Conditions
        </Typography>

        <Typography className={styles.subtitle}>
          Effective Date: {TERMS_EFFECTIVE_DATE}
        </Typography>
      </div>

      <div className={styles.card}>
        <Typography className={styles.lead}>
          Welcome to TechStudio3D. These Terms and Conditions ("Terms")
          govern your use of our website and services. By accessing or using
          our website, you agree to these Terms. If you do not agree, please
          do not use our website.
        </Typography>

        <Stack direction="column" gap="0">
          {TERMS_SECTIONS.map((section) => (
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

              {section.extraList?.length ? (
                <ul className={styles.list}>
                  {section.extraList.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.title === "16. Contact Information" ? (
                <div className={styles.contactBox}>
                  <Typography className={styles.contactText}>
                    <span className={styles.label}>Email:</span>{" "}
                    <a
                      href={`mailto:${TERMS_CONTACT.email}`}
                      className={styles.link}
                    >
                      {TERMS_CONTACT.email}
                    </a>
                  </Typography>

                  <Typography className={styles.contactText}>
                    <span className={styles.label}>Phone:</span>{" "}
                    <a
                      href={`tel:${TERMS_CONTACT.phoneHref}`}
                      className={styles.link}
                    >
                      {TERMS_CONTACT.phoneLabel}
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