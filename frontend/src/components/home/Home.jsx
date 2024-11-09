import React from "react";
import "./Homenew.css";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="homecontainer">
        <HomeCard2 />
        <HomeCard1 />
      </div>
      {/* <AboutCard /> */}
      <HAbout />
      {/* <Testimonal /> */}
      {/* <Hblog /> */}
      <Hprice />
    </>
  );
};

export default Home;
