# ICREP 2024 Website

This is the official website for the **International Conference on Renewable Energy & Power (ICREP) 2024**. The website provides information about the conference, including details about speakers, agenda, sponsors, and registration.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview

The ICREP 2024 website is built with React.js to provide a dynamic, user-friendly interface for visitors. It includes multiple pages, such as Home, About, Conference Details, Contact, Speakers, Sponsors, and Registration.

## Features

- **Home Page:** Introduction and overview of ICREP 2024.
- **About Page:** Information about the conference's mission and purpose.
- **Conference Details Page:** Venue, date, and schedule of the conference.
- **Contact Page:** Contact form for inquiries.
- **Speakers Page:** Information about keynote speakers and other participants.
- **Sponsors Page:** Acknowledgement of sponsors supporting the event.
- **Registration Page:** Form for users to register for the event.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/icrep-2024-website.git

icrep-2024-website/
├── public/                     # Public assets like HTML and favicon
│   └── index.html              # Main HTML file
├── src/                        # Source files
│   ├── components/             # Reusable components
│   │   ├── Header.js           # Header component
│   │   └── Footer.js           # Footer component
│   ├── pages/                  # Page components for different sections
│   │   ├── Home.js             # Home page component
│   │   ├── About.js            # About page component
│   │   ├── Conference.js       # Conference details page component
│   │   ├── Contact.js          # Contact page component
│   │   ├── Speakers.js         # Speakers page component
│   │   ├── Sponsors.js         # Sponsors page component
│   │   └── Registration.js     # Registration page component
│   ├── App.js                  # Main application component with routing
│   ├── App.css                 # Global and page-specific styles
│   └── index.js                # Application entry point
├── .gitignore                  # Files and folders to ignore in git
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation

