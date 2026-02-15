import { Stack } from "../../shared/ui/Stack/Stack"
import { AdvantagesSection } from "@/widgets/AdvantagesSection/ui/AdvantagesSection.jsx"
import { FaqSection } from "@/widgets/Faq/ui/FaqSection/FaqSection";
import { AboutSection } from "@/widgets/About/ui/AboutSection";
import { HeroSection } from "../../widgets/HeroSection";





const MainPage = () =>  {
    return(
     <Stack
        direction="column"
         align="center"
         gap="16"
     >
        <HeroSection/>
    <AboutSection/>
       <AdvantagesSection/>
       <FaqSection />

     </Stack>

    )
}
export default MainPage;