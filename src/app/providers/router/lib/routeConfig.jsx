import { MainPage } from "@/pages/MainPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const routeConfig = {
  main: {
    path: "/",
    element: <MainPage />,
  },

  products: {
    path: "/products",
    element: <ProductsPage />,
  },

  productDetails: {
    path: "/products/:slug",
    element: <ProductDetailsPage />,
  },

  notFound: {
    path: "*",
    element: <NotFoundPage />,
  },
};
