"use client";

import InvestorForm from "./InvestorForm";


export default function Contact() {

  const contactCards = [
    {
      title: "Headquarters",
      text: (
        <>
          Kampala, Uganda
          <br />
          East Africa
        </>
      ),
    },

    {
      title: "Strategic Partnerships",
      text: (
        <>
          Investors, institutions,
          <br />
          and business partners
        </>
      ),
    },

    {
      title: "Business Opportunities",
      text: (
        <>
          Agriculture, minerals,
          <br />
          construction and trade
        </>
      ),
    },
  ];


  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-24 bg-black/40"
    >

      <div className="max-w-7xl mx-auto">


        {/* Section Header */}

        <div className="max-w-5xl">

          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Contact Us
          </p>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold">

            Build The Future With

            <span className="text-yellow-500">
              {" "}Culture Holdings
            </span>

          </h2>


          <p className="mt-6 text-gray-300 text-lg leading-relaxed">

            We welcome strategic investors, partners and organizations
            interested in creating sustainable value through Africa's
            emerging opportunities.

          </p>

        </div>




        {/* Contact Information Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {contactCards.map((card, index) => (

            <div
              key={index}
              className="
              bg-slate-900/60
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              hover:border-yellow-500
              transition-all
              duration-300
              "
            >

              <h3 className="text-xl font-semibold text-yellow-500">
                {card.title}
              </h3>


              <p className="mt-5 text-gray-300 leading-relaxed">
                {card.text}
              </p>

            </div>

          ))}

        </div>





        {/* Contact + Form */}

        <div className="mt-16 grid md:grid-cols-2 gap-10">


          {/* Company Contact */}

          <div
            className="
            bg-slate-900/70
            border
            border-yellow-500/20
            rounded-2xl
            p-8
            md:p-10
            "
          >

            <h3 className="text-2xl font-semibold text-white">
              Start A Conversation
            </h3>


            <p className="mt-4 text-gray-300 leading-relaxed">

              Whether you are an investor, strategic partner, supplier or
              potential client, we would like to explore opportunities with
              you.

            </p>



            <div className="mt-8 space-y-4 text-gray-400">

              <p>
                📍 Kampala, Uganda
              </p>


              <p>
                🌍 East Africa Market Focus
              </p>


              <p>
                🤝 Strategic Investment Partnerships
              </p>


              <p>
                📈 Sustainable Enterprise Development
              </p>

            </div>


          </div>






          {/* Investor Form */}

          <div
            className="
            bg-slate-900/70
            border
            border-yellow-500/20
            rounded-2xl
            p-8
            md:p-10
            "
          >

            <h3 className="text-2xl font-semibold text-yellow-500">
              Investor Inquiry
            </h3>


            <p className="mt-3 text-gray-400">
              Submit your partnership or investment proposal.
            </p>



            <InvestorForm />


          </div>


        </div>


      </div>


    </section>
  );
}