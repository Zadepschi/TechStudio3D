import { useEffect, useMemo, useState } from "react";
import { ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useRequestQuoteForm } from "../../model/useRequestQuoteForm";
import { CALIBERS, CUSTOMER_TYPES } from "../../model/consts";
import styles from "./RequestQuoteForm.module.scss";

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function RequestQuoteForm({ onSuccess }) {
  const [formInstanceKey, setFormInstanceKey] = useState(0);

  const handleSuccess = () => {
    toast.success("Request sent successfully. We’ll contact you soon.");
    onSuccess?.();

    window.setTimeout(() => {
      setFormInstanceKey((k) => k + 1);
    }, 2500);
  };

  return (
    <div className={styles.wrapper}>
      <RequestQuoteFormInner key={formInstanceKey} onSuccess={handleSuccess} />
    </div>
  );
}

function getSummaryText(selected, emptyText) {
  if (selected.length === 0) return emptyText;
  if (selected.length <= 2) return selected.join(", ");
  return `${selected.slice(0, 2).join(", ")} +${selected.length - 2}`;
}

function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case "email":
      if (!trimmedValue) return "Email is required.";
      if (!EMAIL_REGEXP.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
      return "";

    case "name":
      if (!trimmedValue) return "Name is required.";
      if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
      return "";

    case "message":
      if (!trimmedValue) return "Message is required.";
      if (trimmedValue.length < 10) {
        return "Message must be at least 10 characters.";
      }
      return "";

    default:
      return "";
  }
}

function RequestQuoteFormInner({ onSuccess }) {
  const { state, handleSubmit, isSubmitting, isSuccess } = useRequestQuoteForm();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    name: false,
    message: false,
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [isCalibersOpen, setIsCalibersOpen] = useState(false);
  const [isCustomerTypeOpen, setIsCustomerTypeOpen] = useState(false);

  const [selectedCalibers, setSelectedCalibers] = useState([]);
  const [selectedCustomerTypes, setSelectedCustomerTypes] = useState([]);

  const calibersSummary = useMemo(() => {
    return getSummaryText(selectedCalibers, "Select calibers");
  }, [selectedCalibers]);

  const customerTypeSummary = useMemo(() => {
    return getSummaryText(selectedCustomerTypes, "Select customer type");
  }, [selectedCustomerTypes]);

  const toggleItem = (value, setter) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const validateStepOne = () => {
    const nextErrors = {
      email: validateField("email", email),
      name: validateField("name", name),
      message: validateField("message", message),
    };

    setFieldErrors(nextErrors);

    return !Object.values(nextErrors).some(Boolean);
  };

  const handleFieldBlur = (fieldName, value) => {
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  const handleContinue = () => {
    setTouched({
      email: true,
      name: true,
      message: true,
    });

    const isValid = validateStepOne();

    if (!isValid) {
      toast.error("Please fill in the required fields correctly.");
      return;
    }

    setStep(2);
  };

  const handleFormSubmit = (event) => {
    const isValid = validateStepOne();

    if (!isValid) {
      event.preventDefault();
      setTouched({
        email: true,
        name: true,
        message: true,
      });
      setStep(1);
      toast.error("Please correct the form errors before submitting.");
      return;
    }

    handleSubmit(event);
  };

  useEffect(() => {
    if (!isSuccess) return;

    setStep(1);

    setEmail("");
    setName("");
    setMessage("");

    setTouched({
      email: false,
      name: false,
      message: false,
    });

    setFieldErrors({
      email: "",
      name: "",
      message: "",
    });

    setIsCalibersOpen(false);
    setIsCustomerTypeOpen(false);

    setSelectedCalibers([]);
    setSelectedCustomerTypes([]);

    onSuccess?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (!state.errors?.length) return;
    if (isSuccess) return;

    toast.error("Something went wrong. Please check the form and try again.");
  }, [state.errors, isSuccess]);

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
      {step === 1 && (
        <>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles.input} ${
              touched.email && fieldErrors.email ? styles.inputError : ""
            }`}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => {
              const nextValue = e.target.value;
              setEmail(nextValue);

              if (touched.email) {
                setFieldErrors((prev) => ({
                  ...prev,
                  email: validateField("email", nextValue),
                }));
              }
            }}
            onBlur={(e) => handleFieldBlur("email", e.target.value)}
            aria-invalid={Boolean(touched.email && fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            required
          />
          {touched.email && fieldErrors.email && (
            <div id="email-error" className={styles.fieldError}>
              {fieldErrors.email}
            </div>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={`${styles.input} ${
              touched.name && fieldErrors.name ? styles.inputError : ""
            }`}
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              const nextValue = e.target.value;
              setName(nextValue);

              if (touched.name) {
                setFieldErrors((prev) => ({
                  ...prev,
                  name: validateField("name", nextValue),
                }));
              }
            }}
            onBlur={(e) => handleFieldBlur("name", e.target.value)}
            aria-invalid={Boolean(touched.name && fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            required
          />
          {touched.name && fieldErrors.name && (
            <div id="name-error" className={styles.fieldError}>
              {fieldErrors.name}
            </div>
          )}
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={`${styles.textarea} ${
              touched.message && fieldErrors.message ? styles.inputError : ""
            }`}
            id="message"
            name="message"
            placeholder="Tell us pack size and quantity"
            value={message}
            onChange={(e) => {
              const nextValue = e.target.value;
              setMessage(nextValue);

              if (touched.message) {
                setFieldErrors((prev) => ({
                  ...prev,
                  message: validateField("message", nextValue),
                }));
              }
            }}
            onBlur={(e) => handleFieldBlur("message", e.target.value)}
            aria-invalid={Boolean(touched.message && fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            rows={5}
            required
          />
          {touched.message && fieldErrors.message && (
            <div id="message-error" className={styles.fieldError}>
              {fieldErrors.message}
            </div>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            className={styles.submitBtn}
            type="button"
            onClick={handleContinue}
            disabled={isSubmitting}
          >
            Continue
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input type="hidden" name="email" value={email.trim()} />
          <input type="hidden" name="name" value={name.trim()} />
          <input type="hidden" name="message" value={message.trim()} />

          <p className={styles.hint}>
            Optional — helps us provide a more accurate quote.
          </p>

          <label className={styles.label}>Calibers</label>
          <input
            type="hidden"
            name="calibers"
            value={selectedCalibers.join(", ")}
          />

          <button
            className={styles.dropdownButton}
            type="button"
            onClick={() => setIsCalibersOpen((v) => !v)}
            aria-expanded={isCalibersOpen}
          >
            {calibersSummary}
          </button>

          {isCalibersOpen && (
            <div className={styles.dropdownPanel}>
              <div className={styles.dropdownActions}>
                <button
                  className={styles.actionBtn}
                  type="button"
                  onClick={() => setSelectedCalibers(CALIBERS)}
                >
                  Select all
                </button>
                <button
                  className={styles.actionBtn}
                  type="button"
                  onClick={() => setSelectedCalibers([])}
                >
                  Clear
                </button>
              </div>

              {CALIBERS.map((caliber) => (
                <label key={caliber} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCalibers.includes(caliber)}
                    onChange={() => toggleItem(caliber, setSelectedCalibers)}
                  />
                  {caliber}
                </label>
              ))}
            </div>
          )}

          <label className={styles.label}>I am</label>
          <input
            type="hidden"
            name="i_am"
            value={selectedCustomerTypes.join(", ")}
          />

          <button
            className={styles.dropdownButton}
            type="button"
            onClick={() => setIsCustomerTypeOpen((v) => !v)}
            aria-expanded={isCustomerTypeOpen}
          >
            {customerTypeSummary}
          </button>

          {isCustomerTypeOpen && (
            <div className={styles.dropdownPanel}>
              <div className={styles.dropdownActions}>
                <button
                  className={styles.actionBtn}
                  type="button"
                  onClick={() => setSelectedCustomerTypes(CUSTOMER_TYPES)}
                >
                  Select all
                </button>
                <button
                  className={styles.actionBtn}
                  type="button"
                  onClick={() => setSelectedCustomerTypes([])}
                >
                  Clear
                </button>
              </div>

              {CUSTOMER_TYPES.map((type) => (
                <label key={type} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCustomerTypes.includes(type)}
                    onChange={() => toggleItem(type, setSelectedCustomerTypes)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}

          <div className={styles.actions}>
            <button
              className={styles.secondaryBtn}
              type="button"
              onClick={() => setStep(1)}
              disabled={isSubmitting}
            >
              Back
            </button>

            <button
              className={styles.secondaryBtn}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Skip"}
            </button>
          </div>

          <button
            className={styles.submitBtn}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Quote"}
          </button>
        </>
      )}
    </form>
  );
}