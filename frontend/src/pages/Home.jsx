function Home() {
  return (
    <main className="bg-slate-50">

      <section className="flex min-h-[85vh] items-center">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">

            <p className="mb-4 font-semibold uppercase tracking-widest text-teal-600">
              Medical Education & Awareness
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Understand Your Health.
              <span className="text-teal-600">
                {" "}Make Informed Decisions.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              MediGuide helps you learn about diseases, symptoms, causes,
              diagnosis, treatment and prevention through simple,
              educational health information.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="/diseases"
                className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
              >
                Explore Diseases
              </a>

              <a
                href="/quizzes"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Take a Quiz
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;