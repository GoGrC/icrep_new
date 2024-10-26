import React from 'react';
import { Link } from "react-router-dom";
import blaf2 from '../../assets/DirectorImage.fe9c147d.svg';
import './HomeCard1.css';

const HomeCard1 = () => {
  return (
    <div className="homeCardContainer">
      <div>
      <h2>Co-ordinator's Message</h2>
      <h3>Dr. Vani Kesari A.</h3>
      </div>
      <img src={blaf2} className="homeCardImage" />
      <div className="contentText">
        <p>
        The primary endeavor of this centre is to accentuate ethical conduct of research in all realms of knowledge especially scientific inquiries.
        It attempts to create a group of students and scholars who would be responsible to find solutions to pressing ethical dilemmas in different facets of
        scientific pursuits. Undoubtedly, different realms of knowledge cannot remain isolated primarily because challenges faced by today’s world cut across
        traditional boundaries of disciplines...
        </p>
        <Link to='/Dirmssg'>Read more</Link>
      </div>
    </div>
  );
};

export default HomeCard1;
