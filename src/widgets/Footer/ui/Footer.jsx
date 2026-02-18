import { forwardRef } from "react";
import logo from "@/shared/assets/images/logo.webp";
import style from "./Footer.module.scss";

export const Footer = forwardRef(function Footer(_, ref) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={style.footerContainer} ref={ref}>
      <div className={style.content}>
        {/* LEFT SIDE */}
        <div className={style.left}>
          <nav className={style.policyLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/shipping">Shipping Policy</a>
            <a href="/returns">Return Policy</a>
          </nav>

          <div className={style.disclaimer}>
            <p>
              All products are inert dummy training rounds for training,
              educational, and display purposes only.
            </p>
            <p>
              No live ammunition is sold. Products contain no powder and no primer
              unless explicitly stated.
            </p>
            <p>
              By purchasing, you confirm you are of legal age and responsible
              for complying with all local, state, and federal laws.
              Misuse is prohibited.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={style.right}>
          <img src={logo} alt="TechStudio3D logo" className={style.logo} />

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
