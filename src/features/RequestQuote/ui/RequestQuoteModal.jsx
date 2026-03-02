import cls from "./RequestQuoteModal.module.scss";
import { RequestQuoteForm } from "./RequestQuoteForm.jsx";

export function RequestQuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className={cls.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cls.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cls.modalHeader}>
          <div className={cls.modalTitle}>Request Quote</div>

          <button
            type="button"
            className={cls.modalClose}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={cls.modalBody}>
          <RequestQuoteForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}