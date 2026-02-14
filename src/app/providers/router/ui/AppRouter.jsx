import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/routeConfig";
import { Loader } from "@/shared/ui/Loader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routeConfig.main.path} element={routeConfig.main.element} />
        <Route path={routeConfig.products.path} element={routeConfig.products.element} />
        <Route path={routeConfig.productDetails.path} element={routeConfig.productDetails.element} />
        <Route path={routeConfig.notFound.path} element={routeConfig.notFound.element} />
      </Routes>
    </Suspense>
  );
};
