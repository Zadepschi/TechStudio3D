import { forwardRef } from "react";
import style from "./Footer.module.scss";

export const Footer = forwardRef(function Footer(_, ref) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={style.footerContainer} ref={ref}>
      <div className={style.content}>
        {/* BRAND HEADER — same style as Hero logo */}
        <div className={style.brandTop}>
          <div className={style.footerLogoOutside} aria-label="TechStudio3D">
            tec<span>h</span>studio<span>3d</span>
          </div>

          <p className={style.brandSubtitle}>Trusted by Professionals Worldwide</p>
        </div>

        {/* LEFT SIDE */}
        <div className={style.left}>
          <nav className={style.policyLinks} aria-label="Policies">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/shipping">Shipping Policy</a>
            <a href="/returns">Return Policy</a>
          </nav>

          <div className={style.disclaimer} aria-label="Disclaimer">
            <p>
              All products are inert dummy training rounds for training,
              educational, and display purposes only.
            </p>
            <p>
              No live ammunition is sold. Products contain no powder and no primer
              unless explicitly stated.
            </p>
            <p>
              By purchasing, you confirm you are of legal age and responsible for
              complying with all local, state, and federal laws. Misuse is prohibited.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={style.right}>
          <div className={style.meta}>
            <p>© {currentYear} TechStudio3D. All rights reserved.</p>
            <p>
              Website development — <span>Zadepschi</span>
            </p>
          </div>
        </div>
      </div>

      <div className={style.bottomLine} />
    </footer>
  );
});