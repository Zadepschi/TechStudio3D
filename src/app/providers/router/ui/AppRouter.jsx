import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/app/providers/router/lib/routeConfig";
import { Loader } from "@/shared/ui/Loader";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={routeConfig.main.path}
            element={routeConfig.main.element}
          />
          <Route
            path={routeConfig.products.path}
            element={routeConfig.products.element}
          />
          <Route
            path={routeConfig.productDetails.path}
            element={routeConfig.productDetails.element}
          />
          <Route
            path={routeConfig.privacy.path}
            element={routeConfig.privacy.element}
          />
          <Route
            path={routeConfig.terms.path}
            element={routeConfig.terms.element}
          />
          <Route
            path={routeConfig.shipping.path}
            element={routeConfig.shipping.element}
          />
          <Route
            path={routeConfig.returns.path}
            element={routeConfig.returns.element}
           />
        </Route>

        {/* not found */}
        <Route
          path={routeConfig.notFound.path}
          element={routeConfig.notFound.element}
        />
      </Routes>
    </Suspense>
  );
};