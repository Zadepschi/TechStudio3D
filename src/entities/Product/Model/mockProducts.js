import img9mm from "@/shared/assets/productsImages/9mm.webp";
import img12ga from "@/shared/assets/productsImages/12ga.webp";
import img223 from "@/shared/assets/productsImages/223.webp";
import img308 from "@/shared/assets/productsImages/308win.webp";

const baseBenefits = [
  "Safe & inert — no primer, no powder",
  "High-visibility color for quick identification",
  "Durable & reusable for repeated training cycles",
  "Ideal for dry fire routines, handling drills, and function checks",
  "Suitable for instructors, clubs, and bulk orders",
];

const baseIncluded = [
  "Snap caps (pack size depends on quote)",
  "Protective packaging for storage and transport",
];

const baseContacts = {
  // потом заменишь на свой номер/ссылку
  whatsapp:
    "https://wa.me/15550001111?text=" +
    encodeURIComponent("Hello! I’d like a quote for TechStudio3D snap caps."),
  quoteTarget: "modal", // "modal" | "contacts-page" (на будущее)
};

export const mockProducts = [
  {
    slug: "p-308",
    title: ".308 WINCHESTER",
    subtitle: "Dry Fire Training",
    image: img308,
    images: [img308, img12ga, img9mm, img223],
    category: "rifles",
    popular: 98,
    price: 49,
    isNew: true,
    tag: "MOST POPULAR",

    description:
      "Inert snap caps for safe, repeatable rifle training. Designed for dry fire practice, loading/unloading drills, and routine function checks with high-visibility identification.",
    benefits: baseBenefits,
    specs: {
      caliber: ".308 Winchester",
      platform: "Rifles (bolt-action & semi-auto)",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-223",
    title: ".223 REMINGTON",
    subtitle: "AR-15 Compatible",
    image: img223,
    images: [img223, img12ga, img9mm, img223],
    category: "ar",
    popular: 92,
    price: 39,
    isNew: true,

    description:
      "AR-platform oriented inert snap caps for safe practice and drills. Built for repeated handling, chambering, and basic function checks during dry fire routines.",
    benefits: baseBenefits,
    specs: {
      caliber: ".223 Remington",
      platform: "AR-15 platform rifles",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-9mm",
    title: "9mm LUGER",
    subtitle: "Handgun Training",
    image: img9mm,
    images: [img9mm, img12ga, img9mm, img9mm],
    category: "handgun",
    popular: 95,
    price: 35,
    isNew: true,

    description:
      "Inert 9mm snap caps for safe handgun training and dry practice. Great for manipulation drills, reload practice, and routine function checks.",
    benefits: baseBenefits,
    specs: {
      caliber: "9mm Luger",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-12ga",
    title: "12 GAUGE",
    subtitle: "Shotgun Dummy Rounds",
    image: img12ga,
    images: [img12ga, img12ga, img12ga, img12ga],
    category: "rifles",
    popular: 74,
    price: 31,
    isNew: false,

    description:
      "Inert dummy rounds for 12 gauge training workflows. Useful for safe loading/unloading practice and basic function checks with high-visibility identification.",
    benefits: baseBenefits,
    specs: {
      caliber: "12 Gauge",
      platform: "Shotguns",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-40sw-a",
    title: ".40 S&W",
    subtitle: "Pistol Snap Caps",
    image: img9mm,
    images: [img9mm, img12ga, img9mm, img9mm],
    category: "handgun",
    popular: 78,
    price: 27,
    isNew: false,

    description:
      "Inert .40 S&W snap caps for safe pistol training and repeated dry fire routines. High-visibility design supports easy identification during drills.",
    benefits: baseBenefits,
    specs: {
      caliber: ".40 S&W",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-45acp-a",
    title: ".45 ACP",
    subtitle: "Dry Fire Training",
    image: img12ga,
    images: [img12ga, img12ga, img12ga, img12ga],
    category: "handgun",
    popular: 88,
    price: 33,
    isNew: false,

    description:
      "Inert .45 ACP snap caps for safe practice and repeated handling drills. Designed for function checks and dry fire routines with clear visual identification.",
    benefits: baseBenefits,
    specs: {
      caliber: ".45 ACP",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-12ga-a",
    title: "12 GAUGE",
    subtitle: "Shotgun Dummy Rounds",
    image: img12ga,
    images: [img12ga, img12ga, img12ga, img12ga],
    category: "rifles",
    popular: 74,
    price: 31,
    isNew: false,

    description:
      "Inert 12 gauge training rounds for safe practice sessions. Helps support consistent handling drills and basic function checks.",
    benefits: baseBenefits,
    specs: {
      caliber: "12 Gauge",
      platform: "Shotguns",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-357",
    title: ".357 MAGNUM",
    subtitle: "Revolver Basics",
    image: img308,
    images: [img308, img12ga, img308, img308],
    category: "revolver",
    popular: 80,
    price: 32,
    isNew: false,

    description:
      "Inert .357 Magnum snap caps for safe revolver practice and handling basics. High-visibility design supports easy identification during training routines.",
    benefits: baseBenefits,
    specs: {
      caliber: ".357 Magnum",
      platform: "Revolvers",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-40sw-b",
    title: ".40 S&W",
    subtitle: "Pistol Snap Caps",
    image: img223,
    images: [img223, img12ga, img223, img223],
    category: "handgun",
    popular: 70,
    price: 25,
    isNew: false,

    description:
      "Inert .40 S&W snap caps for safe drills, handling practice, and function checks. Suitable for repeated dry fire routines.",
    benefits: baseBenefits,
    specs: {
      caliber: ".40 S&W",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-45acp-b",
    title: ".45 ACP",
    subtitle: "Dry Fire Training",
    image: img308,
    images: [img308, img12ga, img308, img308],
    category: "handgun",
    popular: 84,
    price: 34,
    isNew: false,

    description:
      "Inert .45 ACP snap caps designed for safe practice sessions. Supports dry fire routines, manipulation drills, and routine checks.",
    benefits: baseBenefits,
    specs: {
      caliber: ".45 ACP",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-12ga-b",
    title: "12 GAUGE",
    subtitle: "Shotgun Dummy Rounds",
    image: img12ga,
    images: [img12ga, img12ga, img12ga, img12ga],
    category: "rifles",
    popular: 73,
    price: 30,
    isNew: false,

    description:
      "Inert 12 gauge dummy rounds for safe shotgun training workflows. High-visibility color supports quick identification during drills.",
    benefits: baseBenefits,
    specs: {
      caliber: "12 Gauge",
      platform: "Shotguns",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["5 pack", "10 pack", "20 pack"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-ar-kit",
    title: "AR KIT",
    subtitle: "Platform Essentials",
    image: img223,
    images: [img223, img12ga, img223, img223],
    category: "ar",
    popular: 86,
    price: 44,
    isNew: true,

    description:
      "A practical AR platform training bundle concept for safe, repeatable drills. Great for instruction environments and bulk purchase requests.",
    benefits: baseBenefits,
    specs: {
      caliber: "Mixed (AR kit)",
      platform: "AR platform rifles",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["Bundle / quote-based"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-rifle-kit",
    title: "RIFLE KIT",
    subtitle: "Practice Pack",
    image: img308,
    images: [img308, img308, img308, img308],
    category: "rifles",
    popular: 77,
    price: 42,
    isNew: false,

    description:
      "A rifle training bundle concept for safe practice routines and handling drills. Quote-based packs available for clubs and instructors.",
    benefits: baseBenefits,
    specs: {
      caliber: "Mixed (Rifle kit)",
      platform: "Rifles",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["Bundle / quote-based"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },

  {
    slug: "p-handgun-kit",
    title: "HANDGUN KIT",
    subtitle: "Starter Bundle",
    image: img9mm,
    images: [img9mm, img9mm, img9mm, img9mm],
    category: "handgun",
    popular: 90,
    price: 46,
    isNew: true,

    description:
      "A handgun starter bundle concept for safe dry fire routines and handling practice. Designed for training environments and bulk quote requests.",
    benefits: baseBenefits,
    specs: {
      caliber: "Mixed (Handgun kit)",
      platform: "Semi-auto pistols",
      material: "Matte inert polymer",
      color: "High-visibility orange",
      packOptions: ["Bundle / quote-based"],
      inert: "No primer / no powder",
    },
    whatsIncluded: baseIncluded,
    contacts: baseContacts,
  },
];