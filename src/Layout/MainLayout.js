import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
