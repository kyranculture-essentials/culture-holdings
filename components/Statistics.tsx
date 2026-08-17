"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Layers3,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Globe2,
      number: "Africa",
      title: "Primary Market",
      description:
        "Building enterprises around African markets, opportunities and long-term economic growth.",
    },
    {
      icon: Layers3,
      number: "Multi-Sector",
      title: "Diversified Focus",
      description:
        "Operating across agriculture, minerals, construction, real estate and international trade.",
    },
    {
      icon: TrendingUp,
      number: "Long-Term",
      title: "Value Creation",
      description:
        "Focused on sustainable enterprises designed to create enduring commercial and social value.",
    },
    {
      icon: ShieldCheck,
      number: "Responsible",
      title: "Business Approach",
      description:
        "Guided by integrity, accountability, transparency and responsible partnerships.",
    },
  ];

  return (
    <section className="relative border-y border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/[0.03] via-transparent to-yellow-500/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-16">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
              At A Glance
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              An African enterprise platform built for long-term growth.
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base leading-relaxed text-gray-400">
            Culture Holdings brings together complementary business sectors
            under a long-term approach to enterprise development, strategic
            partnerships and sustainable value creation.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  p-7
                  md:p-8
                  bg-white/[0.02]
                  border-b
                  sm:border-b
                  lg:border-b-0
                  border-white/10
                  lg:border-r
                  lg:last:border-r-0
                  transition-all
                  duration-500
                  hover:bg-yellow-500/[0.04]
                "
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-500/[0.08] to-transparent pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.06]">
                      <Icon className="h-5 w-5 text-yellow-500" />
                    </div>

                    <span className="text-xs text-gray-600">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-7 text-2xl font-bold tracking-tight text-yellow-400">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}