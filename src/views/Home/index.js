import React from "react";
// import Layout from "../../blocks/Layout";
import HomeLayout from "../../components/HomeLayout";
import Header from "./components/Header";

function Home(props) {
  return (
    <HomeLayout>
      <Header />
      <h1>Home</h1>
    </HomeLayout>
  );
}

export default Home;
