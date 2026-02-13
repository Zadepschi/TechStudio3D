
import { AdvantagesSection } from "../widgets/AdvantagesSection";
import { FaqSection } from "../widgets/Faq/ui/FaqSection/FaqSection";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
     
  <AdvantagesSection/>
  <FaqSection/>
    </div>
  );
};

export default App;




