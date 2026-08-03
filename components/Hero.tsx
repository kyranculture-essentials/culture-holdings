"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>


      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          max-w-6xl
          px-6
          md:px-20
          text-white
          pt-20
        "
      >

        <p className="uppercase tracking-[0.35em] text-sm text-yellow-400 mb-6">
          Kampala, Uganda | East Africa
        </p>


        <div className="inline-block mb-6 px-5 py-2 rounded-full border border-yellow-500/40 bg-black/30 text-yellow-400 text-sm">
          African Investment & Enterprise Development
        </div>


        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Building African Enterprise.
          <br />
          Creating{" "}
          <span className="text-yellow-400">
            Long-Term Value.
          </span>
        </h1>


        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed">
          Culture Holdings Ltd is a diversified African investment company
          developing sustainable enterprises across commercial agriculture,
          responsible mineral trading, construction, real estate and
          international trade.
        </p>


        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="#business"
            className="px-8 py-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition"
          >
            Explore Our Businesses
          </a>


          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Partner With Us
          </a>

        </div>


      </motion.div>

    </section>
  );
}