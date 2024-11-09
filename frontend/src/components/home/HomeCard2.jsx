import React from "react";
import { Link } from "react-router-dom";
import blaf from "../../assets/welcometoicrep.png";
import "./HomeCard2.css";

const HomeCard2 = () => {
  return (
    <div className="homeCardContainer">
      <div className="cardHeader">
        <h2 style={{ textAlign: "center" }}>Welcome to ICREP</h2>
      </div>
      {/* <div className="imageContainer">
        <img src={blaf} className="homeCardImage" alt="Welcome to ICREP" />
      </div> */}
      <div className="contentText">
        <p>
          Prof. N. R. Madhava Menon Interdisciplinary Centre for Research Ethics
          and Protocols was launched on 10th of January, 2020 by Dr. Michael
          Levitt, 2013 Nobel Prize Winner in Chemistry. On 26th of February,
          2021, the Centre was recognised as an Inter University Centre of
          Excellence by the Government of Kerala. The Centre is situated in the
          main campus of Cochin University of Science and Technology, Kerala and
          it carries out a variety of academic and research activities including
          the conduct of course work programs, certificate programs, issuance of
          research grants, conduct of lecture series etc.
        </p>
        <Link to="/about" className="readMoreLink">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HomeCard2;
