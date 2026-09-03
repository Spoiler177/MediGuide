import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            M
          </div>

          <div>
            <h2>MediGuide</h2>
            <p>Health • Knowledge • Awareness</p>
          </div>
        </Link>


        <div className="nav-links">

          <Link to="/" className="nav-link active">
            Home
          </Link>

          <Link to="/diseases" className="nav-link">
            Diseases
          </Link>

          <Link to="/quiz" className="nav-link">
            Quiz
          </Link>

          <Link to="/faqs" className="nav-link">
            FAQs
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>

        </div>


        <div className="nav-buttons">

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="get-started">
            Get Started
          </Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="trusted-badge">
            🩺 Trusted Health Education
          </div>


          <h1>
            Understand Your
            <br />

            <span className="hero-dark">
              Health.
            </span>

            <br />

            <span className="hero-teal">
              Make Better
              <br />
              Decisions.
            </span>
          </h1>


          <p className="hero-text">
            Welcome to MediGuide. Explore reliable,
            easy-to-understand health information and
            learn how to protect your health.
          </p>


          <div className="hero-buttons">

            <Link
              to="/diseases"
              className="primary-button"
            >
              Explore Diseases →
            </Link>


            <Link
              to="/quiz"
              className="secondary-button"
            >
              Take a Quiz
            </Link>

          </div>

        </div>


        {/* HEALTH CARD */}

        <div className="hero-card">

          <div className="heart-circle">
            ❤️
          </div>

          <h2>
            Your Health Matters
          </h2>

          <p>
            Learn. Prevent. Stay informed.
          </p>


          <div className="health-points">

            <div>
              ✓ Reliable health information
            </div>

            <div>
              ✓ Easy to understand
            </div>

            <div>
              ✓ Learn at your own pace
            </div>

            <div>
              ✓ Interactive quizzes
            </div>

          </div>

        </div>

      </section>


      {/* ================= SEARCH ================= */}

      <section className="search-section">

        <div className="section-label">
          FIND INFORMATION
        </div>

        <h2>
          What would you like to learn?
        </h2>

        <p>
          Search for a disease or health topic.
        </p>


        <div className="search-box">

          <span>
            🔎
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search diseases..."
          />

          <button>
            Search
          </button>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories">

        <div className="section-label">
          EXPLORE TOPICS
        </div>

        <h2>
          Health Categories
        </h2>

        <p className="section-description">
          Explore important health topics and learn
          how to protect yourself and stay healthy.
        </p>


        <div className="category-grid">

          <div className="category-card">

            <div className="category-icon">
              🦠
            </div>

            <h3>
              Infectious Diseases
            </h3>

            <p>
              Learn about diseases caused by viruses,
              bacteria and other infectious organisms.
            </p>

            <Link to="/diseases">
              Explore →
            </Link>

          </div>


          <div className="category-card">

            <div className="category-icon">
              ❤️
            </div>

            <h3>
              Chronic Diseases
            </h3>

            <p>
              Understand long-term health conditions
              and how they can be managed.
            </p>

            <Link to="/diseases">
              Explore →
            </Link>

          </div>


          <div className="category-card">

            <div className="category-icon">
              🛡️
            </div>

            <h3>
              Prevention
            </h3>

            <p>
              Discover practical ways to protect your
              health and prevent diseases.
            </p>

            <Link to="/diseases">
              Explore →
            </Link>

          </div>


          <div className="category-card">

            <div className="category-icon">
              🌱
            </div>

            <h3>
              Healthy Living
            </h3>

            <p>
              Learn about healthy habits and everyday
              wellbeing.
            </p>

            <Link to="/diseases">
              Explore →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FEATURED DISEASES ================= */}

      <section className="featured">

        <div className="section-label">
          FEATURED DISEASES
        </div>

        <h2>
          Learn About Common Diseases
        </h2>

        <p className="section-description">
          Get clear and educational information about
          common health conditions.
        </p>


        <div className="disease-grid">

          <div className="disease-card">

            <div className="disease-icon">
              🦟
            </div>

            <span>
              INFECTIOUS
            </span>

            <h3>
              Malaria
            </h3>

            <p>
              Learn about malaria, its symptoms,
              prevention and treatment.
            </p>

            <Link to="/diseases">
              Learn More →
            </Link>

          </div>


          <div className="disease-card">

            <div className="disease-icon">
              🫁
            </div>

            <span>
              INFECTIOUS
            </span>

            <h3>
              Tuberculosis
            </h3>

            <p>
              Understand TB, how it spreads,
              symptoms and prevention.
            </p>

            <Link to="/diseases">
              Learn More →
            </Link>

          </div>


          <div className="disease-card">

            <div className="disease-icon">
              🧬
            </div>

            <span>
              INFECTIOUS
            </span>

            <h3>
              HIV/AIDS
            </h3>

            <p>
              Learn important facts about HIV,
              prevention and healthy living.
            </p>

            <Link to="/diseases">
              Learn More →
            </Link>

          </div>


          <div className="disease-card">

            <div className="disease-icon">
              🩸
            </div>

            <span>
              CHRONIC
            </span>

            <h3>
              Diabetes
            </h3>

            <p>
              Understand diabetes, symptoms,
              risk factors and prevention.
            </p>

            <Link to="/diseases">
              Learn More →
            </Link>

          </div>


          <div className="disease-card">

            <div className="disease-icon">
              ❤️
            </div>

            <span>
              CHRONIC
            </span>

            <h3>
              Hypertension
            </h3>

            <p>
              Learn about high blood pressure
              and heart health.
            </p>

            <Link to="/diseases">
              Learn More →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUIZ ================= */}

      <section className="quiz-section">

        <div className="quiz-icon">
          📝
        </div>

        <div>

          <div className="section-label">
            TEST YOUR KNOWLEDGE
          </div>

          <h2>
            Ready to test what you know?
          </h2>

          <p>
            Take an interactive MediGuide quiz and
            improve your understanding of health.
          </p>

        </div>


        <Link
          to="/quiz"
          className="primary-button"
        >
          Take a Quiz →
        </Link>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq-section">

        <div className="section-label">
          NEED HELP?
        </div>

        <h2>
          Frequently Asked Questions
        </h2>


        <div className="faq-grid">

          <div className="faq-card">

            <h3>
              What is MediGuide?
            </h3>

            <p>
              MediGuide is an educational platform
              designed to make health information
              easier to understand.
            </p>

          </div>


          <div className="faq-card">

            <h3>
              Can I learn about diseases?
            </h3>

            <p>
              Yes. You can explore information about
              different diseases and prevention.
            </p>

          </div>


          <div className="faq-card">

            <h3>
              Are the quizzes free?
            </h3>

            <p>
              Yes. MediGuide quizzes help you test
              and improve your health knowledge.
            </p>

          </div>


          <div className="faq-card">

            <h3>
              Is MediGuide a hospital?
            </h3>

            <p>
              No. MediGuide is an educational platform
              and does not replace professional medical
              advice.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          M
        </div>

        <h3>
          MediGuide
        </h3>

        <p>
          Your trusted platform for health education.
        </p>

        <div className="footer-links">

          <Link to="/diseases">
            Diseases
          </Link>

          <Link to="/quiz">
            Quiz
          </Link>

          <Link to="/faqs">
            FAQs
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

        <div className="copyright">
          © 2026 MediGuide. Educational health
          information platform.
        </div>

      </footer>

    </div>
  );
}

export default Home;