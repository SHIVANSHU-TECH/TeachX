// import React from "react";

import './tform.css';
import React, { useState } from 'react';
import { firestore } from './firebase';

function Tform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [qualification, setQualification] = useState('');
  const [subject, setSubject] = useState('');
  const [experience, setExperience] = useState('');
  const [min_charges, setMin_charges] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, contact, qualification, subject, experience, min_charges);

    firestore
      .collection('teacher')
      .add({
        name, 
        email,
        contact,
        qualification,
        subject,
        experience, 
        min_charges,
      })
      .then(() => {
        setName(""),
        setEmail(""),
        setContact(""),
        setQualification(""),
        setSubject(""),
        setExperience(""),
        setMin_charges("");
      })
      .catch((error) => console.error('Error submitting data: ', error));
  };

  return (
    <div className="form">
      <h2 className="headingContent">Student Form</h2>
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact number"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            placeholder="qualification"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="subjects for tuition"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="experience"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="min_charges"
            value={min_charges}
            onChange={(e) => setMin_charges(e.target.value)}
            placeholder="min_charges per hour"
            autoComplete="off"
            required
          />

          <button type="submit">Submit</button>
        </form>
        {/* {formSubmitted && <p>Form submitted!</p>} */}
      </div>
    </div>
  );
}
export default Tform;
