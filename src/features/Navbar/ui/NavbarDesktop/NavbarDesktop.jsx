import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { navigation } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack";
import style from "./NavbarDesktop.module.scss";

export const Navbar = () => {
  const { hash, pathname } = useLocation();

  return (
    <Stack
      tag="nav"
      aria-label="Main navigation"
      align="center"
      className={style.navbar}
    >
      <ul className={style.navigation}>
        {Object.values(navigation).map(({ text, path }) => {
          const to = `/#${path}`;
          const isActive = pathname === "/" && hash === `#${path}`;

          return (
            <li key={path}>
              <HashLink
                smooth
                to={to}
                className={`${style.navigationButton} ${
                  isActive ? style.navigationButtonActive : ""
                }`}
              >
                {text}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
};