"use client"

import { motion } from "framer-motion"

const skills = [
  "Node.js",
  "Express.js",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white rounded-lg shadow-md p-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

