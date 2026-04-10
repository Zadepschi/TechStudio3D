import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui/Typography"; // путь поправь
import style from "./Footer.module.scss";

export const Footer = forwardRef(function Footer(_, ref) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={style.footerContainer} ref={ref}>
      <div className={style.content}>
        {/* BRAND HEADER */}
        <div className={style.brandTop}>
          <Link
            to="/"
            className={style.footerLogoOutside}
            aria-label="TechStudio3D"
          >
            tec<span>h</span>studio<span>3d</span>
          </Link>

          <Typography
            variant="body14"
            className={style.brandSubtitle}
          >
            Trusted by Professionals Worldwide
          </Typography>
        </div>

        {/* LEFT SIDE */}
        <div className={style.left}>
          <nav className={style.policyLinks} aria-label="Policies">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/shipping">Shipping Policy</Link>
            <Link to="/returns">Return Policy</Link>
          </nav>

          <div className={style.disclaimer} aria-label="Disclaimer">
            <Typography variant="body12">
              All products are inert dummy training rounds for training,
              educational, and display purposes only.
            </Typography>

            <Typography variant="body12">
              No live ammunition is sold. Products contain no powder and no
              primer unless explicitly stated.
            </Typography>

            <Typography variant="body12">
              By purchasing, you confirm you are of legal age and responsible
              for complying with all local, state, and federal laws. Misuse is
              prohibited.
            </Typography>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={style.right}>
          <div className={style.meta}>
            <Typography variant="body12">
              © {currentYear} TechStudio3D. All rights reserved.
            </Typography>

            <Typography variant="body12">
              Website development — <span>Zadepschi</span>
            </Typography>
          </div>
        </div>
      </div>

      <div className={style.bottomLine} />
    </footer>
  );
});