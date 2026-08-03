"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-slate-950 px-6 md:px-20 py-12">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >


        <div className="grid md:grid-cols-3 gap-10">


          {/* Company */}

          <div>

            <h3 className="text-2xl font-bold text-white">
              CULTURE HOLDINGS
            </h3>


            <p className="mt-3 text-yellow-500 text-sm uppercase tracking-[0.2em]">
              Building Sustainable African Enterprises
            </p>


            <p className="mt-5 text-gray-400 leading-relaxed">
              An African investment company focused on sustainable growth,
              strategic partnerships and long-term value creation.
            </p>


          </div>





          {/* Navigation */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>


            <div className="mt-5 space-y-3 text-gray-400">


              <a
                href="#about"
                className="block hover:text-yellow-400 transition"
              >
                About Us
              </a>


              <a
                href="#business"
                className="block hover:text-yellow-400 transition"
              >
                Business Sectors
              </a>


              <a
                href="#investment"
                className="block hover:text-yellow-400 transition"
              >
                Investment
              </a>


              <a
                href="#contact"
                className="block hover:text-yellow-400 transition"
              >
                Contact
              </a>


            </div>

          </div>






          {/* Location */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Headquarters
            </h4>


            <p className="mt-5 text-gray-400 leading-relaxed">
              Kampala, Uganda
              <br />
              East Africa
            </p>


            <p className="mt-4 text-gray-400">
              Global Partnerships
              <br />
              Africa Focused
            </p>


          </div>



        </div>







        {/* Bottom Footer */}

        <div className="
          border-t
          border-yellow-500/10
          mt-10
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-sm
          text-gray-500
        ">


          <p>
            © 2026 Culture Holdings Ltd. All Rights Reserved.
          </p>


          <p>
            Integrity • Innovation • Sustainability • Excellence
          </p>


        </div>



      </motion.div>


    </footer>
  );
}