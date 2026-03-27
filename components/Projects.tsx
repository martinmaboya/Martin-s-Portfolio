'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Kasikotas Platform',
    description: 'A convenient food ordering platform designed for students to order delicious kotas and other fast food from the comfort of their rooms. Features real-time order tracking, multiple payment options, and seamless delivery coordination.',
    image: '/kota-image.jpg',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'REST API'],
    liveUrl: 'https://kasikotas-frondend.onrender.com',
    githubUrl: 'https://github.com/martinmaboya/KasiKotas-Frondend',
  },
  {
    title: 'Financial Digital Twin',
    description: 'AI-powered risk simulation system that predicts customer financial stress before loans are approved. Runs worst-case scenarios (job loss, income reduction, market stress) and projects portfolio-level risk, months-to-crisis, and defaults in under 2 seconds. Helps banks anticipate risk 3-6 months in advance instead of reacting to bad debt.',
    image: '/financial-twin.jpg',
    tags: ['Spring Boot', 'Financial Analytics', 'AI Simulation', 'Risk Management'],
    liveUrl: '#',
    githubUrl: 'https://github.com/martinmaboya/financial-digital-twin',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-primary-600" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
