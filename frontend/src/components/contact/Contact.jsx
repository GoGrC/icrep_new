import React from 'react';
import './contact.css';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6661856676583!2d76.32490387456684!3d10.044380372270417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d472d25c69b%3A0x6be23aa925030672!2sICREP%2C%20CUSAT%20(Prof.%20N.%20R.%20Madhava%20Menon%20Interdisciplinary%20Centre%20for%20Research%20Ethics%20and%20Protocols)!5e0!3m2!1sen!2sin!4v1729976781529!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <div className="card-container">
      {/* Text Content */}
      <div className="text-content">
        <h2>Course Work Programs for M.Phil/Ph.D. Scholars (CPE-RPE)</h2>
        <p>
          The Centre, being an Inter University Centre of Excellence, is vested with the responsibility of
          providing the mandatory two-credit course work program on "Research and Publication Ethics" to
          research scholars pursuing their coursework in Ph.D./M.Phil (irrespective of any discipline) in the
          State as well as across the country and abroad.
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="map-container">
        {/* Replace with an actual map component or iframe */}
        <img
          src="https://via.placeholder.com/300x200"
          alt="Map Placeholder"
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}

export default CourseWorkCard;
