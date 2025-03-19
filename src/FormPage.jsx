import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormPage.css'; // Import the CSS file for styling

function FormPage() {
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data in local storage for simplicity
    localStorage.setItem('userDetails', JSON.stringify({ firstName, mobileNumber }));
    // Navigate to map page
    window.location.href = '/map';
  };

  return (
    <div className="form-container">
      <h1>Welcome to the Application</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your mobile number"
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/map" className="link">Go to Map Page</Link>
    </div>
  );
}

export default FormPage;
