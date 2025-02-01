"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "E-commerce API",
    description: "Developed a scalable RESTful API for an e-commerce platform using Node.js and Express.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
  },
  {
    title: "Real-time Chat System",
    description: "Built a real-time chat system with WebSockets and implemented message queuing for offline users.",
    technologies: ["Python", "Django Channels", "PostgreSQL", "RabbitMQ"],
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented a microservices-based application using Docker and Kubernetes.",
    technologies: ["Go", "gRPC", "Docker", "Kubernetes", "AWS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-100 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

