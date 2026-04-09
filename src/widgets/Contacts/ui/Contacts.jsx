import { Link } from "@/shared/ui/Link";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Stack } from "@/shared/ui/Stack";
import { useEffect, useState } from "react";
import styles from "./Contacts.module.scss";
import { CONTACT_ITEMS, CONTACT_CONTENT } from "../lib/contacts.config";
import { Typography } from "@/shared/ui/Typography";
import contactsData from "@/shared/mockDb/contactsPage.json";
import { RequestQuoteForm } from "@/features/RequestQuote";

export const Contacts = () => {
  const [contacts, setContacts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
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
        <Typography>Contacts Error</Typography>
      </section>
    );
  }

  return (
    <section id="contacts" className={styles.sectionContacts}>
      <Typography variant="h2" className={styles.headingStyle}>
        {CONTACT_CONTENT.title}
      </Typography>

      <div className={styles.contentGrid}>
        <Stack direction="column" gap="40" className={styles.leftPanel}>
          <Stack direction="column" gap="24">
            <Typography className={styles.textStyle}>
              {CONTACT_CONTENT.text}
            </Typography>
          </Stack>

          <Stack direction="column" gap="16">
            {isLoading ? (
              <Skeleton height="5vh" />
            ) : (
              CONTACT_ITEMS.map((item) => {
                const text = item.getText?.(contacts);

                if (item.component) {
                  const Component = item.component;
                  const Icon = item.icon;
                  const props = item.getProps?.(contacts);

                  if (!props?.phone || !text) return null;

                  return (
                    <Stack
                      key={item._id}
                      gap="24"
                      align="center"
                      className={styles.contactItem}
                    >
                      {Icon && <Icon />}
                      <Component {...props} className={styles.contactLink}>
                        {text}
                      </Component>
                    </Stack>
                  );
                }

                const { _id, icon: Icon, getHref, external } = item;
                const href = getHref?.(contacts);

                if (!href || !text) return null;

                return (
                  <Stack
                    key={_id}
                    gap="24"
                    align="center"
                    className={styles.contactItem}
                  >
                    {Icon && <Icon strokeWidth={1.25} size={40} />}
                    <Link
                      href={href}
                      ariaLabel={text}
                      external={external}
                      className={styles.contactLink}
                    >
                      {text}
                    </Link>
                  </Stack>
                );
              })
            )}
          </Stack>
        </Stack>

        <div className={styles.rightPanel}>
          {isLoading ? <Skeleton height="700px" /> : <RequestQuoteForm />}
        </div>
      </div>
      <Typography className={styles.responseNote}>
        Our team will get back to you within 24 hours.
      </Typography>
    </section>
  );
};