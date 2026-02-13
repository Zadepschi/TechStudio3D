import { Stack } from "@/shared/ui/Stack";
import { Line } from "@/shared/ui/Line";
import { steps } from "../lib/data";
import rifleImg from "@/shared/assets/images/9mm.webp";
import styles from "./AdvantagesSection.module.scss";
import { Typography } from "@/shared/ui/Typography";

export const AdvantagesSection = () => {
  return (
    <Stack
      tag="section"
      id="how-it-works"
      direction="column"
      gap="32"
      className={styles.advantagesSection}
    >
      <Stack direction="column" gap="16">
        <Typography variant="h2" weight="bold" className={styles.headingStyle}>
          Why Professionals Choose TechStudio3D
        </Typography>
          <Typography  variant="h3" weight="bold"> 
            Precision-made inert training rounds for instructors, training facilities, and distributors.
           </Typography>
      </Stack>

      <Stack
        direction="column"
        gap="32"
        align="center"
        className={styles.container}
      >
        <picture className={styles.picture}>
          <img
            src={rifleImg}
            alt="Professional custom interior design Atlanta"
          />
        </picture>

        <Stack direction="column" gap="32">
          {steps.map(({ icon, title, text }, i) => (
            <Stack key={`${title}-${i}`} gap="32">
              <Stack direction="column" gap="32">
                {/* ИКОНКА вместо Number — дизайн не меняем */}
                <div className={styles.iconWrapper}>
                  <img src={icon} alt="" aria-hidden="true"  className={styles.icon} />
                </div>

                {i < steps.length - 1 && <Line />}
              </Stack>

              <Stack direction="column" gap="16">
                <Typography variant="h3" weight="bold">
                  {title}
                </Typography>

                <Typography
                  variant="body16"
                  className={`${styles.textProccess} ${styles.textWithHyphens}`}
                >
                  {text}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
