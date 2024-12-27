import React from "react";
import { Link } from "react-router-dom";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding activities-compo'>
        <div className='container'>
          <Heading subtitle='ACTIVITIES' />
            <div className='content grid2'>
              {testimonal.map((val) => (
                 <Link to={val.pageto}>
                  <div className='items shadow'>
                    <div className='box flex'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='name'>
                        <h2>{val.name}</h2>
                      </div>
                    </div>
                    <p></p>
                  </div>
                 </Link>
              ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
