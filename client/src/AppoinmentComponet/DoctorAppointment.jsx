import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DoctorAppointment.css';
import Nav from '../home_componets/Nav';

const specialties = [
  "General Physician", "Gynaecology", "Neurology", "Cardiology",
  "Psychiatry", "Pulmonology", "Endocrinology",
  "Nephrology", "Dentist", "Dermatology", "Pediatrics"
];

const doctorData = {
  "General Physician": [
    { name: "Dr. Ramesh Kumar", timing: "9:00 AM - 12:00 PM" },
    { name: "Dr. Anita Verma", timing: "4:00 PM - 7:00 PM" },
  ],
  "Cardiology": [
    { name: "Dr. Aryan Singh", timing: "10:00 AM - 1:00 PM" },
    { name: "Dr. Sneha Iyer", timing: "3:00 PM - 6:00 PM" },
  ],
  "Neurology": [
    { name: "Dr. Rahul Mehta", timing: "11:00 AM - 2:00 PM" },
  ],
  "Dentist": [
    { name: "Dr. Niharika Sharma", timing: "12:00 PM - 3:00 PM" },
  ],
  "Gynaecology": [
    { name: "Dr. Anjali Patil", timing: "1:00 PM - 4:00 PM" },
  ],
  "Psychiatry": [
    { name: "Dr. Karan Malhotra", timing: "5:00 PM - 8:00 PM" },
  ],
  "Pulmonology/Respiratory": [
    { name: "Dr. Shweta Narang", timing: "10:00 AM - 1:00 PM" },
  ],
  "Endocrinology": [
    { name: "Dr. Vijay Kapoor", timing: "2:00 PM - 5:00 PM" },
  ],
  "Nephrology": [
    { name: "Dr. Rajeev Nanda", timing: "3:00 PM - 6:00 PM" },
  ],
  "Dermatology": [
    { name: "Dr. Tanya Jaiswal", timing: "11:00 AM - 2:00 PM" },
  ],
  "Pediatrics": [
    { name: "Dr. Manish Sinha", timing: "9:00 AM - 12:00 PM" },
  ],
};

const DoctorAppointment = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [location, setLocation] = useState('');
  const [activeForm, setActiveForm] = useState(null);
  const [patientDetails, setPatientDetails] = useState({ name: '', age: '' });

  const handleBook = (doctorName) => {
    alert(`Appointment booked with ${doctorName} for ${patientDetails.name}, Age: ${patientDetails.age}`);
    setActiveForm(null);
    setPatientDetails({ name: '', age: '' });
  };

  const doctors = doctorData[selectedSpecialty] || [];

  return (
    <>
    <Nav></Nav>
    <div className="appointment-container">
      {/* Specialty Selector */}
      <section className="find-doctor-container">
        <h2>Find a Doctor in 3 easy steps</h2>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="doctor-form">
            <div className="form-group">
              <label>Select Specialty<span>*</span></label>
              <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)} required>
                <option value="">Enter Speciality</option>
                {specialties.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Select Date<span>*</span></label>
              <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Preferred Location/Pincode<span>*</span></label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>

      {/* Specialties Grid */}
      <section className="specialties-section">
        <div className="specialties-header">
          <h2>Browse by Specialties</h2>
        </div>
        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="specialty-card"
              onClick={() => setSelectedSpecialty(item)}
            >
              <div className="icon">💡</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Cards */}
      <section style={{ paddingTop: '30px' }}>
        <h2>Available Appointments</h2>
        <AnimatePresence>
          {selectedSpecialty ? (
            doctors.length > 0 ? (
              <div className="appointment-list">
                {doctors.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className="appointment-card"
                  >
                    <h3>{doc.name}</h3>
                    <p><strong>Specialty:</strong> {selectedSpecialty}</p>
                    <p><strong>Timings:</strong> {doc.timing}</p>
                    <button className="book-btn" onClick={() => setActiveForm(index)}>
                      Book Appointment
                    </button>

                    {activeForm === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="booking-form"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Patient Name"
                          value={patientDetails.name}
                          onChange={(e) => setPatientDetails({ ...patientDetails, name: e.target.value })}
                        />
                        <input
                          type="number"
                          name="age"
                          placeholder="Age"
                          value={patientDetails.age}
                          onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                        />
                        <button className="confirm-btn" onClick={() => handleBook(doc.name)}>
                          Confirm
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : <p>No doctors available for this specialty.</p>
          ) : <p>Please select a specialty to view available doctors.</p>}
        </AnimatePresence>
      </section>
    </div>
    </>
  );
};

export default DoctorAppointment;
