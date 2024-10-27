import React from 'react';
import './libraryInfo.css';

const LibraryInfo = () => {
  return (
    <div className="library-container">
      {/* Library Description Section */}
      <div className="section">
        <h1 className="title">About the Library</h1>
        <p className="paragraph">
          The Library at Prof NR Madhava Menon Interdisciplinary Centre for Research Ethics and Protocols
          offers students, research scholars, and faculty a wealth of knowledge, resources, and space to
          discover and unravel knowledge. The ICREP library provides a world of books, primarily latest law
          books, as well as books on bioethics, computer science, biological science, research methodology, etc.
          Resources are customized to meet learners' needs and include encyclopedias, case reports, textbooks,
          journals, and online resources, such as legal databases that contain statutes, case law, and
          regulations. This library uses the KOHA library software, which allows global access and easy resource
          identification. The trained library staff assist students in navigating resources, and the comfortable
          ambience supports meaningful research and learning.
        </p>
      </div>

      {/* Mission of the Library Section */}
      <div className="section">
        <h2 className="subtitle">Mission of the Library</h2>
        <ul className="mission-list">
          <li>Support the University in its learning, teaching, and research endeavors.</li>
          <li>Provide learners with information-intensive resources.</li>
          <li>Help learners navigate through diverse resources with ease.</li>
          <li>
            Enable learners to acquire the necessary skills in identifying and applying resources in their
            specific areas of study.
          </li>
          <li>
            Provide a robust digital infrastructure that supports innovative services to learners by
            understanding their requirements.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LibraryInfo;
