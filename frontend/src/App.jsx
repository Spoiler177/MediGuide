import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">
          Medi<span>Guide</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/diseases">Diseases</a>
          <a href="/quiz">Quiz</a>
          <a href="/faqs">FAQs</a>
          <a href="/about">About</a>
        </div>

        <div className="nav-buttons">
          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/register" className="register-btn">
            Get Started
          </a>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="badge">
            🩺 Trusted Health Education
          </div>

          <h1>
            Learn about your health.
            <span> Make informed decisions.</span>
          </h1>

          <p>
            MediGuide provides simple, reliable and easy-to-understand
            information about diseases, symptoms, prevention and treatment.
          </p>

          <div className="hero-buttons">
            <a href="/diseases" className="primary-btn">
              Explore Diseases →
            </a>

            <a href="/register" className="secondary-btn">
              Create Account
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>5+</strong>
              <small>Diseases</small>
            </div>

            <div>
              <strong>20+</strong>
              <small>Health Topics</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Educational</small>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="medical-icon">
            ❤️
          </div>

          <h3>Health Knowledge</h3>

          <p>
            Understand diseases, recognize symptoms and learn how to protect
            yourself and your community.
          </p>

          <div className="card-item">
            <span>✓</span>
            Disease Information
          </div>

          <div className="card-item">
            <span>✓</span>
            Symptoms & Prevention
          </div>

          <div className="card-item">
            <span>✓</span>
            Health Quizzes
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;