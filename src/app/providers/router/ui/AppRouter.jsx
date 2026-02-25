import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/app/providers/router/lib/routeConfig";
import { Loader } from "@/shared/ui/Loader";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* общий layout для страниц */}
        <Route element={<MainLayout />}>
          <Route path={routeConfig.main.path} element={routeConfig.main.element} />
          <Route path={routeConfig.products.path} element={routeConfig.products.element} />
          <Route path={routeConfig.productDetails.path} element={routeConfig.productDetails.element} />
        </Route>

        {/* not found лучше отдельно */}
        <Route path={routeConfig.notFound.path} element={routeConfig.notFound.element} />
      </Routes>
    </Suspense>
  );
};