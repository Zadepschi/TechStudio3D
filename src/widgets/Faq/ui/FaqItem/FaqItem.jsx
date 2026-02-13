import { memo, useEffect, useId, useMemo, useState } from "react";
import { Stack } from "@/shared/ui/Stack/Stack";
import { ChevronDown, Minus, Plus } from "lucide-react";
import styles from "./FaqItem.module.scss";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button/Button";

export const FaqItem = memo(({ item, defaultOpen = false }) => {
  if (!item) return null;

  const contentId = useId();

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const question = item.question ?? "Question";
  const hasVariants = Array.isArray(item.variants) && item.variants.length > 0;

  const safeActiveVariant = useMemo(() => {
    if (!hasVariants) return 0;
    return Math.min(Math.max(activeVariant, 0), item.variants.length - 1);
  }, [activeVariant, hasVariants, item.variants?.length]);

  const answer = hasVariants
    ? item.variants[safeActiveVariant]?.answer ?? "Answer is unavailable"
    : item.answer ?? "Answer is unavailable";

  const toggle = () => setIsOpen((p) => !p);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={styles.faqItem}>
      <Stack
        className={styles.titleContainer}
        justify="between"
        align="center"
        gap="16"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onKeyDown={handleKeyDown}
      >
        <Stack gap="24" align="center">
          <ChevronDown
            strokeWidth={1}
            size={48}
            className={isOpen ? styles.opened : styles.closed}
          />
          <Typography className={styles.title} font="poiretOne">
            {question}
          </Typography>
        </Stack>

        {isOpen ? (
          <Minus className={styles.svgMobile} strokeWidth={1} size={32} />
        ) : (
          <Plus className={styles.svgMobile} strokeWidth={1} size={32} />
        )}
      </Stack>

      {isOpen && (
        <Stack id={contentId} direction="column" gap="16" className={styles.list}>
          {hasVariants && (
            <Stack gap="12" className={styles.variantButtons}>
              {item.variants.map((v, index) => {
                const isActive = index === safeActiveVariant;

                return (
                  <Button
                    key={v.label}
                    type="button"
                    size="xs"
                    variant={isActive ? "primary" : "secondary"}
                    className={styles.variantBtn}
                    ariaLabel={`Select ${v.label}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVariant(index);
                    }}
                  >
                    {v.label}
                  </Button>
                );
              })}
            </Stack>
          )}

          <Typography className={styles.content}>{answer}</Typography>
        </Stack>
      )}
    </div>
  );
});
