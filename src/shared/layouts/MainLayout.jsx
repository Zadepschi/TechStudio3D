import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { ScrollToTopButton } from "@/widgets/ScrollToTopButton";
import { ScrollToHash } from "../../app/providers/router/ui/ScrollToHash";
import styles from "./MainLayout.module.scss";

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton />
      <ScrollToHash />
    </div>
  );
}