import React from "react";

import TopNavBar from "../Navigation/TopNavBar/TopNavBar";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <TopNavBar />
      <main style={{ backgroundColor: "#CCDBDC" }}>{props.children}</main>
      <Footer />
    </div>
  );
};

// #F9DEC9

export default Layout;
