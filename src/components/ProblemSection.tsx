'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    quote: "I spend more time managing spreadsheets than actually talking to candidates. There has to be a better way.",
    avatar: "👨‍💼",
    name: "Sarah",
    title: "Startup Recruiter"
  },
  {
    quote: "Posting the same job to 5 different sites takes me 2 hours. It's so repetitive and frustrating.",
    avatar: "👩‍💼", 
    name: "Mike",
    title: "Agency Owner"
  },
  {
    quote: "The big ATS tools are way too complex for our 8-person team. We just need something simple that works.",
    avatar: "👨‍💻",
    name: "Lisa",
    title: "HR Manager"
  },
  {
    quote: "I lose track of where applications come from. Email, LinkedIn, our website... it's all scattered.",
    avatar: "👩‍💻",
    name: "Tom",
    title: "Small Business Owner"
  }
]

export default function ProblemSection() {
  return (
    <div className="container-max">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We talked to 20+ recruiters — here's what they told us:
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every conversation revealed the same pain points. Sound familiar?
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card hover:shadow-lg transition-all duration-300"
          >
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-xl border-2 border-primary-100">
                  {problem.avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Quote */}
                <blockquote className="text-base text-gray-700 mb-4 leading-relaxed italic">
                  "{problem.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="font-medium text-gray-900">{problem.name}</div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-500">{problem.title}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          These are real quotes from real people
        </div>

        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Does this sound like your current hiring experience? We're building a solution
          that addresses exactly these problems.
        </p>
      </motion.div>
    </div>
  )
} 