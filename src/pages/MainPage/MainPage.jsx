import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Stack } from "../../shared/ui/Stack/Stack";
import { AdvantagesSection } from "@/widgets/AdvantagesSection/ui/AdvantagesSection.jsx";
import { FaqSection } from "@/widgets/Faq/ui/FaqSection/FaqSection";
import { AboutSection } from "@/widgets/About/ui/AboutSection";
import { HeroSection } from "../../widgets/HeroSection";
import { Contacts } from "../../widgets/Contacts";
import { Footer } from "../../widgets/Footer";
import { ProductsBlock } from "../../widgets/Products";

const ScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    let tries = 0;
    const maxTries = 60;

    const tick = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        navigate(location.pathname, { replace: true, state: null });
        return;
      }

      tries += 1;
      if (tries < maxTries) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [location, navigate]);

  return null;
};

const MainPage = () => {
  return (
    <>
      <ScrollToSection />

      <Stack direction="column" align="center" gap="16">
        <HeroSection />
        <AboutSection />
        <ProductsBlock />
        <AdvantagesSection />
        <FaqSection />
        <Contacts />
        <Footer />
      </Stack>
    </>
  );
};

export default MainPage;