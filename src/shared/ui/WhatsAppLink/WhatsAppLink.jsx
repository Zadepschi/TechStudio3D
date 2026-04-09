export const WhatsAppLink = ({
  phone,
  message,
  className,
  children,
  ariaLabel = "WhatsApp Message",
}) => {
  if (!phone) return null;

  const encodedMessage = encodeURIComponent(message || "");
  const cleanPhone = phone.replace(/[^\d]/g, "");

  const waHref = `https://wa.me/${cleanPhone}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
};