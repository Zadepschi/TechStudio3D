import { Typography } from "@/shared/ui/Typography";
import styles from "./PrivacyPolicyPage.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <span className={styles.badge}>Legal</span>

        <Typography
          variant="h1"
          as="h1"
          font="poiretOne"
          noMargin
          className={styles.title}
        >
          Privacy Policy
        </Typography>

        <Typography
          variant="body16"
          as="p"
          font="lato"
          noMargin
          className={styles.subtitle}
        >
          Effective Date: April 8, 2026
        </Typography>
      </div>

      <div className={styles.card}>
        <Typography
          variant="body16"
          as="p"
          font="lato"
          noMargin
          className={styles.lead}
        >
          TechStudio3D ("Company", "we", "our", or "us") values your privacy
          and is committed to protecting your personal information. This Privacy
          Policy describes how we collect, use, disclose, and safeguard your
          information when you visit our website.
        </Typography>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            1. Information We Collect
          </Typography>

          <Typography
            variant="h3"
            as="h3"
            font="lato"
            noMargin
            className={styles.sectionSubtitle}
          >
            Personal Information
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We may collect personal information that you voluntarily provide,
            including:
          </Typography>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Name
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Email address
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Phone number
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Any information submitted through forms, messages, or inquiries
              </Typography>
            </li>
          </ul>

          <Typography
            variant="h3"
            as="h3"
            font="lato"
            noMargin
            className={styles.sectionSubtitle}
          >
            Automatically Collected Information
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            When you visit our website, we may automatically collect:
          </Typography>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                IP address
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Browser type and version
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Device type
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Pages visited and time spent on the website
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Referring URLs
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Interaction and usage data
              </Typography>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            2. Cookies and Tracking Technologies
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We use cookies and similar tracking technologies to ensure proper
            website functionality, analyze website traffic, improve user
            experience, and better understand how visitors interact with our
            website.
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We may use analytics tools, including Google Analytics, to collect
            aggregated and anonymized usage information. You can manage your
            cookie preferences through our cookie banner. By clicking “Accept,”
            you consent to our use of cookies as described in this Privacy
            Policy.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            3. How We Use Your Information
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We may use the information we collect to:
          </Typography>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Respond to inquiries and provide customer support
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Provide quotes, order-related communication, and services
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Improve our website, products, and user experience
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Monitor website performance and usage trends
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Communicate with you regarding our services or requests
              </Typography>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            4. Sharing of Information
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We do not sell your personal information.
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We may share information with:
          </Typography>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Service providers that support website functionality or analytics
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Legal authorities when required by law or valid legal process
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Business partners only when necessary to provide requested services
              </Typography>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            5. Data Retention
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We retain personal information only for as long as reasonably
            necessary to fulfill the purposes described in this Privacy Policy,
            unless a longer retention period is required or permitted by law.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            6. Data Security
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We use reasonable administrative, technical, and physical safeguards
            designed to protect your information. However, no method of
            transmission over the Internet or method of electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            7. Third-Party Services
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            Our website may include links to or integrations with third-party
            services, such as WhatsApp. We are not responsible for the privacy
            practices, content, or policies of third-party platforms or
            services.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            8. Your Privacy Rights (California Residents)
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            If you are a California resident, you may have certain rights under
            applicable privacy laws, including the right to:
          </Typography>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Request access to the personal information we collect about you
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Request deletion of your personal information
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Know what categories of personal information are collected and how they are used
              </Typography>
            </li>
            <li className={styles.listItem}>
              <Typography as="span" variant="body14" font="lato" noMargin>
                Opt out of the sale of personal information, if applicable
              </Typography>
            </li>
          </ul>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We do not sell personal information. To exercise your rights, please
            contact us using the contact information below.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            9. Do Not Track Signals
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            Our website does not currently respond to “Do Not Track” browser
            signals due to the lack of a consistent industry standard for such
            responses.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            10. Children’s Privacy
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            Our website and services are not directed to children under the age
            of 13. We do not knowingly collect personal information from
            children under 13.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            11. International Users
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            If you access our website from outside the United States, please be
            aware that your information may be transferred to, stored, and
            processed in the United States.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            12. Changes to This Privacy Policy
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </Typography>
        </div>

        <div className={styles.section}>
          <Typography
            variant="h2"
            as="h2"
            font="lato"
            noMargin
            className={styles.sectionTitle}
          >
            13. Contact Information
          </Typography>

          <Typography
            variant="body14"
            as="p"
            font="lato"
            noMargin
            className={styles.text}
          >
            If you have questions about this Privacy Policy or your personal
            information, please contact us:
          </Typography>

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
      href="mailto:boralditechstudio3d@gmail.com"
      className={styles.link}
    >
      boralditechstudio3d@gmail.com
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
      href="tel:+16692249627"
      className={styles.link}
    >
      +1 (669) 224-9627
    </a>
  </Typography>
</div>
        </div>
      </div>
    </section>
  );
}