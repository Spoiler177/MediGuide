import { useState } from "react";
import api from "../services/api";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (formData.password !== formData.password2) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await api.post("auth/register/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      setMessage("Account created successfully!");

      setFormData({
        username: "",
        email: "",
        password: "",
        password2: "",
      });
    } catch (err) {
      console.error(err);

      if (err.response?.data) {
        setError(JSON.stringify(err.response.data));
      } else {
        setError("Could not connect to the server.");
      }
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Create your MediGuide account.</p>
        </div>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={formData.password2}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="register-button"
          >
            Create Account
          </button>

        </form>

        <div className="login-link">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </div>

      </div>

    </div>
  );
}

export default Register;