import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styles from "./CookieBanner.module.scss";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");

    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <div className={styles.content}>
        <p className={styles.text}>
          We use cookies to improve your browsing experience, analyze site
          traffic, and enhance our services. By clicking “Accept”, you agree to
          our use of cookies.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={handleDecline}
          >
            Decline
          </button>

          <button
            type="button"
            className={styles.primaryBtn}
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};