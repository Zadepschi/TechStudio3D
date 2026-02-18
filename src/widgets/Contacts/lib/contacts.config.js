import { Mail, Phone, ShoppingBag } from "lucide-react";

export const CONTACT_ITEMS = [
  {
    _id: "1",
    icon: Mail,
    getHref: (contacts) =>
      contacts.email ? `mailto:${contacts.email}` : undefined,
    getText: (contacts) => contacts.email,
    external: false,
  },
  {
    _id: "2",
    icon: Phone,
    getHref: (contacts) =>
      contacts.phone ? `tel:${contacts.phone}` : undefined,
    getText: (contacts) => contacts.phone,
    external: false,
  },
  {
    _id: "3",
    icon: ShoppingBag, // можно заменить на кастомную Amazon иконку
    getHref: (contacts) => contacts.Amazon || undefined,
    getText: () => "Amazon",
    external: true,
  },
  {
    _id: "4",
    icon: ShoppingBag, // можно заменить на кастомную eBay иконку
    getHref: (contacts) => contacts.eBay || undefined,
    getText: () => "eBay",
    external: true,
  },
];
