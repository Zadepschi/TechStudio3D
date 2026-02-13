import { useEffect, useState } from "react";
import badge from '@/shared/assets/images/faq.webp'

import { FaqItem } from "../FaqItem/FaqItem";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";

import styles from "./FaqSection.module.scss";
import { faqApi } from "@/features/ManageFaq/api/faqApi";
import { contactsApi } from "@/features/ManageContacts/api/contactsApi";

export const FaqSection = () => {
  const [faqData, setFaqData] = useState({ items: [] });
  const [contacts, setContacts] = useState({
    phone: "",
    whatsappMessage: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaq = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await faqApi();
      setFaqData(data);
    } catch (err) {
      console.error("Error fetching faq:", err);
      setError(err?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      const data = await contactsApi();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchFaq();
    fetchContacts();
  }, []);

  return (
    <Stack tag="section" id="faq" direction="column" gap="32" className={styles.faq}>
      <Stack direction="column" gap="16">
<h2 className={styles.headingStyle}>
  <img src={badge} alt="FAQ" />
</h2>



        <Typography className={styles.textStyle}>
          Here are answers to the most frequently asked questions.
        </Typography>
      </Stack>

      <Stack direction="column" gap="24" className={styles.faqItem}>
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} height="10vh" />)
        ) : error ? (
          <Typography color="error">Error loading FAQ: {error}</Typography>
        ) : (
          faqData?.items?.map((item) => (
            <FaqItem key={item._id} item={item} defaultOpen={item._id === "1"} />
          ))
        )}
      </Stack>

      <Stack direction="column" align="center" className={styles.container} gap="8">
 <Typography>{contacts?.ctaText}</Typography>
<WhatsAppLink
  phone={contacts?.phone}
  message={contacts?.whatsappMessage}
/>
      </Stack>
    </Stack>
  );
};
