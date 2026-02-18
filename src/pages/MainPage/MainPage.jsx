import { Stack } from "../../shared/ui/Stack/Stack"
import { AdvantagesSection } from "@/widgets/AdvantagesSection/ui/AdvantagesSection.jsx"
import { FaqSection } from "@/widgets/Faq/ui/FaqSection/FaqSection";
import { AboutSection } from "@/widgets/About/ui/AboutSection";
import { HeroSection } from "../../widgets/HeroSection";
import { Header } from "@/widgets/Header/ui/Header";
import { Contacts } from "../../widgets/Contacts";
import { Footer } from "../../widgets/Footer";
import { ProductsBlock } from "../../widgets/Products";






const MainPage = () =>  {
    return(
     <Stack
        direction="column"
         align="center"
         gap="16"
     >
        <Header/>
        <HeroSection/>
       <AboutSection/>
       <ProductsBlock/>
       <AdvantagesSection/>
       <FaqSection />
       <Contacts/>
       <Footer/>
     </Stack>

    )
}
export default MainPage;