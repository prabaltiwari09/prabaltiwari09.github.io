"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Backend Developer Extraordinaire
        </motion.h1>
        <motion.p
          className="text-xl mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting robust and scalable server-side solutions
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  )
}

