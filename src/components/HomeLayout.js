import React from "react";
import Layout from "../blocks/Layout";
import AppFooter from "./Footer";

function HomeLayout(props) {
  return (
    <Layout>
      {props.children}
      <AppFooter />
    </Layout>
  );
}

export default HomeLayout;
