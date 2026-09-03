import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem("access");

  if (!token) {
    navigate("/login");
    return;
  }

  fetch("http://127.0.0.1:8000/api/auth/profile/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Unable to load profile");
      }

      return response.json();
    })
    .then((data) => {
      setUser(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      navigate("/login");
    });
}, [navigate]);
  // Temporary user information.
  // Later this will come from the Django API.
const [user, setUser] = React.useState(null);
const [loading, setLoading] = React.useState(true);

  const handleLogout = () => {
    // Later we will also remove the JWT token here.
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  if (loading) {
  return (
    <div className="dashboard-loading">
      <div className="loading-spinner"></div>
      <p>Loading your dashboard...</p>
    </div>
  );
}
  return (
    
    <div className="profile-dashboard">

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

          <Link to="/" className="nav-link">
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

        </div>


        <div className="profile-nav">

          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <div className="profile-nav-name">
            {user.name}
          </div>

          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>

        </div>

      </nav>


      {/* ================= DASHBOARD ================= */}

      <main className="profile-main">

        {/* Welcome */}

        <section className="profile-welcome">

          <div>

            <p className="section-label">
              PERSONAL DASHBOARD
            </p>

            <h1>
              Welcome back, {user.name.split(" ")[0]} 👋
            </h1>

            <p>
              Keep learning, track your progress and
              continue your health education journey.
            </p>

          </div>


          <div className="profile-large-avatar">
            {user.name.charAt(0)}
          </div>

        </section>


        {/* ================= STATISTICS ================= */}

        <section className="profile-stats">

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div>
              <span>
                Diseases Viewed
              </span>

              <strong>
                0
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              📝
            </div>

            <div>
              <span>
                Quizzes Completed
              </span>

              <strong>
                0
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              🏆
            </div>

            <div>
              <span>
                Average Score
              </span>

              <strong>
                0%
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              🔥
            </div>

            <div>
              <span>
                Learning Streak
              </span>

              <strong>
                0 days
              </strong>
            </div>

          </div>

        </section>


        {/* ================= CONTENT ================= */}

        <section className="dashboard-columns">

          {/* Recent Activity */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <span className="section-label">
                  ACTIVITY
                </span>

                <h2>
                  Recent Activity
                </h2>
              </div>

            </div>


            <div className="empty-activity">

              <div className="empty-icon">
                📋
              </div>

              <h3>
                No activity yet
              </h3>

              <p>
                Start exploring diseases or take a quiz
                and your activity will appear here.
              </p>

              <Link
                to="/diseases"
                className="primary-button"
              >
                Explore Diseases
              </Link>

            </div>

          </div>


          {/* Profile */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <span className="section-label">
                  ACCOUNT
                </span>

                <h2>
                  My Profile
                </h2>
              </div>

            </div>


            <div className="profile-information">

              <div className="profile-info-row">

                <span>
                  Name
                </span>

                <strong>
                  {user.name}
                </strong>

              </div>


              <div className="profile-info-row">

                <span>
                  Email
                </span>

                <strong>
                  {user.email}
                </strong>

              </div>


              <div className="profile-info-row">

                <span>
                  Member since
                </span>

                <strong>
                  {user.joined}
                </strong>

              </div>

            </div>


            <button className="edit-profile-button">
              Edit Profile
            </button>

          </div>

        </section>


        {/* ================= CONTINUE LEARNING ================= */}

        <section className="continue-learning">

          <div>

            <span className="section-label">
              KEEP LEARNING
            </span>

            <h2>
              Continue Your Health Journey
            </h2>

            <p>
              Explore diseases, test your knowledge and
              build your health awareness.
            </p>

          </div>


          <div className="learning-buttons">

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

        </section>

      </main>

    </div>
  );
}

export default ProfileDashboard;