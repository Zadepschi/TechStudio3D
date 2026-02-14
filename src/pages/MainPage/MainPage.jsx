import { Stack } from "../../shared/ui/Stack/Stack"
import { AdvantagesSection } from "@/widgets/AdvantagesSection/ui/AdvantagesSection.jsx"
import { FaqSection } from "@/widgets/Faq/ui/FaqSection/FaqSection";
import { AboutSection } from "@/widgets/About/ui/AboutSection";





const MainPage = () =>  {
    return(
     <Stack
        direction="column"
         align="center"
         gap="16"
     >
    <AboutSection/>
       <AdvantagesSection/>
       <FaqSection />

     </Stack>

    )
}
export default MainPage;