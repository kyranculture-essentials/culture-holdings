"use client";

import { motion } from "framer-motion";

import {
  Sprout,
  Pickaxe,
  Building2,
  Landmark,
  Globe2,
  ArrowRight,
} from "lucide-react";


export default function BusinessSectors() {

  const sectors = [
    {
      icon: <Sprout className="w-10 h-10 text-yellow-500" />,
      title: "Commercial Agriculture",
      description:
        "Developing sustainable agricultural enterprises focused on food security, productivity, innovation and long-term economic growth across Africa.",
    },

    {
      icon: <Pickaxe className="w-10 h-10 text-yellow-500" />,
      title: "Responsible Mineral Trading",
      description:
        "Building transparent mineral supply networks through responsible sourcing, trusted partnerships and global market access.",
    },

    {
      icon: <Building2 className="w-10 h-10 text-yellow-500" />,
      title: "Construction & Development",
      description:
        "Creating quality infrastructure and development projects through modern engineering, sustainable practices and strategic execution.",
    },

    {
      icon: <Landmark className="w-10 h-10 text-yellow-500" />,
      title: "Real Estate Investment",
      description:
        "Developing valuable property solutions through strategic investment, urban transformation and sustainable development.",
    },

    {
      icon: <Globe2 className="w-10 h-10 text-yellow-500" />,
      title: "International Trade",
      description:
        "Connecting African markets with global opportunities through efficient import, export and strategic trade partnerships.",
    },
  ];


  return (

    <section
      id="business"
      className="px-6 md:px-20 py-24"
    >


      <div className="max-w-5xl mb-14">


        <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
          Strategic Focus Areas
        </p>


        <h2 className="mt-5 text-4xl md:text-5xl font-bold">

          Building Across

          <span className="text-yellow-500">
            {" "}High-Growth Sectors
          </span>

        </h2>


        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Culture Holdings invests in strategic industries that support
          economic development, job creation and sustainable growth across
          Africa.
        </p>


      </div>





      <div className="grid md:grid-cols-3 gap-8">


        {sectors.map((sector, index) => (

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
              group
              relative
              bg-slate-900/60
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              overflow-hidden
              hover:border-yellow-500
              hover:-translate-y-3
              transition-all
              duration-500
            "

          >


            <div
              className="
                absolute
                inset-0
                bg-yellow-500/5
                opacity-0
                group-hover:opacity-100
                transition
              "
            />



            <div className="relative z-10">


              <div className="mb-7">
                {sector.icon}
              </div>



              <h3 className="text-2xl font-semibold text-white">
                {sector.title}
              </h3>



              <p className="mt-5 text-gray-400 leading-relaxed">
                {sector.description}
              </p>




              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-yellow-500
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >

                <span className="text-sm font-semibold">
                  Explore Sector
                </span>


                <ArrowRight className="w-4 h-4" />


              </div>


            </div>


          </motion.div>

        ))}


      </div>


    </section>

  );

}