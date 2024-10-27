import React from 'react';
import './CertifiedProgram.css';

const CertifiedProgram = () => {
  return (
    <div className="container">
      {/* Title in red */}
      <h1 className="title">Advanced Certificate Program on Medical Law, Clinical Research and Bioethics</h1>

      {/* Paragraph in the middle */}
      <p className="paragraph">
        The course is offered as an online six months program which caters to the educational and informational needs
        of doctors, nurses, paramedics, hospital administrators, nurses, lawyers, academicians, members in regulatory
        bodies, researchers, and other stakeholders in the healthcare sector. The program provides insights as to the
        fundamental tenets of medical law and biomedical research and provides an overview of legal and ethical rights
        as well as obligations of different stakeholders in health care management and research, including doctors,
        nurses, paramedics, hospital administrators, patients, research investigators, etc.
      </p>

      {/* Subtitle "Who can apply?" */}
      <h2 className="subtitle">Who can apply?</h2>

      {/* Additional details */}
      <p className="paragraph">
        Candidates for admission to the Advanced Certificate Program on Medical Law, Clinical Research & Bioethics
        course shall be required to have passed a Bachelor's Degree examination in Law, Life Sciences, Medicine,
        Dentistry, Veterinary Sciences, Agriculture, Nursing, Pharmacy, Hospital Administration, or any Para Medical
        sciences from a recognized university.
      </p>
      <p className="note">
        ** Subject to changes made to these regulations from time to time by the University.
      </p>
    </div>
  );
}

export default CertifiedProgram;
