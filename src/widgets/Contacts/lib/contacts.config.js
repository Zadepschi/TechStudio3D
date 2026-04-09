import { Mail, Phone } from "lucide-react";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/shared/assets/svg/WhatsAppIcon";

export const CONTACT_CONTENT = {
  title: "Contact Us",
  text: "We’re here to assist with any questions or custom requests.",
};

export const CONTACT_ITEMS = [
  {
    _id: "1",
    icon: Mail,
    getHref: (contacts) =>
      contacts?.email ? `mailto:${contacts.email}` : undefined,
    getText: (contacts) => contacts?.email,
    external: false,
  },
  {
    _id: "2",
    icon: Phone,
    getHref: (contacts) =>
      contacts?.phone ? `tel:${contacts.phone}` : undefined,
    getText: (contacts) => contacts?.phone,
    external: false,
  },
  {
    _id: "3",
    icon: WhatsAppIcon,
    component: WhatsAppLink,
    getText: () => "Contact us on WhatsApp",
    getProps: (contacts) => ({
      phone: contacts?.phone,
      ariaLabel: "Contact us on WhatsApp",
    }),
  },
];