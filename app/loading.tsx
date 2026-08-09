export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">

        {/* Logo / Brand Mark */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-yellow-500/30 animate-pulse" />

          <div className="absolute w-12 h-12 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin" />
        </div>

        {/* Company Name */}
        <h1 className="mt-8 text-2xl md:text-3xl font-bold tracking-wide">
          CULTURE HOLDINGS
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-yellow-500 text-xs md:text-sm uppercase tracking-[0.3em]">
          Building Sustainable African Enterprises
        </p>

        {/* Loading Text */}
        <p className="mt-8 text-gray-500 text-sm">
          Loading...
        </p>

      </div>
    </main>
  );
}