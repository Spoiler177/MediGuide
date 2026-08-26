import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container-custom">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <span className="text-white text-xl font-bold">
                M
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Medi<span className="text-blue-600">Guide</span>
              </h1>

              <p className="text-xs text-slate-500">
                Learn. Understand. Stay Healthy.
              </p>
            </div>

          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/diseases"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Diseases
            </Link>

            <Link
              to="/quiz"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Quiz
            </Link>

            <Link
              to="/faqs"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              FAQs
            </Link>

            <Link
              to="/about"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              About
            </Link>

          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">

            {token ? (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 text-slate-700 font-medium hover:text-blue-600"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="btn-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-slate-700 font-medium hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Get Started
                </Link>
              </>
            )}

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700 text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 space-y-3">

            <Link
              to="/"
              className="block py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/diseases"
              className="block py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              Diseases
            </Link>

            <Link
              to="/quiz"
              className="block py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              Quiz
            </Link>

            <Link
              to="/faqs"
              className="block py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </Link>

            <Link
              to="/about"
              className="block py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <div className="pt-3 border-t border-slate-200">

              {token ? (
                <button
                  onClick={handleLogout}
                  className="btn-primary w-full"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/register"
                  className="btn-primary w-full"
                >
                  Get Started
                </Link>
              )}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;