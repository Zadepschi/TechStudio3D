import { Link } from "react-router-dom";
import techStudio from "@/shared/assets/images/hero.webp";
import style from "./HeroSection.module.scss";
import { Typography } from "@/shared/ui/Typography";

const HERO = {
  headline: "Snap Caps & Dummy Rounds for Safe Training",
  subheadline:
    "Protect your firearm, improve trigger control, and train with confidence using durable, high-visibility training rounds.",
  seoText:
    "Manufacturer of snap caps and dummy rounds for dry fire training. Bulk and wholesale supply across the United States.",
};

export const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className={style.hero}
      style={{ backgroundImage: `url(${techStudio})` }}
      aria-label="Hero section"
    >
      {/* ЛОГО */}
      <Typography
        as="p"
        variant="body16"
        font="poiretOne"
        className={style.logoOutside}
      >
        tec<span>h</span>studio<span>3d</span>
      </Typography>

      <div className={style.backdrop} />

      <div className={style.card} role="region" aria-label="Hero content">
        {/* SEO H1 */}
        <Typography as="h1" variant="h1" className={style.title}>
          {HERO.headline}
        </Typography>

        {/* Основной текст */}
        <Typography variant="body14" className={style.subtitle}>
          {HERO.subheadline}
        </Typography>

        {/* 🔥 SEO ДОБАВКА */}
        <Typography variant="body12" className={style.seoLine}>
          {HERO.seoText}
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