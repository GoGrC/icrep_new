import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB upperhead">
          <div className="hd-logo">
            <div className="director-img"><img src="https://www.lawctopus.com/wp-content/uploads/2024/07/Call-for-Papers-by-ICREP-Journal-of-Interdisciplinary-Studies.jpg" width="95px" height="90px"/></div>
            <div className="divider">
            <span>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
            <h1>
              PROF. N. R. MADHAVA MENON INTERDISCIPLINARY CENTRE FOR RESEARCH
              ETHICS AND PROTOCOLS
            </h1>
            <h5 style={{ fontFamily: "italic" }}>
              "An inter university centre of excellence"
            </h5>
            </div>
          </div>

          <div className="social">

            
            {
            <p className="hero-quote">
            || तेजस्विनावधीतमस्तु ||
            <br />
            May learning illuminate us both
          </p>
            /* <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
