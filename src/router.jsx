import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ProductsPage } from "./pages/products";
import { ProductDetailPage } from "./pages/product-detail";
import { MaterialsPage } from "./pages/materials";
import { OrderAndShipmentPage } from "./pages/order-and-shipment";
import { ContactsPage } from "./pages/contacts";
import { SaleActionsPage } from "./pages/sale-actions";
import { WorkshopPage } from "./pages/workshop";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/o-mne",
        element: <AboutPage />,
      },
      {
        path: "/vyrobky",
        element: <ProductsPage />,
      },
      {
        path: "/vyrobek/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/vlastnosti-materialu",
        element: <MaterialsPage />,
      },
      {
        path: "/objednani-a-dodani",
        element: <OrderAndShipmentPage />,
      },
      {
        path: "/kontakty",
        element: <ContactsPage />,
      },
      {
        path: "/prodejni-akce",
        element: <SaleActionsPage />,
      },
      {
        path: "/dilna",
        element: <WorkshopPage />,
      },
    ],
  },
]);

export default router;