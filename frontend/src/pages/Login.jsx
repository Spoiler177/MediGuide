import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post("auth/login/", {
        username: formData.username,
        password: formData.password,
      });

      // Save JWT tokens
      localStorage.setItem(
        "access_token",
        response.data.access
      );

      localStorage.setItem(
        "refresh_token",
        response.data.refresh
      );

      // Login successful
      navigate("/");

    } catch (err) {
      console.error("Login error:", err);

      if (err.response?.data) {
        const data = err.response.data;

        if (typeof data === "object") {
          const messages = Object.entries(data)
            .map(([field, value]) => {
              const message = Array.isArray(value)
                ? value.join(" ")
                : value;

              return `${field}: ${message}`;
            })
            .join(" ");

          setError(messages);
        } else {
          setError("Invalid username or password.");
        }
      } else {
        setError(
          "Could not connect to the server. Make sure Django is running."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      {/* =========================
          BRAND
      ========================== */}

      <div className="auth-brand">

        <Link to="/" className="auth-logo">
          Medi<span>Guide</span>
        </Link>

        <p>
          Your trusted platform for health education.
        </p>

      </div>


      {/* =========================
          LOGIN CARD
      ========================== */}

      <div className="auth-card">

        <div className="auth-header">

          <div className="auth-icon">
            🔐
          </div>

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to continue your MediGuide journey.
          </p>

        </div>


        {/* =========================
            ERROR MESSAGE
        ========================== */}

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}


        {/* =========================
            LOGIN FORM
        ========================== */}

        <form onSubmit={handleSubmit}>

          {/* USERNAME */}

          <div className="form-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="username"
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

          </div>


          {/* FORGOT PASSWORD */}

          <div className="forgot-password">

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Forgot password?
            </a>

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>


        {/* =========================
            REGISTER LINK
        ========================== */}

        <div className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}

      <div className="auth-bottom">

        © 2026 MediGuide. Educational health information platform.

      </div>

    </div>
  );
}

export default Login;