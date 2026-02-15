import { Stack } from "@/shared/ui/Stack";
import techStudio from "@/shared/assets/images/hero.webp";
import { HashLink } from "react-router-hash-link";
import style from "./HeroSection.module.scss";
import { Typography } from "@/shared/ui/Typography";


export const HeroSection = () => {


    return (
        <section id="hero_section"  className={style.hero}>
            <Stack
                id="textContainer"
                direction="column"
                className={style.containerMobile}
                gap="24"
            >
                <Typography
                    variant="h1"
                    font="poiretOne"
                    className={style.mobileTitle}
                >
                    tec<span>h</span>studio<span>3d</span>
                </Typography>

                <Typography
                    variant="body14"
                    className={style.textAbout}
                >
                    {"Hero Text Mobile"}
                </Typography>

                <div>

                    <img
                        id="imgContainer"
                        src={techStudio}
                        loading="lazy"
                        alt="room design"
                        className={style.image}
                    />
                </div>

                <Stack justify="center">
                    <HashLink
                        smooth
                        to="#portfolio"
                        className={style.buttonMobile}
                        aria-label="Navigation to Portfolio"
                    >
                        {"See Products"}

                    </HashLink>
                </Stack>
            </Stack>

            <Stack className={style.containerDesktop} gap="32">
                <Stack
                    id="textContainer"
                    direction="column"
                    justify="center"
                    gap="24"
                >
                    <Typography
                        variant="h1"
                        font="poiretOne"
                        weight="normal"
                        className={style.desktopTitle}
                    >
                        tec<span>h</span>studio<span>3d</span>
                    </Typography>

                    <Typography variant="body14"  noMargin className={style.textAbout} >
                        {"Hero Text"}
                    </Typography>

                    <HashLink
                        smooth
                        to="#portfolio"
                        className={style.buttonDesktop}
                        aria-label="Navigation to Portfolio"
                    >
                        {"See Products"}
                    </HashLink>
                    <h2  className={style.buttonDesktop}>Amazon</h2>
                    <h2  className={style.buttonDesktop}>eBay</h2>
                </Stack>

                <img
                    id="imgContainer"
                    src={techStudio}
                    loading="lazy"
                    alt="room design"
                    className={style.image}
                />
            </Stack>
        </section>
    );
};