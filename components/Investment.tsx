"use client";

import { motion } from "framer-motion";

export default function Investment() {

  const opportunities = [
    {
      title: "Strategic Investment",
      description:
        "Supporting scalable ventures with strong growth potential across high-value African markets through responsible capital deployment.",
    },

    {
      title: "Strategic Partnerships",
      description:
        "Collaborating with investors, institutions, governments and businesses to develop impactful commercial opportunities.",
    },

    {
      title: "Sustainable Growth",
      description:
        "Building enterprises that generate economic value, create employment opportunities and support long-term development.",
    },
  ];


  return (
    <section
      id="investment"
      className="px-6 md:px-20 py-24 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >

          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Investment Opportunities
          </p>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold">

            Partner With

            <span className="text-yellow-500">
              {" "}Culture Holdings
            </span>

          </h2>


          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Culture Holdings welcomes strategic investors, financial
            institutions and development partners seeking sustainable
            opportunities across Africa's growing markets.
          </p>


        </motion.div>





        {/* Investor Highlights */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >


          {[
            {
              title: "Africa",
              text: "Primary Investment Market",
            },
            {
              title: "Multi-Sector",
              text: "Diversified Business Portfolio",
            },
            {
              title: "Long-Term",
              text: "Sustainable Value Creation",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                bg-black/40
                border
                border-yellow-500/20
                rounded-2xl
                p-8
              "
            >

              <h3 className="text-3xl font-bold text-yellow-500">
                {item.title}
              </h3>


              <p className="mt-2 text-gray-400">
                {item.text}
              </p>


            </motion.div>

          ))}


        </motion.div>






        {/* Opportunities */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {opportunities.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}

              className="
                bg-slate-900/70
                border
                border-yellow-500/20
                rounded-2xl
                p-8
                hover:border-yellow-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <h3 className="text-xl font-semibold text-yellow-500">
                {item.title}
              </h3>


              <p className="mt-5 text-gray-300 leading-relaxed">
                {item.description}
              </p>


            </motion.div>

          ))}


        </div>






        {/* CTA */}

        <motion.a
          href="#contact"

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            inline-block
            mt-12
            px-8
            py-4
            rounded-lg
            bg-yellow-500
            text-black
            font-semibold
            hover:bg-yellow-400
            transition
          "
        >

          Explore Partnership Opportunities

        </motion.a>



      </div>

    </section>
  );
}