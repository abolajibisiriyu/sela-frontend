import React, { useRef, lazy, Suspense } from "react";
// import Layout from "../../blocks/Layout";
import HomeLayout from "../../components/HomeLayout";
import Header from "./components/Header";
import HomeProjects from "./components/Projects";
import Loader from "../../components/Loader";
const HomeMap = lazy(() => import("./components/Map"));

const scrollToRef = ref => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Home(props) {
  const projectsRef = useRef(null);
  const executeScroll = () => scrollToRef(projectsRef);
  return (
    <HomeLayout>
      <Header executeScroll={executeScroll} />
      <Suspense fallback={<Loader />}>
        <HomeMap />
      </Suspense>
      <HomeProjects projectsRef={projectsRef} />
    </HomeLayout>
  );
}

export default Home;
