"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Pickaxe,
  Building2,
  Landmark,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

export default function BusinessSectors() {
  const sectors = [
    {
      number: "01",
      icon: Sprout,
      title: "Commercial Agriculture",
      description:
        "Developing sustainable agricultural enterprises focused on food security, productivity, innovation and long-term economic growth across Africa.",
      category: "Agriculture",
    },
    {
      number: "02",
      icon: Pickaxe,
      title: "Responsible Mineral Trading",
      description:
        "Building transparent mineral supply networks through responsible sourcing, trusted partnerships and global market access.",
      category: "Minerals",
    },
    {
      number: "03",
      icon: Building2,
      title: "Construction & Development",
      description:
        "Creating quality infrastructure and development projects through modern engineering, sustainable practices and strategic execution.",
      category: "Development",
    },
    {
      number: "04",
      icon: Landmark,
      title: "Real Estate Investment",
      description:
        "Developing valuable property solutions through strategic investment, urban transformation and sustainable development.",
      category: "Real Estate",
    },
    {
      number: "05",
      icon: Globe2,
      title: "International Trade",
      description:
        "Connecting African markets with global opportunities through efficient import, export and strategic trade partnerships.",
      category: "Global Trade",
    },
  ];

  return (
    <section
      id="business"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-12 lg:px-20 md:py-32"
    >
      {/* Background detail */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-yellow-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-yellow-500" />

              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
                Strategic Focus Areas
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Building across
              <span className="text-yellow-500"> high-growth sectors.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            Our portfolio is focused on sectors with the potential to support
            economic development, create opportunity and generate sustainable
            long-term value across Africa.
          </p>
        </motion.div>

        {/* Sector portfolio */}
        <div className="mt-16 space-y-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-yellow-500/40 hover:bg-yellow-500/[0.035]"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-full w-1 origin-bottom scale-y-0 bg-yellow-500 transition-transform duration-500 group-hover:scale-y-100" />

                <div className="grid items-center gap-6 px-6 py-7 md:grid-cols-[70px_60px_1fr_180px_40px] md:px-8 md:py-8">
                  {/* Number */}
                  <div>
                    <span className="text-sm font-medium tracking-[0.15em] text-gray-600 transition-colors duration-300 group-hover:text-yellow-500">
                      {sector.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/[0.06]">
                    <Icon className="h-5 w-5 text-yellow-500" />
                  </div>

                  {/* Main information */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {sector.title}
                      </h3>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                        {sector.category}
                      </span>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
                      {sector.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="hidden md:block">
                    <span className="text-xs uppercase tracking-[0.15em] text-gray-600 transition-colors duration-300 group-hover:text-yellow-500">
                      Explore Sector
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            Our diversified approach allows Culture Holdings to pursue
            opportunities across complementary sectors while maintaining a
            consistent focus on responsible enterprise development.
          </p>

          <a
            href="#investment"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
          >
            Explore our investment approach

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}