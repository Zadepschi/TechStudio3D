import { Stack } from "@/shared/ui/Stack/Stack";
import { WhatsAppIcon } from "@/shared/assets/svg/WhatsAppIcon";
import styles from "./WhatsAppLink.module.scss";

export const WhatsAppLink = ({ phone, message }) => {
  const encodedMessage = encodeURIComponent(message || "");

  const cleanPhone = phone?.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <Stack gap="24" align="center">
      <WhatsAppIcon />

      <a
        className={styles.whatsAppLink}
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Message"
      >
        Contact us on WhatsApp
      </a>
    </Stack>
  );
};
