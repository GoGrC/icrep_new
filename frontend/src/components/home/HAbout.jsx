import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import { useEffect } from "react";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout" id="course-compo">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore the courses"
          />

          <div className="coursesCard course_container">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                    </div>
                  </div>
                  <Link to={val.topage}>
                  
                    <button className="outline-btn">Know more</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
