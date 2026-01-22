'use client'

import { Code, Database, Wrench, Cloud } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'PHP', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    icon: Database,
    title: 'Backend',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 92 },
      { name: 'Spring Security', level: 88 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Database',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'SQL', level: 92 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & APIs',
    skills: [
      { name: 'REST APIs', level: 93 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 88 },
      { name: 'Joomla', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My technical expertise and proficiency across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Maven',
              'Hibernate',
              'JPA',
              'JWT',
              'OAuth2',
              'MySQL',
              'Git',
              'CI/CD',
              'Linux',
              'Agile/Scrum',
              'Microservices',
              'API Development',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-lg font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
