'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Placeholder data - user will add actual images later
const demoScreens = [
  {
    id: 0,
    title: "Career Page",
    image: "/images/demo/page_career.png", // Placeholder
    description: "Beautiful career page that matches your brand"
  },
  {
    id: 1,
    title: "Dashboard Overview",
    image: "/images/demo/page_analytics.png", // Placeholder
    description: "See all your jobs and applications at a glance"
  },
  {
    id: 2,
    title: "Job Creation",
    image: "/images/demo/page_job_create.png", // Placeholder
    description: "Create jobs quickly with our simple form"
  },
  {
    id: 4,
    title: "Multi-Platform Publishing",
    image: "/images/demo/page_job_sync.png", // Placeholder
    description: "Publish to multiple job boards with one click"
  },
  {
    id: 3,
    title: "Application Management",
    image: "/images/demo/page_application.png", // Placeholder
    description: "Manage candidates and track their progress"
  },
]

export default function DemoSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoScreens.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoScreens.length) % demoScreens.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="demo" className="bg-gray-50 section-padding" aria-labelledby="demo-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 id="demo-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Quick Demo of Application
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a sneak peek at what we're building for you
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {demoScreens.map((screen) => (
                <div key={screen.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-video bg-gray-50 flex items-center justify-center">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-primary-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200 focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-primary-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200 focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {demoScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 focus:outline-none ${index === currentSlide
                  ? 'bg-primary-800 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Screen Title and Description */}
          <motion.div
            key={currentSlide} // Re-animate when slide changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8 sm:mt-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {demoScreens[currentSlide].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {demoScreens[currentSlide].description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 