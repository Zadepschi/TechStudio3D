import { HashLink } from "react-router-hash-link"; 
import { navigation } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack";
import style from "./NavbarDesktop.module.scss";

export const Navbar = () => {


  return (
    <Stack tag="nav" aria-label="Main navigation" align="center">
      <ul className={style.navigation}>
        {Object.values(navigation).map(({ text, path }) => (
          <li key={path}>
            <HashLink smooth to={`#${path}`} 
                className={style.navigationButton}
              >
              {text}
            </HashLink>
          </li>
        ))}
      </ul>
    </Stack>
  );
}