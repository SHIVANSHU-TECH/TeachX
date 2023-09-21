import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Container } from "reactstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/login", formData);
    console.log(response.data);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="cont">
     <div className="box">
      <h1 className="login">Login</h1>
      <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
        <div className="inputBox">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="para">
        Don't have an account? <Link to="/signup">Signup here</Link>.
      </p>
      </div>
      </div>
  );
};

export default Login;
