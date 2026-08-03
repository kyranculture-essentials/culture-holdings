"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        border-b
        border-yellow-500/20
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/90 shadow-xl py-2"
            : "bg-black/40 py-5"
        }
      `}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">


        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/images/culture-logo.png"
            alt="Culture Holdings Logo"
            width={60}
            height={60}
            priority
          />


          <div>

            <h2 className="text-lg md:text-xl font-bold tracking-wide text-white">
              CULTURE HOLDINGS
            </h2>


            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-yellow-400">
              Building Sustainable African Enterprises
            </p>

          </div>

        </div>





        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">


          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Home
          </a>


          <a
            href="#about"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            About
          </a>


          <a
            href="#business"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Business Sectors
          </a>


          <a
            href="#investment"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Investment
          </a>


          <a
            href="#contact"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Contact
          </a>



          <a
            href="#contact"
            className="
              ml-4
              px-6
              py-3
              rounded-lg
              bg-yellow-500
              text-black
              font-semibold
              hover:bg-yellow-400
              transition
            "
          >
            Partner With Us
          </a>


        </div>





        {/* Mobile Button */}

        <button
          className="md:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >

          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>


      </div>





      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              height: 0,
            }}

            animate={{
              opacity: 1,
              height: "auto",
            }}

            exit={{
              opacity: 0,
              height: 0,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              md:hidden
              overflow-hidden
              bg-black/90
              backdrop-blur-lg
              px-8
              py-6
              space-y-5
            "

          >


            <a
              href="#"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition"
            >
              Home
            </a>


            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition"
            >
              About
            </a>


            <a
              href="#business"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition"
            >
              Business Sectors
            </a>


            <a
              href="#investment"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition"
            >
              Investment
            </a>


            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 transition"
            >
              Contact
            </a>



            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                inline-block
                px-6
                py-3
                rounded-lg
                bg-yellow-500
                text-black
                font-semibold
              "
            >
              Partner With Us
            </a>



          </motion.div>

        )}

      </AnimatePresence>


    </nav>
  );
}