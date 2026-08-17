"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function Investment() {
  const highlights = [
    {
      value: "Africa",
      label: "Primary Market",
    },
    {
      value: "Multi-Sector",
      label: "Diversified Portfolio",
    },
    {
      value: "Long-Term",
      label: "Value Creation",
    },
  ];

  const opportunities = [
    {
      number: "01",
      icon: TrendingUp,
      title: "Strategic Investment",
      description:
        "Supporting scalable ventures with strong growth potential across high-value African markets through responsible capital deployment.",
    },
    {
      number: "02",
      icon: Handshake,
      title: "Strategic Partnerships",
      description:
        "Collaborating with investors, institutions, governments and businesses to develop impactful commercial opportunities.",
    },
    {
      number: "03",
      icon: Building2,
      title: "Sustainable Growth",
      description:
        "Building enterprises that generate economic value, create employment opportunities and support long-term development.",
    },
  ];

  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-20 md:py-32"
    >
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-yellow-500" />

              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
                Investment Opportunities
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Partner with
              <span className="text-yellow-500"> Culture Holdings.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 md:text-lg lg:col-span-5">
            We welcome strategic investors, financial institutions and
            development partners seeking sustainable opportunities across
            Africa's growing markets.
          </p>
        </motion.div>

        {/* Investment positioning */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.08] via-slate-950 to-black"
        >
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            {/* Main statement */}
            <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-500">
                Our Investment Philosophy
              </p>

              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">
                Capital, partnerships and execution aligned around long-term
                enterprise value.
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-gray-400 md:text-base">
                We seek to develop commercially viable businesses while
                maintaining a strong commitment to responsible growth,
                strategic partnerships and sustainable economic impact.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-500 transition hover:text-yellow-400"
              >
                Discuss an opportunity

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-8 md:p-10 ${
                    index !== highlights.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <p className="text-2xl font-bold text-white md:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Opportunities */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Partnership Model
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Where we create value.
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-yellow-500/[0.025] md:p-8"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-gray-600 transition-colors group-hover:text-yellow-500">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black transition-colors group-hover:border-yellow-500/30">
                      <Icon className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>

                  <h4 className="mt-8 text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10 transition-colors group-hover:bg-yellow-500/30" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <p className="text-lg font-semibold text-white">
              Interested in partnering with Culture Holdings?
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Start a conversation about investment, partnerships or business
              opportunities.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Contact Our Team

            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}