import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='Container'>
      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.666185667649!2d76.32490387456684!3d10.044380372270417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d472d25c69b%3A0x6be23aa925030672!2sICREP%2C%20CUSAT%20(Prof.%20N.%20R.%20Madhava%20Menon%20Interdisciplinary%20Centre%20for%20Research%20Ethics%20and%20Protocols)!5e0!3m2!1sen!2sus!4v1735287744217!5m2!1sen!2sus"
          width="300px"
          height="300px"
          style={{ border:0 }}
          allowFullScreen=""
          loading="fast"
          title="Google Map"
        ></iframe>
      </div>

      <div className="details">
        <ul>
          <li><h1>Contact Us</h1></li>
          <li>PROF. N. R. MADHAVA MENON INTERDISCIPLINARY</li>
          <li>CENTRE FOR RESEARCH ETHICS AND PROTOCOLS</li>
          <li>Cochin University of Science and Technology</li>
          <li>Cochin University P.O.</li>
          <li>Kalamassery, Kochi</li>
          <li>Kerala- 682022</li>
          <li>India</li>
          <li>Mob: +91 80780 19688</li>
          <li>icrep@cusat.ac.in</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Contact

