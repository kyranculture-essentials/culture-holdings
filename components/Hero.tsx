"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero/hero.png')",
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

      {/* Subtle gold glow */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Location / positioning */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="h-px w-10 bg-yellow-500" />

            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs md:text-sm font-medium">
              Kampala, Uganda · East Africa
            </p>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-black/30 backdrop-blur-md px-5 py-2.5 mb-7">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.8)]" />

            <span className="text-sm text-gray-200">
              African Investment & Enterprise Development
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-tight text-white">
            Building African
            <br />

            <span className="text-white">Enterprise.</span>
            <br />

            <span className="text-yellow-400">
              Creating Long-Term Value.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base md:text-xl leading-relaxed text-gray-200">
            Culture Holdings is a diversified African enterprise group
            developing sustainable opportunities across agriculture, mineral
            trading, construction, real estate and international trade.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#business"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-yellow-500 px-7 py-4 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:-translate-y-1"
            >
              Explore Our Businesses

              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:-translate-y-1"
            >
              Partner With Us

              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-white/10 pt-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Market
              </p>
              <p className="mt-2 text-sm text-gray-200">
                East Africa
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-sm text-gray-200">
                Enterprise Development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Approach
              </p>
              <p className="mt-2 text-sm text-gray-200">
                Long-Term Value
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="group hidden md:flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Discover Culture Holdings
            </span>

            <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}