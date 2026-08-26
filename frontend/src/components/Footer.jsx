import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="container-custom py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
                <span className="font-bold text-xl">
                  M
                </span>
              </div>

              <h2 className="text-2xl font-bold">
                Medi<span className="text-teal-400">Guide</span>
              </h2>

            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              MediGuide is a health education platform designed to
              help people understand diseases, prevention, symptoms,
              treatment and healthy living.
            </p>

          </div>

          {/* Platform */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Platform
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link
                to="/diseases"
                className="block hover:text-white transition"
              >
                Diseases
              </Link>

              <Link
                to="/quiz"
                className="block hover:text-white transition"
              >
                Health Quiz
              </Link>

              <Link
                to="/faqs"
                className="block hover:text-white transition"
              >
                FAQs
              </Link>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link
                to="/about"
                className="block hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="block hover:text-white transition"
              >
                Login
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} MediGuide. All rights reserved.
          </p>

          <p>
            Health education for everyone.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;