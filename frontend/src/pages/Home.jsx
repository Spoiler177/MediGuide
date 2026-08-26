import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Trusted Health Education
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

                Understand Your Health.
                <span className="block text-blue-600">
                  Make Better Choices.
                </span>

              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn about diseases, symptoms, prevention and
                treatment through simple, reliable and easy-to-understand
                health information.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <Link
                  to="/diseases"
                  className="btn-primary"
                >
                  Explore Diseases →
                </Link>

                <Link
                  to="/register"
                  className="btn-secondary"
                >
                  Create Free Account
                </Link>

              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    5+
                  </p>
                  <p className="text-sm text-slate-500">
                    Health Topics
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    20+
                  </p>
                  <p className="text-sm text-slate-500">
                    Learning Resources
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    100%
                  </p>
                  <p className="text-sm text-slate-500">
                    Educational
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="relative">

              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-40"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">
                    🩺
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Health Knowledge
                    </h3>

                    <p className="text-sm text-slate-500">
                      Learn something new today
                    </p>
                  </div>

                </div>

                <div className="space-y-4">

                  <div className="p-4 rounded-2xl bg-slate-50 flex items-center gap-4">

                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                      🦠
                    </div>

                    <div>
                      <p className="font-semibold">
                        Diseases
                      </p>
                      <p className="text-sm text-slate-500">
                        Causes & symptoms
                      </p>
                    </div>

                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 flex items-center gap-4">

                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      🛡️
                    </div>

                    <div>
                      <p className="font-semibold">
                        Prevention
                      </p>
                      <p className="text-sm text-slate-500">
                        Protect your health
                      </p>
                    </div>

                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 flex items-center gap-4">

                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                      🧠
                    </div>

                    <div>
                      <p className="font-semibold">
                        Health Quiz
                      </p>
                      <p className="text-sm text-slate-500">
                        Test your knowledge
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">

        <div className="container-custom">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              WHY MEDIGUIDE?
            </p>

            <h2 className="section-title mt-2">
              Health information made simple
            </h2>

            <p className="section-subtitle mx-auto">
              Everything you need to improve your health knowledge
              in one easy-to-use platform.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="card p-8">

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-6">
                📚
              </div>

              <h3 className="text-xl font-bold mb-3">
                Learn About Diseases
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Explore information about common diseases,
                their causes, symptoms, diagnosis and prevention.
              </p>

            </div>

            <div className="card p-8">

              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl mb-6">
                🛡️
              </div>

              <h3 className="text-xl font-bold mb-3">
                Learn Prevention
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Discover practical ways to reduce health risks
                and maintain a healthier lifestyle.
              </p>

            </div>

            <div className="card p-8">

              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-2xl mb-6">
                🧠
              </div>

              <h3 className="text-xl font-bold mb-3">
                Test Your Knowledge
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Take interactive quizzes and improve your
                understanding of important health topics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20">

        <div className="container-custom">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-teal-600 p-10 md:p-16 text-white">

            <div className="relative z-10 max-w-2xl">

              <h2 className="text-3xl md:text-4xl font-bold">
                Start learning about your health today.
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                Create your free MediGuide account and
                explore our health education resources.
              </p>

              <Link
                to="/register"
                className="inline-flex mt-8 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition"
              >
                Get Started →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;