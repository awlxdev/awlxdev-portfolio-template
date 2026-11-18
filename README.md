# AWLXDEV Portfolio Template

A reusable personal portfolio template built with React, Vite, and Lucide React.

## Features

- Two profile presets: AWLXDEV and Blank
- Responsive portfolio layout
- Neon Lime visual identity
- Home, About, Skills, Projects, and Contact sections
- Centralized profile configuration
- Dynamic page title and SEO metadata
- Easy content customization

## Requirements

- Node.js
- npm

## Installation

Run:

    npm install

## Development

    npm run dev

## Production Build

    npm run build

## Preview Production

    npm run preview

## Choose a Profile

Edit the .env file.

AWLXDEV demo:

    VITE_PORTFOLIO_PROFILE=awlxdev

Blank portfolio:

    VITE_PORTFOLIO_PROFILE=blank

Restart the Vite development server after changing the profile.

## Customize Your Portfolio

### Personal Information

Edit:

    src/data/profiles/blank.js

Customize the brand name, hero heading, description, about section, contact email, social links, and SEO metadata.

### Projects

Edit:

    src/data/projects.js

Add projects to the blank array.

### Skills

Edit:

    src/data/skills.js

Example:

    ['01', 'FRONTEND DEVELOPMENT', 'React - JavaScript - CSS']

### Experience

Edit:

    src/data/experience.js

### Visual Customization

Main styles:

- src/styles/index.css
- src/styles/App.css

The template includes configurable accent colors:

- AWLXDEV: Neon Lime (#39FF14)
- Blank: Cyan (#00E5FF)

Change the accent color in the theme configuration inside the corresponding profile file.

## Project Structure

    src/
    ├── config/
    │   └── site.js
    ├── data/
    │   ├── profiles/
    │   │   ├── awlxdev.js
    │   │   └── blank.js
    │   ├── projects.js
    │   ├── skills.js
    │   └── experience.js
    ├── sections/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   └── Contact.jsx
    ├── styles/
    │   ├── App.css
    │   └── index.css
    ├── App.jsx
    └── main.jsx

## License

Choose and add an appropriate license before distributing this template.

