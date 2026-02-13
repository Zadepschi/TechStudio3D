import faqData from "@/shared/mockDb/faq.json";

export const faqApi = async () => {
  // чтобы увидеть Skeleton (можешь убрать)
  await new Promise((r) => setTimeout(r, 300));
  return faqData;
};
