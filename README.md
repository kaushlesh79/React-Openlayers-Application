# React Openlayers Application

### Interactive Polygon Drawing and Editing Map

## Overview
This project is a React-based web application that allows users to interact with a map using OpenLayers. Users can draw, edit, and delete polygons on the map while also seeing their name displayed in the header. The application consists of two main pages:
1. A form page where users input their name and mobile number.
2. A map page where users interact with polygons on a world map.

---

## Features
- **Form Page**:
  - Input fields for first name and mobile number.
  - Data is saved in `localStorage` for use on the map page.
  - Clean and visually appealing design with aligned input boxes.

- **Map Page**:
  - Displays a personalized greeting using the user's name from `localStorage`.
  - Interactive map powered by OpenLayers.
  - Options to:
    - Draw polygons.
    - Edit polygons (drag vertices to reshape).
    - Delete polygons (select and remove).
  - Polygons are styled with a red border and semi-transparent red fill.

---

## Technologies Used
- **Frontend Framework**: React
- **Mapping Library**: OpenLayers
- **State Management**: React hooks (`useState`, `useEffect`)
- **Styling**: CSS
- **Data Storage**: `localStorage`

---

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps
1. Clone the repository:
  ```bash
git clone : https://github.com/kaushlesh79/React-Openlayers-Application.git
```
2. Navigate to the project directory:
```bash
  cd React-Openlayers-Application
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5.Open your browser and navigate to
```bash
`http://localhost:3000`
```

## Usage

### Form Page
1. Enter your first name and mobile number in the provided input fields.
2. Click "Submit" to save your details and navigate to the map page.

### Map Page
1. View your name displayed in the header.
2. Use the buttons below the map to interact with polygons:
- **Draw Polygon**: Click on this button, then click on the map to create vertices of a polygon. Double-click to finish drawing.
- **Edit Polygon**: Click on this button, then drag vertices of existing polygons to reshape them.
- **Delete Polygon**: Click on this button, then click on a polygon to select it and remove it from the map.

---

## File Structure
```bash
react-map-app/
├── public/
│   ├── index.html                # Main HTML file
│   └── favicon.ico               # Favicon for the app
├── src/
│   ├── App.js                    # Main application component
│   ├── FormPage.js               # Component for form page
│   ├── FormPage.css              # Styling for form page
│   ├── MapPage.js                # Component for map page
│   ├── MapPage.css               # Styling for map page (optional)
│   └── index.js                  # Entry point of the app
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation (this file)
└── .gitignore                    # Files to ignore in Git repository
```




    
