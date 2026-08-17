"use client";

import InvestorForm from "./InvestorForm";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Handshake,
} from "lucide-react";

export default function Contact() {
  const contactCards = [
    {
      icon: Building2,
      title: "Headquarters",
      text: "Kampala, Uganda",
      detail: "East Africa",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      text: "Investors, institutions",
      detail: "and business partners",
    },
    {
      icon: Globe2,
      title: "Business Opportunities",
      text: "Agriculture, minerals",
      detail: "construction, real estate & trade",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-12 lg:px-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-yellow-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-yellow-500" />

              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
                Contact Culture Holdings
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Let's build the
              <span className="text-yellow-500"> future together.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 md:text-lg lg:col-span-5">
            We welcome strategic investors, partners, suppliers and
            organizations interested in creating sustainable value through
            Africa's emerging opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/[0.025]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05]">
                    <Icon className="h-5 w-5 text-yellow-500" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-500" />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-gray-300">
                  {card.text}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main contact area */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Conversation panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/[0.08] via-slate-950 to-black p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/[0.07] blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-500">
                Start a Conversation
              </p>

              <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-tight text-white md:text-4xl">
                Bring an opportunity.
                <br />
                Let's explore what is possible.
              </h3>

              <p className="mt-6 max-w-xl leading-relaxed text-gray-400">
                Whether you represent an investment institution, business,
                government organization, supplier or potential client, we are
                interested in exploring commercially meaningful opportunities.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Market Focus
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Uganda · East Africa · Africa
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Areas of Interest
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Investment · Partnerships · Enterprise Development · Trade
                  </p>
                </div>
              </div>

              <a
                href="#business"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-yellow-500 transition hover:text-yellow-400"
              >
                Explore our business sectors

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Investor form */}
          <div className="rounded-3xl border border-yellow-500/20 bg-slate-900/70 p-8 md:p-10">
            <div className="mb-7">
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-500">
                Investment & Partnership
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Submit an inquiry
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Tell us about your organization, opportunity or partnership
                interest and our team can review your inquiry.
              </p>
            </div>

            {/* Existing working form — intentionally preserved */}
            <InvestorForm />
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
              Culture Holdings is committed to building responsible
              relationships that support sustainable enterprise development
              and long-term value creation.
            </p>

            <a
              href="/leadership"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-yellow-500 transition hover:text-yellow-400"
            >
              Meet our leadership

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}