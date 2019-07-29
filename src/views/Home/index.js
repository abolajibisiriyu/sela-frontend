import React, { useRef } from "react";
// import Layout from "../../blocks/Layout";
import HomeLayout from "../../components/HomeLayout";
import Header from "./components/Header";
import HomeProjects from "./components/Projects";
import HomeMap from "./components/Map";

const scrollToRef = ref => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Home(props) {
  const projectsRef = useRef(null);
  const executeScroll = () => scrollToRef(projectsRef);
  return (
    <HomeLayout>
      <Header executeScroll={executeScroll} />
      <HomeMap />
      <HomeProjects projectsRef={projectsRef} />
    </HomeLayout>
  );
}

export default Home;
