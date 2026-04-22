import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import { AppRouter } from "@/app/providers/router/ui/AppRouter";
import { Toast } from "@/shared/ui/Toast";
import { CookieBanner } from "@/shared/ui/CookieBanner";
import { initAnalytics, trackPageView } from "@/shared/lib";

function App() {
  const location = useLocation();


  useEffect(() => {
    const consent = Cookies.get("cookie_consent");

    if (consent === "accepted") {
      initAnalytics();
    }
  }, []);


  useEffect(() => {
    const consent = Cookies.get("cookie_consent");

    if (consent === "accepted") {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return (
    <>
      <AppRouter />
      <Toast />
      <CookieBanner />
    </>
  );
}

export default App;