import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import MapPage from './MapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
