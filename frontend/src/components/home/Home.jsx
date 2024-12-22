import React from "react";
import "./Homenew.css";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Testimonal from "./testimonal/Testimonal";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="homecontainer" id="home-compo">
        <HomeCard2 />
        <HomeCard1 />
      </div>
      <HAbout />
      <Testimonal />
    </>
  );
};

export default Home;
