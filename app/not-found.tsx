import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Brand */}
        <div className="mb-10">
          <p className="text-yellow-500 text-sm uppercase tracking-[0.35em] font-medium">
            Culture Holdings Ltd
          </p>

          <div className="mt-3 h-px w-20 bg-yellow-500 mx-auto" />
        </div>

        {/* Error Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-yellow-500">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          The page you are looking for may have been moved, removed, or
          temporarily unavailable. Let us help you get back to Culture
          Holdings.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-lg
              bg-yellow-500
              text-black
              font-semibold
              hover:bg-yellow-400
              transition-all
              duration-300
            "
          >
            Return to Homepage
          </Link>
        </div>

        {/* Footer message */}
        <p className="mt-12 text-sm text-gray-500">
          Building Sustainable African Enterprises
        </p>

      </div>
    </main>
  );
}