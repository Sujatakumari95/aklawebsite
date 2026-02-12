import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";


const AppLayout = () => {
  

  return (
    <>
      <ScrollRestoration />
      <Navbar  />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;
