function Login() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-600">
          Login to your MediGuide account.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Login
          </button>

        </form>

      </div>

    </main>
  );
}

export default Login;