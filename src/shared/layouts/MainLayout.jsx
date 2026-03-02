import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { ScrollToTopButton } from "@/widgets/ScrollToTopButton";
import { ScrollToHash } from "../../app/providers/router/ui/ScrollToHash";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <ScrollToHash/>
    </>
  );
}