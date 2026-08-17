"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Target,
  Eye,
} from "lucide-react";

export default function About() {
  const values = [
    "Integrity",
    "Accountability",
    "Innovation",
    "Sustainability",
    "Excellence",
    "Transparency",
    "Stewardship",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-20 md:py-32"
    >
      {/* Background details */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-yellow-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-yellow-500" />

            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
              About Culture Holdings
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Building enterprises with
            <span className="text-yellow-500"> purpose, discipline </span>
            and long-term vision.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
            Culture Holdings is an African investment and enterprise
            development company focused on building sustainable businesses
            through strategic investment, innovation and responsible
            partnerships.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Our Approach
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                Turning opportunity into sustainable enterprise.
              </h3>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-400">
                <p>
                  We focus on sectors with the potential to contribute to
                  economic development while creating commercially sustainable
                  opportunities for investors, partners and communities.
                </p>

                <p>
                  Our business interests span commercial agriculture,
                  responsible mineral trading, construction and development,
                  real estate investment and international trade.
                </p>

                <p>
                  Through disciplined execution and strategic relationships,
                  Culture Holdings aims to connect African opportunities with
                  the capital, expertise and partnerships required to develop
                  them responsibly.
                </p>
              </div>

              <a
                href="#business"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-500 transition hover:text-yellow-400"
              >
                Explore our business sectors

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.10] via-slate-900/80 to-slate-950 p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/[0.08] blur-3xl" />

              <div className="relative">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-500">
                  Our Commitment
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                  Growth that creates lasting value.
                </h3>

                <p className="mt-6 leading-relaxed text-gray-300">
                  We believe Africa's growth is driven by sustainable
                  investment, strong partnerships and responsible business
                  practices that create opportunities across generations.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">
                  <div>
                    <p className="text-2xl font-bold text-white md:text-3xl">
                      Africa
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Primary Market
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-white md:text-3xl">
                      Long-Term
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Value Creation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-slate-950 p-8 md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.06]">
              <Target className="h-5 w-5 text-yellow-500" />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-yellow-500">
              Our Mission
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              To deliver excellence through our business sectors while
              fostering growth, integrity and long-term value for clients,
              partners, investors and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-slate-950 p-8 md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.06]">
              <Eye className="h-5 w-5 text-yellow-500" />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-yellow-500">
              Our Vision
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              To become a leading African enterprise group recognized for
              innovation, sustainable development and global partnerships.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-500">
                Our Values
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Principles that guide how we operate.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              These principles shape our relationships, decisions and approach
              to enterprise development.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
              >
                <Check className="h-4 w-4 shrink-0 text-yellow-500" />

                <span className="text-sm text-gray-300 group-hover:text-white">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}