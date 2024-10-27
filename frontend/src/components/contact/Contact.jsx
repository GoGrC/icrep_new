import React from 'react';
import './contact.css';

const CourseWorkCard = () => {
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
