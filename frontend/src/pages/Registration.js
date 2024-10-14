// src/pages/Registration.js
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "Standard",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${formData.name}!`);
    // Handle form submission for registration
  };

  return (
    <div>
      <h2>Register for ICREP 2024</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Ticket Type:
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="Standard">Standard</option>
            <option value="VIP">VIP</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
