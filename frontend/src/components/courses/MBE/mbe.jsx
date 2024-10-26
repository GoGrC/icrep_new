import React from 'react';
import './MastersBioethics.css';

const MastersBioethics = () => {
  return (
    <div className="container">
      {/* Title in red */}
      <h1 className="title">Masters in Bioethics Program (MBE)</h1>

      {/* Program Description */}
      <p className="paragraph">
        Masters in Bioethics is offered as a two-year regular course consisting of four semesters.
        Admission to the course will be based on the performance of the candidate at the Common
        Admission Test (CAT), Group Discussion, and Interview.
      </p>

      {/* Subtitle "Who can apply?" */}
      <h2 className="subtitle">Who can apply?</h2>

      {/* Eligibility details */}
      <p className="paragraph">
        Candidates for admission to the course must have passed M.B.B.S., a Bachelor’s degree in
        Law, B.D.S., B.Sc in any of the life sciences, B.Sc Agriculture, B.Pharm, B.H.A. (Bachelor
        of Hospital Administration), or B.V.Sc (Bachelor of Veterinary Science).
      </p>
      <p className="note">
        ** Subject to changes made to these regulations from time to time by the University.
      </p>
    </div>
  );
}

export default MastersBioethics;
