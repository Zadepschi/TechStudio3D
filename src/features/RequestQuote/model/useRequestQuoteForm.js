import { useForm } from "@formspree/react";

export const useRequestQuoteForm = () => {
  const [state, handleSubmit] = useForm("mgopdyjk");

  return {
    state,
    handleSubmit,
    isSubmitting: state.submitting,
    isSuccess: state.succeeded,
  };
};
