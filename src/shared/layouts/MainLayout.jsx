import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { ScrollToTopButton } from "@/widgets/ScrollToTopButton";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
    </>
  );
}