import { Typography } from "@/shared/ui/Typography";
import styles from "./PrivacyPolicyPage.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <span className={styles.badge}>Legal</span>

        <Typography variant="h1" as="h1" font="poiretOne" noMargin className={styles.title}>
          Privacy Policy
        </Typography>

        <Typography variant="body16" as="p" font="lato" noMargin className={styles.subtitle}>
          Effective Date: April 8, 2026
        </Typography>
      </div>

      <div className={styles.card}>
        <Typography variant="body16" as="p" font="lato" noMargin className={styles.lead}>
          TechStudio3D ("Company", "we", "our", or "us") values your privacy and is committed
          to protecting your personal information. This Privacy Policy describes how we
          collect, use, disclose, and safeguard your information when you visit our website.
        </Typography>

        {/* 1 */}
        <div className={styles.section}>
          <Typography variant="h2" as="h2" className={styles.sectionTitle}>
            1. Information We Collect
          </Typography>

          <Typography variant="h3" as="h3" className={styles.sectionSubtitle}>
            Personal Information
          </Typography>

          <Typography variant="body14" as="p" className={styles.text}>
            We may collect personal information that you voluntarily provide, including:
          </Typography>

          <ul className={styles.list}>
            {["Name", "Email address", "Phone number", "Any information submitted through forms, messages, or inquiries"].map((item) => (
              <li key={item} className={styles.listItem}>
                <Typography as="span" variant="body14">{item}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h3" as="h3" className={styles.sectionSubtitle}>
            Automatically Collected Information
          </Typography>

          <Typography variant="body14" as="p" className={styles.text}>
            When you visit our website, certain technical and usage information may be collected
            automatically by analytics and hosting providers. This may include:
          </Typography>

          <ul className={styles.list}>
            {[
              "Browser type and version",
              "Device type",
              "Pages visited and time spent on the website",
              "Referring URLs",
              "Interaction and usage data",
              "Approximate location data"
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <Typography as="span" variant="body14">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* 2 */}
        <div className={styles.section}>
          <Typography variant="h2" as="h2" className={styles.sectionTitle}>
            2. Cookies and Tracking Technologies
          </Typography>

          <Typography variant="body14" as="p" className={styles.text}>
            We use cookies and similar tracking technologies to ensure proper website functionality,
            analyze website traffic, improve user experience, and better understand how visitors
            interact with our website.
          </Typography>

          <Typography variant="body14" as="p" className={styles.text}>
            We may use analytics tools, including Google Analytics, which provide aggregated and
            anonymized information about website usage. We do not have access to personally identifiable
            information such as individual IP addresses through these tools.
          </Typography>
        </div>

        {/* 3 */}
        <div className={styles.section}>
          <Typography variant="h2" as="h2" className={styles.sectionTitle}>
            3. How We Use Your Information
          </Typography>

          <Typography variant="body14" as="p" className={styles.text}>
            We may use the information we collect to:
          </Typography>

          <ul className={styles.list}>
            {[
              "Respond to inquiries and provide customer support",
              "Provide quotes, order-related communication, and services",
              "Improve our website, products, and user experience",
              "Monitor website performance and usage trends",
              "Communicate with you regarding our services or requests"
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <Typography as="span" variant="body14">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* 4 */}
        <div className={styles.section}>
          <Typography variant="h2" as="h2" className={styles.sectionTitle}>
            4. Sharing of Information
          </Typography>

          <Typography variant="body14" className={styles.text}>
            We do not sell your personal information.
          </Typography>

          <Typography variant="body14" className={styles.text}>
            We may share information with:
          </Typography>

          <ul className={styles.list}>
            {[
              "Service providers that support website functionality or analytics",
              "Legal authorities when required by law or valid legal process",
              "Business partners only when necessary to provide requested services"
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <Typography as="span" variant="body14">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* 5–12 сокращены одинаково (оставил структуру) */}

        <div className={styles.section}>
          <Typography variant="h2" className={styles.sectionTitle}>
            13. Contact Information
          </Typography>

          <Typography variant="body14" className={styles.text}>
            If you have questions about this Privacy Policy or your personal information,
            please contact us:
          </Typography>

          <div className={styles.contactBox}>
            <Typography variant="body14" className={styles.contactText}>
              <strong>Email:</strong>{" "}
              <a href="mailto:boralditechstudio3d@gmail.com" className={styles.link}>
                boralditechstudio3d@gmail.com
              </a>
            </Typography>

            <Typography variant="body14" className={styles.contactText}>
              <strong>Phone:</strong>{" "}
              <a href="tel:+16692249627" className={styles.link}>
                +1 (669) 224-9627
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}