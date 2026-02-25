import { Stack } from "@/shared/ui/Stack";
import techStudio from "@/shared/assets/images/hero.webp";
import { Link } from "react-router-dom";
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

                <Stack justify="center"  direction="column">
                <Link
    to="/products"
    className={style.buttonMobile}
    aria-label="Navigation to Products"
>
    {"See Products"}
</Link>
                 <a
    href="https://www.amazon.com/stores/TechStudio3D/page/D738D241-8A71-4A1A-A6B3-E0E82E3AD8D2?lp_asin=B0FVFSF2WG&ref_=ast_bln"
    target="_blank"
    rel="noopener noreferrer"
    className={style.buttonMobile}
>
    Amazon
</a>
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

                <Link
    to="/products"
    className={style.buttonDesktop}
    aria-label="Navigation to Products"
>
    {"See Products"}
</Link>
                 <a
    href="https://www.amazon.com/stores/TechStudio3D/page/D738D241-8A71-4A1A-A6B3-E0E82E3AD8D2?lp_asin=B0FVFSF2WG&ref_=ast_bln"
    target="_blank"
    rel="noopener noreferrer"
    className={style.buttonDesktop}
>
    Amazon
</a>
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