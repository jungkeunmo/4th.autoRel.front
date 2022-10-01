import React from "react";
import "antd/dist/antd.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppShell = ({ Component }) => {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

export default AppShell;
