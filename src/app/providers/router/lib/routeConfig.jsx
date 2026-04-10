import { MainPage } from "@/pages/MainPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrivacyPolicyPage } from "@/pages/Legal/PrivacyPolicy";
import { TermsAndConditions } from "@/pages/Legal/Terms";
import { ShippingPolicy } from "@/pages/Legal/Shipping";
import { ReturnRefundPolicy } from "@/pages/Legal/Returns";

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

  privacy: {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },

  terms: {
  path: "/terms-and-conditions",
  element: <TermsAndConditions />,
},
shipping: {
  path: "/shipping",
  element: <ShippingPolicy />,
},
returns: {
  path: "/returns",
  element: <ReturnRefundPolicy />,
},


  notFound: {
    path: "*",
    element: <NotFoundPage />,
  },
};