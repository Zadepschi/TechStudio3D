import { Link } from "react-router-dom";
import techStudio from "@/shared/assets/images/hero.webp";
import style from "./HeroSection.module.scss";
import { Typography } from "@/shared/ui/Typography";

const HERO = {
  headline: "Snap Caps Dummy Rounds Built for Safe and Effective Training",
  subheadline: "Protect your firearm, improve trigger control, and train with confidence using durable, high-visibility training rounds.",
};

export const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className={style.hero}
      style={{ backgroundImage: `url(${techStudio})` }}
      aria-label="Hero section"
    >
      {/* ЛОГО — ВНЕ карточки, поверх фото */}
      <Typography
        variant="h1"
        font="poiretOne"
        weight="normal"
        className={style.logoOutside}
      >
        tec<span>h</span>studio<span>3d</span>
      </Typography>

      {/* Тёмный градиент поверх фото */}
      <div className={style.backdrop} />

      {/* Glass-карточка */}
      <div className={style.card} role="region" aria-label="Hero content">
        <Typography variant="h2" className={style.title}>
          {HERO.headline}
        </Typography>

        <Typography variant="body14" className={style.subtitle}>
          {HERO.subheadline}
        </Typography>

        <div className={style.actions}>
          <Link
            to="/products"
            className={style.primaryButton}
            aria-label="Navigate to products"
          >
            SEE PRODUCTS
            <span className={style.arrow} aria-hidden="true">
              ›
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};