import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import AppLayout from "../layout/AppLayout";

// Frontend Page
import Home from "../pages/Home/Home";
import ContactPage from "../pages/ContactUs/Contact";
import AboutPage from "../pages/about/AboutPage";
import Gallery from "../pages/Gallery/Gallery";
import CertificationPage from "../pages/Certification/CertificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
       { path: "contact-us", element: <ContactPage /> },
       { path: "about-us", element: <AboutPage /> },
  //      { path: "career", element: <CareerPage /> },
  //      { path: "blog", element: <BlogPage /> },
       { path: "gallery", element: <Gallery /> },
       {path:"certification", element:<CertificationPage/>},
  //      { path: "products", element: <Products /> },
  //      {
  // path: "products/:id",
  // element: <ProductDetail />,
// }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
