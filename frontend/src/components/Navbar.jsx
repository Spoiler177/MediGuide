import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          MediGuide
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-slate-700 hover:text-teal-600"
          >
            Home
          </Link>

          <Link
            to="/diseases"
            className="text-slate-700 hover:text-teal-600"
          >
            Diseases
          </Link>

          <Link
            to="/quizzes"
            className="text-slate-700 hover:text-teal-600"
          >
            Quiz
          </Link>

          <Link
            to="/faqs"
            className="text-slate-700 hover:text-teal-600"
          >
            FAQs
          </Link>

          <Link
            to="/about"
            className="text-slate-700 hover:text-teal-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-700 hover:text-teal-600"
          >
            Contact
          </Link>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;