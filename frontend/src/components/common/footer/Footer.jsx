import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ICREP</h1>
            <span>'An inter university centre of excellece'</span>
            <p>Undertakes research and academic programs in the field of<br/> bioethics as well as in all areas of application of research <br/>ethics.</p>

            <a href="https://www.facebook.com/people/School-of-Legal-Studies/100066798054287/"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/slscusat/"><i className='fab fa-instagram icon'></i></a>
            <a href="https://www.youtube.com/channel/UCZdGf9vJY1oNDAV066ybcKQ"><i className='fab fa-youtube icon'></i></a>
            <a href="https://www.linkedin.com/company/school-of-legal-studies/"><i className='fab fa-linkedin icon'></i></a>
            
          </div>

          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li ><a href="https://www.jstor.org">JSTOR</a></li>
              <li ><a href="https://www.manupatrafast.com/">manupatra</a></li>
              <li ><a href="http://dspace.cusat.ac.in/jspui/">D-space</a></li>
              <li ><a href="https://epathshala.nic.in/">E-pathsala</a></li>
              <li ><a href="https://nss.cusat.ac.in/mooc/swayam.php">Swayam</a></li>
              <li ><a href="https://nss.cusat.ac.in/">National Servoce Scheme</a></li>
              <li ><a href="https://welfarecusat.in/">Youth Welfare</a></li>
              <li ><a href="https://ugcsct.cusat.ac.in/">Equal Oppurtunity Cell</a></li>
            </ul>
          </div>

           <div className='box last'>
            <h3>Contact us</h3>
            <ul>
              <li>Co-ordinator</li>
              <li>PROF. N. R. MADHAVA MENON INTERDISCIPLINARY <br/>CENTRE FOR RESEARCH ETHICS AND PROTOCOLS,</li>
              <li>Cochin University P.O. <br/> +91 80780 19688 <br/> icrep@cusat.ac.in</li>
              <li>Kalamassery, Kochi</li>
              <li>Kerala- 682022</li>
              <li>India</li>
            </ul>
          </div> 
        </div>
      </footer>
      <div className='legal'>
        <p>
        Copyright © 2019 All Rights Reserved PROF. N. R. MADHAVA MENON INTERDISCIPLINARY CENTRE FOR RESEARCH ETHICS AND PROTOCOLS, Cochin University of Science and Technology, Kerala, India
<i className='fa fa-heart'></i>DESIGNED, DEVELOPED AND MAINTAINED BY  ICREPTEAM 
        </p>
      </div>
    </>
  )
}

export default Footer
