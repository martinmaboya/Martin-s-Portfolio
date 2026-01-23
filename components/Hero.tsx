'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-primary-600 font-semibold text-lg md:text-xl animate-slide-down">
              Hi there, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 animate-slide-up">
              Martin Maboya
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gradient animate-slide-up delay-100">
              Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up delay-200">
            I craft exceptional digital experiences with modern technologies.
            Specializing in building scalable web applications that solve real problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up delay-500">
            <a
              href="https://github.com/martinmaboya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-primary-600"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/martin-maboya-798baa233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-primary-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:m.maboya@yahoo.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-primary-600"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary-600" />
      </a>
    </section>
  )
}
