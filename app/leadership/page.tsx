import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Globe2,
  Handshake,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const leadershipPrinciples = [
  {
    title: "Strategic Vision",
    description:
      "We pursue opportunities with a long-term perspective, combining disciplined execution with a clear understanding of Africa's evolving markets.",
    icon: Target,
  },
  {
    title: "Responsible Growth",
    description:
      "Our approach emphasizes sustainable value creation, responsible investment and partnerships that generate meaningful economic impact.",
    icon: TrendingUp,
  },
  {
    title: "Integrity & Governance",
    description:
      "Transparency, accountability and responsible stewardship guide how we engage investors, partners, communities and stakeholders.",
    icon: ShieldCheck,
  },
  {
    title: "Global Perspective",
    description:
      "We connect African opportunities with international expertise, capital and markets to build businesses with regional and global relevance.",
    icon: Globe2,
  },
];

const leadershipTeam = [
  {
    name: "Leadership Position",
    role: "Executive Leadership",
    description:
      "Responsible for providing strategic direction, strengthening partnerships and guiding the long-term growth of Culture Holdings.",
  },
  {
    name: "Leadership Position",
    role: "Investment & Strategy",
    description:
      "Focused on identifying opportunities, developing investment strategies and creating sustainable value across the group's business sectors.",
  },
  {
    name: "Leadership Position",
    role: "Operations & Development",
    description:
      "Focused on translating strategic objectives into disciplined execution across projects, partnerships and operating businesses.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="group">
            <div className="text-lg font-semibold tracking-[0.18em] text-white">
              CULTURE
            </div>

            <div className="text-[10px] tracking-[0.35em] text-amber-400">
              HOLDINGS
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#business"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Business Sectors
            </Link>

            <Link
              href="/#investment"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Investment
            </Link>

            <Link
              href="/leadership"
              className="text-sm font-medium text-amber-400"
            >
              Leadership
            </Link>
          </div>

          <Link
            href="/#contact"
            className="hidden rounded-full border border-amber-400/40 bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:inline-flex"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.9),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                Leadership
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Building with vision.
              <span className="block text-slate-400">
                Leading with integrity.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Culture Holdings is guided by a leadership philosophy centered
              on strategic thinking, responsible enterprise and long-term
              value creation across Africa and global markets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Engage With Us
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/#business"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Explore Our Businesses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-8 bg-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                  Our Approach
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Leadership that creates lasting value.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                Our leadership approach is built around the belief that
                sustainable businesses require more than capital. They require
                vision, accountability, strong relationships and the ability
                to execute consistently over time.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                We seek to build an institution capable of identifying
                opportunities, developing strategic partnerships and
                participating responsibly in sectors with significant
                long-term potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                Leadership Principles
              </span>
              <div className="h-px w-8 bg-amber-400" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The principles behind our decisions.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              These principles shape how we evaluate opportunities, build
              partnerships and develop Culture Holdings for the long term.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-6 inline-flex rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-amber-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-8 bg-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                  Leadership Team
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Experienced leadership.
                <span className="block text-slate-400">
                  Purpose-driven execution.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Our leadership structure is designed to bring together
                strategic oversight, investment discipline and operational
                execution.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Building2 size={18} className="text-amber-400" />
              Culture Holdings
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {leadershipTeam.map((leader, index) => (
              <article
                key={`${leader.role}-${index}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
              >
                {/* Photo placeholder */}
                <div className="relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(245,158,11,0.12),transparent_35%)]" />

                  <div className="relative w-full border-t border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                      Leadership
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-amber-400">
                    {leader.role}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {leader.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-6">
            <p className="text-sm leading-7 text-slate-400">
              <span className="font-semibold text-amber-400">
                Leadership profiles:
              </span>{" "}
              Executive names, photographs and biographies can be added here
              once the official leadership information is finalized.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Leadership */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-8 bg-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                  Strategic Direction
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Connecting ambition with disciplined execution.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Culture Holdings is being developed with a regional mindset
                and a global outlook. Our leadership works to identify
                opportunities where capital, expertise, partnerships and
                execution can create sustainable economic value.
              </p>

              <div className="mt-8">
                <Link
                  href="/#investment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-300"
                >
                  Explore investment opportunities
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <Handshake className="text-amber-400" size={25} />

                <h3 className="mt-5 font-semibold">
                  Strategic Partnerships
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Building relationships with investors, institutions,
                  governments, operators and strategic partners.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <Globe2 className="text-amber-400" size={25} />

                <h3 className="mt-5 font-semibold">African Perspective</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Identifying opportunities across Africa while connecting
                  them to global markets and expertise.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <TrendingUp className="text-amber-400" size={25} />

                <h3 className="mt-5 font-semibold">Long-Term Growth</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Focusing on sustainable businesses capable of creating
                  enduring economic and social value.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <ShieldCheck className="text-amber-400" size={25} />

                <h3 className="mt-5 font-semibold">Responsible Enterprise</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Maintaining integrity, accountability and transparency in
                  our relationships and decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
              Partner With Us
            </span>
            <div className="h-px w-8 bg-amber-400" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Building the future of African enterprise.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            We welcome conversations with investors, strategic partners,
            institutions and organizations aligned with our vision for
            sustainable enterprise development.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Contact Culture Holdings
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-white">
              CULTURE HOLDINGS
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Building African Enterprise. Creating Long-Term Value.
            </p>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Culture Holdings. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}