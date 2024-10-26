import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ICREP</h1>
            <span>'An inter university centre of excellece'</span>
            <p>Undertakes research and academic programs in the field of bioethics as well as in all areas of application of research ethics.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Team</li>
              <li>Contact us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>JSTOR</li>
              <li>Manupatra</li>
              <li>D-Space</li>
              <li>E-Pathshala</li>
              <li>Swayam</li>
              <li>National Service Scheme</li>
              <li>Youth Welfare</li>
              <li>Equal Opportunity Cell</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Cochin University of Science and Technology<br/> Cochin University P.O.<br/>Kalamassery, Kochi <br/>Kerala- 682022 <br/>India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                 +91 80780 19688
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                icrep@cusat.ac.in 
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        Copyright © 2019 All Rights Reserved PROF. N. R. MADHAVA MENON INTERDISCIPLINARY CENTRE FOR RESEARCH ETHICS AND PROTOCOLS, Cochin University of Science and Technology, Kerala, India
<i className='fa fa-heart'></i>DESIGNED, DEVELOPED AND MAINTAINED BY 🚩 ICREPTEAM 🚩 
        </p>
      </div>
    </>
  )
}

export default Footer
