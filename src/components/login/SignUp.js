import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/signup", formData);
    console.log(response.data);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div class="box">
      <h1 className="login">Signup</h1>
      <form onSubmit={handleSubmit}>
      <div class="inputBox">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        </div>
        <div class="inputBox">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        </div>
        <div class="inputBox">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        </div>
        <div class="inputBox">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
      </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
      </div>
    </div>
  );
};

export default Signup;
