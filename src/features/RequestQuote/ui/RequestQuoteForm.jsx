import { useEffect, useMemo, useState } from "react";
import { ValidationError } from "@formspree/react";
import { useRequestQuoteForm } from "../model/useRequestQuoteForm";
import styles from "./RequestQuoteForm.module.scss";

const CALIBERS = [
  ".308 Winchester",
  ".223 Remington",
  ".38 Special",
  "9mm Luger",
  ".40 S&W",
  ".45 ACP",
  ".357 Magnum",
  "12 Gauge",
  ".300 Blackout",
  "30-06 Springfield",
  // + остальные
];

// OUTER: показывает success и управляет reset
export function RequestQuoteForm() {
  const [formInstanceKey, setFormInstanceKey] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);

    // показываем сообщение 2.5 сек, потом сбрасываем форму и скрываем сообщение
    window.setTimeout(() => {
      setShowSuccess(false);
      setFormInstanceKey((k) => k + 1); // 🔥 это пересоздаст useForm внутри Inner
    }, 2500);
  };

  return (
    <div className={styles.wrapper}>
      {showSuccess && (
        <div className={styles.success}>
          ✅ Request sent successfully. We’ll contact you soon.
        </div>
      )}

      <RequestQuoteFormInner key={formInstanceKey} onSuccess={handleSuccess} />
    </div>
  );
}

// INNER: здесь живёт useForm (через useRequestQuoteForm)
function RequestQuoteFormInner({ onSuccess }) {
  const { state, handleSubmit, isSubmitting, isSuccess } = useRequestQuoteForm();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const summaryText = useMemo(() => {
    if (selected.length === 0) return "Select calibers";
    if (selected.length <= 2) return selected.join(", ");
    return `${selected.slice(0, 2).join(", ")} +${selected.length - 2}`;
  }, [selected]);

  const toggleCaliber = (caliber) => {
    setSelected((prev) =>
      prev.includes(caliber) ? prev.filter((c) => c !== caliber) : [...prev, caliber]
    );
  };

  // ✅ реагируем на успех 1 раз
  useEffect(() => {
    if (!isSuccess) return;

    setIsOpen(false);
    setSelected([]);
    onSuccess?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* EMAIL */}
      <label className={styles.label} htmlFor="email">Email Address</label>
      <input
        className={styles.input}
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* CALIBERS */}
      <label className={styles.label}>Calibers</label>

      {/* гарантированно отправляем выбранные калибры */}
      <input type="hidden" name="calibers" value={selected.join(", ")} />

      <button
        className={styles.dropdownButton}
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        {summaryText}
      </button>

      {isOpen && (
        <div className={styles.dropdownPanel}>
          <div className={styles.dropdownActions}>
            <button className={styles.actionBtn} type="button" onClick={() => setSelected(CALIBERS)}>
              Select all
            </button>
            <button className={styles.actionBtn} type="button" onClick={() => setSelected([])}>
              Clear
            </button>
          </div>

          {CALIBERS.map((caliber) => (
            <label key={caliber} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selected.includes(caliber)}
                onChange={() => toggleCaliber(caliber)}
              />
              {caliber}
            </label>
          ))}
        </div>
      )}

      {/* MESSAGE */}
      <label className={styles.label} htmlFor="message">Message</label>
      <textarea
        className={styles.textarea}
        id="message"
        name="message"
        placeholder="Tell us pack size and quantity"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className={styles.submitBtn}
        type="submit"
        disabled={isSubmitting || selected.length === 0}
      >
        {isSubmitting ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}
