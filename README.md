
# Interactive Polygon Drawing and Editing Map

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
