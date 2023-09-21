// import React from "react";
import './form.css';
import React, { useState } from 'react';
import { firestore } from './firebase';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [school, setSchool] = useState('');
  const [tuition_fee, setTuition_fee] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, contact, grade, subject, school, tuition_fee);

    firestore
      .collection('student')
      .add({
        name, 
        email,
        contact,
        grade,
        subject,
        school, 
        tuition_fee,
      })
      .then(() => {
        setName(""),
        setEmail(""),
        setContact(""),
        setGrade(""),
        setSubject(""),
        setSchool(""),
        setTuition_fee("");
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
            type="text"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact number"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="class"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="subjects need for tuition"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="school name"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="tuition_fee"
            value={tuition_fee}
            onChange={(e) => setTuition_fee(e.target.value)}
            placeholder="tuition_fee"
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

export default Form;
