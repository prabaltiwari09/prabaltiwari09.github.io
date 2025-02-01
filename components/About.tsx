"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6">
            I'm a passionate backend developer with X years of experience in building scalable and efficient server-side
            applications. My expertise lies in designing robust APIs, optimizing database performance, and implementing
            secure authentication systems.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through tech blogs and community meetups.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

