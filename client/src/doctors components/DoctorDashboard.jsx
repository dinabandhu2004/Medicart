import React, { useState } from 'react';
import './DoctorDashboard.css';
import Nav from '../home_componets/Nav';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', confirmed: false },
    { id: 2, name: 'Jane Smith', confirmed: false },
  ]);

  const [fee, setFee] = useState('');

  const confirmAppointment = (id) => {
    const updated = appointments.map(app =>
      app.id === id ? { ...app, confirmed: true } : app
    );
    setAppointments(updated);
  };

  const handleFeeChange = (e) => {
    setFee(e.target.value);
  };

  const handlesubmit = ()=>{
    console.log(fee)
  }


  return (
    <>
    <Nav></Nav>
    <div className="doctor-container">
      <h2>Welcome, Doctor</h2>

      <div className="fee-section">
        <label>Set Your Consultation Fee (₹):</label>
        <input
          type="number"
          value={fee}
          onChange={handleFeeChange}
          placeholder="Enter fee"
        />
        <input type="submit" onClick={handlesubmit}/>
        {fee && <p>Current Fee: ₹{fee}</p>}
        
      </div>

      <h3>Appointment Requests</h3>
      <div className="appointment-list">
        {appointments.map(app => (
          <div key={app.id} className="appointment-card">
            <p><strong>Patient:</strong> {app.name}</p>
            <p><strong>Reason:</strong> {app.reason}</p>
            <p><strong>Status:</strong> {app.confirmed ? '✅ Confirmed' : '⏳ Pending'}</p>
            {!app.confirmed && (
              <button onClick={() => confirmAppointment(app.id)}>Confirm</button>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DoctorDashboard;
