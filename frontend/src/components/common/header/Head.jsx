import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB upperhead">
          <div className="logo">
            <span>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
            <h1>
              PROF. N. R. MADHAVA MENON INTERDISCIPLINARY CENTRE FOR RESEARCH
              ETHICS AND PROTOCOLS
            </h1>
            <h5 style={{ fontFamily: "italic" }}>
              "An inter university centre of excellence"
            </h5>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
