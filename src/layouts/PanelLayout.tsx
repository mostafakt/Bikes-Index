import { Outlet } from "react-router-dom";
import { MainPage } from "./styles";
import { Header, Footer } from "./components";
import React from "react";

const Layout = () => {
  return (
    <MainPage>
      <Header />

      <div className="outletContainer">
        <Outlet />
      </div>

      <Footer />
    </MainPage>
  );
};

export default Layout;
