// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Update this with your backend URL

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
