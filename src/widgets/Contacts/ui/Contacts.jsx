import { Link } from "@/shared/ui/Link";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Stack } from "@/shared/ui/Stack";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";
import { useEffect, useState } from "react";
import styles from "./Contacts.module.scss";
import { CONTACT_ITEMS } from "../lib/contacts.config";
import { Typography } from "@/shared/ui/Typography";
import contactsData from "@/shared/mockDb/contactsPage.json";
import { RequestQuoteForm } from "../../../features/requestQuote";

export const Contacts = () => {
  const [contacts, setContacts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);

        // опционально: имитация загрузки (чтобы Skeleton был виден)
        await new Promise((r) => setTimeout(r, 300));

        setContacts(contactsData);
      } catch (e) {
        setError(e?.message || "Ошибка получения данных");
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  if (error) {
    return (
      <section id="contacts" className={styles.sectionContacts}>
        <Typography>{"Contacts Error"}</Typography>
      </section>
    );
  }

  return (
    <section id="contacts" className={styles.sectionContacts}>
      <Stack direction="column" gap="40">
        <Stack direction="column" gap="24">
          <Typography variant="h2" className={styles.headingStyle}>
            {"Contact Title"}
          </Typography>

          <Typography className={styles.textStyle}>
            {"Contact Text"}
          </Typography>
        </Stack>

        <Stack direction="column" gap="16">
          {isLoading ? (
            <Skeleton height="5vh" />
          ) : (
            CONTACT_ITEMS.map(({ _id, icon: Icon, getHref, getText, external }) => {
              const href = getHref(contacts);
              const text = getText(contacts);

              if (!href || !text) return null;

              return (
                <Stack key={_id} gap="24" align="center">
                  <Icon strokeWidth={1.25} size={40} />
                  <Link href={href} ariaLabel={text} external={external}>
                    {text}
                  </Link>
                  
                </Stack>
              );
            })
          )}
        </Stack>

        <Stack className={styles.ctaLink} gap="24" align="center">
          {!isLoading && contacts.phone && <WhatsAppLink phone={contacts.phone} />}
        </Stack>
      </Stack>

      {isLoading ? (
        <Skeleton height="700px" />
      ) : (
       <RequestQuoteForm/>
      )}
    </section>
  );
};
