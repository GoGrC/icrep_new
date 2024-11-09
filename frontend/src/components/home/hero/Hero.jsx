import React, { useEffect, useState } from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const [offset, setOffset] = useState(-0.5);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundPositionY: `${offset * 0}px`,
        }}
      >
        <div className="hero-content">
          <Heading
          //subtitle="WELCOME TO ICREP"
          //title="An inter university centre of excellence"
          />
          {/* <p className="hero-quote">
          {/* <Heading title="An inter university centre of excellence" /> */}
          {/* <p className="hero-quote">
            || तेजस्विनावधीतमस्तु ||
            <br />
            May learning illuminate us both
          </p> */}
          <div className="hero-buttons" role="group" aria-label="Hero Actions">
            {/* <button className="primary-btn">
              GET STARTED NOW <span className="icon">→</span>
            </button> */}
            {/* <button className="secondary-btn">
              VIEW COURSE <span className="icon">→</span>
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
