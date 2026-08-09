export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <section className="max-w-4xl">

          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Leadership & Management
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold">
            Experienced Leadership Driving
            <span className="text-yellow-500">
              {" "}African Enterprise Growth
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Culture Holdings Ltd is guided by a team committed to sustainable
            investment, responsible business practices and long-term value
            creation across Africa.
          </p>

        </section>


        {/* Leadership Structure */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">


          <div className="
            bg-slate-900/70
            border
            border-yellow-500/20
            rounded-2xl
            p-8
          ">

            <h2 className="text-xl font-semibold text-yellow-500">
              Executive Leadership
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Providing strategic direction, corporate vision and operational
              leadership to drive sustainable growth.
            </p>

          </div>



          <div className="
            bg-slate-900/70
            border
            border-yellow-500/20
            rounded-2xl
            p-8
          ">

            <h2 className="text-xl font-semibold text-yellow-500">
              Strategic Advisors
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Working with experienced professionals and industry specialists
              to support investment decisions and partnerships.
            </p>

          </div>



          <div className="
            bg-slate-900/70
            border
            border-yellow-500/20
            rounded-2xl
            p-8
          ">

            <h2 className="text-xl font-semibold text-yellow-500">
              Business Partners
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Collaborating with investors, suppliers and institutions to
              develop impactful enterprises.
            </p>

          </div>


        </section>



        {/* Closing Statement */}
        <section className="
          mt-16
          bg-slate-900/60
          border
          border-yellow-500/20
          rounded-2xl
          p-8
          md:p-12
        ">

          <h2 className="text-3xl font-bold">
            Building Trust Through
            <span className="text-yellow-500">
              {" "}Integrity & Excellence
            </span>
          </h2>


          <p className="mt-5 text-gray-300 leading-relaxed">

            Our leadership approach is founded on transparency,
            accountability and innovation. We believe strong governance and
            responsible decision-making are essential for creating lasting
            value for investors, partners and communities.

          </p>

        </section>


      </div>

    </main>
  );
}