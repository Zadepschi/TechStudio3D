import { Navbar, NavbarMobile } from "@/features/Navbar";
import logo from "@/shared/assets/images/logo.webp";
import { useWindowWidth } from "@techlabteam/useful-hooks";
import { Stack } from "@/shared/ui/Stack";
import style from "./Header.module.scss";

export const Header = () => {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1024;

    return (
        <Stack
            tag="header"
            align="center"
            justify="between"
            className={style.header}
            id="header"
        >
            <img
                src={logo}
                alt="logo TechStudio3D"
                className={style.logo}
            />
        
            {isDesktop ? (
                <>
                    <Navbar />

                </>
            ) : (
                <Stack align="center" gap="32">
                    <NavbarMobile />
                </Stack>
            )}
        </Stack>
    );
};
