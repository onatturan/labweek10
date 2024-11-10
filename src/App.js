import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Address:</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Address 2:</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Province:</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          >
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          <label> Agree Terms & Condition?</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Verileri göstermek için */}
      <div className="output">
        <h2>Form Data:</h2>
        <p>Email: {formData.email}</p>
        <p>Full Name: {formData.fullName}</p>
        <p>Address 1: {formData.address1}</p>
        <p>Address 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>Province: {formData.province}</p>
        <p>Postal Code: {formData.postalCode}</p>
        <p>Agree Terms: {formData.agreeTerms ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
