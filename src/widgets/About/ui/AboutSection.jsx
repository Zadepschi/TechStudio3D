import { Stack } from "@/shared/ui/Stack";
import { Typography } from "@/shared/ui/Typography";
import styles from "./AboutSection.module.scss";
import aboutImg from "@/shared/assets/images/about-production.webp";

import { aboutContent } from "../lib/aboutContent";

export const AboutSection = () => {
  return (
    <section id="about" className={styles.sectionAbout}>
      <picture className={styles.picture}>
        <img
          src={aboutImg}
          alt={aboutContent.imageAlt}
          loading="lazy"
        />
      </picture>

      <Stack direction="column" gap={24} className={styles.content}>
        <Typography variant="h2" className={styles.title} noMargin>
          {aboutContent.title}
        </Typography>

        <Stack direction="column" gap={10}>
          {aboutContent.paragraphs.map((text, idx) => (
            <Typography key={idx} variant="body14" className={styles.text} noMargin>
              {text}
            </Typography>
          ))}
        </Stack>

        <div className={styles.quoteContainer}>
          <Typography className={styles.quoteText} noMargin>
            {aboutContent.quote}
          </Typography>
        </div>
      </Stack>
    </section>
  );
};
