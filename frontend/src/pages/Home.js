// src/pages/Home.js
import React from "react";
import "./Home.css"; // CSS for Home page styles

const Home = () => {
  return (
    <div className="home">
      <main className="main-content">
        <h2>Welcome to ICREP 2024</h2>
        <p>International Conference on Renewable Energy & Power</p>

        <section className="about-section">
          <h3>About ICREP</h3>
          <p>
            The ICREP 2024 aims to bring together scholars and researchers to
            share their insights and discoveries in the field of renewable
            energy.
          </p>
          <p>
            Join us for a week filled with engaging discussions, workshops, and
            networking opportunities.
          </p>
        </section>

        <section className="events-section">
          <h3>Upcoming Events</h3>
          <ul>
            <li>Keynote Speech by Dr. John Doe - Date: Jan 15, 2024</li>
            <li>Panel Discussion on Solar Energy - Date: Jan 16, 2024</li>
            <li>Networking Event - Date: Jan 17, 2024</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
