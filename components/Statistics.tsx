"use client";

import { motion } from "framer-motion";


export default function Statistics() {

  const stats = [
    {
      number: "5+",
      title: "Strategic Sectors",
      description:
        "Diversified operations across agriculture, minerals, construction, real estate and trade.",
    },

    {
      number: "Africa",
      title: "Primary Market",
      description:
        "Building enterprises focused on African economic growth and opportunity.",
    },

    {
      number: "Global",
      title: "Partnership Network",
      description:
        "Connecting investors, institutions and businesses across markets.",
    },

    {
      number: "Long-Term",
      title: "Value Creation",
      description:
        "Developing sustainable enterprises for future generations.",
    },
  ];


  return (

    <section className="px-6 md:px-20 py-20 bg-slate-950">


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">


        {stats.map((item,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              y:40,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:0.5,
              delay:index * 0.15,
            }}

            className="
              bg-black/40
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              hover:border-yellow-500
              transition
            "

          >


            <h3 className="text-4xl font-bold text-yellow-500">
              {item.number}
            </h3>


            <h4 className="mt-4 text-xl font-semibold text-white">
              {item.title}
            </h4>


            <p className="mt-3 text-gray-400 leading-relaxed">
              {item.description}
            </p>


          </motion.div>

        ))}


      </div>


    </section>

  );
}