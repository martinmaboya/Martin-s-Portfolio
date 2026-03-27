'use client'

import { Code2, Rocket, Users } from 'lucide-react'

const stats = [
  { value: '1+', label: 'Years Experience' },
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code with best practices',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Delivering high-quality projects on time with agile methodologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a passionate full-stack developer with a keen eye for design and a love for creating
              innovative solutions. With expertise in modern web technologies, I transform ideas into
              exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a recent graduate with a Diploma in ICT (75% course average in my final year), 
              my journey in tech started with curiosity and has evolved into a dedicated pursuit of 
              building products that make a difference. I thrive on challenges and constantly push
              myself to learn and grow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Resume Download Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-primary-50 to-purple-50 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
