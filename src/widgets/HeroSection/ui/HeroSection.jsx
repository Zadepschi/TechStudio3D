import { Link } from "react-router-dom";
import style from "./HeroSection.module.scss";
import { Typography } from "@/shared/ui/Typography";

const HERO = {
  headline: "Snap Caps & Dummy Rounds for Dry Fire Training",
  subheadline:
    "Protect your firearm, improve trigger control, and train with confidence using durable, high-visibility inert training rounds.",
  seoText:
    "TechStudio3D manufactures snap caps and dummy rounds for safe dry fire training, reload drills, malfunction practice, and firearm handling. Available in popular calibers including 9mm, .223 Remington, .308 Winchester, 12 Gauge, .45 ACP, and more. Bulk and wholesale supply across the United States.",
};

export const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className={style.hero}
      aria-label="Snap caps and dummy rounds for dry fire training"
    >
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
        <Typography as="h1" variant="h1" className={style.title}>
          {HERO.headline}
        </Typography>

        <Typography variant="body14" className={style.subtitle}>
          {HERO.subheadline}
        </Typography>

        <Typography variant="body12" className={style.seoLine}>
          {HERO.seoText}
        </Typography>

        <div className={style.actions}>
          <Link
            to="/products"
            className={style.primaryButton}
            aria-label="See snap caps and dummy rounds products"
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