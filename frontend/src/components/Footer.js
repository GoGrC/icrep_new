// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Assuming you have styles for your footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="https://www.jstor.org/">JSTOR</a>
            </li>
            <li>
              <a href="https://www.manupatra.com/">Manupatra</a>
            </li>
            <li>
              <a href="https://www.dspace.org/">D-Space</a>
            </li>
            <li>
              <a href="https://epathsala.org/">E-Pathsala</a>
            </li>
            <li>
              <a href="https://swayam.gov.in/">Swayam</a>
            </li>
            <li>
              <a href="https://nss.gov.in/">National Service Scheme</a>
            </li>
            <li>
              <a href="https://youthwelfare.com/">Youth Welfare</a>
            </li>
            <li>
              <a href="https://eoc.com/">Equal Opportunity Cell</a>
            </li>
          </ul>
        </div>

        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>Co-ordinator</p>
          <p>Prof. N. R. Madhava Menon</p>
          <p>Cochin University of Science and Technology</p>
          <p>Kochi, Kerala - 682022</p>
          <p>Mob: +918078019688</p>
          <p>Email: icrep@cusat.ac.in</p>
        </div>
      </div>

      <div className="map-container">
        <h4>Locate Us</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2945245724857!2d76.3197633153061!3d10.023908872778203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08069df7bfb5c9%3A0x82bfb30b47ec93c0!2sCochin%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1616745048356!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2024 ICREP. All Rights Reserved.</p>
        <p>
          Note: The information uploaded on the website of ICREP is subject to
          the condition that although every care has been taken while uploading
          the correct information, yet in case of any inconsistency or error,
          the version of ICREP Office and Cochin University shall prevail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
