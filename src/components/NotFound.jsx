const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-7xl font-black text-cyan-400">404</h1>

        <p className="mt-6 text-xl">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;