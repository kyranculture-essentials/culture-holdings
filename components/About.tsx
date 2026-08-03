"use client";

import { motion } from "framer-motion";

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
      className="px-6 md:px-20 py-24 bg-black/40"
    >

      <div className="max-w-7xl mx-auto">


        {/* Main About Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >


          {/* Left Content */}

          <div>

            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
              About Culture Holdings
            </p>


            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">

              Building Sustainable

              <span className="text-yellow-500">
                {" "}African Enterprises
              </span>

            </h2>


            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Culture Holdings Ltd is an African investment company focused on
              developing sustainable enterprises through strategic investments,
              innovation and responsible partnerships.
            </p>


            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Our operations span commercial agriculture, responsible mineral
              trading, construction, real estate development and international
              trade, creating long-term value for investors, communities and
              strategic partners.
            </p>


          </div>



          {/* Commitment Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              bg-slate-900/70
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              shadow-xl
            "
          >


            <h3 className="text-2xl font-semibold text-yellow-500">
              Our Commitment
            </h3>


            <p className="mt-5 text-gray-300 leading-relaxed">
              We believe Africa's growth is driven by sustainable investments,
              strong partnerships and responsible business practices that
              create opportunities across generations.
            </p>



            <div className="mt-8 grid grid-cols-2 gap-6">


              <div>

                <h4 className="text-3xl font-bold text-white">
                  Africa
                </h4>

                <p className="text-gray-400 text-sm">
                  Primary Market
                </p>

              </div>



              <div>

                <h4 className="text-3xl font-bold text-white">
                  Long-Term
                </h4>

                <p className="text-gray-400 text-sm">
                  Value Creation
                </p>

              </div>


            </div>


          </motion.div>


        </motion.div>





        {/* Mission & Vision */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 mt-20"
        >


          <div>

            <h3 className="text-2xl font-semibold text-yellow-500">
              Our Mission
            </h3>


            <p className="mt-4 text-gray-300 leading-relaxed">
              To deliver excellence through our business sectors while
              fostering growth, integrity and long-term value for clients,
              partners, investors and communities.
            </p>

          </div>



          <div>

            <h3 className="text-2xl font-semibold text-yellow-500">
              Our Vision
            </h3>


            <p className="mt-4 text-gray-300 leading-relaxed">
              To become a leading African enterprise group recognized for
              innovation, sustainable development and global partnerships.
            </p>

          </div>


        </motion.div>






        {/* Values */}

        <div className="mt-16">


          <h3 className="text-2xl font-semibold text-yellow-500">
            Our Values
          </h3>



          <div className="flex flex-wrap gap-3 mt-6">


            {values.map((value, index) => (

              <motion.span
                key={value}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-yellow-500/30
                  text-gray-200
                  bg-black/20
                "
              >

                {value}

              </motion.span>

            ))}


          </div>


        </div>



      </div>


    </section>
  );
}